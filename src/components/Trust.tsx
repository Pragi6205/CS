import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Zap, Smile } from 'lucide-react';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ end, suffix = '', duration = 1.5 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = end;
    const totalFrames = Math.min(Math.floor(duration * 60), 100);
    const increment = endValue / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function Trust() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Premium grayscale client logo SVGs / shapes representing premium entities
  const clientLogos = [
    { name: 'Apex Labs', icon: '⚡' },
    { name: 'Nova Health', icon: '✦' },
    { name: 'Krypton', icon: '⬡' },
    { name: 'Vortex Inc', icon: '🌀' },
    { name: 'Zodiac', icon: '🪐' },
    { name: 'Aether Co', icon: '❂' },
  ];

  const stats = [
    { 
      end: 50, 
      suffix: '+', 
      label: 'Projects Delivered', 
      desc: '100% custom-crafted systems',
      icon: <Award className="w-5 h-5 text-[#16A34A]" />
    },
    { 
      end: 100, 
      suffix: '%', 
      label: 'Custom Solutions', 
      desc: 'Zero generic templates used',
      icon: <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
    },
    { 
      end: 14, 
      suffix: ' Days', 
      label: 'Average Delivery', 
      desc: 'Super-fast turnarounds',
      icon: <Zap className="w-5 h-5 text-[#16A34A]" />
    },
    { 
      end: 99, 
      suffix: '%', 
      label: 'Client Satisfaction', 
      desc: 'Five-star rated support',
      icon: <Smile className="w-5 h-5 text-[#16A34A]" />
    }
  ];

  return (
    <section id="trust" ref={containerRef} className="py-20 bg-[#0A0A0A] border-b border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Logos Title */}
        <div className="text-center mb-8">
          <p className="font-sans text-xs font-bold text-zinc-500 uppercase tracking-widest">
            ENGINEERING TRUST WORLDWIDE
          </p>
        </div>

        {/* Client Logos Row */}
        <div className="w-full overflow-hidden relative mb-16 py-4">
          {/* Edge gradients for fading effect */}
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-12 items-center animate-scroll whitespace-nowrap">
            {/* Duplicated list for infinite scroll */}
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center gap-2.5 text-zinc-500 hover:text-white font-display text-lg font-bold tracking-tight transition-all cursor-pointer select-none"
              >
                <span className="text-xl text-zinc-400 group-hover:text-[#16A34A]">{logo.icon}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:border-[#16A34A]/25 hover:shadow-[#16A34A]/5 transition-all group flex flex-col justify-between min-h-[170px]"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center transition-all group-hover:scale-105">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-display font-bold text-white text-base tracking-tight">
                  {stat.label}
                </h4>
                <p className="font-sans text-xs text-zinc-400 mt-1">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
