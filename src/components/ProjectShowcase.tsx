import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Laptop, Smartphone, Palette, Eye, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

export default function ProjectShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'boutique',
      title: 'Aura Luxury Boutique',
      category: 'E-Commerce Website',
      description: 'A pixel-perfect, high-converting retail storefront featuring seamless checkout flows, custom cart logic, and aesthetic typography.',
      stats: '+142% Revenue Growth',
      image: 'from-green-600 to-emerald-800',
      accentColor: '#16A34A',
      deviceType: 'desktop'
    },
    {
      id: 'salon',
      title: 'Estelle Parlour & Spa',
      category: 'Brand Identity & Local SEO',
      description: 'Complete visual identity revamp, bespoke corporate guidelines, and optimized Google Business Profile to accelerate offline appointments.',
      stats: 'Rank #1 Local Search',
      image: 'from-zinc-900 to-zinc-800',
      accentColor: '#0A0A0A',
      deviceType: 'branding'
    },
    {
      id: 'saas',
      title: 'Zenith SaaS Analytics',
      category: 'Full Stack Dashboard',
      description: 'A heavy-duty corporate workspace housing active database pipelines, real-time tracking graphs, and custom authentication keys.',
      stats: '14ms API Response Time',
      image: 'from-emerald-800 to-green-950',
      accentColor: '#16A34A',
      deviceType: 'desktop'
    },
    {
      id: 'booking',
      title: 'EduSchedule Portal',
      category: 'Booking Mobile App',
      description: 'Sleek scheduler optimized for educational clinics and classrooms, providing drag-and-drop calendars and automatic SMS triggers.',
      stats: '4.9★ App Store Rating',
      image: 'from-green-600 to-teal-800',
      accentColor: '#16A34A',
      deviceType: 'mobile'
    }
  ];

  return (
    <section id="showcase" className="py-20 md:py-32 bg-transparent border-t border-zinc-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
              Project Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
              Our Digital Creations
            </h2>
            <p className="font-sans text-zinc-400 font-medium mt-4 max-w-xl">
              We design and build bespoke platforms that look incredible, operate flawlessly, and deliver substantial commercial returns for our clients.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-[#16A34A] group cursor-pointer transition-colors">
            <span>Explore case studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;
            return (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 hover:border-[#16A34A]/25 hover:shadow-2xl hover:shadow-[#16A34A]/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Project Metadata header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#16A34A] uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1 group-hover:text-[#16A34A] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="px-3.5 py-1 bg-zinc-950 rounded-full border border-zinc-800 font-mono text-xs font-bold text-zinc-300">
                    {project.stats}
                  </div>
                </div>

                {/* Device Mockup Visual Area */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-zinc-950 overflow-hidden shadow-inner flex items-center justify-center p-6 border border-zinc-800/80">
                  
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

                  {/* Render simulated high-fidelity mockups inside */}
                  {project.deviceType === 'desktop' && (
                    <div className="w-[90%] h-[85%] bg-zinc-950 rounded-t-xl border border-zinc-800 shadow-2xl flex flex-col relative overflow-hidden transform group-hover:scale-[1.03] transition-transform duration-500">
                      {/* Browser header bar */}
                      <div className="h-6 bg-zinc-900 border-b border-zinc-850 flex items-center px-3 gap-1 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]/80" />
                        <div className="w-24 h-3 bg-zinc-850 rounded mx-auto" />
                      </div>
                      
                      {/* Browser content preview */}
                      <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden text-zinc-400">
                        {project.id === 'boutique' ? (
                          <>
                            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                              <span className="font-display font-bold text-xs text-white">Aura.</span>
                              <span className="w-12 h-2 bg-zinc-800 rounded" />
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="h-20 bg-zinc-900 rounded-lg border border-zinc-850 p-2 flex flex-col justify-end">
                                <span className="text-[8px] text-white font-bold">Silk Lehenga</span>
                                <span className="text-[6px] text-zinc-500">₹24,999</span>
                              </div>
                              <div className="h-20 bg-zinc-900 rounded-lg border border-zinc-850 p-2 flex flex-col justify-end">
                                <span className="text-[8px] text-white font-bold">Linen Saree</span>
                                <span className="text-[6px] text-zinc-500">₹14,999</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between items-center">
                              <span className="font-mono text-[8px] text-[#16A34A]">DATA_LIVE: READY</span>
                              <span className="w-12 h-3 bg-green-500/20 text-green-400 rounded text-[6px] flex items-center justify-center font-bold">API ACTIVE</span>
                            </div>
                            <div className="h-16 bg-zinc-900 rounded border border-zinc-850 p-2 flex flex-col gap-1.5 justify-center">
                              <span className="w-16 h-2 bg-zinc-800 rounded" />
                              <div className="flex gap-1 items-end h-8">
                                {[20, 40, 35, 60, 45, 75, 90, 80].map((v, i) => (
                                  <div key={i} className="flex-1 bg-[#16A34A]" style={{ height: `${v}%` }} />
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {project.deviceType === 'mobile' && (
                    <div className="w-[45%] sm:w-[35%] h-[90%] bg-zinc-950 rounded-2xl border-4 border-zinc-800 shadow-2xl flex flex-col overflow-hidden relative transform group-hover:scale-[1.05] transition-transform duration-500">
                      {/* Notch */}
                      <div className="h-4 bg-zinc-800 w-16 mx-auto rounded-b-md mb-2 shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-zinc-950" />
                      </div>
                      
                      {/* Mobile App UI content */}
                      <div className="flex-1 px-3 flex flex-col gap-2 overflow-hidden text-[8px] text-zinc-400">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-white">EduSchedule</span>
                          <span className="w-6 h-1 bg-zinc-800 rounded" />
                        </div>
                        <div className="bg-zinc-900 rounded p-1.5 border border-zinc-850">
                          <span className="block text-zinc-500">Selected Date</span>
                          <span className="font-bold text-white">June 25, 2026</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          {['10:00 AM - Dr. Rose', '11:30 AM - Clinique'].map((time, i) => (
                            <div key={i} className="bg-green-500/10 border border-green-500/20 text-[#16A34A] p-1 rounded flex justify-between items-center">
                              <span>{time}</span>
                              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {project.deviceType === 'branding' && (
                    <div className="w-[85%] h-[80%] bg-zinc-900/40 backdrop-blur-md rounded-xl border border-zinc-800/80 shadow-2xl p-4 sm:p-6 flex flex-col justify-between transform group-hover:scale-[1.03] transition-transform duration-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-mono text-[9px] text-zinc-400">ESTELLE BRAND KIT</span>
                          <p className="font-display text-xl font-bold text-white tracking-tight leading-none mt-1">Estelle Parlour</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-550/20 flex items-center justify-center text-[10px] font-bold text-white border border-emerald-500/20">E</div>
                      </div>
                      
                      {/* Brand palette */}
                      <div className="flex gap-2">
                        {['#F3E8FF', '#FAF5FF', '#090514', '#16A34A'].map((col, idx) => (
                          <div key={idx} className="flex-1 flex flex-col gap-1 items-center">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/10" style={{ backgroundColor: col }} />
                            <span className="font-mono text-[7px] text-zinc-400">{col}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Eye Icon Hover Overlay */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-sm flex items-center justify-center z-20"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                          <Eye className="w-5 h-5" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Description (collapsible or elegant details) */}
                <div className="mt-6 flex flex-col">
                  <p className="font-sans text-sm text-zinc-400 font-medium leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Expand / Learn More on hover indicator */}
                  <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="font-sans text-xs font-bold text-zinc-500 group-hover:text-[#16A34A] transition-colors">
                      View Project Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#16A34A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
