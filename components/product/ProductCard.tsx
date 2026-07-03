"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check, Star, Zap } from "lucide-react";
import { type Product } from "@/lib/data";
import { useCart } from "@/lib/cartContext";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock || added) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="group relative flex flex-col h-full bg-white border border-black/5 rounded-[28px] overflow-hidden hover:border-gold-500/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500">

      {/* Image area */}
      <Link href={`/products/${product.id}`} className="relative block aspect-[5/3] overflow-hidden bg-[#FAFAFA]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
          sizes="(max-width: 78px) 10vw, (max-width: 100px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isFlagship && (
            <span className="inline-flex items-center gap-1.5 bg-[#111111] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
              <Zap className="w-3 h-3 text-gold-500" fill="currentColor" /> Flagship
            </span>
          )}
          {!product.inStock && (
            <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-black/10 text-[#6B6B6B] text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
              Out of Stock
            </span>
          )}
          {product.inStock && !product.isFlagship && (
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
              In Stock
            </span>
          )}
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="bg-white/95 backdrop-blur-sm text-[#111111] text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-xl border border-black/5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">

        {/* Category + Reviews */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-bold text-gold-500 uppercase tracking-widest">
            {product.category}
          </span>
          {product.reviews > 0 && (
            <span className="flex items-center gap-1 text-[9px] text-[#6B6B6B] font-medium">
              <Star className="w-3 h-3 text-gold-500" fill="currentColor" />
              {product.reviews} {product.reviews === 1 ? "review" : "reviews"}
            </span>
          )}
        </div>

        {/* Product name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-serif font-bold text-[#111111] leading-snug mb-2 group-hover:text-gold-500 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Short description */}
        {product.shortDescription && (
          <p className="text-xs text-[#6B6B6B] line-clamp-2 leading-relaxed mb-2 flex-grow font-sans">
            {product.shortDescription}
          </p>
        )}
        {/* Divider */}
        <div className="h-px bg-black/5 mb-2" />

        {/* Price + Add to Cart */}
        <div className="flex items-end justify-between gap-3 mt-auto">
          <div>
            <div className="text-xl font-serif font-bold text-[#111111]">
              ₹{product.price.toLocaleString("en-IN")}
            </div>
            <div className="text-[9px] uppercase text-[#6B6B6B] tracking-widest mt-0.5 font-sans">
              ₹{product.priceExGst.toLocaleString("en-IN")} ex-GST
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            aria-label={added ? "Added to cart" : "Add to cart"}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest
              transition-all duration-300 shadow-sm flex-shrink-0
              ${!product.inStock
                ? "bg-black/5 text-[#6B6B6B] cursor-not-allowed"
                : added
                  ? "bg-emerald-500 text-white scale-95"
                  : "bg-[#111111] text-white hover:bg-gold-500 hover:text-[#111111] hover:scale-105 active:scale-95"
              }
            `}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                {product.inStock ? "Add" : "Unavailable"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
