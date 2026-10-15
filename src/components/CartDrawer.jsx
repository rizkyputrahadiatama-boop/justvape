import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const formatIDR = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Checkout berhasil! Terima kasih telah berbelanja di Vapestore.');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm" onClick={onClose}></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-900 border-l border-zinc-800 flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h2 className="font-bold text-lg">Keranjang Belanja</h2>
            </div>
            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
                <p className="text-zinc-400 text-sm">Keranjang kamu masih kosong.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-zinc-950 p-4 rounded-2xl border border-zinc-800 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-zinc-800" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-zinc-100 truncate">{item.name}</h4>
                    <p className="text-emerald-400 text-xs font-semibold mt-0.5">{formatIDR(item.price)}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-zinc-800 rounded-lg bg-zinc-900">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white text-xs font-bold"
                        >-</button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white text-xs font-bold"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-zinc-950">
              <div className="flex justify-between mb-4">
                <span className="text-zinc-400 text-sm">Total Harga</span>
                <span className="text-emerald-400 font-extrabold text-lg">{formatIDR(totalPrice)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 text-sm"
              >
                <span>Checkout Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}