import React from 'react';
import { ShieldCheck, Truck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/20">
            🔥 100% Authentic Products
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-4 leading-tight">
            Elevate Your <span className="text-emerald-500">Vaping</span> Experience.
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Temukan koleksi device pod terbaik, liquid saltnic & freebase pilihan, serta aksesoris lengkap dengan jaminan keaslian 100%.
          </p>
          
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-800 pt-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-xs text-zinc-300 font-medium">100% Original</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-xs text-zinc-300 font-medium">Pengiriman Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-xs text-zinc-300 font-medium">Ready Stock</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-2xl max-w-sm w-full text-center">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60" 
              alt="Featured Vape" 
              className="rounded-2xl object-cover h-64 w-full mb-4 border border-zinc-800"
            />
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Hot Item</span>
            <h3 className="text-lg font-bold mt-1">Lost Vape Centaurus E40</h3>
            <p className="text-emerald-400 font-extrabold mt-2">Rp 450.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}