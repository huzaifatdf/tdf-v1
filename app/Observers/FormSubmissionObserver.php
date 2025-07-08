<?php

namespace App\Observers;

use App\Events\FormSubmissionCreated;
use App\Models\FormSubmission;
use App\Models\User;
use App\Notifications\FormSubmissionNotification;
use Illuminate\Support\Facades\Notification;

class FormSubmissionObserver
{
    /**
     * Handle the FormSubmission "created" event.
     */
    public function created(FormSubmission $formSubmission): void
    {
        // Load the form relationship if not already loaded
        $formSubmission->load('form');

        // Get notification email from form settings or use default admin email

        // if ($notificationEmail) {
        //     // Send notification to specific email
        //     Notification::route('mail', $notificationEmail)
        //         ->notify(new FormSubmissionNotification($formSubmission));
        // }
        // Get notification email from form settings (e.g., 'notification_email' column in 'forms' table)
        $notificationEmail = $formSubmission->form->notification_email;
        $alternativeEmail = $formSubmission->form->alternative_email;
        $infoEmail = $formSubmission->form->info_email;

        // ✅ 1. Send mail to the form-specific notification email if it exists
        if ($notificationEmail) {
            Notification::route('mail', $notificationEmail)
                ->notify(new FormSubmissionNotification($formSubmission));
        }
        // ✅ 2. Send mail to the alternative email if it exists
        if ($alternativeEmail) {
            Notification::route('mail', $alternativeEmail)
                ->notify(new FormSubmissionNotification($formSubmission));
        }
        // ✅ 3. Send mail to the info email if it exists
        if ($infoEmail) {
            Notification::route('mail', $infoEmail)
                ->notify(new FormSubmissionNotification($formSubmission));
        }

        // Send notification to all admin users (users with admin role)
        $superadmin = User::role('superadmin')->first();

        //database notification

        if ($superadmin) {
            $superadmin->notify(new FormSubmissionNotification($formSubmission));
        }

        //broadcast notification
        // broadcast(new FormSubmissionCreated($formSubmission))->toOthers();



        // Alternative: Send to specific user by ID if you have a specific admin
        // $adminUser = User::find(1); // Replace with your admin user ID
        // if ($adminUser) {
        //     $adminUser->notify(new FormSubmissionNotification($formSubmission));
        // }

        // You can also send notification to the form submitter if they are logged in
        if ($formSubmission->user_id) {
            $submitter = User::find($formSubmission->user_id);
            if ($submitter) {
                // Create a different notification for submitter confirmation
                // $submitter->notify(new FormSubmissionConfirmationNotification($formSubmission));
            }
        }
    }

    /**
     * Handle the FormSubmission "updated" event.
     */
    public function updated(FormSubmission $formSubmission): void
    {
        // You can add notification logic here if needed
        // For example, when status changes from 'new' to 'read'
        if ($formSubmission->isDirty('status') && $formSubmission->status === 'read') {
            // Handle status change notification if needed
        }
    }

    /**
     * Handle the FormSubmission "deleted" event.
     */
    public function deleted(FormSubmission $formSubmission): void
    {
        //
    }

    /**
     * Handle the FormSubmission "restored" event.
     */
    public function restored(FormSubmission $formSubmission): void
    {
        //
    }

    /**
     * Handle the FormSubmission "force deleted" event.
     */
    public function forceDeleted(FormSubmission $formSubmission): void
    {
        //
    }
}
