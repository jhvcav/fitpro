import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ProgramCreation = () => (
  <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
    <h3 className="text-3xl font-bold mb-6 text-center">
      Excellent choix ! 🎉
    </h3>
    <p className="text-xl text-center mb-8">
      Nous créons votre programme personnalisé...
    </p>
    <div className="flex flex-col gap-4">
      {['Analyse de votre profil', 'Sélection des exercices', 'Création du plan nutritionnel'].map((step, i) => (
        <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <span className="text-lg">{step}</span>
        </div>
      ))}
    </div>
    <button className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all">
      Démarrer mon programme
    </button>
  </div>
);