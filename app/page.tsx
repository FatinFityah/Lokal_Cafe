'use client';

import { useState } from 'react';
import { menuItems, Category, MenuItem } from '@/lib/menuData'; // Corrected MenuItem import path
import Link from 'next/link';
import Image from 'next/image';
import { FaUserCircle, FaPlus, FaMinus, FaShoppingCart, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { useAuth } from './context/AuthContext';
import { useCart } from './context/CartContext'; // Ensure this is imported correctly

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const { user, logout } = useAuth();
  const { totalItems, addItem } = useCart(); // Use Cart

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-coffee-50">
      {/* Navbar (Kept the same) */}
      <nav className="flex justify-between items-center p-6 px-8 bg-white sticky top-0 z-50 shadow-md border-b-2 border-coffee-200">
        <h1 className="text-3xl font-black text-black tracking-tight">Lokal Cafe.</h1>
        <div className="space-x-8 hidden md:flex text-black font-bold text-base uppercase tracking-wide">
          <a href="#menu" className="hover:text-coffee-500 transition-colors">Menu</a>
          <a href="#about" className="hover:text-coffee-500 transition-colors">About</a>
          <a href="#location" className="hover:text-coffee-500 transition-colors">Location</a>
        </div>
        
        {/* Navbar Right Side - CART ICON */}
        <div className="flex gap-4 items-center">
          
          <div className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer">
            <FaShoppingCart className="text-xl text-black" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                {totalItems}
              </span>
            )}
          </div>
          
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:block font-black text-black text-sm">Hi, {user.name}</span>
              <button onClick={logout} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-full hover:bg-red-100 hover:text-red-600 font-bold transition-all">
                <FaUserCircle className="text-xl" /><span className="text-xs uppercase">Logout</span>
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
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-70 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-10 space-y-6 max-w-3xl">
          <span className="text-black tracking-[0.2em] uppercase text-lg font-extrabold bg-white px-4 py-1 rounded">Batu Pahat, Johor</span>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-tight drop-shadow-xl">
            TASTE THE <span className="text-coffee-500">LOKAL</span> VIBE.
          </h2>
          <p className="text-white text-2xl font-bold drop-shadow-md max-w-xl mx-auto">
            Serving the best Nasi Lemak Kukus, Premium Frappes, and Western delights in town.
          </p>
          <a href="#menu" className="inline-block mt-8 px-10 py-4 bg-coffee-500 text-black rounded-full font-black text-lg hover:bg-white hover:text-black transition shadow-xl border-2 border-transparent hover:border-black">
            ORDER NOW
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-black text-white"> 
        <div className="text-center mb-12">
          <h3 className="text-5xl font-black text-white mb-4 uppercase">OUR MENU</h3>
          <p className="text-coffee-500 font-extrabold text-xl">Freshly prepared for you</p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', 'Local', 'Western', 'Drinks', 'Dessert'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-8 py-3 rounded-full border-2 font-black text-lg transition-all ${
                activeCategory === cat 
                ? 'bg-coffee-500 text-black border-coffee-500 shadow-lg'
                : 'bg-white border-black text-black hover:bg-gray-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            // Pass the addItem function to the card
            <MenuCard key={item.id} item={item} addItem={addItem} totalItems={totalItems} /> 
          ))}
        </div>
      </section>

      {/* About/Location/Footer (Kept the same) */}
      <section id="about" className="py-20 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black text-black mb-8 uppercase">About Us</h3>
          <div className="space-y-6 text-xl font-bold text-black leading-relaxed">
            <p>Welcome to <span className="text-coffee-500 font-black">Lokal Cafe</span>, the heartbeat of Batu Pahat's food scene.</p>
            <p>We started with a simple mission: to elevate local favorites like <span className="underline decoration-coffee-500 decoration-4">Nasi Lemak Kukus</span> with a premium touch.</p>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black mb-8 uppercase">Find Us</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border-2 border-white/20">
              <FaMapMarkerAlt className="text-5xl text-coffee-500 mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-2">Lokal Cafe HQ</h4>
              <p className="text-white font-bold text-lg">Batu Pahat, Johor.<br/>(Near UTHM Parit Raja)</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border-2 border-white/20">
              <FaInstagram className="text-5xl text-pink-500 mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-4">Follow Our Updates</h4>
              <a href="https://www.instagram.com/l.o.k.a.l_?igsh=MWFzdXN5czJoZXdlNA==" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white text-black font-black rounded-full hover:bg-coffee-500 hover:text-white transition shadow-lg">
                @l.o.k.a.l_
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-white text-black py-8 text-center text-sm font-black border-t-2 border-black">
        <p>© 2025 Lokal Cafe. All rights reserved.</p>
      </footer>
    </main>
  );
}

// ------------------------------------------------------------------
// MENU CARD COMPONENT (Updated totalItems prop)
// ------------------------------------------------------------------
interface MenuCardProps {
    item: MenuItem;
    addItem: (item: MenuItem, quantity: number) => void;
    totalItems: number; // Include totalItems
}

function MenuCard({ item, addItem, totalItems }: MenuCardProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addItem(item, quantity);
    alert(`Added ${quantity} x ${item.name} to cart! Total items: ${totalItems + quantity}`);
    setQuantity(1); // Reset counter after adding
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-2 border-gray-200 hover:border-black transition group flex flex-col h-full">
      
      {/* Image */}
      <div className="relative h-56 w-full mb-5 rounded-2xl overflow-hidden shadow-inner bg-gray-100 border-2 border-gray-100">
        <Image 
          src={item.image} 
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Info - High Contrast Text */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-2xl font-black text-black leading-tight tracking-tight">{item.name}</h4>
        <span className="text-black font-black text-2xl whitespace-nowrap ml-2">{item.price}</span>
      </div>
      
      {/* Description */}
      <p className="text-black font-bold text-sm mb-6 leading-relaxed flex-grow opacity-80">
        {item.description}
      </p>

      {/* Controls */}
      <div className="mt-auto">
        <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2 mb-4 border-2 border-gray-300">
          <button 
            onClick={decrease}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-black border border-black hover:bg-black hover:text-white transition"
          >
            <FaMinus />
          </button>
          
          <span className="text-2xl font-black text-black w-12 text-center">
            {quantity}
          </span>

          <button 
            onClick={increase}
            className="w-10 h-10 flex items-center justify-center bg-black rounded-lg shadow-sm text-white border border-black hover:bg-coffee-500 transition"
          >
            <FaPlus />
          </button>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full py-4 bg-coffee-500 text-black border-2 border-black rounded-xl font-black text-lg hover:bg-black hover:text-white transition shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] flex items-center justify-center gap-3"
        >
          <FaShoppingCart />
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

