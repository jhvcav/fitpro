import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SectionHeader } from '../common/SectionHeader';
import { featuresData } from '../../data/features';

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Tout pour t'entraîner en autonomie"
          subtitle="Formations, programmes-cadre, vidéos techniques et outils d’auto-suivi — sans coaching individuel"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {featuresData.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

        {/* mini-disclaimer optionnel en bas de section */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Contenus à visée éducative et générale. Ils ne remplacent pas l’avis d’un professionnel de santé ni d’un éducateur sportif diplômé.
        </p>
      </div>
    </section>
  );
};