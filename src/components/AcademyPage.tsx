import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, BookOpen, GraduationCap, Clock, Award, ShieldCheck, 
  Check, ChevronRight, Download, Star, Sparkles, Database, 
  Code, Cloud, Layers, Terminal, ArrowRight, BookMarked,
  Linkedin, Github, Facebook
} from 'lucide-react';
import { ACADEMY_CATEGORIES, AcademyCourse, AcademyCategory } from '../data/academyData';

interface AcademyPageProps {
  onGetStartedClick: (courseName: string) => void;
  onNavigate: (item: any) => void;
}

export default function AcademyPage({ onGetStartedClick, onNavigate }: AcademyPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  // Custom states for downloads
  const [downloadingCourse, setDownloadingCourse] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Filter categories and courses by search criteria
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    // 1. If No Search Query, just filter by selected category
    if (!query) {
      if (activeCategoryId === 'all') {
        return ACADEMY_CATEGORIES;
      }
      const targetCat = ACADEMY_CATEGORIES.find(c => c.id === activeCategoryId);
      return targetCat ? [targetCat] : [];
    }
    
    // 2. Search Query is active: first filter within selected category if not 'all'
    const searchInAll = activeCategoryId === 'all';
    
    const results = ACADEMY_CATEGORIES.map(cat => {
      // If we are filtering by a specific category, ignore other categories for now
      if (!searchInAll && cat.id !== activeCategoryId) {
        return null;
      }
      
      const isCatMatch = cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
      const matches = cat.courses.filter(course => 
        isCatMatch ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.skills.some(skill => skill.toLowerCase().includes(query))
      );
      
      if (matches.length > 0) {
        return { ...cat, courses: matches };
      }
      return null;
    }).filter((cat): cat is AcademyCategory => cat !== null);

    // 3. Fallback: If filtering a specific category yielded 0 results, check if global search has results!
    if (results.length === 0 && !searchInAll) {
      const globalResults = ACADEMY_CATEGORIES.map(cat => {
        const isCatMatch = cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
        const matches = cat.courses.filter(course => 
          isCatMatch ||
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.skills.some(skill => skill.toLowerCase().includes(query))
        );
        if (matches.length > 0) {
          return { ...cat, courses: matches };
        }
        return null;
      }).filter((cat): cat is AcademyCategory => cat !== null);

      if (globalResults.length > 0) {
        return globalResults; // Return global results instead of showing blank!
      }
    }

    return results;
  }, [searchQuery, activeCategoryId]);

  // Aggregate stats
  const stats = useMemo(() => {
    let totalCourses = 0;
    let totalHours = 0;
    ACADEMY_CATEGORIES.forEach(cat => {
      totalCourses += cat.courses.length;
      cat.courses.forEach(c => {
        const hoursMatch = c.duration.match(/\d+/);
        if (hoursMatch) {
          totalHours += parseInt(hoursMatch[0]);
        }
      });
    });
    return { totalCourses, totalHours };
  }, []);

  // Map category IDs to icons beautifully
  const getCategoryIcon = (id: string, size = 18) => {
    switch (id) {
      case 'programming': return <Code size={size} />;
      case 'web-dev': return <Terminal size={size} />;
      case 'database': return <Database size={size} />;
      case 'data-science': return <Layers size={size} />;
      case 'ai-ml': return <GraduationCap size={size} />;
      case 'gen-ai-agents': return <Sparkles size={size} />;
      case 'cloud-devops': return <Cloud size={size} />;
      case 'software-testing': return <ShieldCheck size={size} />;
      case 'enterprise-integration': return <BookMarked size={size} />;
      default: return <BookOpen size={size} />;
    }
  };

  // Safe helper to format fee in INR
  const formatSalary = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Mock-download Syllabus file for excellent user interactivity
  const handleDownloadSyllabus = (course: AcademyCourse, categoryName: string) => {
    setDownloadingCourse(course.title);
    
    // Simulate generation delay
    setTimeout(() => {
      const text = `===========================================================
               THE SUN TECHNOLOGIES ACADEMY
              OFFICIAL TRAINING COURSE SYLLABUS
===========================================================
COURSE NAME     : ${course.title}
ACADEMIC STREAM : ${categoryName}
DURATION        : ${course.duration}
FEE STRUCTURE   : ${formatSalary(course.feeINR)} (Inclusive of 18% Academic GST)
SKILL BINDINGS  : ${course.skills.join(', ')}
LEVEL STATUS    : ${course.level}
COHORT TERM     : 2026 Academic Batch
-----------------------------------------------------------
ACADEMY HIGHLIGHTS:
- 100% Guaranteed Practice Worksheets & Assignments
- Direct LMS Credentials & Authorized Portals Access
- Mock Quizzes & Gate preparation reviews
- Certification on complete course coverage
-----------------------------------------------------------
LESSON PLANS & SYLLABUS LAYOUT:

WEEK 1 (First 15%):
- Logic Building, Environment Configurations & Setups
- Key architectures, basic operators, and execution frameworks

WEEK 2 (Next 25%):
- Intermediate state managers, patterns, and dynamic models
- Practical Labs: Real-world problems walkthrough

WEEK 3 (Next 35%):
- Core integrations, security modules, and API bridges
- Hands-on deployment: Local system containers / Servers

WEEK 4 (Final 25%):
- Real-time client execution project
- Code inspection sessions, QA, and Certificate Handover!
===========================================================
To register for this course and guarantee a seat, please click 
"Enrol Now" in the Academy Page.

Need immediate guidance? Mail us at: phaniovv@gmail.com
Thank you for trusting Sun Technologies.
===========================================================`;

      const element = document.createElement("a");
      const file = new Blob([text], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `SunAcademy_Syllabus_${course.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setDownloadingCourse(null);
      setDownloadSuccess(course.title);
      setTimeout(() => setDownloadSuccess(null), 3000);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-0" id="academy-page-wrapper">
      
      {/* 
        Section 1: Hero Header Container with Red accent theme 
      */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden py-16 px-4 border-b border-red-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(228,30,61,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/25 px-3 py-1.5 rounded-full text-xs font-bold text-[#e41e3d] tracking-wider uppercase">
            <GraduationCap size={14} className="animate-pulse" />
            <span>The Sun Academy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Comprehensive <span className="text-[#e41e3d]">Technology Curriculums</span>
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
            Accelerate your transformation with industry-vetted modular courses designed by corporate technical leaders. Browse schedules, compare courses, download syllabus files, and enroll instantly.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-white/5">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">{stats.totalCourses}+</span>
              <span className="text-xs text-gray-400 font-medium">Professional Curriculums</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">{stats.totalHours}+ Hours</span>
              <span className="text-xs text-gray-400 font-medium">Instructor-Led Labs</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">4.88 / 5</span>
              <span className="text-xs text-gray-400 font-medium">Average Student Rating</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
              <span className="text-xs text-gray-400 font-medium">Interactive Classrooms</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
        Section 2: Interactive Controls & Filters (Search, View Mode Toggles, Category Chips)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Active Search Field */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, modules, or tools (e.g. React, Docker)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-250 rounded-xl text-sm placeholder-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#e41e3d] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Style / View Mode Toggle Action */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">
              Layout Preferences
            </span>
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/60 font-sans text-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Cards View
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-1.5 rounded-lg font-semibold cursor-pointer transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Schedules Table
              </button>
            </div>
          </div>
        </div>

        {/* Categories Chips Selection Bar - Quick Responsive Slider */}
        <div className="mt-6 flex overflow-x-auto pb-3 gap-2 scrollbar-none select-none">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold shrink-0 capitalize border transition-all cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-[#e41e3d] border-[#e41e3d] text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span>All Domains</span>
          </button>
          {ACADEMY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold shrink-0 border transition-all cursor-pointer ${
                activeCategoryId === cat.id
                  ? 'bg-[#e41e3d] border-[#e41e3d] text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <span className={activeCategoryId === cat.id ? 'text-white/90' : 'text-slate-400'}>
                {getCategoryIcon(cat.id, 14)}
              </span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* 
          Section 3: Main Layout Splitting (Sidebar Navigation + Course Rendering)
        */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* L1: Sidebar Nav Sidebar for Desktop Navigation */}
          <aside className="lg:col-span-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs select-none sticky top-[240px] hidden lg:block">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase pb-3 border-b border-slate-100 mb-3">
              Domain Tracks
            </h3>
            
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveCategoryId('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    activeCategoryId === 'all'
                      ? 'bg-red-50 text-[#e41e3d]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <BookOpen size={16} className={activeCategoryId === 'all' ? 'text-[#e41e3d]' : 'text-slate-400'} />
                    All Modules
                  </span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${activeCategoryId === 'all' ? 'bg-red-100 text-[#e41e3d]' : 'bg-slate-100 text-slate-500'}`}>
                    40+
                  </span>
                </button>
              </li>
              
              {ACADEMY_CATEGORIES.map(cat => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-red-50 text-[#e41e3d]'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate pr-2">
                        <span className={isActive ? 'text-[#e41e3d]' : 'text-slate-400'}>
                          {getCategoryIcon(cat.id, 16)}
                        </span>
                        <span className="truncate">{cat.name}</span>
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${isActive ? 'bg-red-100 text-[#e41e3d]' : 'bg-slate-100 text-slate-500'}`}>
                        {cat.courses.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* L2: Courses Render Zone */}
          <section className="lg:col-span-9 space-y-12">
            
            {/* If zero courses matched */}
            {filteredData.length === 0 && (
              <div className="bg-white p-12 rounded-2xl border border-slate-200/80 text-center space-y-4 shadow-xs">
                <div className="w-16 h-16 bg-red-50 text-[#e41e3d] rounded-full flex items-center justify-center mx-auto">
                  <Search size={28} />
                </div>
                <h3 className="text-lg font-black text-slate-800">No Curriculums Matched</h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  We couldn't locate any courses matching "{searchQuery}". Try updating your query or selecting another academy domain track.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategoryId('all'); }}
                    className="px-5 py-2.5 bg-slate-150 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={() => onNavigate('Contact')}
                    className="px-5 py-2.5 bg-[#e41e3d] hover:bg-[#c91833] text-white text-xs font-bold rounded-xl cursor-pointer shadow-sm transition-transform active:scale-97 flex items-center justify-center gap-1.5"
                  >
                    Contact Academic Counsellor
                  </button>
                </div>
              </div>
            )}

            {/* Loop through domains */}
            {filteredData.map(cat => (
              <div key={cat.id} className="space-y-6" id={`category-block-${cat.id}`}>
                
                {/* Header for Domain segment with its description */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 bg-red-50 text-[#e41e3d] rounded-lg">
                      {getCategoryIcon(cat.id, 20)}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                        {cat.name}
                      </h2>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* VIEW 1: Visual Card Grid Rendering with responsive grid layout styles */}
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cat.courses.map((course, idx) => (
                      <div 
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200/70 hover:border-red-200/80 hover:shadow-md transition-all duration-300 p-5 flex flex-col justify-between group space-y-4 relative overflow-hidden"
                      >
                        {/* Decorative Red corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div>
                          {/* Heading, badge levels */}
                          <div className="flex items-start justify-between gap-2.5">
                            <span className={`px-2.5 py-0.5 text-[9px] font-black rounded-full uppercase tracking-wider ${
                              course.level === 'Beginner' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                              course.level === 'Intermediate' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                              course.level === 'Advanced' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                              'bg-green-50 text-green-700 border border-green-100'
                            }`}>
                              {course.level}
                            </span>
                            <div className="flex items-center gap-0.5 text-amber-500 font-extrabold text-xs">
                              <Star size={13} fill="currentColor" />
                              <span>{course.rating.toFixed(1)}</span>
                            </div>
                          </div>

                          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#e41e3d] transition-colors mt-2.5 leading-snug">
                            {course.title}
                          </h3>

                          <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed mt-2">
                            {course.description}
                          </p>

                          {/* Dynamic Skills Grid */}
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {course.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="px-2 py-0.5 bg-slate-50 border border-slate-150 rounded text-[10px] text-slate-600 font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Cost, length and register buttons */}
                        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3.5">
                          <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                            <div className="flex items-center gap-1 text-slate-650">
                              <Clock size={14} className="text-slate-400" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="text-right">
                              <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider leading-none">Course Fee</span>
                              <span className="text-sm sm:text-base font-black text-slate-950">{formatSalary(course.feeINR)}</span>
                            </div>
                          </div>

                          {/* Quick interactive buttons */}
                          <div className="grid grid-cols-2 gap-2.5 text-xs select-none">
                            <button
                              onClick={() => handleDownloadSyllabus(course, cat.name)}
                              disabled={downloadingCourse !== null}
                              className={`py-2 px-3.5 rounded-lg font-bold border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                                downloadSuccess === course.title
                                  ? 'bg-green-50 border-green-200 text-green-700'
                                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                              }`}
                            >
                              {downloadingCourse === course.title ? (
                                <span className="animate-pulse">Loading...</span>
                              ) : downloadSuccess === course.title ? (
                                <>
                                  <Check size={14} />
                                  <span>Downloaded</span>
                                </>
                              ) : (
                                <>
                                  <Download size={14} />
                                  <span>Syllabus</span>
                                </>
                              )}
                            </button>
                            <button
                              onClick={() => onGetStartedClick(course.title)}
                              className="py-2 px-3.5 bg-[#e41e3d] hover:bg-[#c91833] text-white rounded-lg font-bold shadow-sm transition-all active:scale-97 cursor-pointer flex items-center justify-center gap-1"
                            >
                              <span>Enrol Now</span>
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* VIEW 2: Tabular Schedule & Fee Comparison Layout */}
                {viewMode === 'table' && (
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-100/80 border-b border-slate-200 select-none">
                            <th className="p-4 font-bold text-slate-600 uppercase tracking-wider">Course Curriculum</th>
                            <th className="p-4 font-bold text-slate-600 uppercase tracking-wider w-32">Length</th>
                            <th className="p-4 font-bold text-slate-600 uppercase tracking-wider w-32">Grade/Level</th>
                            <th className="p-4 font-bold text-slate-600 uppercase tracking-wider w-40 text-right">Fee (₹)</th>
                            <th className="p-4 font-bold text-slate-600 uppercase tracking-wider w-56 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.courses.map((course, idx) => (
                            <tr 
                              key={idx}
                              className="border-b border-slate-100 hover:bg-red-50/10 transition-colors last:border-b-0"
                            >
                              <td className="p-4">
                                <span className="font-extrabold text-[#333333] block text-sm group-hover:text-[#e41e3d]">{course.title}</span>
                                <span className="text-slate-450 line-clamp-1 text-[11px] font-medium leading-relaxed mt-0.5">{course.description}</span>
                              </td>
                              <td className="p-4 whitespace-nowrap text-slate-650 font-semibold">{course.duration}</td>
                              <td className="p-4 whitespace-nowrap font-bold">
                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-wider ${
                                  course.level === 'Beginner' ? 'bg-blue-50 text-blue-700' :
                                  course.level === 'Intermediate' ? 'bg-amber-50 text-amber-700' :
                                  course.level === 'Advanced' ? 'bg-purple-50 text-purple-700' :
                                  'bg-green-50 text-green-700'
                                }`}>
                                  {course.level}
                                </span>
                              </td>
                              <td className="p-4 text-right whitespace-nowrap font-black font-sans text-sm text-slate-900">{formatSalary(course.feeINR)}</td>
                              <td className="p-3">
                                <div className="flex gap-2 justify-center select-none">
                                  <button
                                    onClick={() => handleDownloadSyllabus(course, cat.name)}
                                    className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 cursor-pointer"
                                    title="Download Syllabus Portfolio"
                                  >
                                    <Download size={14} />
                                  </button>
                                  <button
                                    onClick={() => onGetStartedClick(course.title)}
                                    className="px-3.5 py-1.5 bg-[#e41e3d] hover:bg-[#c91833] text-white font-extrabold rounded-lg shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center gap-1"
                                  >
                                    <span>Register</span>
                                    <ArrowRight size={12} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              </div>
            ))}

            {/* 
              Closing dynamic banner inside Academy Page 
            */}
            <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-100 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 shadow-xs select-none relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(228,30,61,0.03),transparent)] pointer-events-none" />
              <div className="space-y-2 relative z-10">
                <span className="text-xs font-bold text-[#e41e3d] tracking-widest uppercase font-mono">Dynamic Onboarding Available</span>
                <h3 className="text-xl font-bold text-slate-950">Don't find a matching course?</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-medium">
                  We formulate custom corporate bootcamps and customized training batches for organizations and groups. Contact our coordinators to align personalized schedules and timelines.
                </p>
              </div>
              <button
                onClick={() => onNavigate('Contact')}
                className="px-6 py-3 bg-[#e41e3d] hover:bg-[#c91833] text-white text-xs font-black rounded-lg shrink-0 shadow-md shadow-red-500/10 cursor-pointer transition-transform active:scale-97 relative z-10"
              >
                Contact Academic Coordinators
              </button>
            </div>

          </section>

        </div>
      </div>

      {/* FOOTER: Identical premium presentation */}
      <footer id="academy-footer" className="bg-slate-950 text-slate-400 py-6 mt-16 border-t border-slate-800/80 w-full">
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
                    className="text-[#e41e3d] font-semibold hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
                  >
                    Academy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('Home'); setTimeout(() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
                    className="hover:text-[#e41e3d] transition-colors cursor-pointer text-left block"
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
