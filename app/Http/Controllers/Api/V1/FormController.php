<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Models\Form;
use App\Models\FormSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FormController extends BaseController
{
  public function form(Request $request, $slug)
    {
        $form = Form::where('slug', $slug)->with(['fields' => function($query) {
            $query->orderBy('sort_order');
        }])->first();

        if (!$form) {
            return ['error' => 'Form not found',];
        }

        // Check if form is active
        if ($form->status !== 'active') {
            return ['error' => 'This form is not currently accepting submissions',];
        }

        return [
            'form' => $form,
            'fields' => $form->fields,
            'slug' => $slug,
        ];
    }

    public function submit(Request $request, $slug)
    {
        // Get the form by slug
        $form = Form::where('slug', $slug)->with('fields')->first();

        if (!$form) {
            return ['error' => 'Form not found',];
        }

        // Check if form is active
        if ($form->status !== 'active') {
            return ['error' => 'This form is not currently accepting submissions',];
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
            return [
                'errors' => $validator->errors(),];
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

            return [
                'submission' => $submission,
                'message' => $form->success_message ?: 'Form submitted successfully!'
            ];

        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage(),
            ];
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
