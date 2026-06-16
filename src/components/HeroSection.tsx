import { motion } from 'motion/react';
import heroPathway from '../assets/images/hero_section6_1780901254350.png';
import classroomSeminar from '../assets/images/classroom_seminar_svc_7671_1780985472735.png';
import productAutomationBanner from '../assets/images/product_automation_banner_1780988716032.png';
import aiEngineeringCard from '../assets/images/ai_engineering_card_1781070367915.png';
import agenticAiCard from '../assets/images/agentic_ai_card_1781070384281.png';
import fullStackAiCard from '../assets/images/fullstack_ai_card_1781070399051.png';
import dataScienceAiCard from '../assets/images/datascience_ai_card_1781070412855.png';
import phaneendraPhoto from '../assets/images/phaneendra.jpg';
import santhiPhoto from '../assets/images/santhi1.JPG';
import { Award, BookOpen, GraduationCap, ArrowRight, ShieldCheck, Clock, Users, Building, CheckCircle, ChevronRight, Phone, Mail, MapPin, Linkedin, Facebook, Github, Cpu, Lightbulb, Brain, FileText, Compass, Briefcase, Sparkles } from 'lucide-react';
import { Course, TrainingProgram, PlacementRecord, NavItem } from '../types';

interface HeroSectionProps {
  onGetStartedClick: (programName?: string) => void;
  onNavigate?: (item: NavItem) => void;
}

export default function HeroSection({ onGetStartedClick, onNavigate }: HeroSectionProps) {
  // Mock Data
  const courses: Course[] = [
    {
      id: 'flagship-1',
      title: 'AI Engineer Program',
      duration: '6 Months',
      mode: 'Blended',
      description: 'Syllabus designed in tandem with active industry specialists, combining heavy hands-on coding labs, enterprise-level capstones, and dedicated mentorship. Master deep learning, LLMs, fine-tuning, and RAG architectures.',
      rating: 4.9,
      tags: ['Deep Learning', 'LLMs', 'RAG', 'PyTorch'],
      fee: '₹75,000',
      image: aiEngineeringCard
    },
    {
      id: 'flagship-2',
      title: 'Agentic AI Developer Program',
      duration: '4 Months',
      mode: 'Blended',
      description: 'Build autonomous, goal-driven AI agents and multi-agent workflows. Master tool use, agent reasoning patterns, LangChain, semantic search, and AutoGen systems.',
      rating: 4.8,
      tags: ['Agentic AI', 'LangChain', 'Autogen', 'Python'],
      fee: '₹60,000',
      image: agenticAiCard
    },
    {
      id: 'flagship-3',
      title: 'Full Stack AI Developer Program',
      duration: '6 Months',
      mode: 'Blended',
      description: 'Syllabus engineered to bridge advanced client-server development with state-of-the-art Generative AI. Build fully responsive web applications powered by custom AI assistants.',
      rating: 4.9,
      tags: ['AI Integration', 'React', 'Node.js', 'GenAI'],
      fee: '₹85,000',
      image: fullStackAiCard
    },
    {
      id: 'flagship-4',
      title: 'Data Science & AI Program',
      duration: '6 Months',
      mode: 'Blended',
      description: 'Transition into a data professional. Gain comprehensive fluency in statistics, data mining, Predictive analytics, Machine Learning pipelines, and modern GenAI integrations.',
      rating: 4.7,
      tags: ['Data Science', 'Machine Learning', 'Python', 'SQL'],
      fee: '₹70,000',
      image: dataScienceAiCard
    }
  ];

  const trainingPrograms: TrainingProgram[] = [
    {
      id: 't1',
      title: 'Academy',
      targetAudience: 'College Graduates & Freshers',
      highlights: [
        'AI & Agentic AI Engineering',
        'Full Stack Development',
        'Data Science & Machine Learning',
        'Enterprise Application Development',
        'API & Integration Engineering'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 't2',
      title: 'Product',
      targetAudience: 'Software Development Studios',
      highlights: [
        'Learning & Career Development',
        'Recruitment & Talent Management',
        'Business Automation',
        'Intelligent Productivity'
      ],
      bannerUrl: productAutomationBanner
    },
    {
      id: 't3',
      title: 'Collaboration',
      targetAudience: 'Strategic Partnerships',
      highlights: [
        'College Workshops',
        'Corporate Training',
        'Industry Partnerships',
        'Technology Projects',
        'AI Innovation Initiatives',
        'Startup Ecosystem Support'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="w-full bg-slate-50/50">
      
      {/* SECTION: HOME */}
      <section
        id="home"
        className="hero-gradient relative overflow-hidden py-4 sm:py-6 lg:py-0 lg:min-h-[calc(100vh-155px)] border-b border-gray-150 flex flex-col justify-center"
      >
        {/* Dot pattern decorative accent from theme */}
        <div className="dot-pattern absolute top-10 right-10 w-40 h-40 opacity-40 pointer-events-none hidden lg:block" />
        <div className="dot-pattern absolute bottom-10 left-10 w-40 h-40 opacity-30 pointer-events-none hidden lg:block" />
        
        {/* Sub-section 1: INTRO HERO ROW (Left to Right) */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
                
                <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-[#1e293b] tracking-tight leading-[1.12]">
                  25 Years of <span className="text-[#e41e3d]">Transforming Careers</span> Through Technology
                </h2>
                
                <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                  Established in 2001, The Sun Technologies has empowered thousands of students through industry-focused software training, workshops, and technology education.
                  <span className="block mt-2 font-medium text-slate-600">
                    Today, we are expanding our expertise into AI-powered software products and intelligent technology solutions.
                  </span>
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="#courses"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('Academy');
                      }
                    }}
                    className="bg-[#e41e3d] text-white hover:bg-[#c91833] font-bold px-6 py-3.5 rounded-[4px] cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-sm active:scale-98 animate-pulse-subtle"
                  >
                    <span>Explore Academy</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#products"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('Products');
                      }
                    }}
                    className="bg-[#e41e3d] text-white hover:bg-[#c91833] font-bold px-6 py-3.5 rounded-[4px] cursor-pointer shadow-sm hover:shadow-md transition-all flex items-center gap-2 text-sm active:scale-98"
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={18} />
                  </a>
                </div>

                {/* Stats Grid matching design specs exactly */}
                <div className="pt-3 border-t border-slate-200/60 grid grid-cols-3 gap-4">
                  <div className="border-left-3 pl-3 border-l-[3px] border-[#e41e3d]" style={{ borderLeftWidth: '3px', borderLeftColor: '#e41e3d' }}>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#1e293b] leading-none mb-1">25+</div>
                    <div className="text-[11px] text-[#94a3b8] uppercase tracking-wider font-semibold leading-none">Years of Excellence</div>
                  </div>
                  <div className="border-left-3 pl-3 border-l-[3px] border-[#e41e3d]" style={{ borderLeftWidth: '3px', borderLeftColor: '#e41e3d' }}>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#1e293b] leading-none mb-1">10,000+</div>
                    <div className="text-[11px] text-[#94a3b8] uppercase tracking-wider font-semibold leading-none">Students Trained</div>
                  </div>
                  <div className="border-left-3 pl-3 border-l-[3px] border-[#e41e3d]" style={{ borderLeftWidth: '3px', borderLeftColor: '#e41e3d' }}>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#1e293b] leading-none mb-1">10+</div>
                    <div className="text-[11px] text-[#94a3b8] uppercase tracking-wider font-semibold leading-none">Technology Domains</div>
                  </div>
                </div>
              </div>

              {/* Right Interactive Card Panel */}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-amber-50 rounded-2xl filter blur-2xl opacity-60 transform scale-95" />
                <div className="relative bg-white rounded-2xl p-1.5 shadow-xl border border-slate-200 w-full max-w-lg mx-auto overflow-hidden">
                  <img 
                    src={heroPathway} 
                    alt="Four-Step Development Pathway: Empowering Future Leaders" 
                    className="w-full h-auto rounded-lg object-contain block" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Sub-section 2: LEGACY & MILESTONES TIMELINE (Right to Left) */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="mt-6 pt-5 border-t border-slate-200/60 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 text-left items-start">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[#e41e3d] font-bold text-sm tracking-wider uppercase block">A Legacy of Learning and Innovation</span>
                <div className="space-y-3 text-gray-600 leading-relaxed text-base">
                  <p className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-snug">
                    For over 25 years, The Sun Technologies has been committed to bridging the gap between education and industry.
                  </p>
                  <p className="text-sm">
                    We have trained students, professionals, and organizations across a wide range of technologies, helping them build successful careers in the software industry.
                  </p>
                  <p className="text-sm">
                    As technology evolves, we continue to evolve with it—embracing Artificial Intelligence, automation, and product innovation.
                  </p>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm space-y-3 w-full">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Milestones & Vision</h3>
                <div className="relative border-l-2 border-red-100 ml-3 pl-6 space-y-4">
                  {/* 2001 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow-sm" />
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-gray-900 text-sm bg-red-50 px-2 py-0.5 rounded">2001</span>
                      <span className="text-sm font-medium text-gray-700 leading-relaxed">The Sun Technologies Founded</span>
                    </div>
                  </div>
                  {/* 2010 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-red-400 border-2 border-white shadow-sm" />
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-gray-700 text-sm bg-gray-50 px-2 py-0.5 rounded">2010</span>
                      <span className="text-sm font-medium text-gray-600 leading-relaxed">Expanded Training Programs</span>
                    </div>
                  </div>
                  {/* 2020 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-red-400 border-2 border-white shadow-sm" />
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-gray-700 text-sm bg-gray-50 px-2 py-0.5 rounded">2020</span>
                      <span className="text-sm font-medium text-gray-600 leading-relaxed">Technology Workshops & Industry Programs</span>
                    </div>
                  </div>
                  {/* 2026 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#e41e3d] border-2 border-white shadow-sm ring-4 ring-red-100 animate-pulse" />
                    <div className="flex items-start gap-4">
                      <span className="font-mono font-bold text-[#e41e3d] text-sm bg-red-50 px-2 py-0.5 rounded">2026</span>
                      <span className="text-sm font-semibold text-gray-900 leading-relaxed">AI Product Development Initiatives</span>
                    </div>
                  </div>
                  {/* Future */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-300 border-2 border-white shadow-sm" />
                    <div className="flex items-start gap-4">
                      <span className="font-medium text-xs text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded">Future</span>
                      <span className="text-sm font-medium text-gray-600 italic leading-relaxed">Intelligent Software Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sub-section 3: CLASSROOM SEMINAR & FOUNDATION STORY (Left to Right) */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start text-left">
                
                {/* Visual Column */}
                <div className="relative group max-w-xl mx-auto lg:mx-0 w-full">
                  {/* Theme Suitable Accents & Shadows */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#e41e3d] to-rose-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                  <div className="absolute -inset-3 bg-red-100/40 rounded-2xl -rotate-1.5 scale-[0.99] pointer-events-none group-hover:rotate-0 transition-transform duration-500 border border-red-200/20" />
                  
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-slate-100/80 bg-slate-50">
                    <img 
                      src={classroomSeminar} 
                      alt="A live professional technology training seminar session run by The Sun Technologies"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 hover:scale-[1.03] transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="space-y-3">
                  <span className="text-[#e41e3d] font-bold text-sm tracking-wider uppercase font-mono">Our legacy</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">The Sun Technologies</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    Founded in 2001, The Sun Technologies has been dedicated to empowering students and professionals through practical, industry-focused technology education. Over the past 25 years, we have trained thousands of learners across various software technologies, helping them build successful careers and bridge the gap between academia and industry. Guided by a commitment to integrity, continuous learning, excellence, and innovation, we have evolved into a trusted technology education organization. While education remains our foundation through The Sun Technologies Academy, we are also expanding our focus toward AI-powered software products, intelligent solutions, and future technology ventures. Our vision is to create opportunities through learning, innovation, and collaboration, enabling individuals and organizations to thrive in an ever-evolving digital world.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* Sub-section 4: ACADEMIC & PRODUCT COLLABORATIONS (Right to Left) */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Why Choose Us Section */}
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start text-left">
                {/* Header elements */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[#e41e3d] font-bold text-sm tracking-widest uppercase font-mono bg-red-50 px-3.5 py-1.5 rounded-full inline-block">
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Engineered for <span className="text-[#e41e3d]">Real-World</span> Success
                  </h2>
                  <p className="text-sm sm:text-base text-gray-650 leading-relaxed max-w-sm">
                    Leveraging over two decades of educational excellence to deliver industry-best training, advanced toolsets, and professional pipelines.
                  </p>
                </div>

                {/* 2x2 Feature Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Item 1: 25+ Years of Experience */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md hover:border-red-100 group transition-all duration-300">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#e41e3d] mb-4 group-hover:scale-110 transition-transform">
                      <Award size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-2">25+ Years of Experience</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                      A trusted name in software education since 2001. Our seasoned pedagogical approach delivers exceptional career-transforming learning outcomes.
                    </p>
                  </div>

                  {/* Item 2: Industry-Focused Learning */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md hover:border-red-100 group transition-all duration-300">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#e41e3d] mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-2">Industry-Focused Learning</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                      Practical programs aligned with current industry needs. Gain job-ready fluency by building live projects matching enterprise-level specs.
                    </p>
                  </div>

                  {/* Item 3: Future-Ready Skills */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md hover:border-red-100 group transition-all duration-300">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#e41e3d] mb-4 group-hover:scale-110 transition-transform">
                      <Cpu size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-2">Future-Ready Skills</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                      Focused on AI, automation, and emerging technologies. We equip our developers with the ultimate tools to lead the digital transformation wave.
                    </p>
                  </div>

                  {/* Item 4: Innovation Mindset */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md hover:border-red-100 group transition-all duration-300">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#e41e3d] mb-4 group-hover:scale-110 transition-transform">
                      <Lightbulb size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e293b] mb-2">Innovation Mindset</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                      Expanding from education into software product development. Cultivating dynamic problem solving, creativity, and persistent entrepreneurial leverage.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {trainingPrograms.map((program) => (
                  <div 
                    key={program.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 flex flex-col transition-shadow"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={program.bannerUrl} 
                        alt={program.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 text-xs font-bold bg-white text-[#e41e3d] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {program.id === 't1' ? 'Career-Focused Programs' : 
                         program.id === 't2' ? 'Building the Future with AI' : 
                         program.targetAudience}
                      </span>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                        
                        <ul className="space-y-2">
                          {program.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <CheckCircle size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => {
                          if (onNavigate) {
                            if (program.id === 't1') {
                              onNavigate('Academy');
                            } else if (program.id === 't2') {
                              onNavigate('Products');
                            } else if (program.id === 't3') {
                              onNavigate('Collaboration');
                            }
                          } else {
                            onGetStartedClick();
                          }
                        }}
                        className="w-full py-2.5 px-4 bg-slate-50 border border-slate-200 hover:border-[#e41e3d] text-slate-800 hover:text-[#e41e3d] font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>
                          {program.id === 't1' ? 'Learn More' : 
                           program.id === 't2' ? 'View Products' : 'Partner With Us'}
                        </span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sub-section 5: THE SUN ACADEMY / FLAGSHIP PROGRAMS (Left to Right) */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div
              id="courses"
              className="mt-6 pt-5 border-t border-slate-200/60 w-full"
            >
              <div className="text-center max-w-3xl mx-auto space-y-2 mb-6">
                <span className="text-[#e41e3d] font-bold text-sm tracking-widest uppercase font-mono bg-red-50 px-3 py-1 rounded-full">Flagship Programs</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Accelerate Your AI and Tech Journey</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Academic precision engineered for real-world leverage. Curated and instructed in tandem with active industry engineering leaders, incorporating extensive interactive lab files and solid project portfolios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
                {courses.map((course) => (
                  <div 
                    key={course.id}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1.5 flex flex-col justify-between transition-all duration-350"
                  >
                    <div className="flex flex-col">
                      {/* Card Header Image */}
                      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 border-b border-gray-100">
                        <img 
                          src={course.image} 
                          alt={`${course.title} Flagship Program Banner image`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Badge Overlay */}
                        <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm ${
                            course.mode === 'Blended' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                            course.mode === 'Online' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                          }`}>
                            {course.mode}
                          </span>
                        </div>

                        {/* Duration Overlay */}
                        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <Clock size={11} />
                          {course.duration}
                        </div>
                      </div>

                      {/* Program Description & Info */}
                      <div className="p-5 space-y-4">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#e41e3d] transition-colors duration-200 min-h-[48px] line-clamp-2">
                          {course.title}
                        </h3>
                        
                        {/* Fee Details styled prominently */}
                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Program Fee</span>
                          <span className="text-sm font-bold text-[#e41e3d]">{course.fee}</span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 min-h-[72px]">
                          {course.description}
                        </p>

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {course.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-slate-600 font-medium bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 pt-0 mt-auto">
                      <div className="border-t border-slate-100 pt-4 flex items-center justify-end">
                        <button
                          onClick={() => onGetStartedClick(course.title)}
                          className="text-xs font-bold text-[#e41e3d] flex items-center gap-1 hover:underline cursor-pointer group"
                        >
                          <span>Enroll Now</span>
                          <ChevronRight size={14} className="mt-0.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* SECTION: PRODUCTS (Right to Left) */}
      <section
        id="products"
        className="py-6 sm:py-8 bg-slate-50 border-b border-gray-100 flex flex-col justify-center overflow-hidden w-full"
      >
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Context & Call-to-Action */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <span className="text-[#e41e3d] font-bold text-sm tracking-widest uppercase font-mono bg-red-50 px-4 py-1.5 rounded-full inline-block">
                  Products Under Development
                </span>
                
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Building the <span className="text-[#e41e3d]">Future</span>
                  </h2>
                  <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                    We are currently developing innovative, AI-driven software products engineered to transform talent pipelines and optimize educational and operational delivery workflows.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider font-mono">
                    Key Focus Areas:
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed text-justify mb-3">
                    Harnessing our 25-year pedagogical foundation to create state-of-the-art intelligent tools in collaboration with leading technical experts and software architects.
                  </p>
                </div>
              </div>

              {/* Right Column: 5 Areas Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                
                {/* 1. AI-Powered Learning */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                  <div className="p-2.5 bg-red-50 text-[#e41e3d] rounded-lg group-hover:scale-110 transition-transform">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">AI-Powered Learning</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      Hyper-personalized learning models providing dynamic code reviews and adaptive conceptual training.
                    </p>
                  </div>
                </div>

                {/* 2. Resume Intelligence */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Resume Intelligence</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      Intelligent verification of development credentials and practical project repository compliance.
                    </p>
                  </div>
                </div>

                {/* 3. Career Guidance */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Career Guidance</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      Dynamic navigation matching real-time candidate capacities with precise requirements of global ecosystems.
                    </p>
                  </div>
                </div>

                {/* 4. Recruitment Automation */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Recruitment Automation</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      Optimized recruitment workflows using custom benchmarks to scale hiring processes efficiently.
                    </p>
                  </div>
                </div>

                {/* 5. Business Productivity */}
                <div className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4 sm:col-span-2">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Business Productivity</h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      Specialized workflow integrations, autonomous agent tools, and enterprise orchestration frameworks.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Learn More Button */}
            <div className="mt-6 text-center flex justify-center">
              <button
                onClick={() => onGetStartedClick('Products Under Development')}
                className="inline-flex items-center gap-2 bg-[#e41e3d] hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Learn More</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </motion.div>
      </section>

      {/* SECTION: COLLABORATION (Left to Right) */}
      <section
        id="collaboration"
        className="py-6 sm:py-8 bg-white border-b border-gray-100 flex flex-col justify-center overflow-hidden w-full"
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Context Introduction */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <span className="text-[#e41e3d] font-bold text-sm tracking-widest uppercase font-mono bg-red-50 px-4 py-1.5 rounded-full inline-block">
                  Collaboration
                </span>
                
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Powering Growth <span className="text-[#e41e3d]">Together</span>
                  </h2>
                  <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                    Partnering with educational institutions, industry experts, startups, and organizations to create learning, innovation, and growth opportunities.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-800 mb-2 font-mono uppercase tracking-wider">
                    Our Ethos
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                    For 25 years, we have believed that sustainable technical education thrives on continuous collaboration between academia, business ecosystems, and builders.
                  </p>
                </div>
              </div>

              {/* Right Column: 6 Collaboration Areas */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-left">
                  <h3 className="text-xs font-bold text-[#e41e3d] uppercase tracking-widest font-mono mb-2">
                    Areas of Collaboration:
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  
                  {/* 1. College Workshops */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                    <div className="p-2.5 bg-red-50 text-[#e41e3d] rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">College Workshops</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Elevating academic curriculums with certified dynamic code bootcamps, technical seminaries, and hands-on coding modules.
                      </p>
                    </div>
                  </div>

                  {/* 2. Corporate Training */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                    <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Corporate Training</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Hyper-focused talent upskilling, system integration training, and targeted modern software courses for working professionals.
                      </p>
                    </div>
                  </div>

                  {/* 3. Industry Partnerships */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                    <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Building size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Industry Partnerships</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Bridging global ecosystem pipelines to ensure educational outcomes are perfectly customized to handle enterprise constraints.
                      </p>
                    </div>
                  </div>

                  {/* 4. Technology Projects */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                    <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Technology Projects</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Building functional proofs-of-concept, modern enterprise tooling modules, and high-quality software integrations together.
                      </p>
                    </div>
                  </div>

                  {/* 5. AI Innovation Initiatives */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                    <div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Brain size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">AI Innovation Initiatives</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Co-drafting models powered by advanced LLMs, autonomous agent architectures, and intelligence layers for daily operations.
                      </p>
                    </div>
                  </div>

                  {/* 6. Startup Ecosystem Support */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-red-100 transition-all duration-300 group flex items-start gap-4">
                    <div className="p-2.5 bg-pink-50 text-pink-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <Lightbulb size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Startup Ecosystem Support</h4>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        Mentoring newly launched enterprises, providing verified technical resources, and strategic developer advisory workflows.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION: TEAM (Right to Left) */}
      <section
        id="team"
        className="mt-0 pt-0 sm:pt-0 pb-6 sm:pb-8 bg-slate-50 border-b border-gray-100 flex flex-col justify-center overflow-hidden w-full"
      >
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-2 mb-6">
              <span className="text-[#e41e3d] font-bold text-sm tracking-widest uppercase font-mono bg-red-50 px-4 py-1.5 rounded-full inline-block">
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Meet the Minds Behind Our Products
              </h2>
              <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">
                Our product development team is focused on transforming innovative ideas into practical software solutions. Combining technology expertise, creativity, and a passion for problem-solving, we are building AI-powered products designed to create real-world impact.
              </p>
            </div>

            {/* Team Cards (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-10">
              
              {/* Card 1: Phaneendra Oruganti */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-lg hover:border-red-100 transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                <img
                  src={phaneendraPhoto}
                  alt="Phaneendra Oruganti"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 object-cover rounded-full flex-shrink-0 group-hover:scale-110 transition-transform shadow-md"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Phaneendra Oruganti</h3>
                  <p className="text-xs sm:text-sm text-[#e41e3d] font-bold tracking-wide uppercase font-mono">
                    Founder & Product Visionary
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                    Leading product strategy, innovation, and technology direction with over 25 years of experience in software education and technology leadership.
                  </p>
                </div>
              </div>

              {/* Card 2: Santhi Swaroopa Vakati */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-lg hover:border-red-100 transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                <img
                  src={santhiPhoto}
                  alt="Santhi Swaroopa Vakati"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 object-cover rounded-full flex-shrink-0 group-hover:scale-110 transition-transform shadow-md"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Santhi Swaroopa Vakati</h3>
                  <p className="text-xs sm:text-sm text-[#e41e3d] font-bold tracking-wide uppercase font-mono">
                    Innovation Associate
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify">
                    Contributing to product design, development, testing, and implementation of innovative software solutions.
                  </p>
                </div>
              </div>

            </div>

            {/* Section Footer */}
            <div className="max-w-3xl mx-auto border-t border-slate-200/60 pt-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                Building Tomorrow's Solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed max-w-2xl mx-auto">
                From concept to implementation, our team is committed to creating products that solve meaningful problems and deliver value through technology and innovation.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* SECTION: CONTACT (Left to Right) */}
      <section
        id="contact"
        className="py-6 sm:py-8 bg-slate-50 flex flex-col justify-center overflow-hidden w-full"
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex flex-col justify-center"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-6">
            <span className="text-[#e41e3d] font-bold text-sm tracking-wider uppercase font-mono">Connect panel</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Schedule Your Career Consultation</h2>
            <p className="text-gray-600">
              Have doubts? Talk to our technology counselors and request a detailed prospectus or lab walkthrough.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-12 text-left">
            
            {/* Contact details */}
            <div className="md:col-span-5 bg-[#e41e3d] text-white p-6 space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">The Sun Technologies</h3>
                <p className="text-white/80 text-[11px]">Reach out directly via official channels below.</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex gap-3.5 items-start">
                  <MapPin size={18} className="mt-0.5" />
                  <p>
                    <strong>25/12/271, Police Colony</strong><br />
                    A.K.Nagar, <br />
                    Nellore, AndharPradesh - 524004
                  </p>
                </div>

                <div className="flex gap-3.5 items-center">
                  <Phone size={18} />
                  <a href="tel:+919963484971" className="hover:underline">+91 9963484971</a>
                </div>

                <div className="flex gap-3.5 items-center">
                  <Mail size={18} />
                  <a href="mailto:careers@thesuntechnologies.in" className="hover:underline">careers@thesuntechnologies.com</a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 text-xs space-y-1">
                <p><strong>Counseling Hours:</strong></p>
                <p className="text-white/80">Monday – Saturday: 9:00 AM to 6:30 PM (IST)</p>
                <p className="text-white/80">Sunday: Closed for physical lab audits</p>
              </div>
            </div>

            {/* Quick interactive form placeholder in layout */}
            <div className="md:col-span-7 p-6 space-y-4">
              <h4 className="text-base font-bold text-gray-800">Quick Query Submit</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full text-xs p-3.5 border border-gray-205 rounded bg-gray-50 focus:outline-[#e41e3d]" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full text-xs p-3.5 border border-gray-205 rounded bg-gray-50 focus:outline-[#e41e3d]" 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full text-xs p-3.5 border border-gray-205 rounded bg-gray-50 focus:outline-[#e41e3d]" 
                />
                <textarea 
                  rows={3} 
                  placeholder="Tell us what you seek..." 
                  className="w-full text-xs p-3.5 border border-gray-205 rounded bg-gray-50 focus:outline-[#e41e3d] resize-none" 
                />
                <button
                  onClick={onGetStartedClick}
                  className="w-fit bg-[#e41e3d] hover:bg-[#c91833] text-white font-bold py-2.5 px-6 rounded text-xs cursor-pointer shadow-sm active:scale-95 transition-transform"
                >
                  Send Callback Request
                </button>
              </div>
            </div>

          </div>

        </div>
        </motion.div>
      </section>

      {/* Footer copyright & Links */}
      <footer className="bg-slate-950 text-slate-400 py-6 border-t border-slate-800/80">
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
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block w-full"
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
              <div className="flex items-center gap-3 mb-3">
                <a 
                  href="https://www.linkedin.com/in/phanindraoruganti/" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={15} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-900 border border-slate-800/80 hover:border-[#e41e3d] hover:bg-[#e41e3d] hover:text-white text-slate-400 transition-all duration-300"
                  aria-label="Facebook"
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
