import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-transparent pb-24">
      <div className="bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-[10px] text-[#6B6B6B]/80 uppercase tracking-widest font-bold mb-4">
            <Link href="/support" className="hover:text-gold-500 transition-colors">
              Support
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gold-500">Return Policy</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111]">
            Return Policy
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="glass-card rounded-3xl border border-black/5 p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] prose prose-invert prose-lg max-w-none prose-headings:font-serif text-[#111111] prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-[#111111] prose-p:text-[#111111]/60 prose-li:text-[#111111]/60 prose-strong:text-gold-500">
          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">30-Day Return Window</h2>
              <p>
                We offer a 30-day return policy. If 30 days have gone by since your purchase,
                unfortunately, we can't offer you a refund or exchange.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Condition of Returned Items</h2>
              <p>
                To be eligible for a return, your item must be unused, in the same condition that
                you received it, and in the original packaging. Electronic modules that have been
                soldered, modified, or improperly installed are not eligible for return.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Return Process</h2>
              <p>
                To initiate a return, please email our support team at{" "}
                <strong>sales@futechaudios.com</strong> with your order number and the reason for
                the return. We will provide you with instructions on how to send the item back to
                our facility in Tiruppur.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Shipping Costs</h2>
              <p>
                You will be responsible for paying for your own shipping costs for returning your
                item, unless the item received was defective or incorrect due to our error. Shipping
                costs are non-refundable. If you receive a refund, the cost of return shipping (if
                covered by us) will be deducted from your refund.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Refunds</h2>
              <p>
                Once your return is received and inspected, we will send you an email to notify you
                that we have received your returned item. We will also notify you of the approval or
                rejection of your refund. If approved, your refund will be processed, and a credit
                will automatically be applied to your credit card or original method of payment
                within a certain number of days.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Exchanges</h2>
              <p>
                We only replace items if they are defective or damaged out of the box. If you need
                to exchange it for the same item, send us an email at{" "}
                <strong>sales@futechaudios.com</strong>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
