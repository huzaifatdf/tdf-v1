<?php

namespace App\Notifications;

use App\Models\FormSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class FormSubmissionNotification extends Notification
{


    protected $formSubmission;

    public function __construct(FormSubmission $formSubmission)
    {
       $this->formSubmission = $formSubmission;

    // Load the form relationship if not already loaded
    if (!$this->formSubmission->relationLoaded('form')) {
        $this->formSubmission->load('form');
    }

    }

    /**
     * Get the notification's delivery channels.
     */
    public function via($notifiable): array
    {

        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('New Form Submission: ' . ($this->formSubmission->form->name ?? 'Unknown Form'))
                    ->greeting('Hello!')
                    ->line('You have received a new form submission.')
                    ->line('Form: ' . ($this->formSubmission->form->name ?? 'Unknown Form'))
                    ->line('Submitted at: ' . $this->formSubmission->created_at->format('M d, Y H:i:s'))
                    ->action('View Submission', url('/admin/form-submissions/' . $this->formSubmission->id))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the database representation of the notification.
     */
    public function toDatabase($notifiable): array
    {

        return [
            'type' => 'form_submission',
            'title' => 'New Form Submission',
            'message' => 'New submission received for form: ' . ($this->formSubmission->form->name ?? 'Unknown Form'),
            'form_submission_id' => $this->formSubmission->id,
            'form_name' => $this->formSubmission->form->name ?? 'Unknown Form',
            'form_slug' => $this->formSubmission->form->slug ?? 'Unknown slug',
            'submitter_ip' => $this->formSubmission->ip_address ?? null,
            'submitted_at' => $this->formSubmission->created_at->format('Y-m-d H:i:s'),
            'url' => url('/admin/form-submissions/' . $this->formSubmission->id),
            // Only include data if it's not too large for database storage
            'has_data' => !empty($this->formSubmission->data),
        ];
    }

    /**
     * Get the array representation of the notification.
     */
    public function toArray($notifiable): array
    {
        return $this->toDatabase($notifiable);
    }
}
