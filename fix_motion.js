const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');
page = page.replace('import * as motion from "motion/react";', 'import { motion } from "framer-motion";\n"use client";');
fs.writeFileSync('app/page.tsx', page);

let button = fs.readFileSync('components/ui/Button.tsx', 'utf8');
button = button.replace('import * as motion from "motion/react";', 'import { motion } from "framer-motion";');
fs.writeFileSync('components/ui/Button.tsx', button);

