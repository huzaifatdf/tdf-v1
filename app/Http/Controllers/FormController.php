<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Http\Requests\StoreFormRequest;
use App\Http\Requests\UpdateFormRequest;
use App\Models\FormField;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
          // Get sort, filters, and pagination from request
        $sort = $request->input('sort', []);
        $filters = $request->input('filters', []);
        $perPage = $request->input('perPage', 10);

        $query = Form::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['name'])) {
            $query->where('name', 'like', '%'.$filters['name'].'%');
        }

        $forms = $query->paginate($perPage);

        return Inertia::render('Form/List', [
            'forms' => $forms,
            'filters' => $filters,
            'sort' => $sort,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Form/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFormRequest $request)
    {
          try {
            DB::beginTransaction();

            // Create the form
            $form = Form::create([
                'name' => $request->name,
                'description' => $request->description,
                'slug' => $request->slug ?: Str::slug($request->name),
                'submit_button_text' => $request->submit_button_text ?? 'Submit',
                'success_message' => $request->success_message ?? 'Thank you for your submission!',
                'redirect_url' => $request->redirect_url,
                'notification_email' => $request->notification_email,
                'email_subject' => $request->email_subject,
                'status' => $request->status ?? 'active',
                'require_captcha' => $request->boolean('require_captcha', false),
                'store_submissions' => $request->boolean('store_submissions', true),
            ]);

            // Create form fields if provided
            if ($request->has('fields') && is_array($request->fields)) {
                foreach ($request->fields as $index => $fieldData) {
                    FormField::create([
                        'form_id' => $form->id,
                        'name' => $fieldData['name'],
                        'label' => $fieldData['label'],
                        'type' => $fieldData['type'],
                        'placeholder' => $fieldData['placeholder'] ?? null,
                        'default_value' => $fieldData['default_value'] ?? null,
                        'help_text' => $fieldData['help_text'] ?? null,
                        'required' => $fieldData['required'] ?? false,
                        'max_length' => $fieldData['max_length'] ?? null,
                        'min_length' => $fieldData['min_length'] ?? null,
                        'options' => !empty($fieldData['options']) ? $fieldData['options'] : null,
                        'sort_order' => $fieldData['sort_order'] ?? $index,
                        'width' => $fieldData['width'] ?? 'full',
                    ]);
                }
            }

            DB::commit();

            session()->flash('success', 'Form created successfully!');
            return redirect()->route('form.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'An error occurred while creating the form: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Form $form)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Form $form)
    {
        $form->load([
        'fields' => function ($query) {
            $query->orderBy('sort_order');
            }
        ]);

        return Inertia::render('Form/Edit', [
            'form' => $form
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFormRequest $request, Form $form)
    {
           try {
            DB::beginTransaction();

            // Update the form
            $form->update([
                'name' => $request->name,
                'description' => $request->description,
                'slug' => $request->slug ?: Str::slug($request->name),
                'submit_button_text' => $request->submit_button_text ?? 'Submit',
                'success_message' => $request->success_message ?? 'Thank you for your submission!',
                'redirect_url' => $request->redirect_url,
                'notification_email' => $request->notification_email,
                'email_subject' => $request->email_subject,
                'status' => $request->status ?? 'active',
                'require_captcha' => $request->boolean('require_captcha', false),
                'store_submissions' => $request->boolean('store_submissions', true),
            ]);

            // Handle form fields
            if ($request->has('fields') && is_array($request->fields)) {
                // Delete existing fields that are not in the new list
                $existingFieldIds = $form->fields->pluck('id')->toArray();
                $newFieldIds = collect($request->fields)
                    ->pluck('id')
                    ->filter()
                    ->toArray();

                $fieldsToDelete = array_diff($existingFieldIds, $newFieldIds);
                if (!empty($fieldsToDelete)) {
                    FormField::whereIn('id', $fieldsToDelete)->delete();
                }

                // Create or update fields
                foreach ($request->fields as $index => $fieldData) {
                    $fieldAttributes = [
                        'form_id' => $form->id,
                        'name' => $fieldData['name'],
                        'label' => $fieldData['label'],
                        'type' => $fieldData['type'],
                        'placeholder' => $fieldData['placeholder'] ?? null,
                        'default_value' => $fieldData['default_value'] ?? null,
                        'help_text' => $fieldData['help_text'] ?? null,
                        'required' => $fieldData['required'] ?? false,
                        'max_length' => $fieldData['max_length'] ?? null,
                        'min_length' => $fieldData['min_length'] ?? null,
                        'options' => !empty($fieldData['options']) ? $fieldData['options'] : null,
                        'sort_order' => $fieldData['sort_order'] ?? $index,
                        'width' => $fieldData['width'] ?? 'full',
                    ];

                    if (isset($fieldData['id']) && $fieldData['id']) {
                        // Update existing field
                        FormField::where('id', $fieldData['id'])->update($fieldAttributes);
                    } else {
                        // Create new field
                        FormField::create($fieldAttributes);
                    }
                }
            }

            DB::commit();

            session()->flash('success', 'Form updated successfully!');
            return redirect()->route('form.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'An error occurred while updating the form: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Form $form)
    {
        $form->delete();
        session()->flash('success', 'Form deleted successfully.');
        return redirect()->route('form.index');

    }


       public function submit(Request $request, $slug)
    {
        // Get the form by slug
        $form = Form::where('slug', $slug)->with('fields')->first();

        if (!$form) {
            session()->flash('error', 'Form not found');
            return redirect()->back();
        }

        // Check if form is active
        if ($form->status !== 'active') {
            session()->flash('error', 'This form is not currently accepting submissions');
            return redirect()->back();
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
                        // $fieldRules[] = 'in:' . implode(',', array_keys($field->options));
                    }
                    break;
                case 'checkbox':
                    if ($field->options && is_array($field->options)) {
                        $fieldRules[] = 'array';
                        $rules[$field->name . '.*'] = 'in:' . implode(',', array_keys($field->options));
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
           $errors = $validator->errors()->all();
            $errorMessage = "Validation Errors:\n";

            foreach ($errors as $index => $error) {
                $errorMessage .= ($index + 1) . ". " . $error . "\n";
            }
            session()->flash('error', $errorMessage);
            return redirect()->back();
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

            session()->flash('success',$form->success_message ?: 'Form submitted successfully!');

            return redirect()->back();

        } catch (\Exception $e) {
            session()->flash('error', $e->getMessage());
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
}
