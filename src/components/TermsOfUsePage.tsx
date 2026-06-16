import { motion } from 'motion/react';
import { Shield, FileText, Globe, Scale, BookOpen, AlertCircle, RefreshCw, HelpCircle, Mail, ArrowLeft, Linkedin, Github, Facebook } from 'lucide-react';
import { NavItem } from '../types';

interface TermsOfUsePageProps {
  onNavigate: (item: NavItem) => void;
}

export default function TermsOfUsePage({ onNavigate }: TermsOfUsePageProps) {
  return (
    <div id="terms-of-use-container" className="pt-2 sm:pt-6 pb-20 bg-slate-50/50 min-h-screen text-justify">
      
      {/* Hero Header Section */}
      <div id="terms-hero" className="bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/20 text-white py-12 sm:py-16 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-650/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <button 
            onClick={() => {
              onNavigate('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-white/75 hover:text-[#e41e3d] bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-md mb-6 border border-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <span className="text-[#e41e3d] font-bold text-xs sm:text-sm tracking-wider uppercase font-mono bg-red-950/30 px-3 py-1 rounded border border-red-500/20">
              User Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
              Terms of Use
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm font-mono">
              Last Updated: June 11, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Card Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-150 p-6 sm:p-10 shadow-sm space-y-8"
        >
          {/* Introduction */}
          <section className="space-y-3">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Welcome to The Sun Technologies website. By accessing and using this website, you agree to comply with and be bound by these Terms of Use. Please review the following terms carefully.
            </p>
          </section>

          {/* Section 1: Website Usage */}
          <section className="space-y-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Globe size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Website Usage</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
              Users agree to use this website only for lawful purposes and in a manner that does not compromise, disrupt, or harm the website, its software systems, its databases, its other users, or its brand reputation. Any unauthorized probe or scraping is severely prohibited.
            </p>
          </section>

          {/* Section 2: Intellectual Property */}
          <section className="space-y-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Scale size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Intellectual Property</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
              All website content including text structure, high-fidelity graphics, design logos, custom course curricula, presentation blueprints, and proprietary system slides remains the absolute assets of The Sun Technologies unless explicitly marked otherwise.
            </p>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-semibold">
              Unauthorized reproduction, distribution, caching, scraping, or modification of these materials is strictly prohibited.
            </p>
          </section>

          {/* Section 3: Educational Content */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <BookOpen size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Educational Content</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
              The educational pathways, assignments, slide compilations, and guidance notes served here are created purely for student learning, knowledge building, and sandbox evaluation.
            </p>
          </section>

          {/* Section 4: Third-Party Links */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <AlertCircle size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Third-Party Links</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
              For convenience, we may present reference paths to outside tools or external partner sites. We have no authority over, and assume zero liability for, the direct content accuracy or the separate privacy protocols of those external sites.
            </p>
          </section>

          {/* Section 5: Changes to Terms */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <RefreshCw size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Changes to Terms</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
              We reserve the administrative right to tweak, refine, or update these Terms of Use at any period without posting special prior notices. Your continual usage of our pages denotes affirmative acceptance of the current terms.
            </p>
          </section>

          {/* Section 6: Governing Law */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <FileText size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Governing Law</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
              These terms, guidelines, policies, and system obligations shall be defined, resolved, and governed in all respects according to the laws applicable in India.
            </p>
          </section>

          {/* Action Button */}
          <div className="pt-6 border-t border-gray-100 flex justify-center">
            <button
              onClick={() => {
                onNavigate('Home');
                const element = document.getElementById('contact');
                if (element) {
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }
              }}
              className="inline-flex items-center gap-2 bg-[#e41e3d] hover:bg-red-700 text-white font-bold text-xs px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Go to Contact Page</span>
              <ArrowLeft size={12} className="transform rotate-180 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER: Identical premium presentation */}
      <footer id="terms-footer" className="bg-slate-950 text-slate-400 py-6 mt-16 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 text-left">
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900">
                Quick Links
              </h4>
              <ul className="space-y-1 text-xs">
                <li><button onClick={() => { onNavigate('Home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Home</button></li>
                <li><button onClick={() => { onNavigate('About'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">About</button></li>
                <li><button onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Academy</button></li>
                <li><button onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Products</button></li>
                <li><button onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Team</button></li>
                <li><button onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900">
                Policies
              </h4>
              <ul className="space-y-1 text-xs">
                <li><button onClick={() => { onNavigate('Privacy Policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Privacy Policy</button></li>
                <li><button onClick={() => { onNavigate('Terms of Use'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#e41e3d] hover:text-[#e41e3d] transition-colors cursor-pointer text-left block font-medium">Terms of Use</button></li>
                <li><button onClick={() => { onNavigate('Disclaimer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Disclaimer</button></li>
                <li><button onClick={() => { onNavigate('Refund Policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Refund Policy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900">
                Social Media Links
              </h4>
              <div className="flex items-center gap-3 mb-3">
                <a 
                  href="https://www.linkedin.com/in/phanindraoruganti/" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                >
                  <Linkedin size={15} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                >
                  <Github size={15} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                >
                  <Facebook size={15} />
                </a>
              </div>
              <div className="text-[13px] font-extrabold text-white tracking-tight leading-none mt-3">
                THE SUN <span className="text-[#e41e3d]">TECHNOLOGIES</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-mono">Education Services & Innovation</p>
            </div>
          </div>
          <hr className="border-slate-900 my-3" />
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 text-center md:text-left text-[11px] text-slate-500">
            <p>© 2026 The Sun Technologies.</p>
            <p className="text-[10px] text-slate-600 max-w-md leading-relaxed">
              Disclaimer: Placement and academic programs list commitments based on evaluations.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
