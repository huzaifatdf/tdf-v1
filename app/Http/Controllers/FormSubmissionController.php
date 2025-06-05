<?php

namespace App\Http\Controllers;

use App\Models\FormSubmission;
use App\Http\Requests\StoreFormSubmissionRequest;
use App\Http\Requests\UpdateFormSubmissionRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Form;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class FormSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

public function index(Request $request, $slug)
{

    // Get sort, filters, and pagination from request
    $sort = $request->input('sort', []);
    $filters = $request->input('filters', []);
    $perPage = $request->input('perPage', 10);
    $page = $request->input('page', 1);

    // Build base query
    $query = FormSubmission::with(['form', 'user'])
        ->whereHas('form', function ($q) use ($slug) {
            $q->where('slug', $slug);
        });

    // Get the form for reference
    $form = Form::where('slug', $slug)->with('fields')->first();

    if (!$form) {
        abort(404, 'Form not found');
    }

    // Dynamically apply filters based on submission data and direct fields
    foreach ($filters as $field => $value) {
        if (!empty($value)) {
            if (in_array($field, ['id', 'status', 'created_at', 'updated_at'])) {
                // Direct column filters
                if ($field === 'created_at' || $field === 'updated_at') {
                    $query->whereDate($field, $value);
                } else {
                    $query->where($field, 'like', '%' . $value . '%');
                }
            } else {
                // JSON data filters for form field data
                $query->where('data', 'like', '%"' . $field . '":"' . $value . '"%');
            }
        }
    }

    // Apply sorting
    if (!empty($sort['key']) && !empty($sort['order'])) {
        $sortKey = $sort['key'];
        $sortOrder = strtolower($sort['order']) === 'desc' ? 'desc' : 'asc';

        if (in_array($sortKey, ['id', 'status', 'created_at', 'updated_at'])) {
            // Direct column sorting
            $query->orderBy($sortKey, $sortOrder);
        } else {
            // JSON data sorting (more complex, might need raw SQL)
            $query->orderByRaw("JSON_EXTRACT(data, '$.\"{$sortKey}\"') {$sortOrder}");
        }
    } else {
        $query->orderBy('created_at', 'desc');
    }

    // Paginate
    $submissions = $query->paginate($perPage, ['*'], 'page', $page);

    // Transform submissions data to include flattened form data
    $submissions->getCollection()->transform(function ($submission) {
        $submission->flattened_data = $submission->data ?? [];
        return $submission;
    });

    // Prepare dynamic columns based on form fields
    $formFields = $form->fields->sortBy('sort_order');
    $dynamicColumns = [];

    foreach ($formFields as $field) {
        $dynamicColumns[] = [
            'key' => $field->name,
            'label' => $field->label,
            'type' => $field->type,
            'sortable' => true,
            'filterable' => true
        ];
    }

    // Render to Inertia
    return Inertia::render('Dynamicform/List', [
        'submissions' => $submissions,
        'form' => $form,
        'formFields' => $formFields,
        'dynamicColumns' => $dynamicColumns,
        'filters' => $filters,
        'sort' => $sort,
        'slug' => $slug,
    ]);
}

/**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, $slug)
    {
        // Get the form by slug
        $form = Form::where('slug', $slug)->with(['fields' => function($query) {
            $query->orderBy('sort_order');
        }])->first();

        if (!$form) {
            abort(404, 'Form not found');
        }

        // Check if form is active
        if ($form->status !== 'active') {
            abort(403, 'This form is not currently accepting submissions');
        }

        // Render the form creation page
        return Inertia::render('Dynamicform/Add', [
            'form' => $form,
            'fields' => $form->fields,
            'slug' => $slug,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $slug)
    {

        // Get the form by slug
        $form = Form::where('slug', $slug)->with('fields')->first();

        if (!$form) {
            abort(404, 'Form not found');
        }

        // Check if form is active
        if ($form->status !== 'active') {
            session()->flash('error', 'This form is not currently accepting submissions');
            return back();
        }

        // Build validation rules dynamically based on form fields
        $rules = [];
        $messages = [];
        $attributes = [];

        foreach ($form->fields as $field) {
            $fieldRules = [];

            // Required validation
            if ($field->required) {
                $fieldRules[] = 'required';
            } else {
                $fieldRules[] = 'nullable';
            }

            // Type-specific validation
            switch ($field->type) {
                case 'email':
                    $fieldRules[] = 'email';
                    break;
                case 'number':
                    $fieldRules[] = 'numeric';
                    break;
                case 'url':
                    $fieldRules[] = 'url';
                    break;
                case 'date':
                    $fieldRules[] = 'date';
                    break;
                case 'file':
                    $fieldRules[] = 'file';
                    $fieldRules[] = 'max:10240'; // 10MB max
                    break;
                case 'text':
                case 'textarea':
                    if ($field->max_length) {
                        $fieldRules[] = 'max:' . $field->max_length;
                    }
                    if ($field->min_length) {
                        $fieldRules[] = 'min:' . $field->min_length;
                    }
                    break;
                case 'select':
                case 'radio':
                    if ($field->options && is_array($field->options)) {
                        $fieldRules[] = 'in:' . implode(',', array_keys($field->options));
                    }
                    break;
                case 'checkbox':
                    if ($field->options && is_array($field->options)) {
                        $fieldRules[] = 'array';
                        $fieldRules[] = 'in:' . implode(',', array_keys($field->options));
                    } else {
                        $fieldRules[] = 'boolean';
                    }
                    break;
            }

            $rules[$field->name] = $fieldRules;
            $attributes[$field->name] = $field->label;

            // Custom messages
            if ($field->required) {
                $messages[$field->name . '.required'] = "The {$field->label} field is required.";
            }
        }

        // Validate the request
        $validator = Validator::make($request->all(), $rules, $messages, $attributes);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $validated = $validator->validated();

        // Handle file uploads
        $submissionData = [];
        foreach ($form->fields as $field) {
            if ($field->type === 'file' && $request->hasFile($field->name)) {
                $file = $request->file($field->name);
                $filename = time() . '_' . Str::random(10) . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('form-submissions/' . $form->slug, $filename, 'public');
                $submissionData[$field->name] = [
                    'original_name' => $file->getClientOriginalName(),
                    'stored_name' => $filename,
                    'path' => $path,
                    'size' => $file->getSize(),
                    'mime_type' => $file->getMimeType()
                ];
            } elseif (isset($validated[$field->name])) {
                // Handle checkbox arrays
                if ($field->type === 'checkbox' && is_array($validated[$field->name])) {
                    $submissionData[$field->name] = $validated[$field->name];
                } else {
                    $submissionData[$field->name] = $validated[$field->name];
                }
            }
        }

        // Create the form submission
        try {
            $submission = FormSubmission::create([
                'form_id' => $form->id,
                'data' => $submissionData,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'user_id' => auth()->id(),
                'status' => 'new',
            ]);

            // Send notification email if configured
            if ($form->notification_email) {
                $this->sendNotificationEmail($form, $submission);
            }

            // Handle redirect or success response
            if ($request->expectsJson()) {
                session()->flash('success', $form->success_message ?: 'Form submitted successfully!');
                return back();
            }

            // For web requests
            if ($form->redirect_url) {
                session()->flash('success', $form->success_message ?: 'Form submitted successfully!');
                return redirect($form->redirect_url);
            }

            session()->flash('success', $form->success_message ?: 'Form submitted successfully!');
            return redirect()->route('form.submission.index', $slug);

        } catch (\Exception $e) {
            session()->flash('error', 'Form submission error: ' . $e->getMessage());

            if ($request->expectsJson()) {
                session()->flash('error', 'There was an error submitting the form. Please try again.');
                return back();
            }
            session()->flash('error', 'There was an error submitting the form. Please try again.');
            return redirect()->back();
        }
    }

    /**
     * Send notification email for form submission
     */
    private function sendNotificationEmail($form, $submission)
    {
        try {
            // You can implement email sending logic here
            // For example, using Laravel's Mail facade

            // Mail::to($form->notification_email)->send(new FormSubmissionNotification($form, $submission));

            // Log the notification attempt
            \App\Models\FormNotificationLog::create([
                'form_id' => $form->id,
                'submission_id' => $submission->id,
                'to_email' => $form->notification_email,
                'subject' => $form->email_subject ?: "New form submission: {$form->name}",
                'status' => 'sent',
            ]);

        } catch (\Exception $e) {
            \Log::error('Failed to send form notification: ' . $e->getMessage());

            \App\Models\FormNotificationLog::create([
                'form_id' => $form->id,
                'submission_id' => $submission->id,
                'to_email' => $form->notification_email,
                'subject' => $form->email_subject ?: "New form submission: {$form->name}",
                'status' => 'failed',
                'error_message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(FormSubmission $formSubmission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FormSubmission $formSubmission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFormSubmissionRequest $request, FormSubmission $formSubmission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormSubmission $formSubmission)
    {
        //
    }
}
