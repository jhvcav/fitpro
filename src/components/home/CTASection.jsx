import React from 'react';

export const CTASection = ({ setActiveSection }) => (
  <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
    {/* Halo décoratif */}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_70%)]"></div>

    <div className="relative max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        Prêt à <span className="text-yellow-300">améliorer ta forme</span> en autonomie ?
      </h2>

      <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
        Découvre des <span className="font-semibold">formations simples et progressives 
        pour t’entraîner efficacement, sans coaching individuel.  
        Apprends à construire ta routine, à ton rythme </span>
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
  onClick={() => setActiveSection('offres')}
  className="bg-gradient-to-r from-green-500 via-green-500 to-green-400 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transform hover:scale-105 transition-all duration-300"
>
  Voir les formations
</button>

        <button
          onClick={() => setActiveSection('quiz')}
          className="bg-transparent border-2 border-white/70 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
        >
          Démarrer l’auto-évaluation gratuite
        </button>
      </div>

      <p className="mt-10 text-sm text-white/70">
        Contenus à visée éducative et générale.  
        Ils ne remplacent pas l’avis d’un professionnel de santé ni d’un coach sportif diplômé.
      </p>
    </div>
  </section>
);