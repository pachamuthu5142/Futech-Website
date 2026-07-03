import { Button } from "@/components/ui/Button";
import { Building2, PackageCheck, Percent, HeadphonesIcon } from "lucide-react";

export default function DealerInquiryPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-gold-500/30 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-8 mx-auto">
            B2B Portal
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-6 uppercase">
            Partner with Futech
          </h1>
          <p className="text-lg text-[#111111]/60 max-w-2xl mx-auto leading-relaxed font-medium">
            Join our network of authorized dealers, retailers, and OEM partners. Access bulk pricing, priority technical support, and genuine premium components.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#111111] tracking-widest mb-12 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
                Why become a dealer?
              </h2>
              
              <div className="space-y-12">
                <div className="flex group">
                  <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center shrink-0 mr-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-gold-500/50 transition-colors">
                    <Percent className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-3">Wholesale Pricing</h3>
                    <p className="text-[#111111]/60 leading-relaxed font-medium">Access exclusive tier-based discounts on our entire catalog of DSPs, remote kits, and decoders to maximize your margins.</p>
                  </div>
                </div>

                <div className="flex group">
                  <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center shrink-0 mr-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-gold-500/50 transition-colors">
                    <PackageCheck className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-3">Priority Stock Allocation</h3>
                    <p className="text-[#111111]/60 leading-relaxed font-medium">Bypass out-of-stock retail constraints with dedicated inventory reserves for our B2B partners.</p>
                  </div>
                </div>

                <div className="flex group">
                  <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center shrink-0 mr-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-gold-500/50 transition-colors">
                    <HeadphonesIcon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-3">Direct Engineering Support</h3>
                    <p className="text-[#111111]/60 leading-relaxed font-medium">Get direct access to our technical team for custom implementation advice, troubleshooting, and OEM integration guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 lg:p-14 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <h3 className="text-2xl font-serif font-bold text-[#111111] mb-2 uppercase tracking-widest">Submit an Inquiry</h3>
            <p className="text-[#6B6B6B]/80 mb-10 text-xs font-bold uppercase tracking-widest">Tell us about your business and we'll get back to you within 24 hours.</p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="lastName" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="company" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Company / Business Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-[#6B6B6B]/60" />
                  </div>
                  <input type="text" id="company" className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl pl-12 pr-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Business Email</label>
                  <input type="email" id="email" className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="businessType" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Business Type</label>
                <select id="businessType" className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all appearance-none">
                  <option value="retailer" className="bg-zinc-900">Retailer / Shop</option>
                  <option value="installer" className="bg-zinc-900">Custom Installer / Technician</option>
                  <option value="distributor" className="bg-zinc-900">Distributor</option>
                  <option value="oem" className="bg-zinc-900">OEM Manufacturer</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Tell us about your volume requirements</label>
                <textarea id="message" rows={4} className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none placeholder:text-[#111111]/20"></textarea>
              </div>

              <Button type="button" className="w-full mt-4" size="lg">
                Submit Inquiry
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
