import { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { useFilters } from '../context/FilterContext';
import { mockProducts } from '../data/mockProducts';
import FilterSidebar from './FilterSidebar';
import ActiveFilters from './ActiveFilters';
import ProductCard from './ProductCard';

export default function ProductListing() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { state } = useFilters();

  const filteredProducts = mockProducts.filter((product) => {
    // Price range filter
    if (product.price < state.priceRange[0] || product.price > state.priceRange[1]) {
      return false;
    }

    // Specs filters
    for (const [category, selectedValues] of Object.entries(state.selectedSpecs)) {
      if (selectedValues.length > 0 && !selectedValues.includes(product.specs[category])) {
        return false;
      }
    }

    // Compatibility filters
    if (state.compatibility.length > 0) {
      const hasMatchingCompatibility = state.compatibility.some((tag) =>
        product.compatibility.includes(tag)
      );
      if (!hasMatchingCompatibility) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors"
        >
          <FunnelIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />

          {/* Product Grid */}
          <div className="flex-1">
            <ActiveFilters />
            
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 