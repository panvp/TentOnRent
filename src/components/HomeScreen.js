import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CategoryGrid from "./CategoryGrid";
import TentHousesList from "./TentHousesList";

const HomeScreen = ({ user, mockData, onShowToast, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTentHouses, setFilteredTentHouses] = useState([]);

  useEffect(() => {
    if (mockData?.tentHouses) {
      filterTentHouses(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mockData, searchTerm]);

  const filterTentHouses = (term) => {
    if (!mockData?.tentHouses) return;

    if (!term.trim()) {
      setFilteredTentHouses(mockData.tentHouses);
      return;
    }

    const searchLower = term.toLowerCase();
    const filtered = mockData.tentHouses.filter((tentHouse) => {
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

    setFilteredTentHouses(filtered);
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
    </div>
  );
};

export default HomeScreen;
