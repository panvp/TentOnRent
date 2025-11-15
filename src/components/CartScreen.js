import React from "react";

const CartScreen = ({ cart, currency, onBack, onRemoveFromCart, onUpdateQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

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
            <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🛒</div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-6">Add items to get started</p>
            <button
              onClick={onBack}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 flex items-center"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/100x100/e5e7eb/6b7280?text=Item";
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.tentHouseName}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <div className="text-xl font-bold text-blue-600 mb-3">
                      {currency}
                      {item.price * item.quantity}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        disabled={item.quantity <= 1}
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(index)}
                      className="text-red-500 hover:text-red-600 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({cart.length})</span>
                    <span>{currency}{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Service Fee</span>
                    <span>{currency}0</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">{currency}{calculateTotal()}</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onBack}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
