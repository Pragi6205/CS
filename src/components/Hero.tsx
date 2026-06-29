import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, TrendingUp, Sparkles, Activity, Cpu, Globe, ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onViewWorkClick: () => void;
}

export default function Hero({ onContactClick, onViewWorkClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'revenue' | 'servers'>('users');
  
  // Interactive statistics state
  const [userCount, setUserCount] = useState(14280);
  const [mrrCount, setMrrCount] = useState(3845000); // INR startup pipeline

  // Smooth mouse follow using spring physics
  const mouseX = useSpring(0, { damping: 50, stiffness: 400 });
  const mouseY = useSpring(0, { damping: 50, stiffness: 400 });

  useEffect(() => {
    // Dynamically increment counters slightly to simulate "live" data feed
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
      setMrrCount(prev => prev + Math.floor(Math.random() * 120));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax transformations for depth
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
  
  const shadowX = useTransform(mouseX, [-300, 300], [20, -20]);
  const shadowY = useTransform(mouseY, [-300, 300], [20, -20]);

  // Card specific translation factors
  const card1X = useTransform(mouseX, [-300, 300], [-15, 15]);
  const card1Y = useTransform(mouseY, [-300, 300], [-15, 15]);

  const card2X = useTransform(mouseX, [-300, 300], [18, -18]);
  const card2Y = useTransform(mouseY, [-300, 300], [18, -18]);

  const card3X = useTransform(mouseX, [-300, 300], [-25, 25]);
  const card3Y = useTransform(mouseY, [-300, 300], [25, -25]);

  // Gradient light positions
  const glowX = useTransform(mouseX, [-400, 400], ['30%', '70%']);
  const glowY = useTransform(mouseY, [-400, 400], ['35%', '65%']);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-[#0A0A0A] bg-grid-pattern-dark pt-32 pb-20 md:pb-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Glow effect that follows the mouse */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-[#16A34A]/10 blur-[130px] pointer-events-none hidden md:block"
        style={{
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Floating abstract tech circles / particle animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#16A34A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-[#16A34A]/5 rounded-full blur-3xl" />
        
        {/* Particle sparkles */}
        <motion.div 
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 right-1/3 w-3 h-3 bg-[#16A34A] rounded-full blur-[2px]"
        />
        <motion.div 
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-[#16A34A]/40 rounded-full blur-[1px]"
        />
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 right-12 w-2 h-2 bg-[#16A34A]/60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Copy Content */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6 w-fit rounded-full shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
            India's Leading Digital Engine
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-extrabold tracking-tight mb-6 text-white"
          >
            Building Digital <br />
            <span className="text-[#16A34A] relative inline-block">
              Experiences
              <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-[#16A34A]/10 -z-10 rounded" />
            </span> <br />
            That Drive Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-zinc-400 font-medium leading-relaxed mb-10 pr-4"
          >
            We design, develop and scale premium digital products for startups and enterprises across India. Crafted with pixel precision to accelerate your growth metrics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              id="hero-start-project"
              onClick={onContactClick}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-900/30 hover:scale-105 transition-transform cursor-pointer"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              id="hero-view-work"
              onClick={onViewWorkClick}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-base font-bold px-8 py-4 rounded-xl border-2 border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 flex items-center gap-8"
          >
            <div>
              <div className="text-2xl font-black text-white">50+</div>
              <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Projects Delivered</div>
            </div>
            <div className="h-8 w-px bg-zinc-800"></div>
            <div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Custom Solutions</div>
            </div>
            <div className="h-8 w-px bg-zinc-800"></div>
            <div>
              <div className="text-2xl font-black text-white">4.9/5</div>
              <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Client Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Dashboard Preview Container */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-8 z-10 select-none">
          {/* Parallax Container */}
          <motion.div
            className="relative w-full max-w-[500px] h-[450px]"
            style={{
              perspective: 1200,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Background Grid Accent under the panels */}
            <div className="absolute inset-0 bg-zinc-950/80 rounded-3xl border border-zinc-900 shadow-2xl opacity-80" />

            {/* Glowing Gradient Mesh Background inside panel context */}
            <div className="absolute inset-4 overflow-hidden rounded-2xl bg-zinc-950 flex items-center justify-center border border-zinc-900">
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-35" />
              <div className="absolute top-1/4 left-1/4 w-52 h-52 bg-[#16A34A]/10 rounded-full blur-[80px] animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-[#16A34A]/5 rounded-full blur-[70px]" />
            </div>

            {/* CARD 1 (Main Dashboard Glass Panel) */}
            <motion.div
              style={{
                x: card1X,
                y: card1Y,
                translateZ: 30,
              }}
              className="absolute inset-x-8 top-12 bottom-16 rounded-2xl glass-panel-dark bg-zinc-950/90 shadow-2xl p-6 border border-zinc-800 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Analytics Engine</span>
                  <h3 className="font-display text-lg font-bold text-white mt-0.5">ClouQ Business Suite</h3>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-[#16A34A]/80" />
                </div>
              </div>

              {/* Selection Tabs inside dashboard */}
              <div className="flex bg-zinc-900/80 rounded-lg p-1 text-xs font-semibold text-zinc-400 mt-4 border border-zinc-800">
                <button
                  id="tab-users"
                  onClick={() => setActiveTab('users')}
                  className={`flex-1 py-1.5 rounded-md text-center transition-all ${activeTab === 'users' ? 'bg-[#16A34A] text-white shadow-sm' : 'hover:text-white'}`}
                >
                  Growth
                </button>
                <button
                  id="tab-revenue"
                  onClick={() => setActiveTab('revenue')}
                  className={`flex-1 py-1.5 rounded-md text-center transition-all ${activeTab === 'revenue' ? 'bg-[#16A34A] text-white shadow-sm' : 'hover:text-white'}`}
                >
                  Revenue
                </button>
                <button
                  id="tab-servers"
                  onClick={() => setActiveTab('servers')}
                  className={`flex-1 py-1.5 rounded-md text-center transition-all ${activeTab === 'servers' ? 'bg-[#16A34A] text-white shadow-sm' : 'hover:text-white'}`}
                >
                  System
                </button>
              </div>

              {/* Dynamic stats based on tab selection */}
              <div className="my-auto py-2">
                {activeTab === 'users' && (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-zinc-500">Live Active Clients</span>
                      <div className="font-display text-3xl font-bold text-white tracking-tight mt-1">
                        {userCount.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-[#16A34A]/10 text-[#16A34A] px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +28.4%
                    </div>
                  </div>
                )}

                {activeTab === 'revenue' && (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-zinc-500">Startup Pipeline (Est.)</span>
                      <div className="font-display text-2xl font-bold text-white tracking-tight mt-1">
                        ₹{mrrCount.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="bg-[#16A34A]/10 text-[#16A34A] px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +34.2%
                    </div>
                  </div>
                )}

                {activeTab === 'servers' && (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium text-zinc-500">Global Cloud Latency</span>
                      <div className="font-display text-3xl font-bold text-white tracking-tight mt-1">
                        99.98%
                      </div>
                    </div>
                    <div className="bg-[#16A34A]/10 text-[#16A34A] px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold animate-pulse">
                      <Activity className="w-3.5 h-3.5" />
                      Optimized
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom graphic representing data */}
              <div className="h-12 w-full flex items-end gap-1.5 mt-2">
                {[45, 60, 55, 75, 45, 90, 80, 110, 85, 120, 140, 130].map((val, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${(val / 140) * 100}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className={`flex-1 rounded-t-sm transition-colors duration-300 ${
                      idx === 10 || idx === 11 
                        ? 'bg-[#16A34A]' 
                        : 'bg-zinc-800 hover:bg-[#16A34A]/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* CARD 2 (Floating System Node status) */}
            <motion.div
              style={{
                x: card2X,
                y: card2Y,
                translateZ: 70,
              }}
              className="absolute -left-6 bottom-24 w-44 rounded-xl glass-panel-dark bg-zinc-950/95 shadow-xl p-4 border border-zinc-800/80 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="font-sans text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Fast Deploy</p>
                <p className="font-display text-xs font-bold text-white truncate">NextJS & AWS</p>
              </div>
            </motion.div>

            {/* CARD 3 (Floating Global Network) */}
            <motion.div
              style={{
                x: card3X,
                y: card3Y,
                translateZ: 90,
              }}
              className="absolute -right-4 top-16 w-48 rounded-xl bg-zinc-950 shadow-2xl p-4 border border-zinc-800 text-white flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#16A34A]/20 text-green-400 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
              </div>
              <div>
                <p className="font-sans text-[10px] font-semibold text-[#16A34A] uppercase tracking-wider">Global SEO</p>
                <p className="font-display text-xs font-bold text-white">100% Core Web</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
