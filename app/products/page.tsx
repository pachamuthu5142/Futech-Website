import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  
  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="border-b border-black/5 py-16 bg-[#FAFAFA] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-[#111111] mb-8 shadow-sm">
            Catalog
          </div>
          <h1 className="text-5xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-4 uppercase">
            {category ? category : "All Products"}
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl text-sm leading-relaxed">
            Browse our complete line of premium 5.1-channel DSP decoders, analog remote kits, and audio modules engineered for uncompromising sound quality.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-24 text-[#6B6B6B] font-bold uppercase tracking-widest text-xs">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
