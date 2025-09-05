import React from "react";

const SplashScreen = ({ appConfig, onGetStarted }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="text-center text-white animate-fade-in">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {appConfig.appName}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            {appConfig.tagline}
          </p>
        </div>
        <button
          onClick={onGetStarted}
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
