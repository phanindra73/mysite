import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import AcademyPage from './components/AcademyPage';
import ProductsPage from './components/ProductsPage';
import CollaborationPage from './components/CollaborationPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import DisclaimerPage from './components/DisclaimerPage';
import RefundPolicyPage from './components/RefundPolicyPage';
import GetStartedModal from './components/GetStartedModal';
import { NavItem } from './types';
import { registerSlowScroll, slowScrollTo } from './utils/scroll';

export default function App() {
  const [activeItem, setActiveItem] = useState<NavItem>('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const [wasOnSubpage, setWasOnSubpage] = useState(false);

  useEffect(() => {
    const unregister = registerSlowScroll();
    return () => unregister();
  }, []);

  // Handle route transition with slow scroll when transitioning back from a dedicated subpage
  useEffect(() => {
    const isSubpage = activeItem === 'About' || activeItem === 'Academy' || activeItem === 'Products' || activeItem === 'Collaboration' || activeItem === 'Privacy Policy' || activeItem === 'Terms of Use' || activeItem === 'Disclaimer' || activeItem === 'Refund Policy';
    if (isSubpage) {
      setWasOnSubpage(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (wasOnSubpage) {
        if (activeItem === 'Academy' || activeItem === 'Products' || activeItem === 'Collaboration') {
          setWasOnSubpage(false);
          return;
        }
        const targetId = activeItem.toLowerCase().replace(' ', '-');
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = window.innerWidth < 640 ? 70 : 155;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            slowScrollTo(offsetPosition, 1200);
          }
        }, 120);
        setWasOnSubpage(false);
        return () => clearTimeout(timer);
      }
    }
  }, [activeItem, wasOnSubpage]);

  const handleOpenModal = (programName?: string) => {
    setSelectedProgram(programName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased font-sans flex flex-col selection:bg-red-500 selection:text-white overflow-x-hidden w-full" id="root-layout">
      {/* 
        High-precision responsive header for The Sun Technologies.
        All exact specified dimensions, spacing, hover effects, and font sizing are respected.
      */}
      <Header 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
        onGetStartedClick={() => handleOpenModal()}
      />

      {/* 
        Condition check: Switch between main Landing (HeroSection),
        the dedicated AboutPage, the PrivacyPolicyPage, the TermsOfUsePage, and the DisclaimerPage.
      */}
      <main className="flex-grow pt-[70px] sm:pt-[155px]">
        {activeItem === 'About' ? (
          <AboutPage onGetStartedClick={() => handleOpenModal()} onNavigate={setActiveItem} />
        ) : activeItem === 'Academy' ? (
          <AcademyPage onGetStartedClick={handleOpenModal} onNavigate={setActiveItem} />
        ) : activeItem === 'Products' ? (
          <ProductsPage onNavigate={setActiveItem} />
        ) : activeItem === 'Collaboration' ? (
          <CollaborationPage onNavigate={setActiveItem} />
        ) : activeItem === 'Privacy Policy' ? (
          <PrivacyPolicyPage onNavigate={setActiveItem} />
        ) : activeItem === 'Terms of Use' ? (
          <TermsOfUsePage onNavigate={setActiveItem} />
        ) : activeItem === 'Disclaimer' ? (
          <DisclaimerPage onNavigate={setActiveItem} />
        ) : activeItem === 'Refund Policy' ? (
          <RefundPolicyPage onNavigate={setActiveItem} />
        ) : (
          <HeroSection onGetStartedClick={handleOpenModal} onNavigate={setActiveItem} />
        )}
      </main>

      {/* 
        Registration Modal context triggered by 'Get Started' action.
      */}
      <GetStartedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialProgram={selectedProgram}
      />
    </div>
  );
}
