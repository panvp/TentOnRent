import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CategoryGrid from "./CategoryGrid";
import TentHousesList from "./TentHousesList";
import LocationSelector from "./LocationSelector";

const HomeScreen = ({ 
  user, 
  mockData, 
  currentLocation, 
  onShowToast, 
  onViewDetails, 
  onLocationSelect 
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTentHouses, setFilteredTentHouses] = useState([]);
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);

  useEffect(() => {
    if (mockData?.tentHouses) {
      filterTentHouses(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mockData, searchTerm, currentLocation]);

  const filterTentHouses = (term) => {
    if (!mockData?.tentHouses) return;

    // First filter by location
    let locationFiltered = mockData.tentHouses.filter((tentHouse) =>
      tentHouse.location === currentLocation
    );

    // Then filter by search term if provided
    if (term.trim()) {
      const searchLower = term.toLowerCase();
      locationFiltered = locationFiltered.filter((tentHouse) => {
        return (
          tentHouse.name.toLowerCase().includes(searchLower) ||
          tentHouse.description.toLowerCase().includes(searchLower) ||
          tentHouse.location.toLowerCase().includes(searchLower) ||
          tentHouse.items.some(
            (item) =>
              item.name.toLowerCase().includes(searchLower) ||
              item.description.toLowerCase().includes(searchLower)
          )
        );
      });
    }

    setFilteredTentHouses(locationFiltered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryClick = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {mockData.appConfig.appName}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-5 5-5-5h5v-12"
                  ></path>
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Location Bar */}
          <div className="pb-4">
            <button
              onClick={() => setIsLocationSelectorOpen(true)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">{currentLocation}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        placeholder={mockData.appConfig.searchPlaceholder}
        onSearch={handleSearch}
      />

      {/* Categories */}
      <CategoryGrid
        categories={mockData.categories}
        onCategoryClick={handleCategoryClick}
      />

      {/* Tent Houses List */}
      <TentHousesList
        tentHouses={filteredTentHouses}
        currency={mockData.appConfig.currency}
        onViewDetails={onViewDetails}
      />

      {/* User Info Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center">
            Logged in as:{" "}
            <span className="font-medium text-gray-700">{user?.uid}</span>
          </p>
        </div>
      </footer>

      {/* Location Selector Modal */}
      <LocationSelector
        isOpen={isLocationSelectorOpen}
        onClose={() => setIsLocationSelectorOpen(false)}
        onSelectLocation={onLocationSelect}
        currentLocation={currentLocation}
        supportedCities={mockData.appConfig.supportedCities}
        popularCities={mockData.appConfig.popularCities}
      />
    </div>
  );
};

export default HomeScreen;
