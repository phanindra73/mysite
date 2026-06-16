import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, BookOpen, GraduationCap, Phone, Info, Award, Layers, Rocket, Users } from 'lucide-react';
import { NavItem } from '../types';
import { slowScrollTo } from '../utils/scroll';
import headerBanner from '../assets/images/1350x150.jpg';

interface HeaderProps {
  activeItem: NavItem;
  setActiveItem: (item: NavItem) => void;
  onGetStartedClick: () => void;
}

export default function Header({ activeItem, setActiveItem, onGetStartedClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = ['Home', 'About', 'Academy', 'Products', 'Collaboration', 'Team', 'Contact'];

  // Synchronized Scroll Spy and Sticky Background effects
  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky background toggle
      setScrolled(window.scrollY > 10);

      // Skip scroll spy if we are on any of the dedicated subpages
      const isSubpage = activeItem === 'About' || activeItem === 'Academy' || activeItem === 'Products' || activeItem === 'Collaboration' || activeItem === 'Privacy Policy' || activeItem === 'Terms of Use' || activeItem === 'Disclaimer' || activeItem === 'Refund Policy';
      if (isSubpage) return;

      // 2. Scroll Spy calculation
      const sections = ['home', 'team', 'contact'];
      // The threshold below Header before a section becomes active
      const scrollPosition = window.scrollY + (window.innerWidth < 640 ? 70 : 155);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            const mappedSectionStr = (sections[i] === 'home' ? 'Home' :
                                     sections[i] === 'about' ? 'About' :
                                     sections[i] === 'products' ? 'Products' :
                                     sections[i] === 'collaboration' ? 'Collaboration' :
                                     sections[i] === 'team' ? 'Team' : 'Contact') as NavItem;
            
            if (activeItem !== mappedSectionStr) {
              setActiveItem(mappedSectionStr);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load to ensure active element on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item);
    setMobileMenuOpen(false);
    
    if (item === 'About') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item === 'Academy' || item === 'Products' || item === 'Collaboration') {
      // Disconnected from direct section scroll behavior
      return;
    }
    
    // Smooth scroll to corresponding page section
    const targetId = item.toLowerCase().replace(' ', '-');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = window.innerWidth < 640 ? 70 : 155;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      slowScrollTo(offsetPosition, 1600);
    }
  };

  // Icon mapping for navigation context (mobile drawers looks lovely with them)
  const getIcon = (item: NavItem) => {
    switch (item) {
      case 'Home': return <Globe size={18} />;
      case 'About': return <Info size={18} />;
      case 'Academy': return <BookOpen size={18} />;
      case 'Products': return <Layers size={18} />;
      case 'Collaboration': return <Rocket size={18} />;
      case 'Team': return <Users size={18} />;
      case 'Contact': return <Phone size={18} />;
    }
  };

  return (
    <>
      {/* 
        Header Specifications:
        - Height: 70px (mobile unified bar) / 155px (desktop stacked configuration) total
        - Background: White (bg-white)
        - Box-shadow: 0 2px 8px rgba(0,0,0,0.1) (shadow-[0_2px_8px_rgba(0,0,0,0.1)])
      */}
      <header
        id="app-header"
        className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300"
      >
        {/* Brand Bar: Custom layout for mobile with logo and Hamburger on the right in the same line */}
        <div className="flex items-center justify-between h-[70px] sm:h-[85px] px-[20px] sm:px-[40px] w-full select-none">
          <img
            src={headerBanner}
            alt="The Sun Technologies"
            referrerPolicy="no-referrer"
            className="h-[55px] sm:h-[85px] w-auto max-w-[75%] sm:max-w-[55%] object-contain mr-auto select-none"
          />

          {/* Hamburger Menu Icon in aligned position (< 600px, responsive layout) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-hamburger"
            className="block min-[600px]:hidden p-1.5 rounded-md text-gray-650 hover:text-[#e41e3d] hover:bg-red-50 focus:outline-none cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Secondary Navigation Section (Visible only on desktop >= 600px) */}
        <div className="hidden min-[600px]:flex h-[70px] w-full justify-between items-center px-[20px] sm:px-[40px] border-t border-gray-100">
          {/* Left Section: Logo placeholder / Empty */}
          <div className="flex items-center">
            {/* Logo and brand name removed per request */}
          </div>

          {/* Center Section: Navigation Menu */}
          <nav className="flex items-center" id="desktop-nav">
            <ul 
              className="flex items-center select-none" 
              style={{ gap: '30px' }} // Spacing between items: 30px
            >
              {navItems.map((item) => {
                const isActive = activeItem === item;
                return (
                  <li key={item} className="relative">
                    <button
                      onClick={() => handleNavClick(item)}
                      id={`nav-item-${item.toLowerCase().replace(' ', '-')}`}
                      className={`font-segoe text-[16px] leading-[1] font-medium transition-colors duration-200 cursor-pointer py-2 focus:outline-none ${
                        isActive ? 'text-[#e41e3d]' : 'text-[#333333]'
                      } hover:text-[#e41e3d]`}
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif' }}
                    >
                      {item}
                    </button>

                    {/* Active item: Red underline #e41e3d (3px) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e41e3d] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        id="active-underline-indicator"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Empty right section for alignment */}
          <div className="flex items-center gap-4" />
        </div>
      </header>

      {/* Mobile Drawer Navigation (Width < 600px based on min-[600px]:hidden and active toggle) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-45 min-[600px]:hidden"
              id="mobile-nav-backdrop"
            />

            {/* Mobile Nav Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-[70px] sm:top-[155px] bottom-0 w-[280px] bg-white shadow-2xl z-45 min-[600px]:hidden flex flex-col p-6 overflow-y-auto border-l border-gray-100"
              id="mobile-nav-drawer"
            >
              <div className="flex flex-col gap-6 mt-4">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Menu Navigation
                </span>
                
                <ul className="flex flex-col gap-2 select-none">
                  {navItems.map((item) => {
                    const isActive = activeItem === item;
                    return (
                      <li key={item}>
                        <button
                          onClick={() => handleNavClick(item)}
                          className={`w-full flex items-center gap-4 text-left p-3 rounded-lg text-[15px] font-medium transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-red-50 text-[#e41e3d]'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#e41e3d]'
                          }`}
                          style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif' }}
                        >
                          <span className={`${isActive ? 'text-[#e41e3d]' : 'text-gray-400'}`}>
                            {getIcon(item)}
                          </span>
                          <span>{item}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <hr className="border-gray-100 my-2" />

                {/* Get Started Inside Drawer */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Start your transformation with the right technology training and premium career services.
                  </p>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onGetStartedClick();
                    }}
                    id="get-started-btn-mobile"
                    className="w-full bg-[#e41e3d] text-white text-center font-bold py-3.5 px-4 rounded-[4px] cursor-pointer text-[15px] shadow-sm active:scale-95 transition-transform"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>

              {/* Version indicator keeping things simple & humble */}
              <div className="mt-auto pt-8 text-center">
                <p className="text-[10px] text-gray-400">
                  © 2026 The Sun Technologies
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
