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
        <div className="glass-card rounded-3xl border border-black/5 p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] prose prose-invert prose-lg max-w-none prose-headings:font-serif text-[#111111] prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#111111] prose-p:text-[#111111]/60 prose-li:text-[#111111]/60 prose-strong:text-gold-500">
          <p className="text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-8">Last updated: July 2026</p>
          <Markdown >
            {`
            # Privacy Policy

            ## 1. Information We Collect

            We collect information you provide directly to us when you make a purchase, create an account, sign up for our newsletter, or contact us for support. This may include:

            - Name
            - Email address
            - Phone number
            - Shipping address
            - Billing address
            - Payment information

            ---

            ## 2. How We Use Your Information

            We use the information we collect to:

            - Process and fulfill your orders, including sending emails to confirm your order status and shipment.
            - Communicate with you about products, services, offers, and promotions.
            - Provide customer support and respond to your inquiries.
            - Improve and maintain our website, products, and services.
            - Detect, investigate, and prevent fraudulent transactions and other illegal activities.

            ---

            ## 3. FTLink Mobile App

            The **FTLink Mobile App** requires Bluetooth permissions to connect to and configure compatible Futech modules.

            We do **not** collect, transmit, or store your location data or personal information through the FTLink app.

            Firmware updates requested through the app are downloaded securely from our servers.

            ---

            ## 4. Data Sharing

            We do **not** sell your personal information.

            We may share your information with trusted third-party service providers who assist us in:

            - Operating our website
            - Conducting our business
            - Servicing you

            These parties are required to keep your information confidential. Examples include:

            - Shipping carriers
            - Payment processors

            ---

            ## 5. Cookies

            Our website uses cookies to:

            - Enhance your browsing experience
            - Analyze website traffic
            - Understand where our audience is coming from

            You can disable cookies through your browser settings. However, doing so may affect certain website functionality.

            ---

            ## 6. Data Security

            We implement a variety of security measures to help protect your personal information.

            Your information is:

            - Stored behind secured networks
            - Accessible only to authorized personnel with special access rights
            - Protected under confidentiality requirements

            ---

            ## 7. Contact Us

            If you have any questions regarding this Privacy Policy, please contact us:

            **Email:** sales@futechaudios.com`}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
