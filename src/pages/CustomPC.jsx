import { useState, Fragment } from 'react';
import { Tab, Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const pcConfigurations = [
  {
    id: 'pc-1',
    name: 'Gaming Beast',
    image: '/images/gaming-pc.jpg',
    price: 2499.99,
    category: 'Gaming',
    specs: {
      cpu: { name: 'Intel i9-13900K', price: 599.99 },
      gpu: { name: 'RTX 4090', price: 1599.99 },
      ram: { name: '32GB DDR5', price: 199.99 },
      storage: { name: '2TB NVMe SSD', price: 199.99 },
      features: ['4K Gaming', 'VR Ready', 'RGB Lighting']
    }
  },
  {
    id: 'pc-2',
    name: 'Content Creator Pro',
    image: '/images/creator-pc.jpg',
    price: 3299.99,
    category: 'Workstation',
    specs: {
      cpu: { name: 'AMD Ryzen 9 7950X', price: 699.99 },
      gpu: { name: 'RTX 4080', price: 1199.99 },
      ram: { name: '64GB DDR5', price: 299.99 },
      storage: { name: '4TB NVMe SSD', price: 399.99 },
      features: ['8K Video Editing', 'AI Acceleration', 'Thunderbolt 4']
    }
  },
  {
    id: 'pc-3',
    name: 'Streaming Setup',
    image: '/images/streaming-pc.jpg',
    price: 1999.99,
    category: 'Streaming',
    specs: {
      cpu: { name: 'Intel i7-13700K', price: 449.99 },
      gpu: { name: 'RTX 4070 Ti', price: 799.99 },
      ram: { name: '32GB DDR5', price: 199.99 },
      storage: { name: '2TB NVMe SSD', price: 199.99 },
      features: ['Stream Encoding', 'Multi-Display Ready', 'Quiet Operation']
    }
  }
];

const prebuiltPCs = [
  {
    id: 'prebuilt-1',
    name: 'Starter Gaming PC',
    image: '/images/gaming-pc.jpg',
    price: 999.99,
    category: 'Gaming',
    specs: {
      cpu: { name: 'Intel i5-13600K', price: 319.99 },
      gpu: { name: 'RTX 4060 Ti', price: 399.99 },
      ram: { name: '16GB DDR5', price: 99.99 },
      storage: { name: '1TB NVMe SSD', price: 99.99 },
      features: ['1440p Gaming', 'RGB Lighting', 'Compact Design']
    }
  },
  {
    id: 'prebuilt-2',
    name: 'Pro Workstation',
    image: '/images/creator-pc.jpg',
    price: 2799.99,
    category: 'Workstation',
    specs: {
      cpu: { name: 'AMD Ryzen 9 7900X', price: 549.99 },
      gpu: { name: 'RTX 4080', price: 1199.99 },
      ram: { name: '64GB DDR5', price: 299.99 },
      storage: { name: '2TB NVMe SSD', price: 199.99 },
      features: ['CAD/CAM Ready', 'Professional Graphics', 'ECC Memory']
    }
  },
  {
    id: 'prebuilt-3',
    name: 'Budget Gaming PC',
    image: '/images/gaming-pc.jpg',
    price: 799.99,
    category: 'Gaming',
    specs: {
      cpu: { name: 'Intel i5-13400F', price: 219.99 },
      gpu: { name: 'RTX 4060', price: 299.99 },
      ram: { name: '16GB DDR5', price: 99.99 },
      storage: { name: '500GB NVMe SSD', price: 69.99 },
      features: ['1080p Gaming', 'RGB Lighting', 'Great Value']
    }
  }
];

const categories = ['All', 'Gaming', 'Workstation', 'Streaming'];
const priceRanges = [
  { label: 'All', range: [0, Infinity] },
  { label: 'Under $1000', range: [0, 1000] },
  { label: '$1000 - $2000', range: [1000, 2000] },
  { label: '$2000 - $3000', range: [2000, 3000] },
  { label: 'Over $3000', range: [3000, Infinity] }
];

const componentFilters = {
  cpu: [
    { label: 'All CPUs', range: [0, Infinity] },
    { label: 'Budget (Under $300)', range: [0, 300] },
    { label: 'Mid-range ($300-$500)', range: [300, 500] },
    { label: 'High-end (Over $500)', range: [500, Infinity] }
  ],
  gpu: [
    { label: 'All GPUs', range: [0, Infinity] },
    { label: 'Entry Level (Under $400)', range: [0, 400] },
    { label: 'Mid-range ($400-$800)', range: [400, 800] },
    { label: 'High-end (Over $800)', range: [800, Infinity] }
  ],
  ram: [
    { label: 'All RAM', range: [0, Infinity] },
    { label: 'Basic (Under $100)', range: [0, 100] },
    { label: 'Performance ($100-$200)', range: [100, 200] },
    { label: 'High-capacity (Over $200)', range: [200, Infinity] }
  ],
  storage: [
    { label: 'All Storage', range: [0, Infinity] },
    { label: 'Basic (Under $100)', range: [0, 100] },
    { label: 'Performance ($100-$200)', range: [100, 200] },
    { label: 'High-capacity (Over $200)', range: [200, Infinity] }
  ]
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CustomPC() {
  const [selectedConfig, setSelectedConfig] = useState(pcConfigurations[0]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [componentPriceFilters, setComponentPriceFilters] = useState({
    cpu: componentFilters.cpu[0],
    gpu: componentFilters.gpu[0],
    ram: componentFilters.ram[0],
    storage: componentFilters.storage[0]
  });
  const { addToCart } = useCart();

  const handleAddToCart = (config) => {
    addToCart({
      id: config.id,
      name: config.name,
      price: config.price,
      image: config.image,
      specs: `${config.specs.cpu.name}, ${config.specs.gpu.name}, ${config.specs.ram.name}, ${config.specs.storage.name}`
    });
  };

  const filterPCs = (pcs) => {
    return pcs.filter(pc => {
      const categoryMatch = selectedCategory === 'All' || pc.category === selectedCategory;
      const priceMatch = pc.price >= selectedPriceRange.range[0] && pc.price <= selectedPriceRange.range[1];
      
      // Component price filtering
      const cpuMatch = pc.specs.cpu.price >= componentPriceFilters.cpu.range[0] && 
                      pc.specs.cpu.price <= componentPriceFilters.cpu.range[1];
      const gpuMatch = pc.specs.gpu.price >= componentPriceFilters.gpu.range[0] && 
                      pc.specs.gpu.price <= componentPriceFilters.gpu.range[1];
      const ramMatch = pc.specs.ram.price >= componentPriceFilters.ram.range[0] && 
                      pc.specs.ram.price <= componentPriceFilters.ram.range[1];
      const storageMatch = pc.specs.storage.price >= componentPriceFilters.storage.range[0] && 
                          pc.specs.storage.price <= componentPriceFilters.storage.range[1];

      return categoryMatch && priceMatch && cpuMatch && gpuMatch && ramMatch && storageMatch;
    });
  };

  const filteredCustomPCs = filterPCs(pcConfigurations);
  const filteredPrebuiltPCs = filterPCs(prebuiltPCs);

  const handleComponentFilterChange = (component, value) => {
    setComponentPriceFilters(prev => ({
      ...prev,
      [component]: componentFilters[component].find(filter => filter.label === value)
    }));
  };

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedPriceRange(priceRanges[0]);
    setComponentPriceFilters({
      cpu: componentFilters.cpu[0],
      gpu: componentFilters.gpu[0],
      ram: componentFilters.ram[0],
      storage: componentFilters.storage[0]
    });
  };

  const activeFilters = [
    { type: 'Category', value: selectedCategory, clear: () => setSelectedCategory('All') },
    { type: 'Price', value: selectedPriceRange.label, clear: () => setSelectedPriceRange(priceRanges[0]) },
    ...Object.entries(componentPriceFilters).map(([key, value]) => ({
      type: key.toUpperCase(),
      value: value.label,
      clear: () => handleComponentFilterChange(key, componentFilters[key][0].label)
    }))
  ].filter(filter => filter.value !== 'All' && !filter.value.startsWith('All'));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">PC Builds</h2>
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center flex-wrap gap-2">
                {activeFilters.map((filter, index) => (
                  <span
                    key={`${filter.type}-${index}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {filter.type}: {filter.value}
                    <button
                      type="button"
                      onClick={filter.clear}
                      className="ml-1 inline-flex items-center p-0.5 rounded-full text-blue-800 hover:bg-blue-200 focus:outline-none"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}

          {/* Filter Slide-out Panel */}
          <Transition.Root show={showFilters} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setShowFilters}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-medium text-gray-900">Filters</Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={() => setShowFilters(false)}
                                >
                                  <XMarkIcon className="h-6 w-6" />
                                </button>
                              </div>
                            </div>

                            <div className="mt-8">
                              <div className="flow-root">
                                <div className="space-y-6">
                                  {/* Category Filter */}
                                  <div>
                                    <h3 className="text-sm font-medium text-gray-900">Category</h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {categories.map((category) => (
                                        <button
                                          key={category}
                                          onClick={() => setSelectedCategory(category)}
                                          className={classNames(
                                            'px-3 py-1.5 rounded-full text-sm font-medium',
                                            selectedCategory === category
                                              ? 'bg-blue-600 text-white'
                                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                          )}
                                        >
                                          {category}
                                        </button>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Price Range Filter */}
                                  <div>
                                    <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {priceRanges.map((range) => (
                                        <button
                                          key={range.label}
                                          onClick={() => setSelectedPriceRange(range)}
                                          className={classNames(
                                            'px-3 py-1.5 rounded-full text-sm font-medium',
                                            selectedPriceRange.label === range.label
                                              ? 'bg-blue-600 text-white'
                                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                          )}
                                        >
                                          {range.label}
                                        </button>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Component Filters */}
                                  {Object.entries(componentFilters).map(([key, filters]) => (
                                    <div key={key}>
                                      <h3 className="text-sm font-medium text-gray-900">{key.toUpperCase()} Price Range</h3>
                                      <div className="mt-2 flex flex-wrap gap-2">
                                        {filters.map((filter) => (
                                          <button
                                            key={filter.label}
                                            onClick={() => handleComponentFilterChange(key, filter.label)}
                                            className={classNames(
                                              'px-3 py-1.5 rounded-full text-sm font-medium',
                                              componentPriceFilters[key].label === filter.label
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                            )}
                                          >
                                            {filter.label}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <button
                              type="button"
                              className="w-full rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              onClick={() => setShowFilters(false)}
                            >
                              Apply Filters
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              onClick={clearAllFilters}
                            >
                              Clear All
                            </button>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          <Tab.Group as="div" className="mt-12">
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Custom Builds
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Prebuilt PCs
              </Tab>
            </Tab.List>

            <Tab.Panels className="mt-8">
              <Tab.Panel>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {filteredCustomPCs.map((config) => (
                    <div key={config.id} className="group relative">
                      <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={config.image}
                          alt={config.name}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">{config.name}</h3>
                        <p className="mt-2 text-2xl text-gray-900">${config.price.toFixed(2)}</p>
                        <dl className="mt-4 space-y-4">
                          {Object.entries(config.specs).map(([key, value]) => (
                            key !== 'features' && (
                              <div key={key}>
                                <dt className="text-sm font-medium text-gray-500">{key.toUpperCase()}</dt>
                                <dd className="mt-1 text-sm text-gray-900">{value.name}</dd>
                              </div>
                            )
                          ))}
                        </dl>
                        <ul className="mt-4 space-y-2">
                          {config.specs.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-sm text-gray-500"
                            >
                              <svg
                                className="mr-2 h-5 w-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(config)}
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700"
                        >
                          <ShoppingCartIcon className="mr-2 h-5 w-5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {filteredPrebuiltPCs.map((config) => (
                    <div key={config.id} className="group relative">
                      <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={config.image}
                          alt={config.name}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">{config.name}</h3>
                        <p className="mt-2 text-2xl text-gray-900">${config.price.toFixed(2)}</p>
                        <dl className="mt-4 space-y-4">
                          {Object.entries(config.specs).map(([key, value]) => (
                            key !== 'features' && (
                              <div key={key}>
                                <dt className="text-sm font-medium text-gray-500">{key.toUpperCase()}</dt>
                                <dd className="mt-1 text-sm text-gray-900">{value.name}</dd>
                              </div>
                            )
                          ))}
                        </dl>
                        <ul className="mt-4 space-y-2">
                          {config.specs.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-sm text-gray-500"
                            >
                              <svg
                                className="mr-2 h-5 w-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(config)}
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700"
                        >
                          <ShoppingCartIcon className="mr-2 h-5 w-5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
} 