import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CustomPC from './pages/CustomPC';
import Parts from './pages/Parts';
import Checkout from './components/Checkout';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <FilterProvider>
          <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/custom-pc" element={<CustomPC />} />
                <Route path="/parts" element={<Parts />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
          </div>
        </FilterProvider>
      </CartProvider>
    </Router>
  );
}

export default App; 