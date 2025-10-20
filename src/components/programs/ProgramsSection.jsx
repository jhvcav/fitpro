import React from 'react';
import { ProgramCard } from './ProgramCard';
import { SectionHeader } from '../common/SectionHeader';
import { programsData } from '../../data/programs';

export const ProgramsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Nos programmes"
          subtitle="Choisissez le programme adapté à votre niveau"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {programsData.map((program, i) => (
            <ProgramCard key={i} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};