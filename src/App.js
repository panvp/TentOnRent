import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import TentHouseDetailsScreen from "./components/TentHouseDetailsScreen";
import LoadingOverlay from "./components/LoadingOverlay";
import Toast from "./components/Toast";
import "./index.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [currentUser, setCurrentUser] = useState(null);
  const [mockData, setMockData] = useState(null);
  const [selectedTentHouse, setSelectedTentHouse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });

  // Load mock data
  useEffect(() => {
    const loadMockData = async () => {
      try {
        const response = await fetch("/mockData.json");
        const data = await response.json();
        setMockData(data);
      } catch (error) {
        console.error("Failed to load mock data:", error);
        showToast("error", "Failed to load data. Please refresh the page.");
      }
    };

    loadMockData();
  }, []);

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(
      () => {
        setToast({ show: false, type: "success", message: "" });
      },
      type === "error" ? 5000 : 3000
    );
  };

  const handleGetStarted = () => {
    setCurrentScreen("login");
  };

  const handleLogin = async (mobileNumber = null) => {
    setLoading(true);

    // Simulate authentication delay
    setTimeout(() => {
      const user = { uid: `demo-user-${Date.now()}`, mobile: mobileNumber };
      setCurrentUser(user);
      setCurrentScreen("home");
      setLoading(false);
      showToast("success", "Logged in successfully!");
    }, 1000);
  };

  const handleSkipLogin = () => {
    handleLogin();
  };

  const handleViewDetails = (tentHouseId) => {
    const tentHouse = mockData.tentHouses.find((th) => th.id === tentHouseId);
    setSelectedTentHouse(tentHouse);
    setCurrentScreen("details");
  };

  const handleBackToHome = () => {
    setSelectedTentHouse(null);
    setCurrentScreen("home");
  };

  if (!mockData) {
    return <LoadingOverlay show={true} message="Loading app..." />;
  }

  return (
    <div className="App">
      <LoadingOverlay show={loading} />
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {currentScreen === "splash" && (
        <SplashScreen
          appConfig={mockData.appConfig}
          onGetStarted={handleGetStarted}
        />
      )}

      {currentScreen === "login" && (
        <LoginScreen onLogin={handleLogin} onSkipLogin={handleSkipLogin} />
      )}

      {currentScreen === "home" && (
        <HomeScreen
          user={currentUser}
          mockData={mockData}
          onShowToast={showToast}
          onViewDetails={handleViewDetails}
        />
      )}

      {currentScreen === "details" && (
        <TentHouseDetailsScreen
          tentHouse={selectedTentHouse}
          currency={mockData.appConfig.currency}
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
