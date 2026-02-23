'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
}

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ProductCard({
  product,
  isSelected,
  onSelect,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <div
        className={`
          relative rounded-2xl overflow-hidden
          transition-all duration-300 transform
          ${isHovered ? 'lg:scale-105' : ''}
          ${isSelected ? 'ring-2 ring-primary' : ''}
        `}
      >
        {/* Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            New
          </div>
        )}

        {/* Image */}
        <div className="relative w-full aspect-square bg-white rounded-[16px] sm:rounded-[24px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-full object-cover
              p-1
              transition-transform duration-300
              group-hover:lg:scale-110
              rounded-[16px] sm:rounded-[24px]
            "
            onError={(e) => {
              e.currentTarget.src = '/fallback-product.png';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 lg:p-6">
          <h3
            className="
              font-semibold text-[#232321]
              text-xs sm:text-base lg:text-2xl
              mb-3 sm:mb-4
              line-clamp-2
              min-h-[32px] sm:min-h-[48px] lg:h-14
            "
          >
            {product.name}
          </h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className="
              w-full bg-[#232321] text-white
              h-[40px] sm:h-[48px]
              px-3 sm:px-4
              rounded-[8px]
              font-semibold
              text-xs sm:text-sm
              transition-all duration-200
              hover:opacity-90 active:scale-95
              flex items-center justify-center gap-2
            "
          >
            VIEW PRODUCT –
            <span className="text-[#FFA52F] font-bold">
              ${product.price}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}