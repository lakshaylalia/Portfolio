import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  isVisible: boolean;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ 
  type, 
  message, 
  isVisible, 
  onClose, 
  autoClose = true, 
  duration = 5000 
}) => {
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, duration, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-500',
          icon: CheckCircle,
          iconColor: 'text-white'
        };
      case 'error':
        return {
          bg: 'bg-red-500',
          icon: XCircle,
          iconColor: 'text-white'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-500',
          icon: AlertCircle,
          iconColor: 'text-white'
        };
      default:
        return {
          bg: 'bg-blue-500',
          icon: CheckCircle,
          iconColor: 'text-white'
        };
    }
  };

  const { bg, icon: Icon, iconColor } = getToastStyles();

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className={`${bg} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 max-w-md`}>
        <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0`} />
        <p className="font-medium flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;