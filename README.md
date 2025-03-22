# Computer Store E-commerce Frontend

A modern, responsive e-commerce frontend for a computer store built with React and Tailwind CSS. The application features advanced product filtering capabilities and a beautiful user interface.

## Features

- **Advanced Product Filtering**
  - Price range slider with real-time updates
  - Multi-select specs filters (CPU, GPU, RAM, Storage)
  - Compatibility tags
  - Active filter tags with removal functionality
  - Reset filters button

- **Product Display**
  - Responsive grid layout
  - Image gallery with thumbnails
  - Key specs highlights
  - "Add to Build" and "Customize" CTAs

- **Responsive Design**
  - Mobile-first approach
  - Collapsible filters sidebar
  - Touch-friendly sliders
  - Beautiful animations

## Tech Stack

- React (Vite)
- Tailwind CSS
- Headless UI
- React Router
- Hero Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd computer-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProductListing.jsx
│   ├── FilterSidebar.jsx
│   ├── ProductCard.jsx
│   ├── PriceSlider.jsx
│   └── ActiveFilters.jsx
├── context/
│   └── FilterContext.jsx
├── data/
│   └── mockProducts.js
└── App.jsx
```

## Features in Detail

### Filter System
- The filter system uses React Context for state management
- Filters are persisted in URL query parameters
- Real-time filtering with smooth animations
- Mobile-friendly filter sidebar with slide-in animation

### Product Cards
- Responsive grid layout
- Image gallery with thumbnails
- Key specs display
- Compatibility tags
- Action buttons for adding to build or customizing

### Responsive Design
- Mobile-first approach
- Collapsible filters on mobile
- Touch-friendly controls
- Optimized for all screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 