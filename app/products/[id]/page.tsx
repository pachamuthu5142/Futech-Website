import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, Download, CheckCircle2, AlertCircle } from "lucide-react";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Product Top Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/30 border border-black/5 shadow-[0_0_50px_rgba(0,229,255,0.05)]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover opacity-80 mix-blend-screen"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-white/30 border border-black/5 cursor-pointer hover:border-[#C6A96B] hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                    <Image
                      src={img}
                      alt={`${product.name} detail ${idx + 1}`}
                      fill
                      className="object-cover opacity-60 mix-blend-screen hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <p className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></span> {product.category}
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] capitalize text-[#111111] tracking-tight mb-6 uppercase leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-[#6B6B6B]/80 text-xs font-bold uppercase tracking-widest">SKU: {product.sku}</span>
              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              {product.inStock ? (
                <span className="inline-flex items-center text-[10px] font-bold text-gold-500 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/10 px-3 py-1 rounded-sm border border-gold-500/30 uppercase tracking-widest shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Active
                </span>
              ) : (
                <span className="inline-flex items-center text-[10px] font-bold text-red-400 bg-red-400/10 px-3 py-1 rounded-sm border border-red-400/30 uppercase tracking-widest">
                  <AlertCircle className="w-3 h-3 mr-1" /> Offline
                </span>
              )}
            </div>

            <div className="mb-10 border-b border-black/5 pb-10">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-light italic text-[#111111]/90 tracking-tight">
                  Rs {product.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <p className="text-[10px] text-[#6B6B6B]/60 uppercase font-bold tracking-widest">
                Inclusive of all taxes. (Rs {product.priceExGst.toLocaleString("en-IN", { minimumFractionDigits: 2 })} ex-GST)
              </p>
            </div>

            {product.shortDescription && (
              <p className="text-sm text-[#6B6B6B] mb-10 leading-relaxed font-medium">
                {product.shortDescription}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="px-12 w-full sm:w-auto" disabled={!product.inStock}>
                <ShoppingCart className="w-4 h-4 mr-3" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              {!product.inStock && (
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-12">
                  Notify Me
                </Button>
              )}
            </div>
            
            {product.manualUrl && (
              <Link 
                href={product.manualUrl}
                target="_blank"
                className="inline-flex items-center p-4 glass-card rounded-xl border border-black/5 hover:bg-black/5 hover:border-gold-500/50 transition-all text-[#111111] group"
              >
                <div className="bg-black border border-black/5 p-3 rounded-lg shadow-sm mr-5 group-hover:bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 group-hover:text-black group-hover:border-transparent transition-all">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-widest text-gold-500 group-hover:text-[#111111] transition-colors">Download Manual</div>
                  <div className="text-[10px] text-[#6B6B6B]/80 mt-1 uppercase tracking-widest font-bold">PDF Format</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Tabs/Details Section */}
      <section className="border-t border-black/5 bg-[#FAFAFA] backdrop-blur-sm py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[10px] text-[#6B6B6B]">01</div>
                <h2 className="text-2xl font-serif font-bold text-[#111111] tracking-wider">Key Features</h2>
              </div>
              <ul className="space-y-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-[#111111]/60 text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full border border-[#C6A96B] flex items-center justify-center text-[10px] bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 text-black font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]">02</div>
                <h2 className="text-2xl font-serif font-bold text-[#111111] tracking-wider">Specifications</h2>
              </div>
              <div className="glass-card rounded-2xl border border-black/5 overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-white/5">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="hover:bg-black/5 transition-colors">
                        <th className="py-5 px-6 font-bold text-[#6B6B6B] text-[10px] uppercase tracking-widest w-1/3 bg-[#FAFAFA]">
                          {key}
                        </th>
                        <td className="py-5 px-6 text-[#111111] font-medium">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {product.compatibility && (
                <div className="mt-12">
                  <h3 className="text-xs font-bold text-[#6B6B6B] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-white/20"></span> Integrates With
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.compatibility.map((compat, idx) => (
                      <span key={idx} className="px-4 py-2 bg-black/5 text-gold-500 text-[10px] font-bold tracking-widest uppercase rounded border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                        {compat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-transparent border-t border-black/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-[#111111] tracking-widest mb-10 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
              Related Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} href={`/products/${related.id}`} className="group block">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/30 border border-black/5 mb-6 group-hover:border-gold-500/50 transition-colors">
                    <Image src={related.images[0]} alt={related.name} fill className="object-cover opacity-60 mix-blend-screen group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
                  </div>
                  <h3 className="font-serif font-bold text-[#111111] group-hover:text-gold-500 transition-colors uppercase tracking-wide text-lg line-clamp-1">{related.name}</h3>
                  <p className="text-[10px] font-bold text-[#6B6B6B]/80 mt-2 uppercase tracking-widest">Rs {related.price.toLocaleString("en-IN")}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
