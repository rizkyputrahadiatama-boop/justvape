import React from 'react';
import { Plus, Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const formatIDR = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition group">
      <div>
        <div className="relative h-48 overflow-hidden bg-zinc-950">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-zinc-800">
            {product.category}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          <h3 className="font-bold text-base text-zinc-100 line-clamp-1">{product.name}</h3>
          <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{product.description}</p>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between mt-4">
        <div>
          <span className="text-xs text-zinc-500 block">Harga</span>
          <span className="text-emerald-400 font-extrabold text-sm sm:text-base">{formatIDR(product.price)}</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-2.5 rounded-xl font-bold transition flex items-center gap-1 text-xs"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Beli</span>
        </button>
      </div>
    </div>
  );
}