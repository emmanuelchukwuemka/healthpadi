import React from 'react';
import '../App.css';

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'badge';
  const variantClasses = `badge-${variant}`;
  const sizeClasses = `badge-${size}`;
  
  const classNames = [
    baseClasses,
    variantClasses,
    sizeClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

export default Badge;