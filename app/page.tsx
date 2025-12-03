'use client';

import { useState } from 'react';
import { menuItems, Category } from '@/lib/menuData';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-coffee-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 px-8 bg-white sticky top-0 z-50 shadow-md border-b-2 border-coffee-200">
        <h1 className="text-3xl font-black text-black tracking-tight">Lokal Cafe.</h1>
        <div className="space-x-8 hidden md:flex text-black font-bold text-base uppercase tracking-wide">
          <a href="#menu" className="hover:text-coffee-500 transition-colors">Menu</a>
          <a href="#about" className="hover:text-coffee-500 transition-colors">About</a>
          <a href="#location" className="hover:text-coffee-500 transition-colors">Location</a>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-3 text-sm bg-black text-white rounded-full hover:bg-coffee-900 font-extrabold transition-all shadow-lg">
            SIGN IN
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 bg-coffee-900 overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="text-white tracking-[0.2em] uppercase text-lg font-extrabold bg-black/30 px-4 py-1 rounded">Batu Pahat, Johor</span>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-tight drop-shadow-lg">
            TASTE THE <span className="text-coffee-500">LOKAL</span> VIBE.
          </h2>
          <p className="text-white text-xl font-bold drop-shadow-md max-w-xl mx-auto">
            Serving the best Nasi Lemak Kukus, Premium Frappes, and Western delights in town.
          </p>
          <a href="#menu" className="inline-block mt-8 px-10 py-4 bg-coffee-500 text-black rounded-full font-black text-lg hover:bg-white hover:text-black transition shadow-xl">
            ORDER NOW
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-2 uppercase">Our Menu</h3>
          <p className="text-coffee-900 font-bold text-lg">Freshly prepared for you</p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', 'Local', 'Western', 'Drinks', 'Dessert'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-8 py-3 rounded-full border-2 font-bold text-lg transition-all ${
                activeCategory === cat 
                ? 'bg-black text-white border-black' 
                : 'bg-white border-coffee-200 text-black hover:border-coffee-500 hover:bg-coffee-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-3xl shadow-lg border-2 border-coffee-100 hover:border-coffee-500 transition group">
              
              {/* IMAGE CONTAINER */}
              <div className="relative h-56 w-full mb-5 rounded-2xl overflow-hidden shadow-inner bg-gray-100 border border-gray-100">
                {/* When you have the photos, they will appear here.
                   Until then, it might show a 'broken image' icon or just blank space.
                */}
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-start mb-3">
                <h4 className="text-2xl font-black text-black leading-tight">{item.name}</h4>
                <span className="text-coffee-800 font-black text-xl whitespace-nowrap ml-2">{item.price}</span>
              </div>
              <p className="text-coffee-900 font-semibold text-base mb-6 leading-relaxed">
                {item.description}
              </p>
              <button className="w-full py-3 border-2 border-black rounded-xl text-black font-extrabold text-lg hover:bg-black hover:text-white transition shadow-sm">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}