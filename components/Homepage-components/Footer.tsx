'use client';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary px-12">
      {/* Newsletter Section */}
      <section className="flex-1 bg-[#4A69E2] px-6 md:px-12 py-16 md:py-24 rounded-t-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                JOIN OUR KICKSPLUS
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                CLUB & GET 15% OFF
              </h2>
            </div>
            <p className="text-white/90 text-sm md:text-base">
              Sign up for free! Join the community.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-6">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary  font-bold rounded-lg hover:bg-secondary/90 transition-colors whitespace-nowrap"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="text-center md:text-right">
              <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
                KICKS
              </div>
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent inline-block md:-ml-8 -mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-[#232321] text-white px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-accent">About us</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all over with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-accent">Categories</h3>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li><a href="#" className="hover:text-accent transition-colors">Runners</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sneakers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Basketball</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Outdoor</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Golf</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Hiking</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-accent">Company</h3>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blogs</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-accent">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-accent transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-accent transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                {/* <a href="#" className="text-white/80 hover:text-accent transition-colors" aria-label="TikTok">
                  < size={24} />
                </a> */}
              </div>
            </div>
          </div>

          {/* Large KICKS Logo */}
          <div className="mb-8">
            <div className="text-7xl mx-auto text-center md:text-8xl lg:text-9xl font-black text-white/20 leading-none">
              KICKS
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 text-center text-white/60 text-xs md:text-sm">
            © All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
}
