'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock Data
const initialOrders = [
  { id: '101', table: 'Table 4', items: ['Nasi Lemak Kukus Biasa', 'Teh O Ais'], status: 'Pending', total: 'RM 8.50' },
  { id: '102', table: 'Table 2', items: ['Chicken Chop', 'Apple Juice'], status: 'Cooking', total: 'RM 22.00' },
  { id: '103', table: 'Takeaway', items: ['2x Banana Frappe'], status: 'Ready', total: 'RM 26.00' },
];

export default function AdminDashboard() {
  const [orders, setOrders] = useState(initialOrders);

  const completeOrder = (id: string) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Helper to get color based on status
  const getStatusColor = (status: string) => {
    if (status === 'Pending') return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (status === 'Cooking') return 'bg-blue-100 text-blue-800 border-blue-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Admin Navbar - Kept dark for contrast, but cleaner */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">L</div>
          <h1 className="text-xl font-black text-black tracking-tight">LOKAL <span className="text-coffee-500">ADMIN</span></h1>
        </div>
        <Link href="/" className="text-sm font-bold text-gray-500 hover:text-black transition">
          Log Out
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        {/* Header Stats */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black text-black">Kitchen Display</h2>
            <p className="text-gray-500 font-medium mt-1">Manage incoming orders</p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Active</span>
                <span className="text-xl font-black text-black">{orders.length} Orders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${getStatusColor(order.status)} uppercase tracking-wide`}>
                  {order.status}
                </span>
                <span className="text-lg font-black text-black bg-gray-100 px-3 py-1 rounded-lg">
                  {order.table}
                </span>
              </div>
              
              {/* Order Items */}
              <div className="mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">Order Details</p>
                <ul className="space-y-3">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-800 font-bold text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Area */}
              <div className="flex justify-between items-center pt-5 border-t border-gray-100">
                <div>
                  <span className="block text-xs font-bold text-gray-400">Total</span>
                  <span className="text-xl font-black text-black">{order.total}</span>
                </div>
                <button 
                  onClick={() => completeOrder(order.id)}
                  className="bg-black text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-coffee-500 transition shadow-lg hover:shadow-orange-500/20"
                >
                  Done
                </button>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {orders.length === 0 && (
            <div className="col-span-full py-24 text-center bg-white rounded-3xl border border-dashed border-gray-300">
              <p className="text-2xl font-black text-gray-300 mb-2">ALL CLEAR</p>
              <p className="text-gray-400 font-medium">No active orders in the kitchen.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}