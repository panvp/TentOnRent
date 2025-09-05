import React from "react";

const CategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Popular Categories
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => onCategoryClick(category.searchTerm)}
            className="category-icon flex flex-col items-center p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all duration-200"
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <span className="text-xs text-gray-600 text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
