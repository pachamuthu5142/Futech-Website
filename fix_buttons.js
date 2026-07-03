const fs = require('fs');

let content = fs.readFileSync('components/ui/Button.tsx', 'utf8');
content = content.replace('bg-[#111111] text-[#111111]', 'bg-[#111111] text-[#FFFFFF]');
fs.writeFileSync('components/ui/Button.tsx', content);

let page = fs.readFileSync('app/page.tsx', 'utf8');
page = page.replace('bg-[#111111] text-[#111111]', 'bg-[#111111] text-[#FFFFFF]');
fs.writeFileSync('app/page.tsx', page);

