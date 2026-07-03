import { BUSINESS_INFO } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-gold-500/30 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-8">
            Support & Inquiries
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-6 uppercase">
            Contact Us
          </h1>
          <p className="text-[#111111]/60 max-w-2xl text-lg font-medium leading-relaxed">
            Have a question about our products or need technical support? We're here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#111111] tracking-widest mb-6 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-gold-500"></div>
                Get in Touch
              </h2>
              <p className="text-[#111111]/60 mb-8 leading-relaxed font-medium">
                Whether you're a DIY builder with technical questions or a retailer looking to stock Futech products, our team in Tamil Nadu is ready to assist you.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-black/5 rounded-2xl border border-black/5 flex items-center justify-center shrink-0 mr-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-gold-500/50 transition-colors">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-3">Our Office</h3>
                  <p className="text-[#111111]/60 leading-relaxed font-medium">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-black/5 rounded-2xl border border-black/5 flex items-center justify-center shrink-0 mr-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-gold-500/50 transition-colors">
                  <Phone className="w-6 h-6 text-gold-500" />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-3">Phone / WhatsApp</h3>
                  <p className="text-[#6B6B6B] text-[10px] uppercase tracking-widest font-bold mb-3">
                    Mon - Sat, 10:00 AM - 6:00 PM IST
                  </p>
                  <a href={`tel:+91${BUSINESS_INFO.phone}`} className="text-[#111111] font-bold hover:text-gold-500 transition-colors block mb-2">
                    +91 {BUSINESS_INFO.phone}
                  </a>
                  <a href={BUSINESS_INFO.social.whatsapp} target="_blank" rel="noreferrer" className="text-gold-500 font-bold text-xs uppercase tracking-widest hover:text-[#111111] transition-colors flex items-center mt-3">
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-black/5 rounded-2xl border border-black/5 flex items-center justify-center shrink-0 mr-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:border-gold-500/50 transition-colors">
                  <Mail className="w-6 h-6 text-gold-500" />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-serif font-bold text-[#111111] tracking-wider mb-3">Email</h3>
                  <p className="text-[#111111]/60 mb-3 font-medium">
                    Send us an email anytime.
                  </p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gold-500 font-bold hover:text-[#111111] transition-colors text-sm">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-10 lg:p-14 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <h3 className="text-2xl font-serif font-bold text-[#111111] tracking-widest mb-10">Send a Message</h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all placeholder:text-[#111111]/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="general" className="bg-zinc-900 text-[#111111]">General Enquiry</option>
                  <option value="support" className="bg-zinc-900 text-[#111111]">Technical Support</option>
                  <option value="order" className="bg-zinc-900 text-[#111111]">Order Status</option>
                  <option value="compatibility" className="bg-zinc-900 text-[#111111]">Compatibility Question</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-widest pl-1">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-[#FAFAFA] border border-black/5 rounded-xl px-5 py-4 text-[#111111] font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none placeholder:text-[#111111]/20"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="button" className="w-full mt-4" size="lg">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
