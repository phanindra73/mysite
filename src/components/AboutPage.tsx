import { motion } from 'motion/react';
import { 
  History, 
  Milestone, 
  User, 
  Compass, 
  ShieldAlert, 
  HelpCircle, 
  Rocket, 
  Users, 
  CheckCircle,
  Sparkles,
  Search,
  BookOpen,
  Award,
  ArrowRight,
  ChevronRight,
  Linkedin,
  Facebook,
  Github
} from 'lucide-react';
import classroomSeminar from '../assets/images/classroom_collaboration_1781101189089.png';
import phaneendraImage from '../assets/images/phaneendra.jpg';
import { NavItem } from '../types';

interface AboutPageProps {
  onGetStartedClick: () => void;
  onNavigate?: (item: NavItem) => void;
}

export default function AboutPage({ onGetStartedClick, onNavigate }: AboutPageProps) {
  
  // Milestones data for Section 2: The Journey
  const milestones = [
    {
      year: '2001',
      title: 'The Foundation',
      desc: 'Founded with a single classroom and a powerful vision: to bridge the gap between academic formal education and enterprise software development expectations.'
    },
    {
      year: '2008',
      title: 'Enterprise Integration',
      desc: 'Scaled to provide comprehensive Java, J2EE, and early .NET curriculum. Became a trusted partner for regional universities and tech corporates in Karnataka and South India.'
    },
    {
      year: '2016',
      title: 'Going Full-Stack',
      desc: 'Launched comprehensive web architecture courses featuring modern JavaScript ecosystems, Spring Framework, database modeling, and DevOps pipelines.'
    },
    {
      year: '2023',
      title: 'The AI Shift',
      desc: 'Infused Deep Learning, NLP, and Machine Learning models into the primary syllabus. Introduced student-mentor labs to build live production pipelines.'
    },
    {
      year: '2026',
      title: 'Intelligent Systems',
      desc: 'Re-engineered the institution into the flagship Academy. Pioneered advanced programs in Agentic AI, GenAI Web Integration, and enterprise-level RAG. Initiated software product development.'
    }
  ];

  // Values data for Section 5: Our Values
  const valuesList = [
    {
      title: 'Integrity First',
      desc: 'We publish honest fees, provide realistic career support, and never build false hype. Transparency is our highest operating virtue.'
    },
    {
      title: 'Continuous Learning',
      desc: 'Technology is fluid; we constant update our syllabi. Our labs run the exact frameworks developers are adopting in production today.'
    },
    {
      title: 'Excellence in Code',
      desc: 'We do not teach slide-decks. We teach production coding, clean design patterns, thorough testing, and robust systems architecture.'
    },
    {
      title: 'Systemized Innovation',
      desc: 'Inspiring students to see themselves not as consumers of APIs, but as active creators of autonomous, intelligent tools.'
    }
  ];

  return (
    <div id="about-page-container" className="pt-2 sm:pt-6 pb-20 bg-slate-50/50">
      
      {/* Visual Header / Hero Element */}
      <div id="about-hero-section" className="bg-gradient-to-br from-slate-900 via-slate-950 to-red-950/20 text-white py-16 sm:py-24 text-left relative overflow-hidden">
        {/* Subtle glowing accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-650/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <span className="text-[#e41e3d] font-bold text-xs sm:text-sm tracking-wider uppercase font-mono bg-red-950/30 px-3 py-1 rounded border border-red-500/20">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">
              Cultivating the Next Era of <span className="text-[#e41e3d]">Software Craftsmen</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded in 2001, The Sun Technologies is a trusted pioneer in professional technology training. 
              We bridge the delta between university theory and core industry development capability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout with 8 Required Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-24 text-justify">
        
        {/* SECTION 1: Our Story */}
        <motion.section 
          id="our-story" 
          className="scroll-mt-32"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-5 space-y-4">

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">Our Story</h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                At the turn of the new millennium, a major delta existed. Graduates were entering the workforce with general theoretical degrees, yet software development studios required specialists ready to write robust production code from day one. In 2001, we established **The Sun Technologies** to tackle this gap.
              </p>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed text-justify">
                Education is our deep foundation through **The Sun Technologies Academy**. Over a quarter of a century, we have trained thousands of aspiring software Engineers, systems architects, and data professionals. Over the last 25 years, our students have entered tier-1 MNCs and innovative startups, establishing a reputation built on high rigor and practical fluency.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img 
                  src={classroomSeminar} 
                  alt="Students attending technology lecture"
                  referrerPolicy="no-referrer"
                  className="w-full object-cover aspect-[16/10]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/70 p-4 border-t border-white/10 text-white backdrop-blur-xs">
                  <p className="text-xs font-semibold tracking-wide uppercase">25 Years of Academic Delivery</p>
                  <p className="text-[11px] text-zinc-300">Classroom seminar runs since 2001 in southern enterprise technology hubs.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2: The Journey */}
        <motion.section 
          id="the-journey" 
          className="scroll-mt-32 bg-white rounded-2xl border border-gray-150 p-6 sm:p-10 text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="space-y-4 max-w-3xl mb-12">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">The Journey</h2>
            <p className="text-sm sm:text-base text-gray-600">
              For 25 years, we have adapted synchronously with every tech paradigm shift—from early enterprise client-server applications to the modern, distributed AI-agent era.
            </p>
          </div>

          <div className="relative border-l-2 border-red-100 pl-6 sm:pl-8 space-y-10 ml-2 py-2">
            {milestones.map((m, index) => (
              <div key={index} className="relative group">
                {/* Timeline knot item */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#e41e3d] group-hover:bg-[#e41e3d] transition-colors duration-200" />
                
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-lg sm:text-xl font-bold text-[#e41e3d] tracking-tight">{m.year}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">{m.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-4xl leading-relaxed text-balance">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 3: Founder Story */}
        <motion.section 
          id="founder-story" 
          className="scroll-mt-32"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Image wrapper */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-64 sm:w-72 lg:w-80 shrink-0">
                {/* Decorative background brand color accent */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#e41e3d]/10 to-transparent rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative rounded-2xl p-2 bg-white border border-slate-150 shadow-md">
                  <div className="relative overflow-hidden rounded-xl bg-slate-50 aspect-[4/5]">
                    <img 
                      src={phaneendraImage} 
                      alt="Phaneendra Oruganti, Founder" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-95" />
                    
                    <div className="absolute bottom-0 inset-x-0 p-4 text-white text-left">
                      <p className="text-[10px] font-bold tracking-wider uppercase text-[#e41e3d] mb-1">Founder & Academic Visionary</p>
                      <p className="text-xs font-semibold leading-tight text-white/90">Phaneendra Oruganti</p>
                      <p className="text-[10px] text-zinc-300 font-medium mt-0.5">Directing tech excellence since 2001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Story Text */}
            <div className="lg:col-span-7 space-y-4 text-justify">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight text-left">Founder Story</h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed">
                The Sun Technologies was founded on a simple yet profound realization by our founder, Phaneendra Oruganti: true teaching is not just printing software manuals or loading stale textbook modules. It is about a relentless focus on individual student outcomes.
              </p>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed">
                With over 25 years of experience in Software Training and enterprise systems, Phaneendra Oruganti recognized early on that aspiring developers from diverse demographic backgrounds had the intellectual capabilities to build globally relevant tools but were held back by high commercial tuition fees and theoretical, stale curricula. By keeping our overhead lean and structuring our classes around deep-dive hands-on labs, Phaneendra pioneered an accessible, premier training paradigm. 
              </p>
              <div className="bg-slate-100/70 border-l-4 border-[#e41e3d] p-4 rounded-r-lg">
                <p className="text-xs sm:text-sm text-gray-750 font-medium italic leading-relaxed">
                  "Our ultimate responsibility is to ensure that every student who sits in our lecture halls gains genuine coding independence, enabling self-sustaining professional trajectories anywhere in the world."
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800">— Phaneendra Oruganti, Founder</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 4: Our Philosophy */}
        <motion.section 
          id="our-philosophy" 
          className="scroll-mt-32"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">Our Philosophy</h2>
            <p className="text-sm sm:text-base text-gray-600">
              We live by a basic slogan: **experience ‘the quality education’**. This translates directly into everyday instructional choices that set our graduates apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl border border-gray-150 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#e41e3d] flex items-center justify-center font-bold">1</div>
              <h3 className="font-bold text-md text-gray-900">Industry-Aligned Sandbox</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We design courses backwards from active industry specialists. We master the specific stacks engineering managers are hiring for right now.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-150 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#e41e3d] flex items-center justify-center font-bold">2</div>
              <h3 className="font-bold text-md text-gray-900">Heavy Hands-On labs</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ditch theoretical slides. 90% of our instruction time involves coding live alongside instructors, solving edge cases, and scaling production code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-150 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#e41e3d] flex items-center justify-center font-bold">3</div>
              <h3 className="font-bold text-md text-gray-900">Dedictated Mentorship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Small batch-sizes ensure no learner falls behind. Individualized check-ins align with specific profile builds and interview preps.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 5: Our Values */}
        <motion.section 
          id="our-values" 
          className="scroll-mt-32"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">Our Values</h2>
            <p className="text-sm sm:text-base text-gray-600">
              The virtues guiding our daily operations, syllabus design protocols, and recruiter interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {valuesList.map((v, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl border border-gray-150 shadow-xs hover:border-[#e41e3d]/45 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-red-550/5 rounded-bl-full pointer-events-none group-hover:bg-[#e41e3d]/10 transition-colors" />
                <h3 className="font-bold text-sm text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 6: Why We Exist */}
        <motion.section 
          id="why-we-exist" 
          className="scroll-mt-32 bg-slate-900 text-white rounded-2xl overflow-hidden p-8 sm:p-12 relative text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#e41e3d]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">

            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              An Authentic Alternative to High-Cost Bootcamps
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We live in an Era where commercial bootcamps charge lakhs for superficial crash-courses that fail to deep dive. Our existence is a clear protest against this model. 
            </p>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We provide **world-class AI, Full-Stack, and Data Science programs** with deep 6-month hands-on syllabus lengths at an ultra-accessible ₹60,000 to ₹85,000 fee tier. 
              We operate to empower students with hard core skill pipelines that survive industry testing.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <span className="flex items-center gap-2 bg-slate-850 px-3 py-1.5 rounded border border-slate-800">
                <CheckCircle size={14} className="text-rose-500" />
                No Hidden Cost Rules
              </span>
              <span className="flex items-center gap-2 bg-slate-850 px-3 py-1.5 rounded border border-slate-800">
                <CheckCircle size={14} className="text-rose-500" />
                Authentic Placement Assistance
              </span>
              <span className="flex items-center gap-2 bg-slate-850 px-3 py-1.5 rounded border border-slate-800">
                <CheckCircle size={14} className="text-rose-500" />
                25 Years Proven Track Record
              </span>
            </div>
          </div>
        </motion.section>

        {/* SECTION 7: The Future */}
        <motion.section 
          id="the-future" 
          className="scroll-mt-32"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-6 space-y-4">

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight">The Future</h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed text-balance">
                As The Sun Technologies enters its next phase, our horizons are widening beyond academy initiatives alone. While education remains our foundation, we are actively expanding our scope towards **AI-powered software products, intelligent business tools, and strategic corporate ventures**. 
              </p>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed text-balance">
                Our vision is to coordinate an active ecosystem of student-powered, mentor-guided labs that construct live software, allowing learners to acquire precious experience while directly contributing to real production products.
              </p>
              <div className="pt-2">
                <button
                  onClick={onGetStartedClick}
                  className="bg-[#e41e3d] text-white hover:bg-[#c91833] font-bold px-5 py-3 rounded-lg text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>Build the Future with Us</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 font-mono">Upcoming Initiatives</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-slate-150 flex items-start gap-3.5">
                    <Sparkles className="text-[#e41e3d] mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Intelligent SaaS Sandbox</h4>
                      <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">Developing modular AI interfaces specializing in workforce planning and skill assessment.</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-150 flex items-start gap-3.5">
                    <Sparkles className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Autonomous Recruitment Models</h4>
                      <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">Building open tool frameworks to connect premium talent with regional MNC recruiting pools in real-time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


      </div>

      {/* FOOTER: Identical premium brand presentation across views */}
      <footer id="about-footer-section" className="bg-slate-950 text-slate-400 py-6 mt-16 border-t border-slate-800/80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid: 3 columns side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 text-left">
            
            {/* COLUMN 1: Quick Links */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900">
                Quick Links
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('About');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Home');
                        setTimeout(() => {
                          const element = document.getElementById('courses');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Academy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Home');
                        setTimeout(() => {
                          const element = document.getElementById('products');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Home');
                        setTimeout(() => {
                          const element = document.getElementById('team');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Home');
                        setTimeout(() => {
                          const element = document.getElementById('contact');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: Policies */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900">
                Policies
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Privacy Policy');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full text-[#e41e3d]"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Terms of Use');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Disclaimer');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('Refund Policy');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
                  >
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Social Media Links */}
            <div>
              <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-2 pb-1 border-b border-slate-900">
                Social Media Links
              </h4>
              <div className="flex items-center gap-3 mb-3 font-sans">
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

          {/* Copyrights and Disclaimers */}
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 text-center md:text-left text-[11px] text-slate-500">
            <p>
              © 2026 The Sun Technologies.
            </p>
            <p className="text-[10px] text-slate-600 max-w-md leading-relaxed">
              Disclaimer: Placement and academic programs list commitments based on evaluations.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
