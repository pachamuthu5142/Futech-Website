const fs = require('fs');

function updateProductCard() {
    let content = fs.readFileSync('components/product/ProductCard.tsx', 'utf8');
    
    // Change to white luxury style
    content = content.replace('hover:border-[#00E5FF]/50 transition-all duration-300', 'hover:border-gold-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group');
    content = content.replace('bg-black/20 overflow-hidden p-6', 'bg-white overflow-hidden p-8 group-hover:bg-[#FAFAFA] transition-colors');
    content = content.replace('opacity-80 mix-blend-screen', 'opacity-90 mix-blend-multiply drop-shadow-[0_20px_30px_rgba(0,0,0,0.05)]');
    content = content.replace('bg-red-500/10 border border-red-500/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-400', 'bg-white/80 border border-black/5 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black');
    content = content.replace('bg-gradient-to-b from-transparent to-black/40', 'bg-white');
    content = content.replace('text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest mb-2', 'text-[10px] font-bold text-gold-500 uppercase tracking-widest mb-3 font-sans');
    content = content.replace('hover:text-[#00E5FF]', 'hover:text-gold-500');
    content = content.replace('text-xl font-black text-white leading-tight uppercase tracking-wide', 'text-2xl font-serif font-bold text-[#111111] leading-tight');
    content = content.replace('text-xs text-white/50 line-clamp-2 mb-6 flex-grow leading-relaxed', 'text-sm text-[#6B6B6B] line-clamp-2 mb-8 flex-grow leading-relaxed font-sans');
    content = content.replace('border-t border-white/10', 'border-t border-black/5');
    content = content.replace('text-lg font-bold text-white tracking-wide', 'text-xl font-serif text-[#111111]');
    content = content.replace('text-[10px] uppercase font-bold text-white/30 tracking-widest mt-1', 'text-[10px] uppercase text-[#6B6B6B] tracking-widest mt-1 font-sans');
    content = content.replace('border-white/20 hover:bg-[#00E5FF] hover:text-black hover:border-transparent', 'border-black/10 hover:bg-gold-500 hover:text-white hover:border-transparent text-[#111111]');
    
    fs.writeFileSync('components/product/ProductCard.tsx', content);
}

function updateNavbar() {
    let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');
    
    // Change navbar colors
    content = content.replace('bg-black/60 backdrop-blur-lg border-b border-white/10', 'bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]');
    content = content.replace('bg-transparent', 'bg-transparent'); // Keep transparent state
    
    // Logo text
    content = content.replace('text-white', 'text-[#111111]');
    content = content.replace('text-[#00E5FF]', 'text-gold-500');
    content = content.replace('from-white to-white/70', 'from-[#111111] to-[#111111]/70');
    
    // Links
    content = content.replace(/text-white\/70 hover:text-white/g, 'text-[#6B6B6B] hover:text-[#111111]');
    content = content.replace(/bg-white\/10 text-white/g, 'bg-black/5 text-[#111111]');
    
    // Mobile menu
    content = content.replace('bg-zinc-900', 'bg-white');
    content = content.replace(/border-white\/10/g, 'border-black/5');
    content = content.replace(/text-white/g, 'text-[#111111]');
    content = content.replace(/hover:bg-white\/5/g, 'hover:bg-black/5');
    
    fs.writeFileSync('components/layout/Navbar.tsx', content);
}

function updateFooter() {
    let content = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
    
    content = content.replace('bg-black border-t border-white/10', 'bg-white border-t border-black/5');
    content = content.replace(/text-white\/60/g, 'text-[#6B6B6B]');
    content = content.replace(/text-white\/40/g, 'text-[#6B6B6B]/70');
    content = content.replace(/text-white/g, 'text-[#111111]');
    content = content.replace(/bg-white\/5/g, 'bg-black/5');
    content = content.replace(/hover:bg-white\/10/g, 'hover:bg-black/10');
    content = content.replace(/hover:text-white/g, 'hover:text-[#111111]');
    content = content.replace(/border-white\/10/g, 'border-black/5');
    content = content.replace(/text-\[\#00E5FF\]/g, 'text-gold-500');
    
    fs.writeFileSync('components/layout/Footer.tsx', content);
}

updateProductCard();
updateNavbar();
updateFooter();

