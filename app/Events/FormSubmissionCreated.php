<?php

namespace App\Events;

use App\Models\FormSubmission;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class FormSubmissionCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $formSubmission;

    /**
     * Create a new event instance.
     */
    public function __construct(FormSubmission $formSubmission)
    {
        $this->formSubmission = $formSubmission;
    }

    /**
     * Get the channels the event should broadcast on.
     */
    public function broadcastOn()
    {
      
        return new Channel('admin-notifications');
            // You can also use presence channel if you want to track who's online
            // new PresenceChannel('admin-dashboard'),
        ;
    }

    /**
     * The event's broadcast name.
     */
    public function broadcastAs()
    {
        return 'NewNotification';
    }

    /**
     * Get the data to broadcast.
     */
    public function broadcastWith(): array
    {
        return [
            'id' => $this->formSubmission->id,
            'form_name' => $this->formSubmission->form->name,
            'submitter_name' => $this->formSubmission->name ?? 'Anonymous',
            'submitter_email' => $this->formSubmission->email,
            'created_at' => $this->formSubmission->created_at->toISOString(),
            'message' => "New form submission received for {$this->formSubmission->form->name}",
        ];
    }
}
