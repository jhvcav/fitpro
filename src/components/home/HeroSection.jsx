import React from 'react';
import { StatCard } from '../common/StatCard';
import { statsData } from '../../data/stats';

export const HeroSection = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge éducatif */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20">
          <span className="text-sm text-gray-200">🎓 Contenus éducatifs</span>
          <span className="text-sm text-gray-400">— aucun coaching individuel</span>
        </div>

        {/* Image de hero */}
        <div className="mb-8 flex justify-center">
          <img 
            src="assets/images/JulienMuscu1.jpg"
            alt="Formations sport & bien-être"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Construis ta forme <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            avec une méthode structurée sur 90 jours
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Formations vidéo, programmes-cadre et ressources pratiques pour 
          t’entraîner <span className="font-semibold">en autonomie</span>. 
          Contenus généraux basés sur mon expérience — <span className="italic">pas de programme personnalisé ni d’encadrement individuel</span>.
        </p>

        {/* Vidéo */}
        <div className="mb-12 flex justify-center">
          <video 
            className="w-full max-w-md md:max-w-xl rounded-2xl shadow-2xl border-2 border-purple-500/30"
            controls
            poster="assets/images/video-thumbnail.jpg"
          >
            <source src="assets/videos/JulienVideo1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setActiveSection('offres')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-2xl"
          >
            Voir les formations
          </button>

          <button
            onClick={() => setActiveSection('quiz')} // renommé "auto-évaluation" dans l'UI du quiz
            className="px-8 py-4 rounded-full text-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition-all"
          >
            Démarrer l’auto-évaluation gratuite
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {statsData.map((stat, i) => (
            <StatCard key={i} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Disclaimer légal */}
        <p className="mt-10 max-w-3xl mx-auto text-sm text-gray-400">
          Les informations proposées ont une vocation <span className="font-medium">éducative et générale</span>. 
          Elles ne remplacent pas l’avis d’un professionnel de santé ni d’un éducateur sportif diplômé. 
          Consulte un médecin avant toute reprise d’activité physique.
        </p>
      </div>
    </section>
  );
};