import { useState, useEffect } from 'react';
import { useFilters } from '../context/FilterContext';

export default function PriceSlider() {
  const { state, dispatch } = useFilters();
  const [localRange, setLocalRange] = useState(state.priceRange);

  useEffect(() => {
    setLocalRange(state.priceRange);
  }, [state.priceRange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newRange = [...localRange];
    newRange[name === 'min' ? 0 : 1] = Number(value);
    setLocalRange(newRange);
  };

  const handleBlur = () => {
    dispatch({ type: 'SET_PRICE_RANGE', payload: localRange });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Price Range</label>
        <div className="text-sm text-gray-500">
          ${localRange[0]} - ${localRange[1]}
        </div>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min="0"
          max="5000"
          value={localRange[0]}
          onChange={handleChange}
          onBlur={handleBlur}
          name="min"
          className="absolute w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="5000"
          value={localRange[1]}
          onChange={handleChange}
          onBlur={handleBlur}
          name="max"
          className="absolute w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div
          className="absolute h-1 bg-primary-500 rounded-lg"
          style={{
            left: `${(localRange[0] / 5000) * 100}%`,
            right: `${100 - (localRange[1] / 5000) * 100}%`,
          }}
        />
      </div>

      <div className="flex justify-between">
        <input
          type="number"
          min="0"
          max="5000"
          value={localRange[0]}
          onChange={handleChange}
          onBlur={handleBlur}
          name="min"
          className="w-20 px-2 py-1 text-sm border rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
        <input
          type="number"
          min="0"
          max="5000"
          value={localRange[1]}
          onChange={handleChange}
          onBlur={handleBlur}
          name="max"
          className="w-20 px-2 py-1 text-sm border rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
  );
} 