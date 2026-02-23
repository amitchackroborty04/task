'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../Cards/Prouduct-card';
import { Button } from '../ui/button';

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export default function NewDrops() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          'https://api.escuelajs.co/api/v1/products',
         
        );

        setProducts(response.data);
      } catch (err) {
        setError('Failed to load new drops. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = products.slice(0, 8);

  return (
    <main className="py-16 sm:py-20 lg:py-[90px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 lg:mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <h1
            className="
              uppercase font-bold text-[#232321]
              text-[28px] sm:text-[40px] md:text-[52px]
              lg:text-[74px] lg:w-[689px]
              leading-tight lg:!leading-[60px]
            "
          >
            Don’t miss out new drops
          </h1>

          <Button className="bg-[#4A69E2] text-base font-semibold px-5 h-[48px] rounded-[8px] hover:bg-[#4A69E2]/90 hover:scale-95 duration-300">
            Shop New Drops
          </Button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-center text-red-600 mb-8 text-base sm:text-lg">
            {error}
          </div>
        )}

        {/* Products */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4 sm:gap-6 lg:gap-5
          "
        >
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-gray-100 animate-pulse"
              >
                <div className="relative w-full aspect-square bg-gray-200 rounded-[24px]" />
                <div className="p-4 sm:p-5">
                  <div className="h-5 sm:h-6 bg-gray-300 rounded w-4/5 mb-3" />
                  <div className="h-10 sm:h-12 bg-gray-300 rounded" />
                </div>
              </div>
            ))
          ) : displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.images?.[0] || '/fallback-product.png',
                  isNew: true,
                }}
                isSelected={selectedProduct === product.id}
                onSelect={() => setSelectedProduct(product.id)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-12">
              No new drops available at the moment.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}