import React from "react";

const SearchBar = ({ searchTerm, placeholder, onSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-6 py-4 pl-12 bg-white rounded-full shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
          placeholder={placeholder}
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
