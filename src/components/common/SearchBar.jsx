import React from "react";
import Input from "./Input";
import Icon from "./Icon";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  ...props
}) => {
  const baseClasses =
    "flex items-center bg-gray-100 rounded-lg px-3 py-1 border border-transparent focus-within:ring-2 focus-within:ring-primary focus-within:bg-white transition-all";

  const classNames = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} {...props}>
      <Icon name="search" className="text-gray-400 mr-2 text-lg" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent border-none p-2 focus:outline-none text-sm flex-1 w-full"
      />
    </div>
  );
};

export default SearchBar;
