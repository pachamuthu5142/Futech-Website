import { PRODUCTS } from "@/lib/data";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

export default function DownloadsPage() {
  const productsWithManuals = PRODUCTS.filter((p) => p.manualUrl);

  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-gold-500/30 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-8">
            Resources
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-4 uppercase">
            Downloads & Manuals
          </h1>
          <p className="text-[#111111]/60 max-w-2xl text-sm font-medium">
            Access documentation, user manuals, and installation guides for Futech Audios products.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsWithManuals.map((product) => (
            <div
              key={product.id}
              className="glass-card rounded-3xl border border-black/5 p-8 flex flex-col hover:border-gold-500/50 transition-colors shadow-[0_20px_60px_rgba(0,0,0,0.06)] group"
            >
              <div className="w-14 h-14 bg-[#FAFAFA] border border-black/5 rounded-2xl flex items-center justify-center mb-8 group-hover:border-gold-500/30 transition-colors">
                <FileText className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#111111] tracking-wider mb-2">
                {product.name}
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#6B6B6B]/80 mb-10 flex-grow">
                User manual & guide (PDF)
              </p>

              <Link
                href={product.manualUrl!}
                target="_blank"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-[#111111] transition-colors"
              >
                <Download className="w-4 h-4 mr-3" /> Download File
              </Link>
            </div>
          ))}

          {/* FTLink App Card */}
          <div className=" bg-[#FFFFFF] backdrop-blur-md rounded-3xl border border-gold-500/30 p-8 flex flex-col  text-[#FFFFFF] transition-colors shadow-[0_0_30px_rgba(0,229,255,0.1)] text-[#111111] group">
            <div className="w-14 h-14  text-[#FFFFFF] border border-gold-500/50 rounded-2xl flex items-center justify-center mb-8">
              <Download className="w-6 h-6 text-gold-500" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#111111] tracking-wider mb-2">
              FTLink Mobile App
            </h3>
            <p className="text-[10px] uppercase font-bold tracking-widest text-[#111111]/60 mb-10 flex-grow">
              Companion app (Android)
            </p>

            <Link
              href="/products/ft004g-max-usb-bt"
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gold-500 group-hover:text-[#111111] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
