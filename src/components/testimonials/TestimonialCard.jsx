import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard = ({ name, result, text }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, j) => (
        <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <p className="text-gray-300 mb-6 italic">"{text}"</p>
    <div className="border-t border-white/20 pt-4">
      <div className="font-bold text-white">{name}</div>
      <div className="text-purple-400 font-semibold">{result}</div>
    </div>
  </div>
);