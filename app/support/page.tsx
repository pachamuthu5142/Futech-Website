import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, FileText, ChevronRight } from "lucide-react";

export default function SupportPage() {
  const supportLinks = [
    {
      title: "Shipping Policy",
      description: "Information about delivery methods, timelines, and rates.",
      icon: <Truck className="w-6 h-6 text-gold-500" />,
      href: "/support/shipping"
    },
    {
      title: "Return Policy",
      description: "Our 30-day return policy for unused and defective items.",
      icon: <RotateCcw className="w-6 h-6 text-gold-500" />,
      href: "/support/returns"
    },
    {
      title: "Warranty Information",
      description: "Details about our product warranty and coverage.",
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      href: "/support/terms" // Directing to terms where it's included currently
    },
    {
      title: "Terms & Conditions",
      description: "Legal terms for using our website and services.",
      icon: <FileText className="w-6 h-6 text-gold-500" />,
      href: "/support/terms"
    },
    {
      title: "Privacy Policy",
      description: "How we protect and use your data.",
      icon: <FileText className="w-6 h-6 text-gold-500" />,
      href: "/support/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-gold-500/30 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-8">
            Help Center
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-4 uppercase">
            Support Center
          </h1>
          <p className="text-[#111111]/60 max-w-2xl text-sm font-medium">
            We're committed to providing the best service. Find answers to your questions and read our policies below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-2xl font-serif font-bold text-[#111111] tracking-widest mb-6 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
              Policies & Documentation
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {supportLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group glass-card rounded-3xl border border-black/5 p-8 flex flex-col hover:border-gold-500/50 transition-colors shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                >
                  <div className="w-14 h-14 bg-[#FAFAFA] border border-black/5 rounded-2xl flex items-center justify-center mb-6 group-hover:border-gold-500/30 transition-colors">
                    <div className="text-gold-500">{link.icon}</div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-2 flex items-center justify-between group-hover:text-gold-500 transition-colors">
                    {link.title}
                    <ChevronRight className="w-4 h-4 text-[#6B6B6B]/60 group-hover:text-gold-500 transition-colors transform group-hover:translate-x-2" />
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#6B6B6B] leading-relaxed mt-2">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[#FFFFFF] hover:bg-gold-500/5 backdrop-blur-md border border-[#C6A96B]/20 rounded-3xl p-10 sticky top-28 shadow-[0_0_50px_rgba(0,229,255,0.05)]">
              <h2 className="text-2xl font-serif font-bold text-[#111111] tracking-widest mb-4">Need help?</h2>
              <p className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-widest leading-relaxed mb-10">
                Can't find what you're looking for? Our technical support team is ready to assist you.
              </p>

              <div className="space-y-4">
                <Link href="/contact" className="block w-full py-4 px-6 bg-[#111111] text-white hover:bg-gold-500 hover:text-black text-center rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                  Contact Support
                </Link>
                <Link href="/downloads" className="block w-full py-4 px-6 bg-transparent border border-black/10 text-[#111111] text-center rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white/40 transition-colors">
                  Download Manuals
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
