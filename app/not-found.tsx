import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-center px-4 relative z-10">
      <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#111111] capitalize tracking-tight text-[#111111] mb-6">404 - Not Found</h2>
      <p className="text-[#111111]/60 mb-8 max-w-md font-medium">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="px-8 py-4 bg-[#111111] text-white hover:bg-gold-500 text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-colors ">
        Return Home
      </Link>
    </div>
  );
}
