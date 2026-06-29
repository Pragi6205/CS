import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  XCircle, CheckCircle2, Sliders, TrendingUp, 
  ArrowLeftRight, Sparkles, Megaphone, Smartphone 
} from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set initial width
    setContainerWidth(containerRef.current.getBoundingClientRect().width);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Touch handlers for mobile devices
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <section id="growth" className="py-20 md:py-32 bg-transparent border-t border-zinc-900/40 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Performance Visualizer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Before & After
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-3 text-sm max-w-xl mx-auto">
            Compare the slow, unoptimized web presence of a generic brand against ClouQ's high-speed, conversion-driven digital engine.
          </p>
        </div>

        {/* Before After Interactive Canvas */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto h-[400px] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-950 cursor-ew-resize"
        >
          
          {/* AFTER STATE */}
          <div className="absolute inset-0 w-full h-full bg-zinc-950 p-6 sm:p-10 flex flex-col justify-between">
            <div className="flex justify-end items-start">
              <div className="flex items-center gap-2 px-3.5 py-1 bg-[#16A34A]/10 border border-[#16A34A]/20 text-[#16A34A] rounded-full text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>AFTER: Powered by ClouQ (+450% Traffic)</span>
              </div>
            </div>

            {/* Checklist items representing successful status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl z-10">
              {[
                { label: 'Professional Brand', desc: 'Sleek custom design aligned with industry leaders.' },
                { label: 'Google Presence', desc: 'Rank #1 on local maps with automated reviews.' },
                { label: 'More Traffic', desc: 'Fast, search-optimized code drives real leads.' },
                { label: 'More Customers', desc: 'Higher conversion layouts generate higher sales.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-3 flex gap-2.5 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-display font-bold text-white text-xs">{item.label}</span>
                    <span className="block font-sans text-[10px] text-zinc-400 mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Growth Chart Graphic */}
            <div className="h-20 w-full flex items-end gap-1 mt-3 border-t border-zinc-900/60 pt-3">
              {[15, 20, 25, 40, 35, 50, 75, 70, 95, 110, 130, 150].map((v, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-[#16A34A]/60 to-[#16A34A] rounded-t-sm relative group" style={{ height: `${(v / 150) * 100}%` }}>
                  {i === 11 && (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-[#16A34A] font-mono text-[8px] font-bold px-1 py-0.5 rounded shadow border border-zinc-800">
                      PEAK
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BEFORE STATE (Positioned on top, width restricted by slider position, elevated using z-20) */}
          <div 
            className="absolute inset-y-0 left-0 h-full overflow-hidden border-r border-white/20 shadow-xl z-20"
            style={{ width: `${sliderPos}%` }}
          >
            {/* Inner box is set to full canvas width to prevent shrinking content */}
            <div 
              className="absolute inset-y-0 left-0 h-full bg-zinc-900 text-zinc-300 p-6 sm:p-10 flex flex-col justify-between"
              style={{ width: `${containerWidth}px` }}
            >
              <div className="flex justify-start items-start">
                <div className="flex items-center gap-2 px-3.5 py-1 bg-red-950/30 border border-red-900/25 text-red-400 rounded-full text-xs font-bold shadow-sm">
                  <XCircle className="w-3.5 h-3.5 text-red-500" />
                  <span>BEFORE: Unoptimized Presence (Flatline)</span>
                </div>
              </div>

              {/* Checklist items representing failure status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  { label: 'No Website', desc: 'Invisible to 97% of prospective customers.' },
                  { label: 'No Branding', desc: 'Generic template reduces client trust.' },
                  { label: 'No Google Visibility', desc: 'Failing to rank on Google Business search.' },
                  { label: 'No Leads', desc: 'Wasted marketing funds and zero organic traffic.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-950/40 border border-zinc-900/50 rounded-2xl p-3 flex gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="block font-display font-bold text-white text-xs">{item.label}</span>
                      <span className="block font-sans text-[10px] text-zinc-400 mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flat Simulated Chart Graphic */}
              <div className="h-20 w-full flex items-end gap-1 mt-3 border-t border-zinc-800 pt-3">
                {[15, 12, 14, 15, 13, 15, 12, 14, 15, 13, 14, 15].map((v, i) => (
                  <div key={i} className="flex-1 bg-zinc-800 rounded-t-sm" style={{ height: `${(v / 150) * 100}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* SLIDER HANDLEBAR */}
          <div 
            className="absolute inset-y-0 w-[2px] bg-white/20 cursor-ew-resize z-30"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 text-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform hover:text-[#16A34A] hover:border-[#16A34A]/40">
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Drag Helper tip under the visualizer */}
        <div className="text-center mt-6">
          <p className="font-sans text-xs text-zinc-500 font-semibold flex items-center justify-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            Click and drag the center bar to compare
          </p>
        </div>

      </div>
    </section>
  );
}
