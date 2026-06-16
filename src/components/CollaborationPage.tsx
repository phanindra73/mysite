import { motion } from 'motion/react';
import { 
  Building2, GraduationCap, Handshake, Briefcase, Sparkles, Rocket,
  Linkedin, Github, Facebook
} from 'lucide-react';

interface CollaborationPageProps {
  onNavigate: (item: any) => void;
}

export default function CollaborationPage({ onNavigate }: CollaborationPageProps) {
  // Navigation trigger that scrolls to Contact section
  const handleContactClick = () => {
    onNavigate('Contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const areasOfCollaboration = [
    {
      title: 'College Workshops',
      description: 'Hands-on technical bootcamps, masterclasses, and specialized seminars tailored for academic curricula integration.',
      icon: <GraduationCap className="text-[#e41e3d]" size={22} />
    },
    {
      title: 'Corporate Training',
      description: 'Targeted scale-up programs designed to upskill engineering or management squads on modern production technology stacks.',
      icon: <Briefcase className="text-[#e41e3d]" size={22} />
    },
    {
      title: 'Industry Partnerships',
      description: 'Forging collaborative channels with tech corporations to align student project portfolios with active marketplace recruitment.',
      icon: <Handshake className="text-[#e41e3d]" size={22} />
    },
    {
      title: 'Technology Projects',
      description: 'Collaborative client-partner software engineering projects covering architecture planning, full-stack builds, and scalable system runs.',
      icon: <Building2 className="text-[#e41e3d]" size={22} />
    },
    {
      title: 'AI Innovation Initiatives',
      description: 'Co-creating innovative pipelines, LLM tuning labs, and custom vector search engines suited for highly tailored corporate environments.',
      icon: <Sparkles className="text-[#e41e3d]" size={22} />
    },
    {
      title: 'Startup Ecosystem Support',
      description: 'Incubating prototype models, providing architectural guidance, and facilitating tech resources for high-potential early ventures.',
      icon: <Rocket className="text-[#e41e3d]" size={22} />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-0" id="collaboration-page-wrapper">
      
      {/* Hero Header Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden py-20 px-4 border-b border-red-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(228,30,61,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/25 px-4 py-1.5 rounded-full text-xs font-bold text-[#e41e3d] tracking-wider uppercase">
            <Handshake size={14} className="animate-pulse" />
            <span>Co-Innovation & Growth</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl font-sans">
            Collaboration
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
            Partnering with educational institutions, industry experts, startups, and organizations to create learning, innovation, and growth opportunities.
          </p>

          <div className="pt-4 select-none">
            <button
              onClick={handleContactClick}
              className="px-6 py-3 bg-[#e41e3d] hover:bg-[#c91833] text-white text-xs font-black rounded-lg shadow-md shadow-red-500/15 cursor-pointer transition-transform active:scale-97"
            >
              Get In Touch With Us
            </button>
          </div>
        </div>
      </div>

      {/* Areas of Collaboration Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="areas-of-collaboration">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#e41e3d] uppercase font-mono">Synergy Paradigms</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Areas of Collaboration</h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            We partner on multiple dimensions across technical domains, professional coaching platforms, and enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasOfCollaboration.map((area, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:border-red-200 hover:shadow-md transition-all duration-300 flex flex-col space-y-4"
            >
              <div className="p-3 bg-red-50 rounded-xl inline-block w-fit">
                {area.icon}
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {area.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: Identical premium presentation */}
      <footer id="collaboration-footer" className="bg-slate-950 text-slate-400 py-6 border-t border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid: 3 columns side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 text-left">
            
            {/* COLUMN 1: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900 font-sans">
                Quick Links
              </h4>
              <ul className="space-y-1 text-xs font-sans">
                <li>
                  <button 
                    onClick={() => { onNavigate('Home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('About'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Academy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Collaboration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="text-[#e41e3d] font-semibold hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Collaboration
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            {/* COLUMN 2: Policies */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900 font-sans">
                Policies
              </h4>
              <ul className="space-y-1 text-xs font-sans">
                <li>
                  <button 
                    onClick={() => { onNavigate('Privacy Policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Terms of Use'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Disclaimer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Refund Policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Social & Branding */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900 font-sans">
                Social Media Links
              </h4>
              <div className="flex items-center gap-3 mb-3">
                <a 
                  href="https://www.linkedin.com/in/phanindraoruganti/" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-950 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                >
                  <Linkedin size={15} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-950 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                >
                  <Github size={15} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-950 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                >
                  <Facebook size={15} />
                </a>
              </div>
              <div className="text-[13px] font-extrabold text-white tracking-tight leading-none mt-3 font-sans">
                THE SUN <span className="text-[#e41e3d]">TECHNOLOGIES</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-mono">Education Services & Innovation</p>
            </div>
          </div>
          <hr className="border-slate-900 my-3" />
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 text-center md:text-left text-[11px] text-slate-500">
            <p className="font-sans">© 2026 The Sun Technologies.</p>
            <p className="text-[10px] text-slate-600 max-w-md leading-relaxed font-sans">
              Disclaimer: Placement and academic programs list commitments based on evaluations.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
