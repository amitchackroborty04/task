'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface ShoeCard {
  id: number;
  category: string;
  image: string;
  alt: string;
}

const shoeCards: ShoeCard[] = [
  {
    id: 1,
    category: 'LIFESTYLE SHOES',
    image: '/boot.png',
    alt: 'Lifestyle shoes - white sneaker with black stripes',
  },
  {
    id: 2,
    category: 'BASKETBALL SHOES',
    image: '/boot.png',
    alt: 'Basketball shoes - white and burgundy sneaker',
  },
  {
    id: 3,
    category: 'RUNNING SHOES',
    image: '/boot.png',
    alt: 'Running shoes - performance athletic footwear',
  },
  {
    id: 4,
    category: 'CASUAL SHOES',
    image: '/boot.png',
    alt: 'Casual shoes - comfortable everyday footwear',
  },
];

export default function ShoeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? shoeCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === shoeCards.length - 1 ? 0 : prev + 1));
  };

  // Get visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 2;
    if (window.innerWidth >= 768) return 1;
    return 1;
  };

  const visibleCards = getVisibleCards();
  const displayedCards = [];

  for (let i = 0; i < visibleCards; i++) {
    displayedCards.push(shoeCards[(currentIndex + i) % shoeCards.length]);
  }

  return (
    <div className="w-full bg-primary text-primary-foreground py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            CATEGORIES
          </h2>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrevious}
              className="p-2 sm:p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
              aria-label="Next category"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 overflow-hidden"
        >
          {displayedCards.map((shoe) => (
            <div
              key={shoe.id}
              className="group bg-card  overflow-hidden shadow-lg"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-card to-card/80 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={shoe.image}
                    alt={shoe.alt}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex items-end justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground tracking-tight">
                  {shoe.category}
                </h3>

                {/* Arrow Icon Button */}
                <button
                  className="ml-4 p-2 sm:p-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors duration-200 flex-shrink-0"
                  aria-label={`View ${shoe.category}`}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8 lg:mt-12">
          {shoeCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-foreground w-8'
                  : 'bg-primary-foreground/40 w-2 hover:bg-primary-foreground/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
