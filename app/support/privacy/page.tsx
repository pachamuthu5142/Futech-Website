import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-4">
            <Link href="/support" className="hover:text-gold-500 transition-colors">Support</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gold-500">Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111]">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="glass-card rounded-3xl border border-black/5 p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] prose prose-invert prose-lg max-w-none prose-headings:font-serif font-bold text-[#111111] prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#111111] prose-p:text-[#111111]/60 prose-li:text-[#111111]/60 prose-strong:text-gold-500">
          <p className="text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-8">Last updated: July 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you make a purchase, create an account, sign up for our newsletter, or contact us for support. This may include your name, email address, phone number, shipping and billing addresses, and payment information.
          </p>
          
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Process and fulfill your orders, including sending emails to confirm your order status and shipment.</li>
            <li>Communicate with you about products, services, offers, and promotions.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Improve and maintain our website, products, and services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
          </ul>

          <h2>3. FTLink Mobile App</h2>
          <p>
            The FTLink Mobile App requires Bluetooth permissions to connect to and configure compatible Futech modules. We do not collect, transmit, or store your location data or personal information through the FTLink app. Firmware updates requested through the app are downloaded securely from our servers.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential (e.g., shipping carriers and payment processors).
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from. You can choose to disable cookies through your browser settings, but doing so may affect the functionality of our website.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below:
            <br />
            Email: sales@futechaudios.com
          </p>
        </div>
      </div>
    </div>
  );
}
