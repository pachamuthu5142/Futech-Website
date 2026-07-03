const fs = require('fs');
const glob = require('glob');

function updatePage(filepath) {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');

    content = content.replace(/text-\[\#111111\] text-\[\#111111\]/g, 'text-[#111111]');
    content = content.replace(/bg-\[\#111111\] text-\[\#111111\] hover:bg-gold-500/g, 'bg-[#111111] text-[#FFFFFF] hover:bg-gold-500');
    content = content.replace(/bg-\[\#111111\] text-\[\#111111\] hover:bg-gold-500\/10/g, 'bg-[#111111]/5 text-gold-500 hover:bg-gold-500/10');
    content = content.replace(/bg-\[\#111111\] text-\[\#111111\]/g, 'bg-[#111111] text-[#FFFFFF]');

    fs.writeFileSync(filepath, content);
}

const files = glob.sync('app/**/*.tsx');
files.forEach(updatePage);
const comps = glob.sync('components/**/*.tsx');
comps.forEach(updatePage);
