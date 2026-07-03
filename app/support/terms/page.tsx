import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-4">
            <Link href="/support" className="hover:text-gold-500 transition-colors">Support</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gold-500">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111]">
            Terms & Conditions
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="glass-card rounded-3xl border border-black/5 p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] prose prose-invert prose-lg max-w-none prose-headings:font-serif font-bold text-[#111111] prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#111111] prose-p:text-[#111111]/60 prose-li:text-[#111111]/60 prose-strong:text-gold-500">
          <p className="text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-8">Last updated: July 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Futech Audios & Innovation. These Terms & Conditions govern your use of our website (futechaudios.com) and the purchase of our products. By accessing our website or purchasing our products, you agree to be bound by these terms.
          </p>
          
          <h2>2. Use of Products</h2>
          <p>
            Futech Audios provides electronic components and modules intended for use by individuals with appropriate technical knowledge. You acknowledge that improper handling, installation, or use of electronic modules can result in damage to the product, connected equipment, or personal injury. We are not liable for any damages resulting from improper use or installation of our products.
          </p>

          <h2>3. Warranty</h2>
          <p>
            Our products carry a standard manufacturer warranty covering defects in materials and workmanship under normal use. This warranty does not cover damage caused by misuse, abuse, unauthorized modification, improper installation (including incorrect power supply voltage or reverse polarity), or acts of God. Detailed warranty periods specific to each product category are provided with the product documentation.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software (including the FTLink mobile application), is the property of Futech Audios & Innovation or its content suppliers and is protected by Indian and international copyright laws.
          </p>

          <h2>5. Pricing & Availability</h2>
          <p>
            All prices are listed in Indian Rupees (INR) and are inclusive of GST unless otherwise stated. We reserve the right to change prices and product availability without notice. While we strive for accuracy, errors in pricing or product descriptions may occur, and we reserve the right to correct them and cancel orders resulting from such errors.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Futech Audios & Innovation, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website or products.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Tiruppur, Tamil Nadu.
          </p>
        </div>
      </div>
    </div>
  );
}
