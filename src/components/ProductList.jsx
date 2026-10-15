import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, searchTerm, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Device', 'Liquid', 'Accessories'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-black tracking-tight">Katalog Produk</h2>
          <p className="text-sm text-zinc-400">Pilih kebutuhan vaping terbaikmu hari ini.</p>
        </div>

        {/* Kategori Filter */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-zinc-950'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">Produk tidak ditemukan.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}