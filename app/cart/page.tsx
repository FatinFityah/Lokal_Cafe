'use client';

import Link from 'next/link';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeItem } = useCart();

  // 1. Calculate Subtotal
  const subtotal = cart.reduce((sum, item) => {
    // Convert price string (RM X.XX) to number for calculation
    const price = parseFloat(item.price.replace('RM ', ''));
    return sum + price * item.quantity;
  }, 0);

  // Simple Tax/Service Charge simulation
  const serviceChargeRate = 0.06;
  const serviceCharge = subtotal * serviceChargeRate;
  const grandTotal = subtotal + serviceCharge;

  return (
    <div className="min-h-screen bg-coffee-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-2 border-coffee-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-200">
          <h1 className="text-4xl font-black text-black uppercase flex items-center gap-3">
            <FaShoppingCart className="text-coffee-500" /> Your Order Receipt
          </h1>
          <Link href="/#menu" className="text-sm font-bold text-black hover:text-coffee-500 flex items-center">
            <FaArrowLeft className="mr-2" /> Continue Shopping
          </Link>
        </div>

        {/* Cart Items List */}
        {cart.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-2xl font-black mb-2">Your cart is empty!</p>
            <p className="font-medium">Time to pick up some Nasi Lemak and Frappes.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
                
                {/* Item Details */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-black leading-tight">{item.name}</p>
                    <p className="text-sm font-bold text-gray-500">
                      Qty: {item.quantity} x {item.price}
                    </p>
                  </div>
                </div>

                {/* Price and Remove Button */}
                <div className="flex items-center gap-4">
                  <p className="text-xl font-black text-coffee-800 whitespace-nowrap">
                    RM {(parseFloat(item.price.replace('RM ', '')) * item.quantity).toFixed(2)}
                  </p>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Receipt Totals */}
        {cart.length > 0 && (
          <div className="mt-8 pt-6 border-t-2 border-black/10">
            <div className="space-y-2 text-black font-bold">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>RM {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Charge (6%):</span>
                <span>RM {serviceCharge.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between text-2xl font-black mt-4 pt-4 border-t border-black/10">
              <span>Grand Total:</span>
              <span className="text-coffee-500">RM {grandTotal.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => alert(`Processing RM ${grandTotal.toFixed(2)} checkout. Thank you!`)}
              className="w-full mt-6 py-4 bg-black text-white font-black text-xl rounded-xl hover:bg-coffee-500 hover:text-black transition shadow-lg active:scale-95"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}