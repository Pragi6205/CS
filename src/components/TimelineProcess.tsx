import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Paintbrush, Code2, Rocket } from 'lucide-react';

export default function TimelineProcess() {
  const steps = [
    {
      num: '01',
      phase: 'Discover & Blueprint',
      title: 'Mapping Market Positioning',
      desc: 'We kick off with a detailed consultation to audit your competition, map your target client intent, and draft a detailed development blueprint.',
      icon: <MessageSquare className="w-5 h-5 text-[#16A34A]" />,
      features: ['Competitor Analysis', 'Scope & Timelines Map', 'Technical Blueprint']
    },
    {
      num: '02',
      phase: 'Interactive Design',
      title: 'High-Fidelity UI/UX Prototyping',
      desc: 'We design pixel-perfect, custom layouts on Figma. Every color palette, serif font, and spacing grid is curated to command immediate buyer trust.',
      icon: <Paintbrush className="w-5 h-5 text-[#16A34A]" />,
      features: ['Wireframes Design', 'Premium Visual Styling', 'Feedback Interactive Sessions']
    },
    {
      num: '03',
      phase: 'Clean Development',
      title: 'Production-Grade Coding',
      desc: 'Our engineers build your design using lightning-fast React, TypeScript, and Tailwind CSS. Clean structures ensure search engine optimization.',
      icon: <Code2 className="w-5 h-5 text-[#16A34A]" />,
      features: ['TypeScript Precision', 'Semantic Layout Code', 'Optimized SEO Schemas']
    },
    {
      num: '04',
      phase: 'Launch & SEO Optimization',
      title: 'Global Cloud Deployments',
      desc: 'We launch your product on AWS, configure Cloudflare defenses, optimize Google Business listings, and provide continuous updates.',
      icon: <Rocket className="w-5 h-5 text-[#16A34A]" />,
      features: ['Serverless Deployments', 'Google Business Verification', 'Continuous 24/7 Monitoring']
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      {/* Background vector lines */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Development Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            How We Build Your Vision
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-4">
            We follow a systematic, premium delivery model to transition your project from initial concept to high-converting global launch.
          </p>
        </div>

        {/* Timeline Path Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800/80 -translate-x-1/2 z-0" />

          {/* Steps list */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.num} 
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 relative ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Step Card Content (half screen) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] pl-8 md:pl-0"
                  >
                    <div className="bg-zinc-900/40 border border-zinc-800/80 hover:border-[#16A34A]/25 rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-300 relative">
                      {/* Badge info */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#16A34A] uppercase tracking-wider">
                          Phase {step.num}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-1">{step.phase}</h3>
                      <h4 className="font-display text-sm font-semibold text-zinc-500 mb-3">{step.title}</h4>
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed mb-6">
                        {step.desc}
                      </p>

                      {/* Included specs */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                        {step.features.map((feat, fIdx) => (
                          <span key={fIdx} className="bg-zinc-950 border border-zinc-800 font-sans text-[10px] font-bold text-zinc-400 px-2 py-0.5 rounded-md">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-auto -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-4 border-zinc-850 shadow-lg flex items-center justify-center text-[10px] font-bold text-[#16A34A] z-20">
                    {step.num}
                  </div>

                  {/* Empty balance spacer column for grid balance (desktop only) */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
