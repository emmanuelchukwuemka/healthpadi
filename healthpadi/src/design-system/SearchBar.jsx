import React from 'react';
import Input from './Input';
import Icon from './Icon';
import '../App.css';

const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  className = '',
  ...props 
}) => {
  const baseClasses = 'search-bar';
  
  const classNames = [
    baseClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      <Icon name="search" className="search-icon" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;