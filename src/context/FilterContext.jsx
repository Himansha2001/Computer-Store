import { createContext, useContext, useReducer, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterContext = createContext();

const initialState = {
  priceRange: [0, 5000],
  selectedSpecs: {
    cpu: [],
    gpu: [],
    ram: [],
    storage: [],
  },
  compatibility: [],
  sortBy: 'price-asc',
};

function filterReducer(state, action) {
  switch (action.type) {
    case 'SET_PRICE_RANGE':
      return { ...state, priceRange: action.payload };
    case 'TOGGLE_SPEC':
      const { category, value } = action.payload;
      const currentSpecs = state.selectedSpecs[category];
      const newSpecs = currentSpecs.includes(value)
        ? currentSpecs.filter(spec => spec !== value)
        : [...currentSpecs, value];
      return {
        ...state,
        selectedSpecs: {
          ...state.selectedSpecs,
          [category]: newSpecs,
        },
      };
    case 'TOGGLE_COMPATIBILITY':
      const newCompatibility = state.compatibility.includes(action.payload)
        ? state.compatibility.filter(tag => tag !== action.payload)
        : [...state.compatibility, action.payload];
      return { ...state, compatibility: newCompatibility };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    case 'RESET_FILTERS':
      return initialState;
    default:
      return state;
  }
}

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  // Sync URL params with state
  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    if (Object.keys(params).length > 0) {
      dispatch({
        type: 'SET_FROM_URL',
        payload: {
          priceRange: params.priceRange ? JSON.parse(params.priceRange) : initialState.priceRange,
          selectedSpecs: params.specs ? JSON.parse(params.specs) : initialState.selectedSpecs,
          compatibility: params.compatibility ? JSON.parse(params.compatibility) : initialState.compatibility,
          sortBy: params.sortBy || initialState.sortBy,
        },
      });
    }
  }, []);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (state.priceRange !== initialState.priceRange) {
      params.set('priceRange', JSON.stringify(state.priceRange));
    }
    if (Object.values(state.selectedSpecs).some(specs => specs.length > 0)) {
      params.set('specs', JSON.stringify(state.selectedSpecs));
    }
    if (state.compatibility.length > 0) {
      params.set('compatibility', JSON.stringify(state.compatibility));
    }
    if (state.sortBy !== initialState.sortBy) {
      params.set('sortBy', state.sortBy);
    }
    setSearchParams(params);
  }, [state, setSearchParams]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
} 