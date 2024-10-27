// src/components/ui/button.jsx
import React from 'react';

const Button = React.forwardRef(({ 
  className = '',
  variant = 'default',
  size = 'default',
  children,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90',
    destructive: 'bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90',
    outline: 'border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900',
    secondary: 'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80',
    ghost: 'hover:bg-gray-100 hover:text-gray-900',
    link: 'text-gray-900 underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
  };

  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };