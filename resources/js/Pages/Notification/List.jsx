import React, { useState } from 'react';
import { Bell, Check, CheckCheck, Trash2, Filter, Search, User, AlertCircle, Info, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Payment Processed',
      message: 'Payment of $299.99 has been successfully processed for order #12345',
      time: '2 minutes ago',
      read: false,
      avatar: '/api/placeholder/32/32',
      user: 'John Doe'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Product "Premium Headphones" is running low on stock (5 items remaining)',
      time: '15 minutes ago',
      read: false,
      avatar: '/api/placeholder/32/32',
      user: 'System'
    },
    {
      id: 3,
      type: 'info',
      title: 'New User Registration',
      message: 'Sarah Johnson has registered a new account and is awaiting verification',
      time: '1 hour ago',
      read: true,
      avatar: '/api/placeholder/32/32',
      user: 'Sarah Johnson'
    },
    {
      id: 4,
      type: 'error',
      title: 'Server Error',
      message: 'Database connection failed. System automatically switched to backup server',
      time: '2 hours ago',
      read: false,
      avatar: '/api/placeholder/32/32',
      user: 'System'
    },
    {
      id: 5,
      type: 'success',
      title: 'Backup Completed',
      message: 'Daily backup process completed successfully. 2.4GB of data backed up',
      time: '3 hours ago',
      read: true,
      avatar: '/api/placeholder/32/32',
      user: 'System'
    },
    {
      id: 6,
      type: 'info',
      title: 'Feature Update',
      message: 'New dashboard analytics feature has been deployed and is now available',
      time: '1 day ago',
      read: true,
      avatar: '/api/placeholder/32/32',
      user: 'Development Team'
    },
    {
      id: 7,
      type: 'success',
      title: 'Order Shipped',
      message: 'Your order #12345 has been shipped and will arrive in 2-3 business days',
      time: '1 day ago',
      read: false,
      avatar: '/api/placeholder/32/32',
      user: 'Shipping Department'
    },
    {
      id: 8,
      type: 'warning',
      title: 'Scheduled Maintenance',
      message: 'System will undergo maintenance tonight from 2:00 AM to 4:00 AM',
      time: '2 days ago',
      read: true,
      avatar: '/api/placeholder/32/32',
      user: 'System Admin'
    },
    {
      id: 9,
      type: 'info',
      title: 'New Message',
      message: 'You have received a new message from customer support',
      time: '3 days ago',
      read: true,
      avatar: '/api/placeholder/32/32',
      user: 'Support Team'
    },
    {
      id: 10,
      type: 'error',
      title: 'Login Attempt Failed',
      message: 'There was an unsuccessful login attempt to your account',
      time: '4 days ago',
      read: true,
      avatar: '/api/placeholder/32/32',
      user: 'Security System'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [notificationsPerPage] = useState(4); // Show 4 notifications per page

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

  const filteredNotifications = notifications
    .filter(notification => {
      const matchesFilter = filter === 'all' ||
        (filter === 'unread' && !notification.read) ||
        (filter === 'read' && notification.read) ||
        (filter === notification.type);

      const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (a.read !== b.read) {
        return a.read ? 1 : -1;
      }
      return 0;
    });

  // Pagination logic
  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = filteredNotifications.slice(indexOfFirstNotification, indexOfLastNotification);
  const totalPages = Math.ceil(filteredNotifications.length / notificationsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    // Reset to first page if current page would be empty after deletion
    if (currentNotifications.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
                  {unreadCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
                  <p className="text-slate-600">Stay updated with your latest activities</p>
                </div>
              </div>

              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <CheckCheck className="w-4 h-4" />
                  <span>Mark All Read</span>
                </button>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Total</p>
                    <p className="text-2xl font-bold text-slate-900">{notifications.length}</p>
                  </div>
                  <Bell className="w-8 h-8 text-slate-400" />
                </div>
              </div>
              <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Unread</p>
                    <p className="text-2xl font-bold text-red-500">{unreadCount}</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-red-400" />
                </div>
              </div>
              <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div>
                  <p className="text-sm text-slate-600">Read</p>
                  <p className="text-2xl font-bold text-green-500">{notifications.length - unreadCount}</p>
                </div>
              </div>
              <div className="bg-gray-100 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div>
                  <p className="text-sm text-slate-600">Today</p>
                  <p className="text-2xl font-bold text-blue-500">
                    {notifications.filter(n => n.time.includes('minute') || n.time.includes('hour')).length}
                  </p>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1); // Reset to first page when searching
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <select
                    value={filter}
                    onChange={(e) => {
                      setFilter(e.target.value);
                      setCurrentPage(1); // Reset to first page when changing filter
                    }}
                    className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                  >
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                    <option value="info">Info</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-3 mb-6">
            {currentNotifications.length === 0 ? (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
                <Bell className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">No notifications found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              currentNotifications.map((notification) => (
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
                            className="p-2 text-white bg-black hover:bg-black rounded-lg transition-colors shadow-md hover:shadow-lg"
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
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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
          {filteredNotifications.length > notificationsPerPage && (
            <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-sm text-slate-600">
                Showing {indexOfFirstNotification + 1} to {Math.min(indexOfLastNotification, filteredNotifications.length)} of {filteredNotifications.length} notifications
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${currentPage === number ? 'bg-gray-500 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'}`}
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
