'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// We only keep the Envelope icon now
import { FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [role, setRole] = useState<'customer' | 'admin'>('customer');
  const [email, setEmail] = useState(''); 
  const router = useRouter();
  
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      router.push('/admin/dashboard');
    } else {
      // Logic for Customer Email/Password Login
      // Uses the name from the email input
      const name = email.split('@')[0] || "Valued Customer";
      login(name, email, 'customer');
      
      alert(`Welcome, ${name}! Redirecting to Menu...`);
      router.push('/#menu'); 
    }
  };
  // NOTE: The Social Login function is now fully removed.

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-50 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-2 border-coffee-200">
        <div className="text-center mb-6">
          <Link href="/" className="text-4xl font-black text-black block mb-2 tracking-tight">Lokal Cafe.</Link>
          <h2 className="text-xl font-black text-black uppercase tracking-wide">Welcome Back</h2>
        </div>

        {/* Role Toggles (Customer vs Admin) */}
        <div className="flex bg-coffee-100 p-1.5 rounded-xl mb-8 border-2 border-coffee-200">
          <button
            onClick={() => setRole('customer')}
            className={`flex-1 py-3 text-sm font-extrabold rounded-lg transition-all ${
              role === 'customer' ? 'bg-black text-white shadow-lg' : 'text-black hover:bg-white/50'
            }`}
          >
            CUSTOMER
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex-1 py-3 text-sm font-extrabold rounded-lg transition-all ${
              role === 'admin' ? 'bg-black text-white shadow-lg' : 'text-black hover:bg-white/50'
            }`}
          >
            ADMIN / STAFF
          </button>
        </div>

        {/* Email Form (Now the only option) */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-black mb-1 uppercase tracking-wide">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'admin' ? "staff@lokalcafe.com" : "you@example.com"} 
                className="w-full pl-10 pr-4 py-3 border-2 border-black/10 rounded-xl focus:outline-none focus:border-black font-bold placeholder-gray-400 text-black" 
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-extrabold text-black mb-1 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-3 border-2 border-black/10 rounded-xl focus:outline-none focus:border-black font-bold placeholder-gray-400 text-black" 
            />
          </div>
          <button type="submit" className="w-full bg-coffee-500 text-black py-4 rounded-xl font-black text-lg hover:bg-black hover:text-white transition-all shadow-lg uppercase tracking-wider">
            {role === 'admin' ? 'Access Dashboard' : 'Sign In'}
          </button>
        </form>
        
        <p className="text-center mt-6 text-sm font-bold text-gray-500">
          <Link href="/" className="hover:text-black transition-colors underline decoration-2 underline-offset-4">
            ← Back to Homepage
          </Link>
        </p>
      </div>
    </div>
  );
}