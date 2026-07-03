import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "Why isn't HDMI ARC working with my TV?",
      answer: "First, ensure your HDMI cable is plugged into the port labeled 'ARC' or 'eARC' on your TV. In your TV's audio settings, change the sound output from 'TV Speakers' to 'HDMI ARC' or 'Audio System'. Finally, set the digital output format to PCM or Auto (not Passthrough) depending on your setup. If issues persist, try turning off HDMI CEC (Bravia Sync, Anynet+, Simplink, etc.) temporarily."
    },
    {
      question: "What is Futech Surround?",
      answer: "Futech Surround is our proprietary DSP audio mode designed to upmix standard 2-channel stereo audio into immersive 5.1 surround sound. It uses advanced algorithms to extract ambient cues and route them to the rear speakers while keeping dialogue anchored in the center channel."
    },
    {
      question: "Are your modules compatible with other brands?",
      answer: "Our remote control kits and decoders are designed for universal compatibility with standard 5.1 amplifier setups. However, they work best when paired with other Futech modules, as they share sync protocols and form factors."
    },
    {
      question: "How do I update the firmware on the FT004G-MAX?",
      answer: "You can update the firmware seamlessly using the FTLink Mobile App. Ensure your device is connected via Bluetooth, navigate to the Settings tab in the app, and tap 'Check for Updates'. The process takes about 2 minutes."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-4">
            <Link href="/support" className="hover:text-gold-500 transition-colors">Support</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gold-500">FAQ</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#111111]/60 font-medium">
            Find answers to common questions about our products, compatibility, and troubleshooting.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-3xl border border-black/5 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-serif font-bold text-[#111111] tracking-wider mb-4 flex items-center gap-4">{faq.question}</h3>
              <p className="text-[#111111]/60 font-medium leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500/5 backdrop-blur-md border border-[#C6A96B]/20 rounded-3xl p-12 text-center text-[#111111] shadow-[0_0_50px_rgba(0,229,255,0.05)]">
          <h2 className="text-2xl font-serif font-bold text-[#111111] tracking-widest mb-4">Still have questions?</h2>
          <p className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-widest leading-relaxed mb-10 max-w-lg mx-auto">
            Our technical team is ready to help you with specific configuration issues or detailed product specs.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-[#111111] text-[#FFFFFF] hover:bg-gold-500 text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
