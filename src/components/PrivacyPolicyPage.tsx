import { motion } from 'motion/react';
import { Shield, Eye, Database, Lock, Server, Cookie, Mail, ArrowLeft, Linkedin, Github, Facebook } from 'lucide-react';
import { NavItem } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (item: NavItem) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div id="privacy-policy-container" className="pt-2 sm:pt-6 pb-20 bg-slate-50/50 min-h-screen text-justify">
      
      {/* Hero Header Section */}
      <div id="privacy-hero" className="bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/20 text-white py-12 sm:py-16 text-left relative overflow-hidden">
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
              Legal Document
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
              Privacy Policy
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
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The Sun Technologies respects your privacy and is committed to protecting the personal information you provide through our website. This Privacy Policy details how we handle information across our physical and digital learning sandbox systems.
            </p>
          </section>

          {/* Section 1: Information We Collect */}
          <section className="space-y-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Database size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Information We Collect</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              When communicating with us, enrolling in our training cohorts, or using our evaluation systems, we may collect the following details:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 pl-4 list-disc space-y-0.5">
              <li>Name / Student Identifier</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Organization Name / College Campus</li>
              <li>Course Interests / Technologies Track</li>
              <li>Messages submitted through contact forms</li>
            </ul>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="space-y-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Eye size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">How We Use Your Information</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              We leverage your collected metrics purely to deliver high-quality career training and secure systems. Your information is processed exclusively to:
            </p>
            <ul className="text-xs sm:text-sm text-gray-600 pl-4 list-disc space-y-2">
              <li>Respond directly to inquiries and support ticketholder needs</li>
              <li>Provide personalized orientation materials about training programs and placement services</li>
              <li>Improve our physical sandboxes, websites, and proprietary learning product designs</li>
              <li>Communicate major educational updates, college workshops, and recruitment team events</li>
            </ul>
          </section>

          {/* Section 3: Information Sharing */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Server size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Information Sharing</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We hold a strict ethical foundation around communication trust. <strong>We do not sell, rent, or share personal information</strong> with third-party marketers or lists. Your records are only accessed by academic directors, and may only be disclosed externally when required strictly by applicable laws.
            </p>
          </section>

          {/* Section 4: Data Security */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Lock size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Data Security</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We employ standard industry encryptions across our databases. We take reasonable physical, digital, and managerial guidelines to defend your profile data against malicious leak, loss, unauthorized alteration, or unaccredited access.
            </p>
          </section>

          {/* Section 5: Third-Party Services */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Shield size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Third-Party Services</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              To support modern features, our workspace utilizes secure partner integrations such as web traffic analytics libraries, secure transaction gateways, and automated contact notifications. These partners preserve their independent privacy policies.
            </p>
          </section>

          {/* Section 6: Cookies */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Cookie size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Cookies</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We may utilize small browser cookies to store persistent user session parameters, remember client preferences, and study high-level website traffic volume so we can optimize our web layout responsiveness.
            </p>
          </section>

          {/* Section 7: Contact Us */}
          <section className="space-y-3 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2.5 text-gray-900">
              <Mail size={18} className="text-[#e41e3d] flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">Contact Us</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              For any questions regarding this Privacy Policy or raw records removal, please coordinate with our data team through our main contact panel. You can easily reach our advisors by navigating back to the home screen and submitting the Contact module.
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
      <footer id="policy-footer" className="bg-slate-950 text-slate-400 py-6 mt-16 border-t border-slate-800/80">
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
                <li><button onClick={() => { onNavigate('Privacy Policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#e41e3d] hover:text-[#e41e3d] transition-colors cursor-pointer text-left block font-medium">Privacy Policy</button></li>
                <li><button onClick={() => { onNavigate('Terms of Use'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block">Terms of Use</button></li>
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
