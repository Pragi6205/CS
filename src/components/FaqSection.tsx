import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What makes ClouQ Solutions different from other agencies?',
      answer: 'We strictly ban bloated templates, drag-and-drop builders, and low-quality generic code. Everything we construct is coded completely from scratch using high-speed technologies like React, Next.js, TypeScript, and AWS. This ensures your platform operates with perfect Core Web Vitals, loads in under 0.4 seconds, and ranks at the top of search listings.'
    },
    {
      id: 'faq-2',
      question: 'How long does a standard web or app development project take?',
      answer: 'We operate in rapid, agile sprints. A high-end boutique storefront, local business web hub, or branding strategy is typically finalized and deployed in 10 to 14 business days. Comprehensive full-stack SaaS software, customized databases, and cross-platform mobile apps generally take between 3 and 5 weeks.'
    },
    {
      id: 'faq-3',
      question: 'Do you configure Google Business Profile (GBP) and SEO?',
      answer: 'Absolutely. Local search visibility is core to our service. We register your business, optimize structural metadata, create local search schema markers, and fine-tune your Google Business Profile to accelerate organic local search results, map views, and consistent phone calls.'
    },
    {
      id: 'faq-4',
      question: 'What happens after launching? Do you provide maintenance?',
      answer: 'Yes, we provide premium monthly maintenance plans that cover Cloudflare web firewall management, automated database backups, code updates, monthly analytical reviews, and direct developer communication channels for instant features support.'
    },
    {
      id: 'faq-5',
      question: 'What is the pricing model for a custom build?',
      answer: 'Since every client receives a 100% custom-designed asset, our pricing is quoted based on your exact scope, performance standards, and deliverables list. We provide high-fidelity estimates. Book a free consultation with our creative director to get a detailed proposal within 24 hours.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      {/* Background vector lines */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Everything You Need To Know
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-4">
            Have questions about our custom workflows, delivery schedules, technologies, or support structures? Find instant answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                id={faq.id}
                className={`transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? 'bg-zinc-900/50 border border-[#16A34A]/25 shadow-lg shadow-[#16A34A]/2' 
                    : 'bg-zinc-900/20 border border-zinc-800/80 hover:border-zinc-700/80'
                }`}
              >
                {/* Header toggle button */}
                <button
                  id={`btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-white hover:text-[#16A34A] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-[#16A34A] text-white' : 'bg-zinc-950 text-zinc-400 border border-zinc-800'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-zinc-800/60 font-sans text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
