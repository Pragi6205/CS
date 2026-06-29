import { motion } from 'motion/react';
import { 
  Zap, Code2, Globe, Sparkles, 
  Clock, HeartHandshake, ArrowUpRight 
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      num: '01',
      title: '100% Custom Solutions',
      description: 'We strictly ban cheap templates. Every line of code, wireframe, and visual asset is hand-tailored to represent your unique value proposition.',
      icon: <Sparkles className="w-5 h-5 text-[#16A34A]" />
    },
    {
      num: '02',
      title: 'Modern Tech Stack',
      description: 'We build with state-of-the-art architectures (React, Next.js, Node.js, AWS) ensuring lightning-fast load speeds and seamless user experiences.',
      icon: <Code2 className="w-5 h-5 text-[#16A34A]" />
    },
    {
      num: '03',
      title: 'Scalable Architecture',
      description: 'Engineered for infinite growth. Our server setups and cloud databases expand automatically as your customer volume scales upwards.',
      icon: <Globe className="w-5 h-5 text-[#16A34A]" />
    },
    {
      num: '04',
      title: 'Fast Turnaround',
      description: 'No endless cycles. We deploy high-fidelity MVPs and marketing suites in record timing, averaging 10 to 14 business days from kickoff.',
      icon: <Clock className="w-5 h-5 text-[#16A34A]" />
    },
    {
      num: '05',
      title: 'Dedicated Support',
      description: 'Direct communication channels. You get immediate, 24/7 access to our senior design and engineering team—no frustrating account managers.',
      icon: <HeartHandshake className="w-5 h-5 text-[#16A34A]" />
    }
  ];

  return (
    <section id="why-clouq" className="py-20 md:py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="font-mono text-xs font-bold text-[#16A34A] uppercase tracking-widest border border-[#16A34A]/20 px-3 py-1 rounded-full bg-[#16A34A]/5">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-6 leading-tight">
            Designed for those who <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-emerald-500">
              refuse generic.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 mt-6 max-w-xl leading-relaxed">
            Your digital presence is either a trust-magnet or a commercial barrier. We build high-end software and brand architectures that command premium pricing and establish immediate credibility.
          </p>
        </div>

        {/* Features Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-zinc-950/55 border border-zinc-900 rounded-3xl p-6 sm:p-8 hover:border-[#16A34A]/30 hover:bg-zinc-900/30 transition-all duration-300 group flex flex-col justify-between min-h-[260px] relative overflow-hidden"
            >
              {/* Corner Glow overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/15 transition-all duration-300 pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  {feat.icon}
                </div>
                <span className="font-display text-xs font-bold text-zinc-600 group-hover:text-[#16A34A] transition-colors">
                  {feat.num}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-[#16A34A] transition-colors">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Visual card to fill Bento layout inside dark section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-tr from-[#16A34A] to-emerald-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] relative overflow-hidden border border-[#16A34A]/20"
          >
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            <div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-200 uppercase">Consulting Suite</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1.5 leading-snug">
                Ready to review your project idea with our senior director?
              </h3>
            </div>
            
            <a 
              href="mailto:clouqsolutions@gmail.com"
              className="mt-6 flex items-center justify-between bg-white text-zinc-950 font-bold text-xs px-5 py-3 rounded-full hover:bg-zinc-100 transition-colors shadow-lg"
            >
              <span>Book Free Discovery Session</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
