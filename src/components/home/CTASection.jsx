import React from 'react';

export const CTASection = ({ setActiveSection }) => (
  <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Prêt à commencer votre transformation ?
      </h2>
      <p className="text-xl text-white/90 mb-10">
        Rejoignez tous ceux qui ont déjà atteint leurs objectifs
      </p>
      <button 
        onClick={() => setActiveSection('quiz')}
        className="bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-2xl"
      >
        Créer mon programme gratuit
      </button>
    </div>
  </section>
);