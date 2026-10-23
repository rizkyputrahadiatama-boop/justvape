import React from 'react';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-1.5 rounded-lg text-zinc-950">
            <Flame className="w-4 h-4 fill-current" />
          </div>
          <span className="font-bold text-zinc-300">Vapestore Indonesia</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Vapestore Frontend. All rights reserved.</p>
      </div>
    </footer>
  );
}