import React from 'react';
import { ProgramCard } from '../programs/ProgramCard';
import { SectionHeader } from '../common/SectionHeader';
import { programsData } from '../../data/programs';

export const OffersSection = ({ setActiveSection, setSelectedOfferSlug }) => {
  return (
    <section className="py-20 px-4 bg-slate-900/70">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader 
          title="Formations & Programmes-cadre"
          subtitle="Apprends à t’entraîner efficacement, à ton rythme — sans encadrement individuel"
        />

        <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Des contenus éducatifs pour progresser <span className="font-semibold text-white">en autonomie</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <ProgramCard
              key={program.slug}
              {...program}
              onSelect={() => {
                setSelectedOfferSlug(program.slug);
                setActiveSection('offer-detail');
              }}
            />
          ))}
        </div>

        <p className="mt-16 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
          ⚠️ Contenus à visée éducative et générale.  
          Ils ne remplacent pas un avis médical ni l’accompagnement d’un éducateur sportif diplômé.
        </p>
      </div>
    </section>
  );
};