import { motion } from 'motion/react';
import { 
  Code2, Compass, Cloud, MapPin, 
  Search, ShieldAlert, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

export default function BentoServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-transparent border-t border-zinc-900/40 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Custom Digital Capabilities <br />
            Engineered For Absolute Growth
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-4 max-w-xl">
            We don't use templates. We craft tailored, high-performance, and visually distinctive solutions using the industry's most modern tech stack.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {/* Card 1: Full Stack Development (Large - span 4) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px] hover:border-[#16A34A]/25 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-300"
          >
            {/* Ambient Background Glow on hover */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#16A34A]/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Visual Panel representing code block */}
            <div className="absolute right-6 top-6 bottom-6 w-[45%] hidden lg:flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-xl select-none font-mono text-[10px] text-zinc-400">
              <div className="flex gap-1.5 pb-3 border-b border-zinc-900">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]/80" />
              </div>
              <div className="flex-1 py-4 flex flex-col gap-2 overflow-hidden leading-relaxed">
                <span className="text-green-400">const deployDetails = &#123;</span>
                <span className="pl-4">framework: <span className="text-amber-400">"Next.js"</span>,</span>
                <span className="pl-4">styling: <span className="text-amber-400">"Tailwind CSS"</span>,</span>
                <span className="pl-4">database: <span className="text-amber-400">"PostgreSQL"</span>,</span>
                <span className="pl-4">performance: <span className="text-green-400">99.8</span></span>
                <span>&#125;;</span>
                <span className="text-zinc-500 mt-2">// Launching AWS Pipeline...</span>
                <span className="text-emerald-500 font-bold mt-1">✓ Build Compiled Successfully</span>
                <span className="text-zinc-500">✓ Ingress secure - port 3000</span>
              </div>
            </div>

            <div className="relative z-10 w-1/2">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-6 shadow-md border border-zinc-800">
                <Code2 className="w-6 h-6 text-[#16A34A]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Full Stack Development</h3>
              <p className="font-sans text-sm text-zinc-400 font-medium max-w-md mb-6 leading-relaxed">
                Robust, fast backends coupled with highly responsive frontends. We assemble production-grade web systems from end to end using Node.js, Express, and modern DB structures.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-zinc-800 w-1/2">
              {['Next.js / React', 'REST & GraphQL APIs', 'PostgreSQL / MongoDB', 'Security & Encryption'].map((tech) => (
                <span key={tech} className="bg-zinc-950 font-sans text-[11px] font-bold text-zinc-300 px-2.5 py-1 rounded-full border border-zinc-800">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: UI/UX Design (Medium - span 2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px] hover:border-[#16A34A]/25 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-300"
          >
            <div className="absolute bottom-0 right-0 left-0 h-[40%] bg-gradient-to-t from-[#16A34A]/5 to-transparent pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-[#16A34A] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="font-sans text-sm text-zinc-400 font-medium leading-relaxed">
                Wireframing, prototyping, and design kits styled to emphasize high aesthetic value. We craft bespoke visual patterns aligned with Stripe & Apple standards.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800 mt-6">
              <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#16A34A] transition-colors flex items-center gap-1">
                Figma & Framer Workflows
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

          {/* Card 3: Cloud Solutions (Medium - span 2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[300px] hover:border-[#16A34A]/25 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-[#16A34A] flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Cloud Solutions</h3>
              <p className="font-sans text-sm text-zinc-400 font-medium leading-relaxed">
                Deployment schemas built on AWS and Google Cloud Platform. Scalable server architectures configured to handle heavy user traffic without down-times.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800 mt-6">
              <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#16A34A] transition-colors flex items-center gap-1">
                99.99% Server Latencies
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

          {/* Card 4: Google Business Profile (Medium - span 2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[300px] hover:border-[#16A34A]/25 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-[#16A34A] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">GBP Optimization</h3>
              <p className="font-sans text-sm text-zinc-400 font-medium leading-relaxed">
                Accelerate localized engagement. We optimize your business layout on Google Maps to generate consistent phone calls and walk-ins.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800 mt-6">
              <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#16A34A] transition-colors flex items-center gap-1">
                Verified Search Status
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

          {/* Card 5: SEO & SEO (Medium - span 2) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group min-h-[300px] hover:border-[#16A34A]/25 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 text-[#16A34A] flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">SEO Optimization</h3>
              <p className="font-sans text-sm text-zinc-400 font-medium leading-relaxed">
                Rank high on Google. We deploy clean schema structures and keyword graphs to push your digital assets directly into top ranking slots.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800 mt-6">
              <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#16A34A] transition-colors flex items-center gap-1">
                Organic Lead Acceleration
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
