import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { programsData } from '../../data/programs';
import { Calendar, Dumbbell } from 'lucide-react';

export const ProgramsSection = ({ setActiveSection }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Formations et programmes-cadre"
          subtitle="Un aperçu rapide des parcours disponibles"
        />

        {/* Liste compacte des programmes */}
        <div className="mt-8 space-y-4">
          {programsData.map((p) => (
            <div
              key={p.slug || p.name}
              className="flex flex-col md:flex-row md:items-center justify-between gap-3 rounded-xl bg-slate-800/50 border border-white/10 px-5 py-4"
            >
              <div className="flex items-start gap-4">
                {/* Pastille couleur en lien avec le pack */}
                <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${p.color}`} />
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mt-1">
                    {p.duration && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {p.duration}
                      </span>
                    )}
                    {p.workouts && (
                      <span className="inline-flex items-center gap-1">
                        <Dumbbell className="w-4 h-4" /> {p.workouts}
                      </span>
                    )}
                    {p.price && (
                      <span className="font-semibold text-white/90">{p.price}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Tag “éducatif” */}
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 self-start md:self-auto">
                Contenu éducatif (non personnalisé)
              </span>
            </div>
          ))}
        </div>

        {/* CTA unique vers la page Offres */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setActiveSection('offres')}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transform hover:scale-105 transition-all duration-300"
          >
            Voir toutes les formations
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Contenus éducatifs et généraux — aucune personnalisation ni encadrement sportif individuel. <br />
          Consulte un professionnel de santé avant toute reprise d’activité physique.
        </p>
      </div>
    </section>
  );
};
