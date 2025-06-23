import React, { useState } from 'react';
import { Bell, Check, CheckCheck, Trash2, Filter, Search, User, AlertCircle, Info, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';

const NotificationsPage = ({ notifications: initialNotifications, stats, filters }) => {

     const { props } = usePage();
  const [notifications, setNotifications] = useState(initialNotifications.data || []);
  const [filter, setFilter] = useState(filters?.filter || 'all');
  const [searchTerm, setSearchTerm] = useState(filters?.search || '');
  const [currentPage, setCurrentPage] = useState(initialNotifications.current_page || 1);
  const [loading, setLoading] = useState(false);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error': return <X className="w-4 h-4 text-red-500" />;
      default: return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getNotificationBorder = (type) => {
    switch (type) {
      case 'success': return 'border-l-green-500';
      case 'warning': return 'border-l-yellow-500';
      case 'error': return 'border-l-red-500';
      default: return 'border-l-blue-500';
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    router.get(route('notifications.index'), {
      filter: newFilter,
      search: searchTerm,
    }, {
      preserveState: true,
      preserveScroll: true,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.get(route('notifications.index'), {
      filter: filter,
      search: searchTerm,
    }, {
      preserveState: true,
      preserveScroll: true,
    });
  };

  const markAsRead = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(route('notifications.mark-read', id), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
      });

      if (response.ok) {
        setNotifications(notifications.map(notification =>
          notification.id === id ? { ...notification, read: true } : notification
        ));

        // Refresh the page to update stats
        router.reload();
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    try {
      setLoading(true);
      const response = await fetch(route('notifications.mark-all-read'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
      });

      if (response.ok) {
        router.reload();
      }
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteNotification = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(route('notifications.delete', id), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
      });

      if (response.ok) {
        setNotifications(notifications.filter(notification => notification.id !== id));
        router.reload();
      }
    } catch (error) {
      console.error('Error deleting notification:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    router.get(route('notifications.index'), {
      filter: filter,
      search: searchTerm,
      page: page,
    }, {
      preserveState: true,
      preserveScroll: true,
    });
  };


  return (
    <AuthenticatedLayout>
      <Head title="Notifications" />
      <div className="min-h-screen p-6">
        <div className=" mx-auto">
            {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bell className="w-8 h-8 text-slate-700" />
                  {stats?.unread > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {stats.unread}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
                  <p className="text-slate-600">Stay updated with your latest activities</p>
                </div>
              </div>

              {stats?.unread > 0 && (
                <button
                  onClick={markAllAsRead}
                  disabled={loading}
                  className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
                >
                  <CheckCheck className="w-4 h-4" />
                  <span>Mark All Read</span>
                </button>
              )}
            </div>
          </div>

          {/* Notifications List */}
         <div className="space-y-3 mb-6">
            {notifications.length === 0 ? (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
                <Bell className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No notifications found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`backdrop-blur-sm rounded-xl border-l-4 ${getNotificationBorder(notification.type)} border-r border-t border-b p-4 transition-all duration-200 hover:shadow-lg ${
                    !notification.read
                      ? 'bg-gray-50/90 border-white/40 shadow-lg ring-2 ring-blue-100/50'
                      : 'bg-white/70 border-white/20 opacity-75'
                  } hover:bg-white/80`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className={`font-semibold ${!notification.read ? 'text-slate-900' : 'text-slate-600'}`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-500 text-white rounded-full animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>

                        <p className={`text-sm mb-2 ${!notification.read ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                          {notification.message}
                        </p>

                        <div className="flex items-center space-x-3 text-xs text-slate-500">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{notification.user}</span>
                          </div>
                          <span>•</span>
                          <span>{notification.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {!notification.read ? (
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-semibold text-black-600 bg-gray-100 px-2 py-1 rounded-full">
                            UNREAD
                          </span>
                          <button
                            onClick={() => markAsRead(notification.id)}
                            disabled={loading}
                            className="p-2 text-white bg-black hover:bg-gray-800 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:opacity-50"
                            title="Mark as read"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          READ
                        </span>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        disabled={loading}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete notification"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {initialNotifications.last_page > 1 && (
            <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-sm text-slate-600">
                Showing {initialNotifications.from || 0} to {initialNotifications.to || 0} of {initialNotifications.total || 0} notifications
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(initialNotifications.current_page - 1)}
                  disabled={!initialNotifications.prev_page_url}
                  className={`p-2 rounded-lg ${!initialNotifications.prev_page_url ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: Math.min(5, initialNotifications.last_page) }, (_, i) => {
                  const page = i + Math.max(1, initialNotifications.current_page - 2);
                  if (page > initialNotifications.last_page) return null;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg ${initialNotifications.current_page === page ? 'bg-gray-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(initialNotifications.current_page + 1)}
                  disabled={!initialNotifications.next_page_url}
                  className={`p-2 rounded-lg ${!initialNotifications.next_page_url ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default NotificationsPage;
