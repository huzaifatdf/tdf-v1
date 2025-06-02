<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Http\Requests\StoreFormRequest;
use App\Http\Requests\UpdateFormRequest;
use App\Models\FormField;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
}
