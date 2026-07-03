"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  
  const results = query.length >= 2 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.sku.toLowerCase().includes(query.toLowerCase()) ||
        p.features.some(f => f.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-8 uppercase">
            Search Catalog
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <SearchIcon className="h-6 w-6 text-gold-500" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-16 pr-6 py-5 glass-card border border-black/10 rounded-2xl text-lg text-[#111111] font-medium focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-[#6B6B6B]/60"
              placeholder="Search by product name, SKU, or feature..."
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {query.length < 2 ? (
          <div className="text-center py-20 text-[#6B6B6B]">
            <p className="text-sm font-bold uppercase tracking-widest">Type at least 2 characters to start searching.</p>
            <div className="mt-12 flex justify-center gap-3 flex-wrap">
              <span className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.2em] block w-full mb-4">Popular Searches:</span>
              <button onClick={() => setQuery("DSP")} className="px-5 py-2.5 bg-black/5 border border-black/5 rounded-lg text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 hover:text-black hover:border-transparent transition-all">DSP</button>
              <button onClick={() => setQuery("HDMI")} className="px-5 py-2.5 bg-black/5 border border-black/5 rounded-lg text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 hover:text-black hover:border-transparent transition-all">HDMI ARC</button>
              <button onClick={() => setQuery("Bluetooth")} className="px-5 py-2.5 bg-black/5 border border-black/5 rounded-lg text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 hover:text-black hover:border-transparent transition-all">Bluetooth 5.4</button>
              <button onClick={() => setQuery("Remote")} className="px-5 py-2.5 bg-black/5 border border-black/5 rounded-lg text-xs font-bold uppercase tracking-widest text-[#111111] hover:bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 hover:text-black hover:border-transparent transition-all">Remote Kits</button>
            </div>
          </div>
        ) : results.length > 0 ? (
          <div>
            <h2 className="text-xl font-serif font-bold text-[#111111] tracking-widest mb-10 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
              Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-black/5 border border-black/5 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <SearchIcon className="h-8 w-8 text-[#6B6B6B]" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#111111] capitalize text-[#111111] mb-4 tracking-widest">No results found</h2>
            <p className="text-[#6B6B6B] mb-10 text-sm font-medium">We couldn't find any products matching "{query}".</p>
            <button onClick={() => setQuery("")} className="text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-[#111111] transition-colors">
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
