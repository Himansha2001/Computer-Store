import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const categories = {
  CPU: [
    {
      id: 'cpu-1',
      name: 'Intel Core i9-13900K',
      price: 599.99,
      image: '/images/parts/cpu/13900k.jpg',
      specs: [
        '24 Cores (8P + 16E)',
        '5.8 GHz Max Turbo',
        'DDR5 Support',
        'PCIe 5.0'
      ]
    },
    {
      id: 'cpu-2',
      name: 'AMD Ryzen 9 7950X',
      price: 699.99,
      image: '/images/parts/cpu/7950x.jpg',
      specs: [
        '16 Cores / 32 Threads',
        '5.7 GHz Max Boost',
        'AM5 Socket',
        '170W TDP'
      ]
    },
  ],
  GPU: [
    {
      id: 'gpu-1',
      name: 'NVIDIA RTX 4090',
      price: 1599.99,
      image: '/images/parts/gpu/4090.jpg',
      specs: [
        '24GB GDDR6X',
        'Ada Lovelace Architecture',
        'DLSS 3.0',
        'Ray Tracing'
      ]
    },
    {
      id: 'gpu-2',
      name: 'AMD RX 7900 XTX',
      price: 999.99,
      image: '/images/parts/gpu/7900xtx.jpg',
      specs: [
        '24GB GDDR6',
        'RDNA 3 Architecture',
        'FSR 3.0',
        'Ray Tracing'
      ]
    },
  ],
  RAM: [
    {
      id: 'ram-1',
      name: 'Corsair Dominator 32GB DDR5',
      price: 199.99,
      image: '/images/parts/ram/dominator.jpg',
      specs: [
        '6000MHz',
        'CL30 Timing',
        'RGB Lighting',
        'Dual Channel Kit'
      ]
    },
    {
      id: 'ram-2',
      name: 'G.Skill Trident Z5 64GB DDR5',
      price: 349.99,
      image: '/images/parts/ram/trident.jpg',
      specs: [
        '7200MHz',
        'CL34 Timing',
        'RGB Lighting',
        'Dual Channel Kit'
      ]
    },
  ],
  Storage: [
    {
      id: 'storage-1',
      name: 'Samsung 990 PRO 2TB',
      price: 179.99,
      image: '/images/parts/storage/990pro.jpg',
      specs: [
        '7,450 MB/s Read',
        '6,900 MB/s Write',
        'PCIe 4.0',
        'NVMe 2.0'
      ]
    },
    {
      id: 'storage-2',
      name: 'WD Black SN850X 4TB',
      price: 329.99,
      image: '/images/parts/storage/sn850x.jpg',
      specs: [
        '7,300 MB/s Read',
        '6,600 MB/s Write',
        'PCIe 4.0',
        'Gaming Mode'
      ]
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Parts() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(categories)[0]);

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      specs: item.specs.join(', ')
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Computer Parts</h2>
          <p className="mt-4 text-gray-500">
            Browse our selection of high-performance computer components
          </p>

          <Tab.Group as="div" className="mt-12" onChange={(index) => setSelectedCategory(Object.keys(categories)[index])}>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
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
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="mt-8">
              {Object.values(categories).map((items, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {items.map((item) => (
                      <div key={item.id} className="group relative">
                        <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover object-center"
                          />
                          <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                            <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                              View Product
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between space-x-8">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              <a href="#">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {item.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.specs[0]}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">${item.price}</p>
                        </div>
                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={() => handleAddToCart(item)}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            <ShoppingCartIcon className="mr-2 h-5 w-5" />
                            Add to Cart
                          </button>
                        </div>
                        <div className="mt-4">
                          <h4 className="sr-only">Specifications</h4>
                          <ul className="space-y-2">
                            {item.specs.map((spec) => (
                              <li
                                key={spec}
                                className="flex items-center text-sm text-gray-500"
                              >
                                <svg
                                  className="mr-2 h-4 w-4 text-green-500"
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
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
} 