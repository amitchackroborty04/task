'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  avatar: string;
  productImage: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Good Quality',
    rating: 5.0,
    review: 'I highly recommend shopping from kicks',
    avatar: '/profile.jpg',
    productImage: '/boot.png',
  },
  {
    id: 2,
    name: 'Good Quality',
    rating: 5.0,
    review: 'I highly recommend shopping from kicks',
   avatar: '/profile.jpg',
    productImage: '/boot.png',
  },
  {
    id: 3,
    name: 'Good Quality',
    rating: 5.0,
    review: 'I highly recommend shopping from kicks',
 avatar: '/profile.jpg',
    productImage: '/boot.png',
  },
];

export function Review() {
  return (
    <section className="w-full bg-stone-100 py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            REVIEWS
          </h2>
          <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded">
            SEE ALL
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Review Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                      {review.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {review.review}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-base md:text-lg font-bold text-black ml-1">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-64 md:h-72 bg-gray-200">
                <Image
                  src={review.productImage}
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
