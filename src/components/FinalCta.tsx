import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, Calendar, ArrowUpRight, 
  Check, Copy, Sparkles, MessageSquare 
} from 'lucide-react';

export default function FinalCta() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'clouqsolutions@gmail.com';
  const phone1 = '+91 63699 33795';
  const phone2 = '+91 93441 93184';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(`${phone1}, ${phone2}`);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent text-white relative overflow-hidden">
      {/* Heavy Mesh Gradients and grids */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Floating sparkles and particles */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded-full mb-6 text-[#16A34A] font-mono text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Launch Your Growth Engine</span>
        </div>

        {/* Headline & Subhead */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          Let's Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-emerald-400">
            Great Together.
          </span>
        </h2>
        
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mb-12 leading-relaxed">
          Ready to transform your ideas into reality? Book a free, no-obligation discovery session to receive a custom visual audit plan within 24 hours.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto mb-16">
          <a
            id="cta-consult-btn"
            href={`mailto:${email}?subject=Start%20a%20Project%20with%20ClouQ`}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-semibold px-8 py-4 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Free Consultation
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          
          <a
            id="cta-call-btn"
            href={`tel:${phone1.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-base font-semibold px-8 py-4 rounded-full border border-zinc-800 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5 text-[#16A34A]" />
            Schedule a Call
          </a>
        </div>

        {/* Contact Info blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-12 border-t border-zinc-900">
          
          {/* Email block */}
          <div className="bg-zinc-900/50 border border-zinc-900 rounded-2xl p-5 flex items-center justify-between group hover:border-[#16A34A]/20 transition-colors">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-[#16A34A] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-zinc-500 font-mono uppercase">Direct Email</span>
                <a href={`mailto:${email}`} className="block text-sm font-bold text-white hover:text-[#16A34A] transition-colors">
                  {email}
                </a>
              </div>
            </div>
            
            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="p-2.5 rounded-lg bg-zinc-950 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone block */}
          <div className="bg-zinc-900/50 border border-zinc-900 rounded-2xl p-5 flex items-center justify-between group hover:border-[#16A34A]/20 transition-colors">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-[#16A34A] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="block text-[10px] text-zinc-500 font-mono uppercase">Call / WhatsApp</span>
                <div className="flex flex-col">
                  <a href={`tel:${phone1.replace(/\s+/g, '')}`} className="block text-sm font-bold text-white hover:text-[#16A34A] transition-colors">
                    {phone1}
                  </a>
                  <a href={`tel:${phone2.replace(/\s+/g, '')}`} className="block text-sm font-bold text-white hover:text-[#16A34A] transition-colors mt-0.5">
                    {phone2}
                  </a>
                </div>
              </div>
            </div>

            <button
              id="copy-phone-btn"
              onClick={handleCopyPhone}
              className="p-2.5 rounded-lg bg-zinc-950 text-zinc-400 hover:text-white transition-colors cursor-pointer self-center"
              aria-label="Copy phone to clipboard"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
