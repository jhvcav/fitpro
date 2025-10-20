import React from 'react';
import { StatCard } from '../common/StatCard';
import { statsData } from '../../data/stats';

export const HeroSection = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Image de hero */}
        <div className="mb-8 flex justify-center">
          <img 
            //src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop"
            src="assets/images/JulienMuscu1.jpg"
            alt="Fitness motivation" 
            className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformez votre corps<br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            en 90 jours
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Programme personnalisé d'entraînement et de nutrition. 
          Rejoignez moi et les personnes qui ont atteint leurs objectifs.
        </p>
        <button 
          onClick={() => setActiveSection('quiz')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-2xl"
        >
          Démarrer mon quiz gratuit
        </button>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {statsData.map((stat, i) => (
            <StatCard key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};