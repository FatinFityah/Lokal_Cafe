'use client';

import { useState, useEffect } from 'react';
import { menuItems, Category, MenuItem } from '@/lib/menuData'; // Added MenuItem type
import Link from 'next/link';
import Image from 'next/image';
import { FaUserCircle, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'; // Added Icons
import { useAuth } from './context/AuthContext';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const { user, logout } = useAuth();

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
        
        {/* Navbar Right Side */}
        <div className="flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:block font-bold text-black text-sm">
                Hi, {user.name}
              </span>
              <button 
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-full hover:bg-red-100 hover:text-red-600 font-bold transition-all"
              >
                <FaUserCircle className="text-xl" />
                <span className="text-xs uppercase">Logout</span>
              </button>
            </div>
          ) : (
            <Link href="/login" className="px-6 py-3 text-sm bg-black text-white rounded-full hover:bg-coffee-900 font-extrabold transition-all shadow-lg">
              SIGN IN
            </Link>
          )}
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

        {/* Menu Grid - NOW USES THE 'MenuCard' COMPONENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            // We use the special component below to handle the +/- logic
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

// ------------------------------------------------------------------
// NEW COMPONENT: HANDLES THE PLUS / MINUS BUTTONS FOR EACH CARD
// ------------------------------------------------------------------
function MenuCard({ item }: { item: MenuItem }) {
  // Each card remembers its own quantity (starts at 1)
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    // For now, we just alert the user. Later we can make a real cart!
    alert(`Added ${quantity} x ${item.name} to your cart!`);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-coffee-100 hover:border-coffee-500 transition group flex flex-col h-full">
      
      {/* Image */}
      <div className="relative h-56 w-full mb-5 rounded-2xl overflow-hidden shadow-inner bg-gray-100 border border-gray-100">
        <Image 
          src={item.image} 
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-2xl font-black text-black leading-tight">{item.name}</h4>
        <span className="text-coffee-800 font-black text-xl whitespace-nowrap ml-2">{item.price}</span>
      </div>
      <p className="text-coffee-900 font-semibold text-base mb-6 leading-relaxed flex-grow">
        {item.description}
      </p>

      {/* CONTROLS SECTION */}
      <div className="mt-auto">
        {/* Plus / Minus Buttons */}
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2 mb-4 border border-gray-200">
          <button 
            onClick={decrease}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-black hover:bg-red-100 hover:text-red-600 transition"
          >
            <FaMinus />
          </button>
          
          <span className="text-xl font-black text-black w-12 text-center">
            {quantity}
          </span>

          <button 
            onClick={increase}
            className="w-10 h-10 flex items-center justify-center bg-black rounded-lg shadow-sm text-white hover:bg-coffee-500 transition"
          >
            <FaPlus />
          </button>
        </div>

        {/* Add Button */}
        <button 
          onClick={handleAddToCart}
          className="w-full py-3 bg-coffee-500 text-black border-2 border-transparent rounded-xl font-extrabold text-lg hover:bg-black hover:text-white transition shadow-lg active:scale-95 flex items-center justify-center gap-3"
        >
          <FaShoppingCart />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}