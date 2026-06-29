import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, Smartphone, Database, ShoppingBag, 
  Palette, ArrowRight, ArrowUpRight, CheckCircle2, DollarSign, 
  Users, Layers, Zap, Star
} from 'lucide-react';
import { BuildType, BuildOption } from '../types';

interface InteractiveBuilderProps {
  onStartProjectWithBuild: (buildType: BuildType) => void;
}

export default function InteractiveBuilder({ onStartProjectWithBuild }: InteractiveBuilderProps) {
  const [selected, setSelected] = useState<BuildType>('website');

  const options: BuildOption[] = [
    {
      id: 'website',
      label: 'Website',
      description: 'Ultra-fast marketing websites, portfolio pages, and landing hubs engineered for high conversion rates.',
      features: ['UI/UX Design', 'Website Development', 'SEO Optimization', 'Local SEO', 'Website Maintenance'],
      mockupTitle: 'Aura Boutique Landing',
      mockupSubtitle: 'https://auraboutique.in',
      mockupStats: [
        { label: 'Core Web Vitals', value: '100/100' },
        { label: 'Load Speed', value: '0.4s' },
        { label: 'Conversion Rate', value: '5.2%' }
      ],
      accentGradient: 'from-emerald-950/80 via-zinc-900/80 to-zinc-950 border border-emerald-500/20'
    },
    {
      id: 'mobile_app',
      label: 'Mobile App',
      description: 'Stunning iOS and Android applications built natively to capture and retain customers on the go.',
      features: ['Full Stack Development', 'UI/UX Design', 'Cloud Solutions', 'Fast Delivery', 'Continuous Maintenance'],
      mockupTitle: 'Pulse Fitness App',
      mockupSubtitle: 'iOS & Android App Store',
      mockupStats: [
        { label: 'Active Users', value: '45.2k' },
        { label: 'App Rating', value: '4.9★' },
        { label: 'Retention Rate', value: '78%' }
      ],
      accentGradient: 'from-teal-950/80 via-zinc-900/80 to-zinc-950 border border-teal-500/20'
    },
    {
      id: 'saas_product',
      label: 'SaaS Product',
      description: 'End-to-end cloud platforms with complex database flows, analytics boards, and recurring billing models.',
      features: ['Full Stack Development', 'Cloud Solutions', 'SaaS Development', 'Scalable Architecture', 'Dedicated Support'],
      mockupTitle: 'ClouQ CRM Dashboard',
      mockupSubtitle: 'https://app.clouq.io',
      mockupStats: [
        { label: 'Database Sync', value: 'Realtime' },
        { label: 'Monthly Traffic', value: '2.5M' },
        { label: 'API Latency', value: '14ms' }
      ],
      accentGradient: 'from-green-950/80 via-zinc-900/80 to-zinc-950 border border-[#16A34A]/20'
    },
    {
      id: 'ecommerce_store',
      label: 'E-Commerce Store',
      description: 'Full-featured online shops engineered for maximum sales volume, inventory sync, and fluid checkouts.',
      features: ['E-Commerce Development', 'Website Development', 'Google Business Profile', 'Modern Tech Stack', 'SEO Optimization'],
      mockupTitle: 'Verdant Organic Shop',
      mockupSubtitle: 'https://verdantorganic.in',
      mockupStats: [
        { label: 'Cart Success', value: '94%' },
        { label: 'Secure Gateways', value: 'Razorpay/UPI' },
        { label: 'Sales Growth', value: '+42% YoY' }
      ],
      accentGradient: 'from-lime-950/80 via-zinc-900/80 to-zinc-950 border border-lime-500/20'
    },
    {
      id: 'brand_identity',
      label: 'Brand Identity',
      description: 'Bespoke corporate identity, stunning typography layouts, logo craft guidelines, and brand design assets.',
      features: ['Business Branding', 'UI/UX Design', 'Google Business Profile Optimization', '100% Custom Solutions', 'Brand Consistency'],
      mockupTitle: 'ClouQ Brand Guidelines',
      mockupSubtitle: 'PDF Design Spec & Kit',
      mockupStats: [
        { label: 'Custom Fonts', value: 'DM Sans & Space' },
        { label: 'Colors Grid', value: '6-Tone Scale' },
        { label: 'Deliverables', value: 'Vector Source' }
      ],
      accentGradient: 'from-emerald-950/80 via-zinc-900/80 to-zinc-950 border border-emerald-500/20'
    }
  ];

  const activeOption = options.find(o => o.id === selected) || options[0];

  const getIcon = (id: BuildType, className: string) => {
    switch (id) {
      case 'website': return <Laptop className={className} />;
      case 'mobile_app': return <Smartphone className={className} />;
      case 'saas_product': return <Database className={className} />;
      case 'ecommerce_store': return <ShoppingBag className={className} />;
      case 'brand_identity': return <Palette className={className} />;
    }
  };

  return (
    <section id="builder" className="py-20 md:py-32 bg-transparent border-t border-zinc-900/40 relative overflow-hidden">
      {/* Decorative vector grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Interactive Product Builder
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            What do you want to build?
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-4">
            Select a digital format below to explore custom solutions, premium features, and real-time interactive mockups designed for your exact business model.
          </p>
        </div>

        {/* Builder Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Selector Menu (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <button
                  key={option.id}
                  id={`builder-opt-${option.id}`}
                  onClick={() => setSelected(option.id)}
                  className={`group relative text-left p-5 rounded-2xl transition-all duration-300 border flex items-center gap-4 cursor-pointer overflow-hidden ${
                    isSelected 
                      ? 'border-[#16A34A]/30 text-white shadow-xl shadow-[#16A34A]/5' 
                      : 'bg-zinc-900/40 hover:bg-zinc-800/40 border-zinc-800/80 text-zinc-300'
                  }`}
                >
                  {/* Selected Indicator background slide */}
                  {isSelected && (
                    <motion.div 
                      layoutId="builderActiveBg"
                      className="absolute inset-0 bg-zinc-900/80 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isSelected 
                      ? 'bg-[#16A34A] text-white' 
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 group-hover:text-zinc-300'
                  }`}>
                    {getIcon(option.id, "w-6 h-6")}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="font-display text-base font-bold flex items-center gap-1.5">
                      {option.label}
                      {isSelected && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                      )}
                    </span>
                    <p className={`font-sans text-xs mt-0.5 truncate ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {option.description}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${
                    isSelected 
                      ? 'text-[#16A34A] translate-x-1' 
                      : 'text-zinc-600 group-hover:translate-x-1 group-hover:text-zinc-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Display (Col span 7) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {/* Visual Glassmorphic Dashboard Showcase */}
                <div className="rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-800/80 flex flex-col justify-between min-h-[460px] bg-zinc-900/60 backdrop-blur-md">
                  
                  {/* Top: Header of the Mockup */}
                  <div>
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80" />
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <span className="w-3 h-3 rounded-full bg-[#16A34A]/80" />
                        </div>
                        <span className="font-mono text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-md">
                          {activeOption.mockupSubtitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#16A34A] text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-[#16A34A] text-[#16A34A]" />
                        <span>Premium build</span>
                      </div>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                      {activeOption.mockupTitle}
                    </h4>
                    <p className="font-sans text-sm text-zinc-400 font-medium leading-relaxed mb-6">
                      {activeOption.description}
                    </p>
                  </div>

                  {/* Center: Dynamic Mockup Visualization */}
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${activeOption.accentGradient} text-white mb-6 relative overflow-hidden shadow-md`}>
                    {/* Background abstract shape lines */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    
                    {/* Inner Mockup Card */}
                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider opacity-80 text-zinc-300">Interactive Blueprint</span>
                        <p className="font-display text-lg font-bold mt-0.5">Core Success Metrics</p>
                      </div>
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-xs font-bold border border-white/10">
                        99.9% Sincere Craft
                      </div>
                    </div>

                    {/* Stats Boxes */}
                    <div className="grid grid-cols-3 gap-3 mt-6 relative z-10">
                      {activeOption.mockupStats.map((stat, idx) => (
                        <div key={idx} className="bg-zinc-950/50 backdrop-blur-md rounded-xl p-3 border border-white/10">
                          <span className="block text-[10px] text-zinc-300 font-sans font-medium opacity-80 truncate">
                            {stat.label}
                          </span>
                          <span className="block text-base sm:text-lg font-bold font-display mt-0.5 truncate text-white">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: List of automatic relevant services included */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {activeOption.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded-full"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800">
                      <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
                        <Star className="w-4 h-4 text-[#16A34A] fill-[#16A34A]" />
                        <span>Ready in 10-14 business days</span>
                      </div>
                      
                      <button
                        id="builder-cta"
                        onClick={() => onStartProjectWithBuild(activeOption.id)}
                        className="px-5 py-2.5 bg-white text-zinc-950 rounded-full text-xs font-bold hover:bg-[#16A34A] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md font-sans"
                      >
                        Start {activeOption.label} Project
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}
