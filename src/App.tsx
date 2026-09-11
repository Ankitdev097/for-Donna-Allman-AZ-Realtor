import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PhoneOff,
  Clock,
  UserMinus,
  CheckCircle2,
  CalendarCheck,
  PhoneCall,
  Download,
  Mail,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';

export default function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const emailAddress = "ankit@agentbydesign.in";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenEmailApp = () => {
    window.location.href = `mailto:${emailAddress}?subject=AI%20Receptionist%20Setup%20Call`;
    setIsEmailModalOpen(false);
  };

  const faqs = [
    {
      question: "Do people trust enough to talk to AI?",
      answer: "Yes. Modern voice AI has reached a point where it sounds indistinguishable from a real human, complete with natural pauses and inflections. Most callers don't even realize they aren't speaking to a live receptionist. They get their questions answered instantly, which builds trust faster than sending them to voicemail."
    },
    {
      question: "Is this hard to install?",
      answer: "Not at all. I've designed this workflow to be as plug-and-play as possible. Plus, if you reply to my message, I will personally help you install and customize it for your business during a free 9-minute call."
    },
    {
      question: "Why are you giving this away for free?",
      answer: "I build bespoke AI systems for real estate professionals. I've found that the best way to demonstrate value is to actually build something custom for you upfront. If you love this setup and want more advanced automation later, we can talk. If not, the workflow is yours to keep, completely free."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-100">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-medium tracking-tight text-zinc-200">
            Donna Allman <span className="text-zinc-500">Dream Homes</span>
          </div>
          <button 
            onClick={() => setIsEmailModalOpen(true)}
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
          >
            Get Installed
          </button>
        </div>
      </nav>

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/0 to-zinc-950/0 -z-10 pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Custom built for Donna Allman AZ Realtor
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.1] mb-8 text-zinc-100"
          >
            An Exclusive AI Workflow Designed For Your Real Estate Business.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
          >
            While you're showing properties in Maricopa, you're missing calls. I researched your business and built a custom AI receptionist workflow to fix that.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#workflow"
              className="px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 font-medium hover:bg-white transition-colors focus:ring-4 focus:ring-zinc-100/20"
            >
              See Your Workflow
            </a>
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition-colors"
            >
              Let's Talk
            </button>
          </motion.div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">The Real Estate Dilemma</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">As a solo agent managing listings across Arizona, you can't be in two places at once. This creates leaks in your funnel.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <PhoneOff className="w-6 h-6 text-zinc-300" />,
                  title: "The Voicemail Trap",
                  desc: "Letting new leads go to voicemail while you're with clients or at a showing. (Most won't leave a message)."
                },
                {
                  icon: <Clock className="w-6 h-6 text-zinc-300" />,
                  title: "Off-Clock Losses",
                  desc: "Missing calls after hours or on weekends when motivated buyers are actively browsing."
                },
                {
                  icon: <UserMinus className="w-6 h-6 text-zinc-300" />,
                  title: "Speed to Lead",
                  desc: "Losing motivated buyers and sellers to the next agent who actually answers the phone."
                }
              ].map((point, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-6">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-zinc-200">{point.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Your 24/7 Inside Sales Agent</h2>
                <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                  Imagine having a dedicated team member who never sleeps, knows all the details about your 4-bed Maricopa listings, and treats every caller with professional warmth.
                </p>

                <ul className="space-y-6">
                  {[
                    {
                      icon: <PhoneCall className="w-5 h-5 text-emerald-400" />,
                      title: "Instant Answering",
                      desc: "Answers every call instantly, 24/7, sounding indistinguishable from a real person."
                    },
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
                      title: "Natural Qualification",
                      desc: "Qualifies buyers and sellers naturally before you ever have to speak with them."
                    },
                    {
                      icon: <CalendarCheck className="w-5 h-5 text-emerald-400" />,
                      title: "Direct Booking",
                      desc: "Books property showings and consultation appointments straight into your calendar."
                    }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h4 className="text-zinc-200 font-medium mb-1">{benefit.title}</h4>
                        <p className="text-zinc-400">{benefit.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-zinc-900/50 rounded-[3rem] blur-3xl -z-10"></div>
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                      <PhoneCall className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-400 font-medium mb-1">Incoming Call</div>
                      <div className="text-xl text-zinc-200 font-medium">New Buyer Lead</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-zinc-800/50 text-zinc-300 w-[85%]">
                      "Hi there! I saw your ad for the 4-bedroom home in Maricopa with the RV garage. Is it still available?"
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-900/20 border border-emerald-900/30 text-emerald-100 w-[85%] ml-auto">
                      "Yes, it is! That's a beautiful 2,640 sq ft property. Donna is showing a house right now, but I'd be happy to help you schedule a tour or answer any questions about the lot size or that huge RV garage."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Section */}
        <section className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">The Cost of Missed Opportunities</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Comparing a traditional human receptionist with the automated system I built for you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Human Receptionist */}
              <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800/50">
                <h3 className="text-xl font-medium text-zinc-400 mb-2">Human Receptionist</h3>
                <div className="text-4xl font-semibold text-zinc-200 mb-8">~$35,000<span className="text-lg text-zinc-500 font-normal">/yr</span></div>
                
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3"><X className="w-5 h-5 text-red-400/70 shrink-0" /> Works 40 hours a week (misses evenings/weekends)</li>
                  <li className="flex items-start gap-3"><X className="w-5 h-5 text-red-400/70 shrink-0" /> Takes sick days and vacations</li>
                  <li className="flex items-start gap-3"><X className="w-5 h-5 text-red-400/70 shrink-0" /> Requires ongoing training and management</li>
                  <li className="flex items-start gap-3"><X className="w-5 h-5 text-red-400/70 shrink-0" /> Can only handle one call at a time</li>
                </ul>
              </div>

              {/* AI Workflow */}
              <div className="p-8 rounded-3xl bg-zinc-900 border border-emerald-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                    My Offer
                  </div>
                </div>
                <h3 className="text-xl font-medium text-zinc-200 mb-2">Custom AI Receptionist</h3>
                <div className="text-4xl font-semibold text-emerald-400 mb-8">$0<span className="text-lg text-zinc-400 font-normal"> Setup</span></div>
                
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Works 168 hours a week (24/7 coverage)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Never takes a day off</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Perfectly trained on your specific listings</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Handles infinite simultaneous calls</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Workflow Asset Section */}
        <section id="workflow" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">What I Built For You</h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              I didn't just put together a generic concept. I actually built the underlying infrastructure needed for your custom receptionist. You can access the complete package below.
            </p>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 md:p-12 text-left mb-12">
              <h3 className="text-xl font-medium text-zinc-200 mb-6">Included in your secure folder:</h3>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Retell AI Voice Assistant Configuration",
                  "n8n Appointment Scheduling Workflow",
                  "n8n Call Summary & Logging Workflow",
                  "Complete Installation Guide",
                  "Pre-Launch Checklist",
                  "Visual Setup Diagram"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a 
                  href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 font-medium hover:bg-white transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Your Workflow
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-zinc-900/20 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <div key={star} className="w-5 h-5 bg-zinc-300" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>)}
                </div>
                <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                  "I was losing leads simply because I couldn't pick up the phone while driving between showings. Having this system instantly answer and qualify leads has paid for itself ten times over."
                </p>
                <div>
                  <div className="font-medium text-zinc-200">Sarah Jenkins</div>
                  <div className="text-sm text-zinc-500">Independent Realtor</div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <div key={star} className="w-5 h-5 bg-zinc-300" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>)}
                </div>
                <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                  "The setup was seamless. My clients genuinely think they are speaking to my assistant. Waking up to 3 new booked appointments on a Sunday morning is a game changer."
                </p>
                <div>
                  <div className="font-medium text-zinc-200">Michael Torres</div>
                  <div className="text-sm text-zinc-500">Real Estate Broker</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-zinc-800/50 bg-zinc-900/20 overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-medium text-zinc-200 pr-8">{faq.question}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-zinc-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-zinc-400"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950/0 to-zinc-950/0 -z-10 pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Let's Get This Installed.</h2>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Reply to my previous message or schedule a free 9-minute call. I'll personally help you install and customize the AI Receptionist for your business at no cost.
            </p>
            
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 font-medium hover:bg-white transition-colors text-lg"
            >
              Reply & Install Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>Built for Donna Allman AZ Realtor.</p>
      </footer>

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmailModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-zinc-900 border border-zinc-800 p-6 rounded-3xl z-50 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-zinc-100">Contact Me</h3>
                <button 
                  onClick={() => setIsEmailModalOpen(false)}
                  className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-300"
                >
                  <div className="flex items-center gap-3">
                    <Copy className="w-5 h-5 text-zinc-500" />
                    <span>Copy Email Address</span>
                  </div>
                  {copied && <span className="text-xs text-emerald-400 font-medium">Copied!</span>}
                </button>

                <button 
                  onClick={handleOpenEmailApp}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl bg-zinc-100 text-zinc-950 hover:bg-white transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>Open Email App</span>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

