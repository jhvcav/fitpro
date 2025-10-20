import React from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export const Navigation = ({ activeSection, setActiveSection, menuOpen, setMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center h-16 relative">
        {/* Logo à gauche - position absolue */}
        <div className="absolute left-0 flex items-center gap-2">
          <Dumbbell className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            BodyFree
          </span>
        </div>
        
        {/* Menu centré */}
        <div className="hidden md:flex gap-8">
          <NavLink onClick={() => setActiveSection('home')} active={activeSection === 'home'}>
            Accueil
          </NavLink>
          <NavLink onClick={() => setActiveSection('features')} active={activeSection === 'features'}>
            Fonctionnalités
          </NavLink>
          <NavLink onClick={() => setActiveSection('programs')} active={activeSection === 'programs'}>
            Programmes
          </NavLink>
          <NavLink onClick={() => setActiveSection('testimonials')} active={activeSection === 'testimonials'}>
            Témoignages
          </NavLink>
          <button 
            onClick={() => setActiveSection('quiz')} 
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition"
          >
            Commencer
          </button>
        </div>

        {/* Bouton menu mobile - position absolue à droite */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white absolute right-0">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {menuOpen && <MobileMenu setActiveSection={setActiveSection} setMenuOpen={setMenuOpen} />}
  </nav>
);