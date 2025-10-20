import React from 'react';
import { Calendar, Dumbbell, CheckCircle } from 'lucide-react';

export const ProgramCard = ({ name, duration, workouts, color, features }) => (
  <div className={`bg-gradient-to-br ${color} p-8 rounded-2xl text-white transform hover:scale-105 transition-all`}>
    <h3 className="text-3xl font-bold mb-4">{name}</h3>
    <div className="space-y-2 mb-6">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        <span>{duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <Dumbbell className="w-5 h-5" />
        <span>{workouts}</span>
      </div>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-xl font-semibold transition">
      Choisir ce programme
    </button>
  </div>
);