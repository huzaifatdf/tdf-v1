<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Notifications\DatabaseNotification;

class NotificationController extends Controller
{

    /**
     * Display notifications page
     */
    public function index(Request $request)
    {


        // Get all notifications for the user with pagination
        $notifications =DatabaseNotification::
            when($request->filter && $request->filter !== 'all', function ($query) use ($request) {
                if ($request->filter === 'unread') {
                    return $query->whereNull('read_at');
                } elseif ($request->filter === 'read') {
                    return $query->whereNotNull('read_at');
                } else {
                    // Filter by notification type
                    return $query->where('data->type', $request->filter);
                }
            })
            ->when($request->search, function ($query) use ($request) {
                return $query->where(function ($q) use ($request) {
                    $q->where('data->title', 'like', '%' . $request->search . '%')
                      ->orWhere('data->message', 'like', '%' . $request->search . '%');
                });
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        // Transform notifications for frontend
        $transformedNotifications = $notifications->through(function ($notification) {
            return [
                'id' => $notification->id,
                'type' => $this->mapNotificationType($notification->data['type'] ?? 'info'),
                'title' => $notification->data['title'] ?? 'Notification',
                'message' => $notification->data['message'] ?? '',
                'time' => $this->formatTimeAgo($notification->created_at),
                'read' => $notification->read_at !== null,
                'read_at' => $notification->read_at,
                'created_at' => $notification->created_at,
                'data' => $notification->data,
                'user' => $notification->data['form_name'] ?? 'System', // Use form name or default
                'avatar' => '/images/default-avatar.png', // You can customize this
            ];
        });

        // Get counts
        $unreadCount = DatabaseNotification::where('read_at', null)->count();
        $totalCount = DatabaseNotification::count();
        $readCount = $totalCount - $unreadCount;
        $todayCount = DatabaseNotification::
            whereDate('created_at', Carbon::today())
            ->count();

        return Inertia::render('Notification/List', [
            'notifications' => $transformedNotifications,
            'stats' => [
                'total' => $totalCount,
                'unread' => $unreadCount,
                'read' => $readCount,
                'today' => $todayCount,
            ],
            'filters' => [
                'filter' => $request->filter ?? 'all',
                'search' => $request->search ?? '',
            ]
        ]);
    }

    /**
     * Mark notification as read
     */
    public function markAsRead(Request $request, $id)
    {
        $notification = DatabaseNotification::find($id);

        if ($notification) {
            $notification->markAsRead();
            session()->flash('success', 'Notification marked as read successfully.');
             return back();
        }
        session()->flash('error', 'Notification not found.');
         return back();
    }

    /**
     * Mark all notifications as read
     */
    public function markAllAsRead(Request $request)
    {
        DatabaseNotification::where('read_at', null)
            ->update(['read_at' => now()]);
        session()->flash('success', 'All notifications marked as read.');
        return back();
    }

    /**
     * Delete notification
     */
    public function delete(Request $request, $id)
    {
        $notification = DatabaseNotification::find($id);

        if ($notification) {
            $notification->delete();
            session()->flash('success', 'Notification deleted successfully.');
            return back();
        }
        session()->flash('error', 'Notification not found.');
        return back();
    }

    /**
     * Get unread notifications count for header/navbar
     */
    public function getUnreadCount()
    {
        $count = DatabaseNotification::where('read_at', null)->count();
        return response()->json(['count' => $count]);
    }

    /**
     * Map notification type to frontend type
     */
    private function mapNotificationType($type)
    {
        $mapping = [
            'form_submission' => 'info',
            'payment' => 'success',
            'error' => 'error',
            'warning' => 'warning',
            'success' => 'success',
        ];

        return $mapping[$type] ?? 'info';
    }

    /**
     * Format time ago string
     */
    private function formatTimeAgo($date)
    {
        $now = Carbon::now();
        $diff = $date->diff($now);

        if ($diff->days > 0) {
            if ($diff->days == 1) {
                return '1 day ago';
            } elseif ($diff->days < 7) {
                return $diff->days . ' days ago';
            } else {
                return $date->format('M d, Y');
            }
        } elseif ($diff->h > 0) {
            return $diff->h . ($diff->h == 1 ? ' hour ago' : ' hours ago');
        } elseif ($diff->i > 0) {
            return $diff->i . ($diff->i == 1 ? ' minute ago' : ' minutes ago');
        } else {
            return 'Just now';
        }
    }
}
