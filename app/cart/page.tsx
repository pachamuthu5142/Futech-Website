"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const totalExGst = items.reduce(
    (sum, i) => sum + i.product.priceExGst * i.quantity,
    0
  );
  const gstAmount = totalPrice - totalExGst;

  return (
    <div className="min-h-screen bg-transparent pb-24">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Your Selection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] tracking-tight">
            Shopping Cart
            {totalItems > 0 && (
              <span className="ml-4 text-2xl text-[#6B6B6B] font-sans font-normal">
                ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
            )}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Empty state */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-28 bg-[#FAFAFA] rounded-[28px] border border-black/5 shadow-sm"
          >
            <div className="w-20 h-20 bg-white border border-black/5 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
              <ShoppingCart className="h-8 w-8 text-gold-500" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#111111] mb-4">Your cart is empty</h2>
            <p className="text-[#6B6B6B] mb-10 text-sm font-medium max-w-md mx-auto leading-relaxed">
              Looks like you haven&apos;t added any products yet. Explore our premium audio catalog.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white hover:bg-gold-500 hover:text-[#111111] font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300"
            >
              Browse Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        {/* Cart layout */}
        {items.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">Items</h2>
                <button
                  onClick={clearCart}
                  className="text-[10px] uppercase tracking-widest text-[#6B6B6B] hover:text-red-500 transition-colors font-bold flex items-center gap-1.5"
                >
                  <Trash2 className="w-3 h-3" /> Clear all
                </button>
              </div>

              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-5 bg-white border border-black/5 rounded-[20px] p-5 hover:border-gold-500/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    {/* Product image */}
                    <Link href={`/products/${item.product.id}`} className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#FAFAFA] flex-shrink-0 border border-black/5">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover mix-blend-multiply"
                        sizes="96px"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-gold-500 uppercase tracking-widest mb-1">{item.product.category}</p>
                      <Link href={`/products/${item.product.id}`}>
                        <h3 className="text-sm font-serif font-bold text-[#111111] hover:text-gold-500 transition-colors leading-snug line-clamp-2 mb-1">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-[9px] text-[#6B6B6B] uppercase tracking-widest font-medium">SKU: {item.product.sku}</p>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center gap-2 bg-[#FAFAFA] border border-black/5 rounded-xl px-3 py-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-5 h-5 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold text-[#111111] w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-5 h-5 flex items-center justify-center text-[#6B6B6B] hover:text-[#111111] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-base font-serif font-bold text-[#111111]">
                            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-[9px] text-[#6B6B6B] tracking-wide">
                              ₹{item.product.price.toLocaleString("en-IN")} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="self-start mt-1 p-2 rounded-lg text-[#6B6B6B] hover:text-red-500 hover:bg-red-50 transition-all duration-200 flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-black/5 rounded-[24px] p-8 sticky top-28 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#111111] mb-8">Order Summary</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm text-[#6B6B6B]">
                    <span>Subtotal (ex-GST)</span>
                    <span className="font-medium text-[#111111]">₹{totalExGst.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-sm text-[#6B6B6B]">
                    <span>GST</span>
                    <span className="font-medium text-[#111111]">₹{gstAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-sm text-[#6B6B6B]">
                    <span>Shipping</span>
                    <span className="font-medium text-emerald-600">
                      {totalPrice >= 5000 ? "Free" : "Calculated at checkout"}
                    </span>
                  </div>
                  {totalPrice >= 5000 && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                      <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest">
                        🎉 You qualify for free shipping!
                      </p>
                    </div>
                  )}
                  <div className="h-px bg-black/5" />
                  <div className="flex justify-between">
                    <span className="font-bold text-[#111111]">Total (incl. GST)</span>
                    <span className="text-xl font-serif font-bold text-[#111111]">
                      ₹{totalPrice.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Checkout */}
                <a
                  href={`https://wa.me/918124412222?text=${encodeURIComponent(
                    `Hi Futech! I'd like to order:\n\n${items.map(i => `• ${i.product.name} (Qty: ${i.quantity}) — ₹${(i.product.price * i.quantity).toLocaleString("en-IN")}`).join("\n")}\n\nTotal: ₹${totalPrice.toLocaleString("en-IN")}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-[0_8px_20px_rgba(37,211,102,0.3)] mb-4"
                >
                  Order via WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="block w-full py-3.5 border border-black/10 hover:border-gold-500/40 text-[#111111] text-center rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-[#FAFAFA]"
                >
                  Contact for Bulk Order
                </Link>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-black/5 space-y-3">
                  {["GST Invoice Included", "Genuine Futech Products", "WhatsApp Support"].map((t) => (
                    <div key={t} className="flex items-center gap-2.5 text-[10px] text-[#6B6B6B] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" strokeWidth={2} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
