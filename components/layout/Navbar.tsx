"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CATEGORIES } from "@/lib/data";
import { useCart } from "@/lib/cartContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase italic text-[#111111]">
                Futech <span className="font-light text-[#111111]/60 uppercase">Audios</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111111]/70">
            <Link href="/" className="hover:text-gold-500 transition-colors text-[#111111]">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center hover:text-[#C6A96B] transition-colors py-2">
                Products <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 mt-0 w-64 rounded-xl bg-black/80 backdrop-blur-xl border border-black/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <Link href="/products" className="block px-4 py-3 text-xs tracking-widest text-[#ffffff]/70 hover:text-[#C6A96B] hover:bg-black/5 border-b border-black/5">
                      All Products
                    </Link>
                    {CATEGORIES.map(cat => (
                      <Link
                        key={cat}
                        href={`/products?category=${encodeURIComponent(cat)}`}
                        className="block px-4 py-3 text-[10px] tracking-widest text-[#ffffff]/60 hover:text-[#C6A96B] hover:bg-black/5"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/downloads" className="hover:text-[#C6A96B] transition-colors">Downloads</Link>
            <Link href="/support" className="hover:text-[#C6A96B] transition-colors">Support</Link>
            <Link href="/about" className="hover:text-[#C6A96B] transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-[#111111]">
            <Link href="/search" className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Search className="w-4 h-4" />
            </Link>
            <Link href="/cart" className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors relative">
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C6A96B] text-black text-[9px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center animate-bounce-once">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <Link href="/contact" className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest hover:bg-[#C6A96B] transition-colors">
              Enquiry
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="text-[#111111] relative">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C6A96B] text-black text-[9px] font-bold min-w-[16px] h-[16px] px-0.5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#111111]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-black/10 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1 text-xs uppercase tracking-widest">
            <Link href="/" className="block px-3 py-4 font-bold text-[#111111] border-b border-black/5">Home</Link>
            <Link href="/products" className="block px-3 py-4 font-bold text-[#111111] border-b border-black/5">Products</Link>
            <Link href="/downloads" className="block px-3 py-4 font-bold text-[#111111] border-b border-black/5">Downloads</Link>
            <Link href="/support" className="block px-3 py-4 font-bold text-[#111111] border-b border-black/5">Support</Link>
            <Link href="/contact" className="block px-3 py-4 font-bold text-[#C6A96B]">Contact / Enquiry</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
