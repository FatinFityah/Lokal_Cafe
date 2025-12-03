'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [role, setRole] = useState<'customer' | 'admin'>('customer');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a simulation for now
    if (role === 'admin') {
      alert("Welcome Staff! Accessing Dashboard...");
      // We will build the dashboard later
    } else {
      alert("Welcome! Redirecting to Menu...");
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-coffee-100">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-coffee-900 block mb-2">Lokal Cafe.</Link>
          <h2 className="text-xl text-gray-500">Welcome Back</h2>
        </div>

        {/* Role Toggles */}
        <div className="flex bg-coffee-100 p-1 rounded-lg mb-6">
          <button
            onClick={() => setRole('customer')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${role === 'customer' ? 'bg-white shadow text-coffee-900' : 'text-coffee-800 hover:text-coffee-900'}`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${role === 'admin' ? 'bg-white shadow text-coffee-900' : 'text-coffee-800 hover:text-coffee-900'}`}
          >
            Admin / Staff
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-coffee-900 mb-1">Email</label>
            <input 
              type="email" 
              placeholder={role === 'admin' ? "staff@lokalcafe.com" : "you@example.com"} 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 bg-gray-50" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-coffee-900 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500 bg-gray-50" 
            />
          </div>
          <button type="submit" className="w-full bg-coffee-900 text-white py-3 rounded-lg font-bold hover:bg-coffee-800 transition shadow-lg shadow-coffee-900/20">
            {role === 'admin' ? 'Access Staff Dashboard' : 'Sign In'}
          </button>
        </form>
        
        <p className="text-center mt-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-coffee-500">← Back to Homepage</Link>
        </p>
      </div>
    </div>
  );
}