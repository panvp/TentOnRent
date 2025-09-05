# Event Essentials - React App

A modern, responsive tent and decor rental application built with React and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 📊 Dynamic Data Configuration

All data displayed in the UI comes from `public/mockData.json`. You can modify this file and the changes will be reflected immediately in the UI (with hot reloading).

### Data Structure

#### App Configuration

```json
{
  "appConfig": {
    "appName": "Event Essentials",
    "tagline": "Your one-stop shop for tent & decor rentals",
    "searchPlaceholder": "Search for chairs, tents, speakers...",
    "currency": "₹",
    "supportedCities": ["Pune, Maharashtra", "Mumbai, Maharashtra", ...]
  }
}
```

#### Categories

```json
{
  "categories": [
    {
      "name": "Tents",
      "icon": "⛺",
      "searchTerm": "tent"
    }
  ]
}
```

#### Tent Houses

```json
{
  "tentHouses": [
    {
      "id": "unique-id",
      "name": "Tent House Name",
      "location": "City, State",
      "description": "Brief description",
      "rating": 4.5,
      "items": [
        {
          "name": "Item Name",
          "price": 1000,
          "description": "Item description",
          "imageUrl": "https://via.placeholder.com/300x200"
        }
      ]
    }
  ]
}
```

## 🎨 Customization Examples

### Adding a New Category

1. Open `public/mockData.json`
2. Add to the `categories` array:

```json
{
  "name": "Flowers",
  "icon": "🌸",
  "searchTerm": "flower"
}
```

### Adding a New Tent House

1. Add to the `tentHouses` array:

```json
{
  "id": "new-tent-house",
  "name": "New Tent House",
  "location": "Your City, State",
  "description": "Amazing services",
  "rating": 4.9,
  "items": [
    {
      "name": "Special Tent",
      "price": 20000,
      "description": "Premium tent service",
      "imageUrl": "https://via.placeholder.com/300x200"
    }
  ]
}
```

### Modifying App Branding

Change the `appConfig` section:

```json
{
  "appName": "Your Brand Name",
  "tagline": "Your custom tagline",
  "currency": "$"
}
```

## 🔧 Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Real-time Search**: Search across tent houses, items, and descriptions
- **Category Filtering**: Click category icons to filter results
- **Dynamic Data**: All content loaded from JSON file
- **Hot Reloading**: Changes to mockData.json reflect immediately
- **Modern UI**: Clean, professional design with animations
- **Authentication Flow**: Splash screen → Login → Home
- **Toast Notifications**: User feedback for actions

## 📱 Screens

1. **Splash Screen**: App branding and get started button
2. **Login Screen**: Mobile number input with skip option for testing
3. **Home Screen**: Search, categories, and tent house listings

## 🛠 Technology Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Create React App**: Development environment
- **JSON**: Dynamic data source

## 📝 Development Notes

- The app automatically loads data from `public/mockData.json` on startup
- Search functionality works across tent house names, descriptions, locations, and items
- All styling uses Tailwind CSS classes
- Components are modular and reusable
- State management uses React hooks (useState, useEffect)

## 🔄 Hot Reloading

The app supports hot reloading for:

- ✅ React component changes
- ✅ CSS/Tailwind changes
- ✅ JSON data changes (refresh browser to see mockData.json changes)

Simply modify `public/mockData.json` and refresh the page to see your data changes!
