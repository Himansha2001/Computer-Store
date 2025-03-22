import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFilters } from '../context/FilterContext';

export default function ActiveFilters() {
  const { state, dispatch } = useFilters();

  const removePriceFilter = () => {
    dispatch({ type: 'SET_PRICE_RANGE', payload: [0, 5000] });
  };

  const removeSpec = (category, value) => {
    dispatch({ type: 'TOGGLE_SPEC', payload: { category, value } });
  };

  const removeCompatibility = (tag) => {
    dispatch({ type: 'TOGGLE_COMPATIBILITY', payload: tag });
  };

  const hasActiveFilters = () => {
    return (
      state.priceRange[0] !== 0 ||
      state.priceRange[1] !== 5000 ||
      Object.values(state.selectedSpecs).some((specs) => specs.length > 0) ||
      state.compatibility.length > 0
    );
  };

  if (!hasActiveFilters()) return null;

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex flex-wrap gap-2">
            {/* Price Range Filter */}
            {(state.priceRange[0] !== 0 || state.priceRange[1] !== 5000) && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                ${state.priceRange[0]} - ${state.priceRange[1]}
                <button
                  type="button"
                  className="ml-1 inline-flex text-primary-400 hover:text-primary-500"
                  onClick={removePriceFilter}
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            )}

            {/* Specs Filters */}
            {Object.entries(state.selectedSpecs).map(([category, values]) =>
              values.map((value) => (
                <span
                  key={`${category}-${value}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                >
                  {value}
                  <button
                    type="button"
                    className="ml-1 inline-flex text-primary-400 hover:text-primary-500"
                    onClick={() => removeSpec(category, value)}
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </span>
              ))
            )}

            {/* Compatibility Filters */}
            {state.compatibility.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
              >
                {tag}
                <button
                  type="button"
                  className="ml-1 inline-flex text-primary-400 hover:text-primary-500"
                  onClick={() => removeCompatibility(tag)}
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 