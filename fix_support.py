import os
import re

files = [
    "app/support/shipping/page.tsx",
    "app/support/returns/page.tsx",
    "app/support/terms/page.tsx",
    "app/support/privacy/page.tsx",
    "app/support/faq/page.tsx"
]

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Generic replacements for standard layout
    content = content.replace('className="min-h-screen bg-gray-50 pb-24"', 'className="min-h-screen bg-transparent pb-24"')
    content = content.replace('className="min-h-screen bg-gray-50"', 'className="min-h-screen bg-transparent"')
    content = content.replace('className="bg-white border-b border-gray-200 py-16"', 'className="bg-black/40 backdrop-blur-sm border-b border-white/10 py-24 relative z-10"')
    
    # Text replacements in header
    content = content.replace('text-4xl font-bold tracking-tight text-gray-900', 'text-4xl font-black tracking-tight text-white uppercase')
    content = content.replace('text-gray-600', 'text-white/60 font-medium')
    
    # Breadcrumbs styling
    content = content.replace('text-gray-500', 'text-white/40 uppercase tracking-widest font-bold text-[10px]')
    content = content.replace('text-gray-900 font-medium', 'text-[#00E5FF]')
    content = content.replace('hover:text-gray-900', 'hover:text-[#00E5FF]')
    
    # Body styling
    content = content.replace('max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16', 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10')
    content = content.replace('bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 shadow-sm prose prose-gray max-w-none', 'bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-10 lg:p-14 shadow-[0_0_50px_rgba(0,0,0,0.5)] prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-white prose-p:text-white/60 prose-li:text-white/60 prose-strong:text-[#00E5FF]')
    
    # Specific FAQ replacements
    content = content.replace('bg-white rounded-2xl border border-gray-200 p-8 shadow-sm', 'bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-white/10 p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]')
    content = content.replace('text-xl font-bold text-gray-900 mb-4', 'text-xl font-black text-white uppercase tracking-wider mb-4 flex items-center gap-4')
    content = content.replace('text-gray-600 leading-relaxed', 'text-white/60 font-medium leading-relaxed')
    content = content.replace('bg-gray-900 rounded-3xl p-8 text-center text-white', 'bg-[#00E5FF]/5 backdrop-blur-md border border-[#00E5FF]/20 rounded-3xl p-12 text-center text-white shadow-[0_0_50px_rgba(0,229,255,0.05)]')
    content = content.replace('text-2xl font-bold mb-4', 'text-2xl font-black text-white uppercase tracking-widest mb-4')
    content = content.replace('text-gray-400 mb-8 max-w-lg mx-auto', 'text-[10px] font-bold text-white/60 uppercase tracking-widest leading-relaxed mb-10 max-w-lg mx-auto')
    content = content.replace('inline-flex px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors', 'inline-flex px-8 py-4 bg-[#00E5FF] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.2)]')

    with open(filepath, 'w') as f:
        f.write(content)

for file in files:
    if os.path.exists(file):
        update_file(file)

