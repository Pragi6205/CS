import { motion } from 'motion/react';
import { Sparkles, Terminal, Shield } from 'lucide-react';

export default function TechStack() {
  const row1 = [
    { name: 'React', desc: 'Interactive SPA Frontends', icon: '⚛️' },
    { name: 'Next.js', desc: 'Server-Side Web Apps', icon: '▲' },
    { name: 'Node.js', desc: 'Secure Server Run-times', icon: '🟢' },
    { name: 'MongoDB', desc: 'NoSQL Document Store', icon: '🍃' },
    { name: 'PostgreSQL', desc: 'Relational Database Engine', icon: '🐘' },
  ];

  const row2 = [
    { name: 'AWS Cloud', desc: 'Global Server Ingress', icon: '☁️' },
    { name: 'Firebase', desc: 'Realtime Databases & Auth', icon: '🔥' },
    { name: 'Tailwind CSS', desc: 'Utility-First Styling Grid', icon: '🎨' },
    { name: 'Figma Pro', desc: 'Corporate Prototyping Canvas', icon: '📐' },
    { name: 'Framer Motion', desc: 'Premium Physics Animations', icon: '🎬' },
  ];

  return (
    <section id="tech" className="py-20 md:py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs font-bold text-[#16A34A] uppercase tracking-widest border border-[#16A34A]/20 px-3 py-1 rounded-full bg-[#16A34A]/5">
            Our Technology Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            State-Of-The-Art Tech Wall
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">
            We write clean, lightweight, and modern code utilizing the absolute best-in-class frameworks to build scalable and maintainable products.
          </p>
        </div>

        {/* Infinite Scrolling Technology rows */}
        <div className="flex flex-col gap-6 w-full overflow-hidden relative">
          {/* Gradients to fade edges */}
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="w-full py-2">
            <div className="flex gap-6 animate-scroll whitespace-nowrap">
              {[...row1, ...row1, ...row1, ...row1].map((tech, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center gap-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 hover:border-[#16A34A]/30 hover:bg-zinc-800/40 transition-all cursor-pointer select-none"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="text-left">
                    <span className="block font-display text-sm font-bold text-white">{tech.name}</span>
                    <span className="block font-sans text-[10px] text-zinc-500 mt-0.5">{tech.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right (Reverse animation) */}
          <div className="w-full py-2">
            <div className="flex gap-6 animate-scroll whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
              {[...row2, ...row2, ...row2, ...row2].map((tech, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center gap-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 hover:border-[#16A34A]/30 hover:bg-zinc-800/40 transition-all cursor-pointer select-none"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="text-left">
                    <span className="block font-display text-sm font-bold text-white">{tech.name}</span>
                    <span className="block font-sans text-[10px] text-zinc-500 mt-0.5">{tech.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical standards list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-900">
          {[
            { label: 'SEO Schemas Ready', desc: 'Pre-optimized semantic elements.', icon: <Sparkles className="w-4 h-4 text-[#16A34A]" /> },
            { label: 'Fast Load Speeds', desc: 'Average 0.5s loading performance.', icon: <Terminal className="w-4 h-4 text-[#16A34A]" /> },
            { label: 'Secure Frameworks', desc: 'HTTPS and Cloudflare integrations.', icon: <Shield className="w-4 h-4 text-[#16A34A]" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="text-left">
                <span className="block font-display text-xs font-bold text-white">{item.label}</span>
                <span className="block font-sans text-[10px] text-zinc-500 mt-0.5">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
