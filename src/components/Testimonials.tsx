import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const list: TestimonialItem[] = [
    {
      id: 'samantha',
      name: 'Samantha Roy',
      role: 'Founder',
      company: 'Estelle Premium Spa & Parlour',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
      content: 'ClouQ redesigned our entire online scheduling and brand presentation. Within weeks of optimizing our Google listing and launching the custom booking system, our monthly spa appointments skyrocketed by 84%. They are absolute masterminds!',
      rating: 5
    },
    {
      id: 'vikram',
      name: 'Vikram Sengupta',
      role: 'Co-Founder',
      company: 'Vertex SaaS Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      content: 'Their full stack engineering capabilities are elite. We needed a complex multi-tenant corporate dashboard completed on a tight schedule. ClouQ delivered a beautifully animated, fully responsive React interface with secure Auth in exactly 14 days.',
      rating: 5
    },
    {
      id: 'ananya',
      name: 'Ananya Gupta',
      role: 'Creative Director',
      company: 'Aura Luxury Boutique',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      content: 'Our original shopify template looked incredibly generic. ClouQ hand-crafted a bespoke, lightning-fast luxury retail platform that perfectly matches our high-end fashion catalog. Our average order checkout values instantly surged by 42%.',
      rating: 5
    },
    {
      id: 'raghav',
      name: 'Dr. Raghav Kumar',
      role: 'Director',
      company: 'Apex Educational Academy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
      content: 'I was hesitant to work with an agency, but ClouQ immediately earned our trust. Their communication is responsive, and they build with extreme precision. The custom student calendar portal they deployed operates flawlessly.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % list.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [list.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % list.length);
  };

  const current = list[activeIdx];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Trusted By Real Visionaries
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-4">
            Hear directly from the startup founders, boutique owners, and local business pioneers who scaled their commercial metrics using our digital architecture.
          </p>
        </div>

        {/* Carousel Visual Area */}
        <div className="max-w-4xl mx-auto relative min-h-[380px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* Dark Testimonial Panel */}
              <div className="bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-zinc-850 relative flex flex-col justify-between min-h-[300px]">
                
                {/* Floating Quote Icon */}
                <div className="absolute top-8 right-8 text-[#16A34A]/5 hidden sm:block">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="font-sans text-base sm:text-lg text-zinc-200 leading-relaxed font-medium mb-8">
                  "{current.content}"
                </blockquote>

                {/* Reviewer Meta info */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/60">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950 shrink-0">
                    <img 
                      src={current.avatar} 
                      alt={current.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-display font-bold text-white text-base">
                      {current.name}
                    </cite>
                    <p className="font-sans text-xs text-zinc-500 mt-0.5">
                      {current.role} &mdash; <span className="text-zinc-300 font-medium">{current.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls indicators */}
          <div className="flex items-center justify-between mt-8 px-4">
            {/* Dots */}
            <div className="flex gap-1.5">
              {list.map((_, idx) => (
                <button
                  key={idx}
                  id={`testi-dot-${idx}`}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIdx === idx ? 'w-6 bg-[#16A34A]' : 'w-2 bg-zinc-800 hover:bg-zinc-700'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                id="testi-prev-btn"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors shadow-sm cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                id="testi-next-btn"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors shadow-sm cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
