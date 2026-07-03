import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-4">
            <Link href="/support" className="hover:text-gold-500 transition-colors">
              Support
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gold-500">Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111]">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="glass-card rounded-3xl border border-black/5 p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] prose prose-invert prose-lg max-w-none prose-headings:font-serif text-[#111111] prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#111111] prose-p:text-[#111111]/60 prose-li:text-[#111111]/60 prose-strong:text-gold-500">
          <p className="text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-8">
            Last updated: July 2026
          </p>
          <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>

          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Information We Collect</h3>
              <p className="mb-4">
                We collect information you provide directly to us when you make a purchase, create
                an account, sign up for our newsletter, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Shipping address</li>
                <li>Billing address</li>
                <li>Payment information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h3>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Process and fulfill your orders, including sending emails to confirm your order
                  status and shipment.
                </li>
                <li>Communicate with you about products, services, offers, and promotions.</li>
                <li>Provide customer support and respond to your inquiries.</li>
                <li>Improve and maintain our website, products, and services.</li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and other illegal
                  activities.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">3. FTLink Mobile App</h3>
              <p className="mb-4">
                The <strong>FTLink Mobile App</strong> requires Bluetooth permissions to connect to
                and configure compatible Futech modules.
              </p>
              <p className="mb-4">
                We do <strong>not</strong> collect, transmit, or store your location data or
                personal information through the FTLink app.
              </p>
              <p>
                Firmware updates requested through the app are downloaded securely from our servers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">4. Data Sharing</h3>
              <p className="mb-4">
                We do <strong>not</strong> sell your personal information.
              </p>
              <p className="mb-4">
                We may share your information with trusted third-party service providers who assist
                us in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operating our website</li>
                <li>Conducting our business</li>
                <li>Servicing you</li>
              </ul>
              <p className="mt-4">
                These parties are required to keep your information confidential. Examples include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping carriers</li>
                <li>Payment processors</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">5. Cookies</h3>
              <p className="mb-4">Our website uses cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enhance your browsing experience</li>
                <li>Analyze website traffic</li>
                <li>Understand where our audience is coming from</li>
              </ul>
              <p className="mt-4">
                You can disable cookies through your browser settings. However, doing so may affect
                certain website functionality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">6. Data Security</h3>
              <p className="mb-4">
                We implement a variety of security measures to help protect your personal
                information.
              </p>
              <p className="mb-4">Your information is:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stored behind secured networks</li>
                <li>Accessible only to authorized personnel with special access rights</li>
                <li>Protected under confidentiality requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">7. Contact Us</h3>
              <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
              <p>
                <strong>Email:</strong> sales@futechaudios.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
