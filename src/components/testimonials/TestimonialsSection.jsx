import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { SectionHeader } from '../common/SectionHeader';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Ils ont transformé leur vie"
          subtitle="Découvrez les résultats de notre communauté"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};