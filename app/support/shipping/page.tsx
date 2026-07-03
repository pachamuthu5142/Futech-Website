import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-4">
            <Link href="/support" className="hover:text-gold-500 transition-colors">Support</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gold-500">Shipping Policy</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111]">
            Shipping Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="glass-card rounded-3xl border border-black/5 p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] prose prose-invert prose-lg max-w-none prose-headings:font-serif font-bold text-[#111111] prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#111111] prose-p:text-[#111111]/60 prose-li:text-[#111111]/60 prose-strong:text-gold-500">
          <h2>Processing Time</h2>
          <p>
            All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
          </p>
          
          <h2>Shipping Rates & Delivery Estimates</h2>
          <p>
            Shipping charges for your order will be calculated and displayed at checkout. We partner with reliable courier services including DTDC, ST Courier, Franch Express, and The Professional Couriers to ensure timely delivery across India.
          </p>
          <ul>
            <li><strong>Standard Shipping:</strong> Estimated delivery within 3-7 business days.</li>
            <li><strong>Express Shipping:</strong> Estimated delivery within 2-4 business days (where available).</li>
          </ul>
          <p>
            Delivery delays can occasionally occur due to unforeseen circumstances or remote locations.
          </p>

          <h2>Shipment Tracking</h2>
          <p>
            You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
          </p>

          <h2>Damages & Lost Packages</h2>
          <p>
            Futech Audios is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
          </p>

          <h2>Address Accuracy</h2>
          <p>
            It is the customer's responsibility to provide an accurate and complete shipping address. We are not responsible for packages delivered to incorrect addresses provided by the customer. If a package is returned to us due to an incorrect address, the customer will be responsible for re-shipping costs.
          </p>
        </div>
      </div>
    </div>
  );
}
