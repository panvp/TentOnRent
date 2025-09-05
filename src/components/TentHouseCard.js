import React from "react";

const TentHouseCard = ({ tentHouse, currency, onViewDetails }) => {
  const minPrice = Math.min(...tentHouse.items.map((item) => item.price));

  return (
    <div className="tent-house-card bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {tentHouse.name}
            </h3>
            <p className="text-sm text-gray-500 flex items-center mt-1">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {tentHouse.location}
            </p>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-sm text-gray-600">{tentHouse.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{tentHouse.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Available Items:
          </h4>
          <div className="flex flex-wrap gap-2">
            {tentHouse.items.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
              >
                {item.name}
              </span>
            ))}
            {tentHouse.items.length > 3 && (
              <span className="text-blue-600 text-xs">
                +{tentHouse.items.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Starting from{" "}
            <span className="font-semibold text-gray-800">
              {currency}
              {minPrice}
            </span>
          </div>
          <button
            onClick={() => onViewDetails(tentHouse.id)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TentHouseCard;
