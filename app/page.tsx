"use client";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Sliders, Smartphone } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
  const flagshipProduct = PRODUCTS.find((p) => p.sku === "FT008-V4-HDMI") || PRODUCTS[0];
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      {/* Announcement Bar */}
      <div className="bg-[#111111] text-[#FFFFFF] text-[10px] uppercase tracking-[0.2em] font-medium py-3 text-center">
        Free shipping over Rs 5,000 &middot; WhatsApp Support: 8124412222
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFFFFF] pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-[#FFFFFF] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full border border-black/5 bg-[#FAFAFA] px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-[#6B6B6B] mb-10 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-gold-500 mr-3"></span>
                The Standard in Audio Control
              </div>
              <h1 className="text-6xl lg:text-8xl font-serif text-[#111111] leading-[1.05] mb-8">
                Sound <br />
                <span className="italic text-gold-500">perfected.</span>
              </h1>
              <p className="text-base text-[#6B6B6B] mb-12 max-w-lg leading-relaxed font-sans">
                Premium 5.1-channel DSP decoders and remote control kits for home theatre builders. Experience total audio clarity engineered with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button href="/products" variant="primary" size="lg">
                  Shop Collection
                </Button>
                <Button href="/search" variant="outline" size="lg">
                  Find Your Kit
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-3xl rotate-[3deg] border border-black/5"></div>
              <div className="relative rounded-[24px] overflow-hidden bg-white border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.08)] aspect-[4/3] w-full max-w-lg z-10 group">
                <Image
                  src="https://picsum.photos/seed/luxury-audio/1200/900"
                  alt="Futech FT008-V4 HDMI DSP Kit"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-black/5 bg-[#FAFAFA] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-black/5">
            {[
              { icon: ShieldCheck, title: "GST-Inclusive", desc: "Transparent pricing" },
              { icon: Cpu, title: "Engineered in India", desc: "Premium components" },
              { icon: Sliders, title: "Proprietary DSP", desc: "Custom audio modes" },
              { icon: Smartphone, title: "App Controlled", desc: "FTLink Mobile App" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="px-4 group"
              >
                <item.icon className="w-8 h-8 mx-auto mb-5 text-[#111111] group-hover:text-gold-500 transition-colors duration-500" strokeWidth={1.5} />
                <h3 className="font-bold text-[#111111] text-xs uppercase tracking-widest">{item.title}</h3>
                <p className="text-[10px] text-[#6B6B6B] mt-3 uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 bg-[#FFFFFF] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Categories</span>
              </div>
              <h2 className="text-5xl font-serif text-[#111111]">Explore Collections</h2>
            </div>
            <Link href="/products" className="group flex items-center text-xs font-bold uppercase tracking-widest text-[#111111] hover:text-gold-500 transition-colors">
              View all <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.slice(0, 3).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Link
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="group relative block h-[480px] rounded-[24px] overflow-hidden bg-[#FAFAFA] border border-black/5 hover:border-gold-500/30 transition-colors duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={`https://picsum.photos/seed/cat${index}-white/600/800`}
                    alt={category}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent mix-blend-normal" />
                  <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-[#111111] mb-3">{category}</h3>
                    <span className="text-xs text-[#6B6B6B] font-medium tracking-wide flex items-center">
                      Discover <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-gold-500 transition-all transform -translate-x-4 group-hover:translate-x-0" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-[#FAFAFA] border-t border-black/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Showcase</span>
            </div>
            <h2 className="text-5xl font-serif text-[#111111]">Featured Pieces</h2>
            <p className="text-[#6B6B6B] mt-6 text-base max-w-xl font-sans">Our flagship decoders and remote kits, crafted for uncompromising quality.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FTLink App Spotlight */}
      <section className="py-40 bg-[#FFFFFF] overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl lg:text-7xl font-serif text-[#111111] mb-8 leading-[1.1]">
                Total control. <br />
                <span className="italic text-gold-500">In your pocket.</span>
              </h2>
              <p className="text-base text-[#6B6B6B] mb-12 max-w-lg leading-relaxed font-sans">
                Connect seamlessly to your FT004G-MAX and compatible kits via the FTLink Mobile App. Configure source names, update firmware, and manage playback intuitively.
              </p>
              <ul className="space-y-6 mb-12 text-[#111111] text-sm font-medium tracking-wide">
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-4 text-gold-500" strokeWidth={1.5} /> Real-time status sync</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-4 text-gold-500" strokeWidth={1.5} /> Over-the-air firmware updates</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-4 text-gold-500" strokeWidth={1.5} /> Advanced DSP configuration</li>
              </ul>
              <Button href="/products/ft004g-max-usb-bt" variant="primary" size="lg">
                Discover FT004G-MAX
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative rounded-[32px] overflow-hidden border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-[#FAFAFA] group">
                <Image
                  src="https://picsum.photos/seed/ftlink-app-white/800/1000"
                  alt="FTLink Mobile App Interface"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#FFFFFF] border-t border-black/5 relative z-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#111111]/3 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Testimonials</span>
            </div>
            <h2 className="text-5xl font-serif text-[#111111] mb-6">
              Trusted by audio{" "}
              <span className="italic text-gold-500">enthusiasts</span>
            </h2>
            <p className="text-base text-[#6B6B6B] max-w-xl mx-auto leading-relaxed font-sans">
              Thousands of home theatre builders across India have chosen Futech for their most demanding audio setups.
            </p>
          </motion.div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Mumbai, Maharashtra",
                experience: "12 yrs in audio",
                rating: 5,
                text: "The FT008-V4 HDMI decoder completely transformed my home theatre. The DSP modes are incredibly precise — Dolby and DTS decoding is flawless. Well worth every rupee.",
                product: "FT008-V4 HDMI",
                initials: "RK",
                color: "#1a1a2e",
              },
              {
                name: "Priya Nair",
                location: "Kochi, Kerala",
                experience: "7 yrs in audio",
                rating: 5,
                text: "I was sceptical at first, but after setting up with the FTLink app, I was blown away. The Bluetooth sync is instant and the remote kit feels very premium. Futech is the real deal.",
                product: "FT004G-MAX USB BT",
                initials: "PN",
                color: "#2d1b69",
              },
              {
                name: "Arun Sharma",
                location: "Delhi, NCR",
                experience: "5 yrs in audio",
                rating: 5,
                text: "Built my first 5.1 system using Futech modules. The support team on WhatsApp was amazing — patient, knowledgeable, and super fast. The audio quality speaks for itself.",
                product: "FT-5CH Kit",
                initials: "AS",
                color: "#1a3a1a",
              },
              {
                name: "Vikram Patel",
                location: "Ahmedabad, Gujarat",
                experience: "10 yrs in audio",
                rating: 5,
                text: "Compared several brands before settling on Futech. The proprietary DSP algorithms give you control that no other brand at this price point offers. Surround sound is crisp and immersive.",
                product: "FT008-V4 HDMI",
                initials: "VP",
                color: "#3a1a1a",
              },
              {
                name: "Meena Subramaniam",
                location: "Chennai, Tamil Nadu",
                experience: "8 yrs in audio",
                rating: 5,
                text: "My husband is an audiophile and he's extremely picky. He spent an hour testing every DSP mode and declared it the best purchase we've made for our home theatre. Says it all!",
                product: "FT004G-MAX USB BT",
                initials: "MS",
                color: "#1a2a3a",
              },
              {
                name: "Deepak Joshi",
                location: "Pune, Maharashtra",
                experience: "15 yrs in audio",
                rating: 5,
                text: "Third Futech product I've bought and still going strong. GST-inclusive pricing, fast delivery, and firmware updates that keep improving the feature set. Highly recommended.",
                product: "FT-Remote Kit",
                initials: "DJ",
                color: "#2a1a3a",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group relative bg-[#FAFAFA] border border-black/5 rounded-[24px] p-8 hover:border-gold-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-8 text-6xl font-serif text-black/5 group-hover:text-gold-500/10 transition-colors duration-500 leading-none select-none">&ldquo;</div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-[#444444] text-sm leading-relaxed font-sans mb-8 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-black/5 mb-6" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#111111] text-sm font-bold truncate">{t.name}</p>
                    <p className="text-[#6B6B6B] text-[10px] uppercase tracking-wider truncate">{t.location}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[9px] text-gold-500 font-bold uppercase tracking-widest bg-gold-500/5 rounded-full px-3 py-1 whitespace-nowrap">
                      {t.product}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-16 text-center"
          >
            {[
              { stat: "10+", label: "Years of Experience" },
              { stat: "5,000+", label: "Happy Customers" },
              { stat: "4.9 / 5", label: "Average Rating" },
              { stat: "98%", label: "Recommend Futech" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-serif text-[#111111] mb-2">{item.stat}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B] font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Which Kit Do I Need? */}
      <section className="py-32 bg-[#FAFAFA] border-t border-black/5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-5xl font-serif text-[#111111] mb-8">Not sure which kit you need?</h2>
          <p className="text-base text-[#6B6B6B] mb-12 leading-relaxed font-sans">
            Whether you're retrofitting an old amplifier or building a custom home theatre, our selection tool will guide you to the exact Futech modules required.
          </p>
          <Button href="/search" variant="outline" size="lg">
            Start Selection Guide
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
