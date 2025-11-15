import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import TentHouseDetailsScreen from "./components/TentHouseDetailsScreen";
import CartScreen from "./components/CartScreen";
import ProfileScreen from "./components/ProfileScreen";
import OrdersScreen from "./components/OrdersScreen";
import LoadingOverlay from "./components/LoadingOverlay";
import Toast from "./components/Toast";
import "./index.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [currentUser, setCurrentUser] = useState(null);
  const [mockData, setMockData] = useState(null);
  const [selectedTentHouse, setSelectedTentHouse] = useState(null);
  const [currentLocation, setCurrentLocation] = useState("Mumbai, Maharashtra");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
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
        // Try different paths for GitHub Pages compatibility
        const baseUrl = process.env.PUBLIC_URL || "";
        const possiblePaths = [
          `${baseUrl}/mockData.json`,
          `${window.location.origin}${window.location.pathname}mockData.json`,
          `${window.location.origin}/TentOnRent/mockData.json`,
          "/mockData.json",
          "./mockData.json",
        ];
        
        console.log("Environment:", {
          PUBLIC_URL: process.env.PUBLIC_URL,
          origin: window.location.origin,
          pathname: window.location.pathname,
          href: window.location.href,
        });
        
        let data = null;
        let lastError = null;
        
        for (const path of possiblePaths) {
          try {
            console.log(`Trying to fetch from: ${path}`);
            const response = await fetch(path);
            if (response.ok) {
              data = await response.json();
              console.log(`Successfully loaded data from: ${path}`);
              break;
            }
          } catch (error) {
            lastError = error;
            console.log(`Failed to load from ${path}:`, error);
          }
        }
        
        if (data) {
          setMockData(data);
        } else {
          throw lastError || new Error("Failed to load data from any path");
        }
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

  const handleLocationSelect = (location) => {
    setCurrentLocation(location);
    showToast("success", `Location changed to ${location}`);
  };

  const handleAddToCart = (item, tentHouse) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name && cartItem.tentHouseId === tentHouse.id
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      showToast("success", `${item.name} quantity updated in cart`);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          tentHouseId: tentHouse.id,
          tentHouseName: tentHouse.name,
          quantity: 1,
        },
      ]);
      showToast("success", `${item.name} added to cart`);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1)[0];
    setCart(updatedCart);
    showToast("success", `${removedItem.name} removed from cart`);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const handleViewCart = () => {
    setCurrentScreen("cart");
  };

  const handleViewProfile = () => {
    setCurrentScreen("profile");
  };

  const handleViewOrders = () => {
    setCurrentScreen("orders");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCart([]);
    setOrders([]);
    setCurrentScreen("login");
    showToast("success", "Logged out successfully");
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
          currentLocation={currentLocation}
          cartItemCount={cart.length}
          onShowToast={showToast}
          onViewDetails={handleViewDetails}
          onLocationSelect={handleLocationSelect}
          onViewCart={handleViewCart}
          onViewProfile={handleViewProfile}
          onViewOrders={handleViewOrders}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === "details" && (
        <TentHouseDetailsScreen
          tentHouse={selectedTentHouse}
          currency={mockData.appConfig.currency}
          cart={cart}
          cartItemCount={cart.length}
          onBack={handleBackToHome}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onViewCart={handleViewCart}
        />
      )}

      {currentScreen === "cart" && (
        <CartScreen
          cart={cart}
          currency={mockData.appConfig.currency}
          onBack={handleBackToHome}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}

      {currentScreen === "profile" && (
        <ProfileScreen user={currentUser} onBack={handleBackToHome} />
      )}

      {currentScreen === "orders" && (
        <OrdersScreen
          orders={orders}
          currency={mockData.appConfig.currency}
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
