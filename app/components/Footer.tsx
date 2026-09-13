import React from 'react';
import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 font-semibold">Husnain Mustafa</span>
          <span>© {new Date().getFullYear()} • Built with Next.js &amp; Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}
