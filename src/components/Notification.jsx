// components/Notifications.jsx - Notification system
import React, { useContext } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import NotificationContext from '../contexts/NotificationContext';

const Notifications = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);
  
  if (notifications.length === 0) return null;
  
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {notifications.map((notification) => (
        <div 
          key={notification.id}
          className={`flex items-start p-4 rounded-lg shadow-md ${
            notification.type === 'success' ? 'bg-green-50 border-l-4 border-green-500' :
            notification.type === 'error' ? 'bg-red-50 border-l-4 border-red-500' :
            'bg-blue-50 border-l-4 border-blue-500'
          }`}
        >
          <div className="flex-shrink-0">
            {notification.type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-400" />
            ) : notification.type === 'error' ? (
              <AlertCircle className="h-5 w-5 text-red-400" />
            ) : (
              <Info className="h-5 w-5 text-blue-400" />
            )}
          </div>
          
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${
              notification.type === 'success' ? 'text-green-800' :
              notification.type === 'error' ? 'text-red-800' :
              'text-blue-800'
            }`}>
              {notification.message}
            </p>
          </div>
          
          <button
            onClick={() => removeNotification(notification.id)}
            className="ml-4 flex-shrink-0 inline-flex text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};