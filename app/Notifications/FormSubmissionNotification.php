<?php

namespace App\Notifications;

use App\Models\FormSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class FormSubmissionNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $formSubmission;

    public function __construct(FormSubmission $formSubmission)
    {
        $this->formSubmission = $formSubmission;
    }

    /**
     * Get the notification's delivery channels.
     */
    public function via($notifiable): array
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('New Form Submission: ' . $this->formSubmission->form->name)
                    ->greeting('Hello!')
                    ->line('You have received a new form submission.')
                    ->line('Form: ' . $this->formSubmission->form->name)
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
            'message' => 'New submission received for form: ' . $this->formSubmission->form->name,
            'form_submission_id' => $this->formSubmission->id,
            'form_name' => $this->formSubmission->form->name,
            'submitter_ip' => $this->formSubmission->ip_address,
            'submitted_at' => $this->formSubmission->created_at->toISOString(),
            'data' => $this->formSubmission->data,
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
