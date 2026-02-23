'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Search, User, ShoppingCart, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-5 pb-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Menu Items */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#" className="flex items-center gap-1.5 text-black hover:text-black font-bold text-base transition-colors">
              New Drops
              <span>🔥</span>
            </Link>
            <button className="text-black hover:text-black font-semibold text-base transition-colors">
              Men
            </button>
            <button className="text-black hover:text-black font-semibold text-base transition-colors">
              Women
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-6 py-6">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-black hover:text-black font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>🔥</span>
                    New Drops
                  </Link>
                  <button className="text-black hover:text-black font-semibold w-full text-left">
                    Men
                  </button>
                  <button className="text-black hover:text-black font-semibold w-full text-left">
                    Women
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-4xl font-black text-black tracking-tight">KICKS</h1>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <Button variant="ghost" size="icon" className="text-black hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex text-black hover:bg-gray-100">
              <User className="w-5 h-5" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-black hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
