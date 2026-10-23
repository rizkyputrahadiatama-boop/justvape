import React from 'react';
import { ShoppingBag, Flame, Search } from 'lucide-react';

export default function Navbar({cartCount, onOpenCart, searchTerm, setSearchTerm}) {
    return (
        <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="bg-emerald-500 p-2 rounded-xl text-zinc-950"></div>
                    <span className="text-xl font-black tracking-wider text-white">JUST<span className="text-emerald-500">VAPE</span></span>
                </div>
                <div className="hidden md:flex items-center flex-1 max-w-md relative">
                    <Search className="absolute left-3 w-5 h-5 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Cari liquid, device, atau aksesoris..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500 transition" />
                </div>
                <button 
                    onClick={onOpenCart}
                    className="relative flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-4 py-2.5 rounded-full transition text-sm font-medium">
                    <ShoppingBag className="w-5 h-5 text-emerald-400" />
                    <span className="hidden sm:inline">Keranjang</span>
                    {cartCount > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-zinc-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    )
}