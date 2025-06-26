<?php
namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Support\Facades\Log;

class ChatMessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    public function __construct($message)
    {
        $this->message = $message;
        Log::info('ChatMessageSent event created', ['message' => $message]);
    }

    public function broadcastOn()
    {
        return new Channel('chat1');
    }

    public function broadcastAs()
    {
        return 'NewChatMessage1';
    }

    public function broadcastWith()
    {
        return ['message' => $this->message];
    }
}
