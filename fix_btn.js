const fs = require('fs');

let button = fs.readFileSync('components/ui/Button.tsx', 'utf8');
button = button.replace('import { motion } from "framer-motion";', '');
fs.writeFileSync('components/ui/Button.tsx', button);

