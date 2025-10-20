import React, { useState } from 'react';
import { Navigation } from './components/navigation/Navigation';
import { HeroSection } from './components/home/HeroSection';
import { FeaturesSection } from './components/features/FeaturesSection';
import { ProgramsSection } from './components/programs/ProgramsSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { QuizSection } from './components/quiz/QuizSection';
import { CTASection } from './components/home/CTASection';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="pt-16">
        {activeSection === 'quiz' ? (
          <QuizSection />
        ) : (
          <>
            {activeSection === 'home' && <HeroSection setActiveSection={setActiveSection} />}
            {(activeSection === 'home' || activeSection === 'features') && <FeaturesSection />}
            {(activeSection === 'home' || activeSection === 'programs') && <ProgramsSection />}
            {(activeSection === 'home' || activeSection === 'testimonials') && <TestimonialsSection />}
            {activeSection === 'home' && <CTASection setActiveSection={setActiveSection} />}
          </>
        )}
      </div>
    </div>
  );
}