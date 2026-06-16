import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Phone, Info, Award, Layers, Rocket, Users, Check,
  Cpu, Layout, Smartphone, Cloud, Key, Share2, Sparkles,
  Search, ShieldCheck, ChevronRight, FileText, Briefcase, 
  UserCheck, Terminal, Database, Code, Server, ArrowRight,
  Linkedin, Github, Facebook
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (item: any) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  // Navigation trigger that scrolls to Contact / Form
  const handlePartnerClick = () => {
    onNavigate('Contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleDiscussClick = () => {
    onNavigate('Contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Technologies list with beautiful category/names configuration
  const technologies = [
    { name: 'Python', category: 'Backend & AI', icon: <Terminal className="text-yellow-600" size={16} /> },
    { name: 'React', category: 'Frontend framework', icon: <Code className="text-sky-500" size={16} /> },
    { name: 'Next.js', category: 'Production React', icon: <Cpu className="text-slate-900" size={16} /> },
    { name: 'FastAPI', category: 'High Perf APIs', icon: <Server className="text-emerald-500" size={16} /> },
    { name: 'OpenAI', category: 'Intelligent Models', icon: <Sparkles className="text-green-600" size={16} /> },
    { name: 'LangChain', category: 'Orchestration Chains', icon: <Layers className="text-violet-600" size={16} /> },
    { name: 'LangGraph', category: 'Cyclic Agentic Flows', icon: <Share2 className="text-[#e41e3d]" size={16} /> },
    { name: 'Vector Databases', category: 'Semantic Storage', icon: <Database className="text-indigo-600" size={16} /> },
    { name: 'Docker', category: 'Deployment Containers', icon: <Cloud className="text-blue-500" size={16} /> },
    { name: 'Cloud Technologies', category: 'Hybrid Infrastructure', icon: <Globe className="text-teal-600" size={16} /> }
  ];

  const productsUnderDevelopment = [
    {
      title: 'SkillsOrbit AI',
      badge: 'Alpha Phase',
      description: 'Next-generation visual mapping and intelligent career capability scoring workspace. Aggregates live industry demand matrices to suggest precise upskilling routes.',
      icon: <Layers size={24} className="text-[#e41e3d]" />,
      features: ['Dynamic Skills Mapping', 'Industry Demand Tracking', 'Tailored Learning Routes']
    },
    {
      title: 'AI Resume Analyzer',
      badge: 'Testing Beta',
      description: 'Sophisticated natural language layout scorer. Extracts PDF structure datasets, identifies semantic keyword density gaps, and compares format compliance with top-tier corporate filtering criteria.',
      icon: <FileText size={24} className="text-[#e41e3d]" />,
      features: ['PDF Semantic Parsing', 'ATS Benchmark Scoring', 'Keyword Gap Recommendations']
    },
    {
      title: 'Job Matching Platform',
      badge: 'Upcoming Release',
      description: 'The definitive direct bridge connecting vetted academy graduates to active technical recruitment teams. Reduces screening friction through verified execution logs and sample labs previews.',
      icon: <Briefcase size={24} className="text-[#e41e3d]" />,
      features: ['Direct Hiring Pipelines', 'Verified Academy Integration', 'Automated Skill Pairing']
    },
    {
      title: 'AI Interview Coach',
      badge: 'Concept Stage',
      description: 'Real-time interactive speech and text evaluator. Simulates live high-frequency coding evaluations, providing immediate criteria-mapped feedback and structured response critiques.',
      icon: <UserCheck size={24} className="text-[#e41e3d]" />,
      features: ['Real-time Audio Evaluations', 'Immediate Code Review', 'Behavioral Feedback Matrix']
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-0" id="products-page-wrapper">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden py-20 px-4 border-b border-red-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(228,30,61,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/25 px-3 py-1.5 rounded-full text-xs font-bold text-[#e41e3d] tracking-wider uppercase">
            <Rocket size={14} className="animate-pulse" />
            <span>Products Division</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Building Intelligent <span className="text-[#e41e3d]">Products for the Future</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
            We are developing innovative software solutions powered by modern technologies, Artificial Intelligence, and automation to streamline corporate talent evaluation and workflow infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-6 w-full sm:w-auto justify-center select-none">
            <button
              onClick={handlePartnerClick}
              className="px-6 py-3 bg-[#e41e3d] hover:bg-[#c91833] text-white text-xs font-black rounded-lg shadow-md shadow-red-500/15 cursor-pointer transition-transform active:scale-97"
            >
              Partner With Us
            </button>
            <button
              onClick={handleDiscussClick}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-black rounded-lg cursor-pointer transition-colors"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Products Under Development Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="products-under-development">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#e41e3d] uppercase font-mono">Software Innovation Roadmap</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Products Under Development</h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Take an analytical glimpse into our product pipeline. We are meticulously engineering specialized toolsets to optimize resume analysis, skills tracking, recruiting alignment, and learning evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsUnderDevelopment.map((prod, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              {/* Corner status accent */}
              <div className="absolute top-0 right-0 bg-red-50 text-[#e41e3d] text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-bl-xl border-l border-b border-red-100">
                {prod.badge}
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-red-50 text-[#e41e3d] rounded-xl inline-block">
                  {prod.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#e41e3d] transition-colors">
                  {prod.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {prod.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Core Features</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-650">
                        <Check size={14} className="text-[#e41e3d] shrink-0" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Estimated v1.0 Launch: 2026</span>
                <button 
                  onClick={handleDiscussClick}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#e41e3d] hover:text-[#c91833] transition-colors cursor-pointer"
                >
                  <span>Request Early Access</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Build Section (with Star emoji as requested) */}
      <section className="bg-white border-y border-slate-200 py-16" id="what-we-build">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#e41e3d] uppercase font-mono">Specialized Core Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center justify-center gap-2">
              What We Build <span className="text-amber-500 font-normal">⭐</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Our engineering divisions synthesize world-class technical capabilities to produce tailored systems aligned with modern enterprise digital architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* L1: Web Applications */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-150 shadow-xs flex flex-col space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold text-lg">
                🌐
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">Web Applications</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                Scalable and responsive web applications designed for businesses, education, and enterprise solutions.
              </p>
            </div>

            {/* L2: Mobile Applications */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-150 shadow-xs flex flex-col space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-semibold text-lg">
                📱
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">Mobile Applications</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                Cross-platform mobile applications that deliver seamless user experiences across devices.
              </p>
            </div>

            {/* L3: AI Applications */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-150 shadow-xs flex flex-col space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 font-semibold text-lg">
                🤖
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">AI Applications</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                Intelligent applications powered by Generative AI, Large Language Models (LLMs), and AI agents.
              </p>
            </div>

            {/* L4: SaaS Products */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-150 shadow-xs flex flex-col space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-semibold text-lg">
                ☁️
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">SaaS Products</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                Cloud-native software products built for scalability, automation, and business growth.
              </p>
            </div>

            {/* L5: Agentic AI Systems */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-150 shadow-xs flex flex-col space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 font-semibold text-lg">
                🧠
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">Agentic AI Systems</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                Autonomous AI agents capable of reasoning, planning, tool usage, and task execution.
              </p>
            </div>

            {/* L6: API & Integration Solutions */}
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-150 shadow-xs flex flex-col space-y-4 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-semibold text-lg">
                🔗
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">API & Integration Solutions</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                Secure APIs and enterprise integration solutions connecting systems and applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="products-technology-stack">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#e41e3d] uppercase font-mono">Modern Core Frameworks</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Technology Stack</h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            We employ modern, production-grade tools, databases, and frameworks to architect lightweight, high-safety environments with resilient horizontal scalability layers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 select-none">
          {technologies.map((tech, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center space-y-3 hover:border-red-200 hover:shadow-xs transition-all duration-200"
            >
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-red-50 transition-colors">
                {tech.icon}
              </div>
              <div>
                <span className="block text-sm font-extrabold text-slate-900">{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide block leading-relaxed mt-0.5">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration CTA Section */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden text-center select-none" id="products-collaboration">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,30,61,0.04),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 relative z-10">
          <span className="text-xs font-bold tracking-widest text-[#e41e3d] uppercase font-mono">Let's Synthesize Innovative Solutions</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Collaboration CTA</h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-sans">
            Have an idea or looking for a technology partner? Let's engineer tailored digital strategies, reliable integration tunnels, or multi-agent workflows to fuel your enterprise growth metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handlePartnerClick}
              className="px-6 py-3 bg-[#e41e3d] hover:bg-[#c91833] text-white text-xs font-black rounded-lg shadow-md transition-transform active:scale-97 cursor-pointer"
            >
              Partner With Us
            </button>
            <button
              onClick={handleDiscussClick}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-black rounded-lg cursor-pointer transition-colors"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER: Identical premium presentation */}
      <footer id="products-footer" className="bg-slate-950 text-slate-400 py-6 border-t border-slate-800/80 w-full">
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
                    className="text-[#e41e3d] font-semibold hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Products
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
