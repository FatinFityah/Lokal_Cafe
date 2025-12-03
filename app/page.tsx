'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [role, setRole] = useState<'customer' | 'admin'>('customer');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      // Redirect staff to the dashboard
      router.push('/admin/dashboard');
    } else {
      // Redirect customers to the menu
      alert("Welcome! Redirecting to Menu...");
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-50 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-2 border-coffee-200">
        <div className="text-center mb-8">
          <Link href="/" className="text-4xl font-black text-black block mb-2 tracking-tight">Lokal Cafe.</Link>
          {/* Changed "Welcome Back" to be purely BLACK and BOLD */}
          <h2 className="text-xl font-black text-black uppercase tracking-wide">Welcome Back</h2>
        </div>

        {/* Role Toggles */}
        <div className="flex bg-coffee-100 p-1.5 rounded-xl mb-8 border-2 border-coffee-200">
          <button
            onClick={() => setRole('customer')}
            className={`flex-1 py-3 text-sm font-extrabold rounded-lg transition-all ${
              role === 'customer' 
              ? 'bg-black text-white shadow-lg' 
              : 'text-black hover:bg-white/50' // INACTIVE IS NOW BLACK TEXT
            }`}
          >
            CUSTOMER
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex-1 py-3 text-sm font-extrabold rounded-lg transition-all ${
              role === 'admin' 
              ? 'bg-black text-white shadow-lg' 
              : 'text-black hover:bg-white/50' // INACTIVE IS NOW BLACK TEXT
            }`}
          >
            ADMIN / STAFF
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-extrabold text-black mb-2 uppercase tracking-wide">Email Address</label>
            <input 
              type="email" 
              placeholder={role === 'admin' ? "staff@lokalcafe.com" : "you@example.com"} 
              className="w-full px-5 py-3 border-2 border-black/10 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white text-black font-bold placeholder-gray-400" 
            />
          </div>
          <div>
            <label className="block text-sm font-extrabold text-black mb-2 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3 border-2 border-black/10 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white text-black font-bold placeholder-gray-400" 
            />
          </div>
          <button type="submit" className="w-full bg-coffee-500 text-black py-4 rounded-xl font-black text-lg hover:bg-black hover:text-white transition-all shadow-lg uppercase tracking-wider border-2 border-transparent hover:border-white">
            {role === 'admin' ? 'Access Dashboard' : 'Sign In'}
          </button>
        </form>
        
        <p className="text-center mt-8 text-sm font-bold text-gray-500">
          <Link href="/" className="hover:text-black transition-colors underline decoration-2 underline-offset-4">
            ← Back to Homepage
          </Link>
        </p>
      </div>
    </div>
  );
}