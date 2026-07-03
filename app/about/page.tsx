import Image from "next/image";
import { BUSINESS_INFO } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Header */}
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 lg:py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gold-500/30 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-8">
              About Futech
            </div>
            <h1 className="text-4xl lg:text-7xl font-serif font-bold tracking-tight text-[#111111] capitalize mb-8 uppercase leading-tight">
              Engineered for the <span className="text-gold-500">perfect sound.</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#111111]/60 leading-relaxed font-medium">
              Futech Audios and Innovation is a specialized manufacturer of premium 5.1-channel home-theatre remote control kits, DSP decoder boards, and HDMI audio modules based in Tiruppur, Tamil Nadu.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-bold text-[#111111] tracking-widest mb-8 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
                Our Mission
              </h2>
              <p className="text-[#111111]/60 mb-8 leading-relaxed font-medium">
                We believe that high-fidelity surround sound shouldn't be restricted to expensive off-the-shelf receivers. Our mission is to provide DIY builders, home theatre enthusiasts, and audio repair technicians with the highest quality, plug-and-play internal components.
              </p>
              <p className="text-[#111111]/60 mb-12 leading-relaxed font-medium">
                By utilizing world-class chipsets—including Cirrus Logic DSPs, precision DACs, and advanced HDCP 2.3 HDMI controllers—we engineer boards that deliver uncompromising audio performance while retaining complete customizability.
              </p>

              <h2 className="text-3xl font-serif font-bold text-[#111111] tracking-widest mt-16 mb-8 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
                The Futech Difference
              </h2>
              <ul className="space-y-6 text-[#111111]/60">
                <li className="flex items-start">
                  <strong className="text-gold-500 min-w-32 block font-bold uppercase tracking-widest text-[10px] mt-1">Proprietary DSP</strong>
                  <span className="font-medium text-sm">Exclusive audio processing modes like Futech Surround, engineered in-house.</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-gold-500 min-w-32 block font-bold uppercase tracking-widest text-[10px] mt-1">Premium Parts</strong>
                  <span className="font-medium text-sm">Transparent BOMs utilizing genuine Cirrus Logic, ST, and NE5532 components.</span>
                </li>
                <li className="flex items-start">
                  <strong className="text-gold-500 min-w-32 block font-bold uppercase tracking-widest text-[10px] mt-1">App Integration</strong>
                  <span className="font-medium text-sm">Modern control via the FTLink mobile app for select flagship kits.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 lg:p-14 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <h3 className="text-2xl font-serif font-bold text-[#111111] mb-10 uppercase tracking-widest">Company Info</h3>
            <div className="space-y-8">
              <div>
                <div className="text-[10px] font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] mb-2">Entity Name</div>
                <div className="text-xl font-bold text-[#111111] tracking-wide">{BUSINESS_INFO.name}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] mb-2">Proprietor</div>
                <div className="text-xl font-bold text-[#111111] tracking-wide">{BUSINESS_INFO.proprietor}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#6B6B6B]/60 uppercase tracking-[0.2em] mb-2">Headquarters</div>
                <div className="text-sm font-medium text-[#111111]/60 max-w-xs leading-relaxed">{BUSINESS_INFO.address}</div>
              </div>
              <div className="pt-8 border-t border-black/5 flex flex-col gap-4">
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gold-500 font-bold uppercase tracking-widest text-xs hover:text-[#111111] transition-colors">
                  {BUSINESS_INFO.email}
                </a>
                <a href={`tel:+91${BUSINESS_INFO.phone}`} className="text-gold-500 font-bold uppercase tracking-widest text-xs hover:text-[#111111] transition-colors">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
