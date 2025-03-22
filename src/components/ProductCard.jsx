import { useState } from 'react';
import { ShoppingCartIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [product.image, ...(product.gallery || [])];

  return (
    <div className="card group">
      {/* Image Gallery */}
      <div className="relative aspect-square mb-4">
        <img
          src={images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 right-2 flex gap-1">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  selectedImage === index ? 'bg-primary-500' : 'bg-white/50'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <button
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Add to build"
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Customize"
            >
              <Cog6ToothIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Specs */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">CPU:</span>
              <span className="ml-1 font-medium">{product.specs.cpu}</span>
            </div>
            <div>
              <span className="text-gray-500">GPU:</span>
              <span className="ml-1 font-medium">{product.specs.gpu}</span>
            </div>
            <div>
              <span className="text-gray-500">RAM:</span>
              <span className="ml-1 font-medium">{product.specs.ram}</span>
            </div>
            <div>
              <span className="text-gray-500">Storage:</span>
              <span className="ml-1 font-medium">{product.specs.storage}</span>
            </div>
          </div>

          {/* Compatibility Tags */}
          {product.compatibility && product.compatibility.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.compatibility.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 