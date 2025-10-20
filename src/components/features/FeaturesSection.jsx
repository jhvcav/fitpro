import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SectionHeader } from '../common/SectionHeader';
import { featuresData } from '../../data/features';

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Tout ce dont vous avez besoin"
          subtitle="Une solution complète pour atteindre vos objectifs fitness"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {featuresData.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};