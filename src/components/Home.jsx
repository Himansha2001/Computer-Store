import { Link } from 'react-router-dom';
import { ArrowRightIcon, ComputerDesktopIcon, CpuChipIcon, WrenchScrewdriverIcon, SparklesIcon, ShieldCheckIcon, TruckIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

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

  const features = [
    {
      name: 'Expert Support',
      description: 'Our team of experts is here to help you build the perfect PC',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Quality Parts',
      description: 'We only use high-quality components from trusted manufacturers',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Fast Shipping',
      description: 'Quick delivery and secure packaging for all orders',
      icon: TruckIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl opacity-0 translate-y-4 animate-fade-in-up">
                  <span className="block">Build Your Dream</span>
                  <span className="block text-primary-600">Gaming PC</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 opacity-0 translate-y-4 animate-fade-in-up animation-delay-200">
                  Choose from our selection of prebuilt PCs, components, or create your custom build. We offer the best gaming and workstation solutions.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start opacity-0 translate-y-4 animate-fade-in-up animation-delay-400">
                  <div className="rounded-md shadow">
                    <Link
                      to="/prebuilt"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transform hover:scale-105 transition-all duration-300"
                    >
                      Browse Prebuilt PCs
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/custom-build"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 transform hover:scale-105 transition-all duration-300"
                    >
                      Custom Build
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
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

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center opacity-0 translate-y-4 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide the best gaming and workstation solutions
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 translate-y-4 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
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