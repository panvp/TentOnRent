import React from "react";
import TentHouseCard from "./TentHouseCard";

const TentHousesList = ({ tentHouses, currency, onViewDetails }) => {
  if (!tentHouses || tentHouses.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Available Tent Houses
          </h3>
          <span className="text-sm text-gray-500">0 tent houses found</span>
        </div>
        <div className="col-span-full text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🏪</div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No tent houses found
          </h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Available Tent Houses
        </h3>
        <span className="text-sm text-gray-500">
          {tentHouses.length} tent house{tentHouses.length !== 1 ? "s" : ""}{" "}
          found
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tentHouses.map((tentHouse) => (
          <TentHouseCard
            key={tentHouse.id}
            tentHouse={tentHouse}
            currency={currency}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default TentHousesList;
