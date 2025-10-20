import React from 'react';

export const MobileMenu = ({ setActiveSection, setMenuOpen }) => (
  <div className="md:hidden bg-slate-800 border-t border-white/10">
    <div className="flex flex-col gap-4 p-4">
      <button onClick={() => { setActiveSection('home'); setMenuOpen(false); }} 
              className="text-gray-300 hover:text-white transition text-left">
        Accueil
      </button>
      <button onClick={() => { setActiveSection('features'); setMenuOpen(false); }} 
              className="text-gray-300 hover:text-white transition text-left">
        Fonctionnalités
      </button>
      <button onClick={() => { setActiveSection('programs'); setMenuOpen(false); }} 
              className="text-gray-300 hover:text-white transition text-left">
        Programmes
      </button>
      <button onClick={() => { setActiveSection('testimonials'); setMenuOpen(false); }} 
              className="text-gray-300 hover:text-white transition text-left">
        Témoignages
      </button>
      <button onClick={() => { setActiveSection('quiz'); setMenuOpen(false); }} 
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold">
        Commencer
      </button>
    </div>
  </div>
);