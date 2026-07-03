const fs = require('fs');
const glob = require('glob');

function updatePage(filepath) {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');

    // General Theme
    content = content.replace(/bg-black\/40 backdrop-blur-sm border-b border-white\/10/g, 'bg-white/80 backdrop-blur-[22px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]');
    content = content.replace(/bg-transparent/g, 'bg-transparent');
    
    // Headings
    content = content.replace(/text-4xl lg:text-5xl font-black/g, 'text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize');
    content = content.replace(/text-4xl lg:text-6xl font-black/g, 'text-4xl lg:text-6xl font-serif font-bold text-[#111111] capitalize');
    content = content.replace(/text-4xl sm:text-5xl font-black/g, 'text-4xl sm:text-5xl font-serif font-bold text-[#111111] capitalize');
    content = content.replace(/text-5xl font-black/g, 'text-5xl font-serif font-bold text-[#111111] capitalize');
    content = content.replace(/font-black tracking-tight text-white/g, 'font-serif font-bold tracking-tight text-[#111111] capitalize');
    content = content.replace(/text-white uppercase/g, 'text-[#111111]');
    content = content.replace(/text-white/g, 'text-[#111111]');
    
    // Typography
    content = content.replace(/text-white\/60/g, 'text-[#6B6B6B]');
    content = content.replace(/text-white\/50/g, 'text-[#6B6B6B]');
    content = content.replace(/text-white\/40/g, 'text-[#6B6B6B]/80');
    content = content.replace(/text-white\/30/g, 'text-[#6B6B6B]/60');
    
    // Borders
    content = content.replace(/border-white\/10/g, 'border-black/5');
    content = content.replace(/border-white\/20/g, 'border-black/10');
    content = content.replace(/border-white\/30/g, 'border-black/15');
    
    // Backgrounds & Glass
    content = content.replace(/bg-zinc-900\/50 backdrop-blur-md/g, 'glass-card');
    content = content.replace(/bg-black\/40/g, 'bg-white/50');
    content = content.replace(/bg-black\/20/g, 'bg-white/30');
    content = content.replace(/bg-white\/5/g, 'bg-black/5');
    content = content.replace(/bg-[#00E5FF]\/10/g, 'bg-gold-500/10');
    
    // Accents
    content = content.replace(/text-\[\#00E5FF\]/g, 'text-gold-500');
    content = content.replace(/border-\[\#00E5FF\]\/30/g, 'border-gold-500/30');
    content = content.replace(/border-\[\#00E5FF\]\/50/g, 'border-gold-500/50');
    content = content.replace(/bg-\[\#00E5FF\]/g, 'bg-[#111111] text-white hover:bg-gold-500');
    
    // Shadows
    content = content.replace(/shadow-\[0_0_30px_rgba\(0,0,0,0\.5\)\]/g, 'shadow-[0_20px_60px_rgba(0,0,0,0.06)]');
    content = content.replace(/shadow-\[0_0_50px_rgba\(0,0,0,0\.5\)\]/g, 'shadow-[0_20px_60px_rgba(0,0,0,0.06)]');
    content = content.replace(/shadow-\[0_0_30px_rgba\(255,255,255,0\.05\)\]/g, 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]');
    
    // Forms
    content = content.replace(/placeholder:text-white\/20/g, 'placeholder:text-black/30');
    content = content.replace(/focus:ring-\[\#00E5FF\]/g, 'focus:ring-gold-500');
    
    fs.writeFileSync(filepath, content);
}

const files = glob.sync('app/**/*.tsx');
files.forEach(updatePage);
