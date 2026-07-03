import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/data";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10 text-[#6B6B6B] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase italic text-[#111111]">
                Futech <span className="font-light text-[#6B6B6B] uppercase">Audios</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-[#6B6B6B]/70 leading-relaxed">
              Engineered in India. Premium 5.1-channel home-theatre remote control kits, DSP decoder boards, and HDMI audio modules.
            </p>
            <div className="flex space-x-4">
              <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 bg-black/5 flex items-center justify-center hover:bg-[#C6A96B] hover:text-black hover:border-transparent transition-colors text-[#111111]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={BUSINESS_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 bg-black/5 flex items-center justify-center hover:bg-[#C6A96B] hover:text-black hover:border-transparent transition-colors text-[#111111]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={BUSINESS_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 bg-black/5 flex items-center justify-center hover:bg-[#C6A96B] hover:text-black hover:border-transparent transition-colors text-[#111111]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#111111] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products?category=Analog+Audio+Remote+Kits" className="hover:text-gold-500 transition-colors">Analog Remote Kits</Link></li>
              <li><Link href="/products?category=Digital+Audio+Remote+Kits" className="hover:text-gold-500 transition-colors">Digital Remote Kits</Link></li>
              <li><Link href="/products?category=Digital+Audio+Decoders" className="hover:text-gold-500 transition-colors">Digital Decoders</Link></li>
              <li><Link href="/products" className="hover:text-gold-500 transition-colors">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#111111] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/downloads" className="hover:text-gold-500 transition-colors">Downloads & Manuals</Link></li>
              <li><Link href="/support/faq" className="hover:text-gold-500 transition-colors">FAQ</Link></li>
              <li><Link href="/support/shipping" className="hover:text-gold-500 transition-colors">Shipping Policy</Link></li>
              <li><Link href="/support/returns" className="hover:text-gold-500 transition-colors">Return Policy</Link></li>
              <li><Link href="/support/terms" className="hover:text-gold-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/support/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/support/warranty" className="hover:text-gold-500 transition-colors">Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#111111] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Contact</h3>
            <ul className="space-y-4 text-[#6B6B6B]">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-gold-500 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gold-500 shrink-0" />
                <a href={`tel:+91${BUSINESS_INFO.phone}`} className="hover:text-[#111111] transition-colors">+91 {BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gold-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#111111] transition-colors">{BUSINESS_INFO.email}</a>
              </li>
              <li>
                <Link href="/dealer-inquiry" className="inline-flex items-center text-[#111111] font-bold text-[10px] tracking-widest uppercase hover:text-gold-500 transition-colors mt-2">
                  Dealer / Bulk Inquiry <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[#6B6B6B]/70 text-[10px] tracking-widest uppercase font-semibold">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/support/privacy" className="hover:text-[#111111] transition-colors">Privacy</Link>
            <Link href="/support/terms" className="hover:text-[#111111] transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-[#111111] transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
