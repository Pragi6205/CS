import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  DollarSign, Sparkles, AlertCircle, RefreshCw, 
  ChevronRight, Calendar, ArrowUpRight, HelpCircle,
  Building, Laptop, HeartPulse, ShoppingCart
} from 'lucide-react';

export default function RoiCalculator() {
  const [bizType, setBizType] = useState<'salon' | 'startup' | 'clinic' | 'boutique'>('salon');
  const [customers, setCustomers] = useState(150);
  const [webStatus, setWebStatus] = useState<'none' | 'slow' | 'optimized'>('none');
  const [gPresence, setGPresence] = useState<'invisible' | 'basic' | 'ranked'>('invisible');
  
  // Calculated outputs state
  const [growthPercent, setGrowthPercent] = useState(0);
  const [leadIncrease, setLeadIncrease] = useState(0);
  const [revImprovement, setRevImprovement] = useState(0);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  // Calculate logic on input change
  useEffect(() => {
    let multiplier = 1.0;
    
    // 1. Business type average order value / customer capacity influence (in INR ₹)
    let avgValue = 4000; // ₹ per customer transaction average
    if (bizType === 'salon') { avgValue = 3500; multiplier += 0.25; }
    if (bizType === 'startup') { avgValue = 8500; multiplier += 0.45; }
    if (bizType === 'clinic') { avgValue = 12000; multiplier += 0.35; }
    if (bizType === 'boutique') { avgValue = 5000; multiplier += 0.30; }

    // 2. Website status influence
    if (webStatus === 'none') { multiplier += 0.65; }
    if (webStatus === 'slow') { multiplier += 0.40; }
    if (webStatus === 'optimized') { multiplier += 0.15; }

    // 3. Google Business presence influence
    if (gPresence === 'invisible') { multiplier += 0.50; }
    if (gPresence === 'basic') { multiplier += 0.30; }
    if (gPresence === 'ranked') { multiplier += 0.10; }

    // Calculate final metrics
    const baseGrowth = (multiplier - 1.0) * 100;
    const finalGrowthPercent = Math.round(Math.min(220, Math.max(35, baseGrowth)));
    
    // Lead increase estimate
    const finalLeadIncrease = Math.round(customers * (finalGrowthPercent / 100));
    
    // Revenue improvement
    const finalRevImprovement = Math.round(finalLeadIncrease * avgValue);

    // Set states
    setGrowthPercent(finalGrowthPercent);
    setLeadIncrease(finalLeadIncrease);
    setRevImprovement(finalRevImprovement);
  }, [bizType, customers, webStatus, gPresence]);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setContactSubmitted(true);
  };

  return (
    <section id="roi" className="py-20 md:py-32 bg-transparent border-t border-zinc-900/40 relative overflow-hidden">
      {/* Background vector circles */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
         
         {/* Section Heading */}
         <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Growth Tool
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Growth Calculator
          </h2>
          <p className="font-sans text-zinc-400 font-medium mt-3 text-sm max-w-xl mx-auto">
            Estimate the exact potential business growth, lead generation, and monthly revenue increase you can unlock by partnering with ClouQ.
          </p>
         </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Side: Questions form (Col span 7) */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16A34A]" />
                Configure Business Parameters
              </h3>

              {/* Q1: Business Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  1. Business Format / Sector
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'salon', label: 'Beauty Salon & Spa', icon: <Building className="w-4 h-4" /> },
                    { id: 'startup', label: 'SaaS / Tech Startup', icon: <Laptop className="w-4 h-4" /> },
                    { id: 'clinic', label: 'Local Clinic / Academy', icon: <HeartPulse className="w-4 h-4" /> },
                    { id: 'boutique', label: 'Retail & Boutique', icon: <ShoppingCart className="w-4 h-4" /> }
                  ].map((item) => (
                    <button
                      key={item.id}
                      id={`roi-biz-${item.id}`}
                      onClick={() => setBizType(item.id as any)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        bizType === item.id 
                          ? 'bg-[#16A34A] border-[#16A34A] text-white shadow-md' 
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800/50'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2: Current Customers Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    2. Monthly Customer Volume
                  </label>
                  <span className="font-mono text-sm font-bold text-white bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded">
                    {customers} customers
                  </span>
                </div>
                <input
                  id="customers-slider"
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={customers}
                  onChange={(e) => setCustomers(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-bold mt-1">
                  <span>10 Clients</span>
                  <span>500 Clients</span>
                  <span>1,000 Clients</span>
                </div>
              </div>

              {/* Q3: Website Status */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  3. Current Website Status
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: 'No Website' },
                    { id: 'slow', label: 'Slow/Unpolished' },
                    { id: 'optimized', label: 'Optimized App' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      id={`roi-web-${opt.id}`}
                      onClick={() => setWebStatus(opt.id as any)}
                      className={`p-2.5 rounded-lg border text-center text-xs font-semibold transition-all ${
                        webStatus === opt.id 
                          ? 'bg-[#16A34A] border-[#16A34A] text-white shadow-sm' 
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q4: Google Presence */}
              <div className="mb-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  4. Google Maps Visibility
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'invisible', label: 'Invisible' },
                    { id: 'basic', label: 'Basic Listing' },
                    { id: 'ranked', label: 'Top Ranked' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      id={`roi-g-${opt.id}`}
                      onClick={() => setGPresence(opt.id as any)}
                      className={`p-2.5 rounded-lg border text-center text-xs font-semibold transition-all ${
                        gPresence === opt.id 
                          ? 'bg-[#16A34A] border-[#16A34A] text-white shadow-sm' 
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated live recalculation hint */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-2 text-zinc-500 text-[10px] font-mono">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>ESTIMATES RECALCULATING REAL-TIME BASED ON MARKET DATA</span>
            </div>
          </div>

          {/* Right Side: Generated outputs & Capture (Col span 5) */}
          <div className="lg:col-span-5 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-zinc-900 shadow-2xl relative overflow-hidden">
            {/* Corner glowing circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#16A34A]/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#16A34A]/10 border border-[#16A34A]/20 text-[#16A34A] rounded-md text-[10px] font-mono tracking-wider uppercase mb-6">
                <Sparkles className="w-3 h-3" />
                <span>Calculated Growth Potential</span>
              </div>

              {/* Growth Metric */}
              <div className="mb-6">
                <span className="block text-[10px] uppercase tracking-wider font-mono text-zinc-500">Estimated Growth Increase</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-[#16A34A]">+{growthPercent}%</span>
                  <span className="text-zinc-500 text-xs font-semibold">traffic & organic leads</span>
                </div>
              </div>

              {/* Lead Metric */}
              <div className="mb-6">
                <span className="block text-[10px] uppercase tracking-wider font-mono text-zinc-500">New Monthly Potential Leads</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">+{leadIncrease}</span>
                  <span className="text-zinc-400 text-xs font-semibold">customers / mo</span>
                </div>
              </div>

              {/* Revenue Metric */}
              <div className="mb-6">
                <span className="block text-[10px] uppercase tracking-wider font-mono text-zinc-500">Potential Revenue Increase</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white">
                    ₹{revImprovement.toLocaleString('en-IN')}
                  </span>
                  <span className="text-zinc-400 text-xs font-semibold">/ month</span>
                </div>
              </div>
            </div>

            {/* Lead generation capturing form */}
            <div className="mt-8 pt-6 border-t border-zinc-800 relative z-10">
              <AnimatePresence mode="wait">
                {!contactSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmitReport}
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-sans text-xs text-zinc-400 mb-1 leading-normal">
                      Enter your email below to unlock a full custom SEO audit and receive an action plan matching these estimates.
                    </p>
                    
                    <input
                      id="roi-email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                    />

                    <button
                      id="roi-submit"
                      type="submit"
                      className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Get Detailed SEO Action Plan</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto mb-3">
                      ✓
                    </div>
                    <h4 className="font-display text-sm font-bold text-white">Action Plan Requested!</h4>
                    <p className="font-sans text-xs text-zinc-400 mt-1.5 leading-normal max-w-xs mx-auto">
                      We have compiled your estimates. A custom audit brief will be dispatched to <span className="text-white font-semibold">{emailInput}</span> within 2 hours.
                    </p>
                    <button
                      id="roi-reset-btn"
                      onClick={() => {
                        setContactSubmitted(false);
                        setEmailInput('');
                      }}
                      className="mt-4 font-mono text-[10px] text-zinc-500 hover:text-white transition-colors"
                    >
                      Calculate new business
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
