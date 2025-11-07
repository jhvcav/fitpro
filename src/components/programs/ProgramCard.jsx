import React from 'react';
import { Calendar, Dumbbell, CheckCircle } from 'lucide-react';

export const ProgramCard = ({ name, duration, workouts, color, features, accent, onSelect }) => (
  <div className={`relative bg-gradient-to-br ${color} p-8 rounded-2xl text-white shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all`}>
    <div className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
         style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }} />
    <div className="relative z-10">
      <h3 className="text-3xl font-extrabold mb-4 drop-shadow-lg">{name}</h3>

      <div className="space-y-2 mb-6 text-sm font-medium text-white/90">
        <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /><span>{duration}</span></div>
        <div className="flex items-center gap-2"><Dumbbell className="w-5 h-5" /><span>{workouts}</span></div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className={`w-5 h-5 ${accent}`} />
            <span className="text-white/90">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-xl font-semibold transition border border-white/10"
        aria-label={`Voir le détail de ${name}`}
      >
        Je prends cette formation
      </button>
    </div>
  </div>
);