const fs = require('fs');
const glob = require('glob');

function updatePage(filepath) {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');

    content = content.replace(/bg-black\/50/g, 'bg-[#FAFAFA]');
    content = content.replace(/text-\[\#111111\]\/50/g, 'text-[#6B6B6B]');
    content = content.replace(/text-\[\#111111\]\/40/g, 'text-[#6B6B6B]/80');
    content = content.replace(/text-\[\#111111\]\/30/g, 'text-[#6B6B6B]/60');
    content = content.replace(/text-\[\#111111\]\/80/g, 'text-[#111111]');
    content = content.replace(/text-white/g, 'text-[#111111]');
    content = content.replace(/bg-black\/40/g, 'bg-white/50');
    
    // Fix any remaining border-white stuff
    content = content.replace(/border-white\/10/g, 'border-black/5');
    content = content.replace(/border-white\/20/g, 'border-black/10');
    content = content.replace(/bg-white\/5/g, 'bg-black/5');
    
    // Ensure all references to #00E5FF are #C6A96B (gold)
    content = content.replace(/#00E5FF/g, '#C6A96B');
    
    // Fix typography
    content = content.replace(/font-black/g, 'font-serif font-bold text-[#111111]');
    content = content.replace(/text-\[\#111111\] uppercase/g, 'text-[#111111] capitalize');

    fs.writeFileSync(filepath, content);
}

const files = glob.sync('app/**/*.tsx');
files.forEach(updatePage);
const comps = glob.sync('components/**/*.tsx');
comps.forEach(updatePage);
