const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
page = page.replace('"use client";', '');
page = '"use client";\n' + page;
fs.writeFileSync('app/page.tsx', page);

