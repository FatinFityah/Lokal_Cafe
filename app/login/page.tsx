'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGoogle, FaFacebookF, FaEnvelope } from 'react-icons/fa';
// IMPORT THE NEW HOOK (Notice the ../ because we are inside a folder)
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [role, setRole] = useState<'customer' | 'admin'>('customer');
  const [email, setEmail] = useState(''); // Track email input
  const router = useRouter();
  
  // USE THE NEW "BRAIN"
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') {
      router.push('/admin/dashboard');
    } else {
      // 1. Log in using the Context (This updates the Navbar instantly!)
      // We use the email as the name for now, or "Valued Customer"
      const name = email.split('@')[0] || "Customer";
      login(name, email, 'customer');
      
      alert("Login Successful! Redirecting...");
      router.push('/#menu'); 
    }
  };

  const handleSocialLogin = (provider: string) => {
    // Simulate social login using Context
    login("Fatin Fityah", "fatin@example.com", 'customer');
    alert(`Logged in with ${provider}!`);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-coffee-50 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-2 border-coffee-200">
        <div className="text-center mb-6">
          <Link href="/" className="text-4xl font-black text-black block mb-2 tracking-tight">Lokal Cafe.</Link>
          {/* FIXED COLOR: Made "Welcome Back" solid BLACK */}
          <h2 className="text-xl font-black text-black uppercase tracking-wide">Welcome Back</h2>
        </div>

        {/* Role Toggles */}
        <div className="flex bg-coffee-100 p-1.5 rounded-xl mb-6 border-2 border-coffee-200">
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

        {/* Social Buttons */}
        {role === 'customer' && (
          <div className="space-y-3 mb-6">
            <button 
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-xl font-bold text-gray-800 hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-red-500" /> Continue with Google
            </button>
            <button 
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-xl font-bold text-gray-800 hover:bg-gray-50 transition"
            >
              <FaFacebookF className="text-blue-600" /> Continue with Facebook
            </button>
            
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm font-bold">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-black mb-1 uppercase tracking-wide">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
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