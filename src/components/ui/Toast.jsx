// src/components/ui/toast.jsx
import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration = 1000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 bg-gray-900 text-white  px-6 py-3 rounded-lg shadow-lg transition-all duration-700 flex items-center gap-2
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <span>{message}</span>
    </div>
  );
};

export { Toast };