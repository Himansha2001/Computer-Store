import { Link } from 'react-router-dom';
import { ArrowRightIcon, ComputerDesktopIcon, CpuChipIcon, WrenchScrewdriverIcon, SparklesIcon, ShieldCheckIcon, TruckIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const featuredCategories = [
  {
    name: 'Custom Gaming PCs',
    description: 'High-performance custom builds for ultimate gaming experience',
    imageSrc: '/images/gaming-pc.jpg',
    imageAlt: 'Gaming PC setup with RGB lighting',
    href: '/custom-pc',
  },
  {
    name: 'PC Components',
    description: 'Premium parts for your custom build',
    imageSrc: '/images/parts/gpu/4090.jpg',
    imageAlt: 'High-end graphics card',
    href: '/parts',
  },
];

const features = [
  {
    name: 'Expert Build Service',
    description: 'Professional assembly by certified technicians',
  },
  {
    name: 'Quality Components',
    description: 'Only the best parts from trusted manufacturers',
  },
  {
    name: 'Extended Warranty',
    description: '3-year warranty on all custom builds',
  },
  {
    name: '24/7 Support',
    description: 'Technical support whenever you need it',
  },
];

export default function Home() {
  const categories = [
    {
      name: 'Prebuilt PCs',
      description: 'Ready-to-use gaming and workstation PCs',
      icon: ComputerDesktopIcon,
      link: '/prebuilt',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Components',
      description: 'High-quality PC parts and accessories',
      icon: CpuChipIcon,
      link: '/components',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Custom Build',
      description: 'Design your perfect PC',
      icon: WrenchScrewdriverIcon,
      link: '/custom-build',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/images/hero-bg.jpg"
            alt="Gaming setup"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Your Dream PC
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Custom-built computers tailored to your needs. Whether you're a gamer,
            content creator, or professional, we have the perfect solution for you.
          </p>
          <div className="mt-10">
            <Link
              to="/custom-pc"
              className="inline-block rounded-md border border-transparent bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-blue-700"
            >
              Shop Custom PCs
            </Link>
          </div>
        </div>
      </div>

      {/* Featured categories */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {featuredCategories.map((category) => (
              <div key={category.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={category.href}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide the best custom PC building experience with premium components and expert service.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center opacity-0 translate-y-4 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find the perfect PC solution for your needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`opacity-0 translate-y-4 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Link
                  to={category.link}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <category.icon className="h-8 w-8 text-primary-600" />
                      <h3 className="ml-3 text-xl font-semibold text-gray-900">
                        {category.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-500">{category.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center opacity-0 translate-y-4 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Subscribe to our newsletter for the latest deals and updates
            </p>
          </div>

          <form className="mt-8 max-w-md mx-auto opacity-0 translate-y-4 animate-fade-in-up animation-delay-200">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-transparent focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transform hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 