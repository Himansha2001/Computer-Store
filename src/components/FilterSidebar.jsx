import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useFilters } from '../context/FilterContext';
import PriceSlider from './PriceSlider';

const specs = {
  cpu: [
    'Intel i7-13700K',
    'Intel i9-13900K',
    'AMD Ryzen 7 7800X3D',
    'AMD Ryzen 9 7950X',
  ],
  gpu: [
    'RTX 4070 Ti',
    'RTX 4080',
    'RTX 4090',
    'RX 7900 XTX',
  ],
  ram: [
    '16GB DDR5',
    '32GB DDR5',
    '64GB DDR5',
  ],
  storage: [
    '1TB NVMe SSD',
    '2TB NVMe SSD',
    '4TB NVMe SSD',
  ],
};

const compatibilityTags = [
  'VR Ready',
  '4K Gaming',
  'Streaming Ready',
  'Content Creation',
  'Workstation',
];

export default function FilterSidebar({ isOpen, setIsOpen }) {
  const { state, dispatch } = useFilters();

  const toggleSpec = (category, value) => {
    dispatch({ type: 'TOGGLE_SPEC', payload: { category, value } });
  };

  const toggleCompatibility = (tag) => {
    dispatch({ type: 'TOGGLE_COMPATIBILITY', payload: tag });
  };

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const FilterSection = ({ title, children }) => (
    <div className="py-4 border-b border-gray-200">
      <h3 className="text-sm font-medium text-gray-900 mb-3">{title}</h3>
      {children}
    </div>
  );

  const FilterContent = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <button
          onClick={resetFilters}
          className="text-sm text-primary-600 hover:text-primary-700"
        >
          Reset all
        </button>
      </div>

      <FilterSection title="Price Range">
        <PriceSlider />
      </FilterSection>

      {Object.entries(specs).map(([category, options]) => (
        <FilterSection key={category} title={category.toUpperCase()}>
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={state.selectedSpecs[category].includes(option)}
                  onChange={() => toggleSpec(category, option)}
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      ))}

      <FilterSection title="Compatibility">
        <div className="flex flex-wrap gap-2">
          {compatibilityTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleCompatibility(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                state.compatibility.includes(tag)
                  ? 'bg-primary-100 text-primary-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Mobile filter dialog */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4 py-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <div className="px-4">
                  <FilterContent />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop filter sidebar */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>

      {/* Mobile filter button */}
      <button
        type="button"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FunnelIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
} 