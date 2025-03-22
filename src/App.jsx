import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import Header from './components/Header';
import Home from './components/Home';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <Router>
      <FilterProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prebuilt" element={<ProductListing category="prebuilt" />} />
              <Route path="/components" element={<ProductListing category="components" />} />
              <Route path="/custom-build" element={<ProductListing category="custom-build" />} />
            </Routes>
          </main>
        </div>
      </FilterProvider>
    </Router>
  );
}

export default App; 