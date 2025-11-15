import React from "react";

const TentHouseDetailsScreen = ({ 
  tentHouse, 
  currency, 
  cart = [],
  cartItemCount,
  onBack, 
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
  onViewCart
}) => {
  // Helper function to get item quantity in cart
  const getItemQuantityInCart = (item) => {
    const cartItem = cart.find(
      (cartItem) => cartItem.name === item.name && cartItem.tentHouseId === tentHouse.id
    );
    return cartItem ? cartItem.quantity : 0;
  };

  // Helper function to get cart item index
  const getCartItemIndex = (item) => {
    return cart.findIndex(
      (cartItem) => cartItem.name === item.name && cartItem.tentHouseId === tentHouse.id
    );
  };

  if (!tentHouse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🏪</div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            Tent house not found
          </h3>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-700"
          >
            Go back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
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
              <h1 className="text-2xl font-bold text-gray-800">
                {tentHouse.name}
              </h1>
            </div>
            
            {/* Cart Button */}
            <button 
              onClick={onViewCart}
              className="p-2 rounded-full hover:bg-gray-100 relative"
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tent House Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {tentHouse.name}
              </h2>
              <p className="text-gray-600 flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {tentHouse.location}
              </p>
              <p className="text-gray-700 text-lg">{tentHouse.description}</p>
            </div>
            <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-lg">
              <svg
                className="w-5 h-5 text-yellow-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-lg font-semibold text-gray-800">
                {tentHouse.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Available Items
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {tentHouse.items.length} items available
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tentHouse.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200/e5e7eb/6b7280?text=No+Image";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {currency}
                        {item.price}
                      </div>
                      <div className="text-sm text-gray-500">per day</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Available
                    </div>
                    
                    {getItemQuantityInCart(item) > 0 ? (
                      // Show quantity controls if item is in cart
                      <div className="flex items-center space-x-3 bg-blue-50 px-3 py-2 rounded-lg">
                        <button
                          onClick={() => {
                            const index = getCartItemIndex(item);
                            const quantity = getItemQuantityInCart(item);
                            if (quantity === 1) {
                              onRemoveFromCart(index);
                            } else {
                              onUpdateQuantity(index, quantity - 1);
                            }
                          }}
                          className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center border border-gray-200 transition-colors"
                        >
                          <span className="text-blue-600 font-bold">−</span>
                        </button>
                        <span className="font-semibold text-blue-600 min-w-[2rem] text-center">
                          {getItemQuantityInCart(item)}
                        </span>
                        <button
                          onClick={() => {
                            const index = getCartItemIndex(item);
                            onUpdateQuantity(index, getItemQuantityInCart(item) + 1);
                          }}
                          className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center border border-gray-200 transition-colors"
                        >
                          <span className="text-blue-600 font-bold">+</span>
                        </button>
                      </div>
                    ) : (
                      // Show Add to Cart button if item is not in cart
                      <button 
                        onClick={() => onAddToCart(item, tentHouse)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7"
                          />
                        </svg>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Ready to Book?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact {tentHouse.name} directly to make a reservation or get a
            custom quote for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentHouseDetailsScreen;
