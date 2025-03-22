import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ cartItems = [] }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 15; // Flat rate shipping
  const total = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle order submission
      console.log('Order submitted:', { formData, cartItems, total });
      navigate('/order-confirmation');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Progress Steps */}
          <nav aria-label="Progress" className="mb-8">
            <ol role="list" className="flex items-center">
              {[
                { id: 1, name: 'Contact' },
                { id: 2, name: 'Shipping' },
                { id: 3, name: 'Payment' },
              ].map((stepItem) => (
                <li
                  key={stepItem.name}
                  className={`relative ${
                    stepItem.id !== 3 ? 'pr-8 sm:pr-20' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        step >= stepItem.id
                          ? 'bg-primary-600'
                          : 'bg-gray-300'
                      }`}
                    >
                      <span className="text-white">{stepItem.id}</span>
                    </div>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {stepItem.name}
                    </span>
                  </div>
                  {stepItem.id !== 3 && (
                    <div className="absolute top-4 right-0 h-0.5 w-full bg-gray-300">
                      <div
                        className="h-0.5 bg-primary-600 transition-all"
                        style={{
                          width: step > stepItem.id ? '100%' : '0%',
                        }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Payment Information</h2>
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      id="expiryDate"
                      placeholder="MM/YY"
                      required
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      id="cvv"
                      required
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Order Summary */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              <dl className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${shipping.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Tax</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ${tax.toFixed(2)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${total.toFixed(2)}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="ml-auto rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
              >
                {step === 3 ? 'Place Order' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 