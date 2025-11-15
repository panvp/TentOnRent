import React from "react";

const ProfileScreen = ({ user, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mr-6">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {user?.mobile || "Guest User"}
              </h2>
              <p className="text-gray-500">User ID: {user?.uid}</p>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Account Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Account Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">Mobile Number</label>
              <p className="text-gray-800 font-medium">
                {user?.mobile || "Not provided"}
              </p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-gray-800 font-medium">Not provided</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Member Since</label>
              <p className="text-gray-800 font-medium">November 2025</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <svg
                  className="w-8 h-8 text-blue-600 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-700">My Orders</p>
              </div>
            </button>
            <button className="border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="text-center">
                <svg
                  className="w-8 h-8 text-blue-600 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-700">Favorites</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
