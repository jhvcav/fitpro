import { Dumbbell, Apple, TrendingUp, User } from 'lucide-react';

export const featuresData = [
  { 
    title: 'Plans d\'entraînement personnalisés', 
    desc: 'Adaptés à votre niveau et objectifs', 
    icon: <Dumbbell className="w-6 h-6" /> 
  },
  { 
    title: 'Nutrition sur mesure', 
    desc: 'Recettes et plans alimentaires', 
    icon: <Apple className="w-6 h-6" /> 
  },
  { 
    title: 'Suivi de progression', 
    desc: 'Statistiques et graphiques détaillés', 
    icon: <TrendingUp className="w-6 h-6" /> 
  },
  { 
    title: 'Coach personnel', 
    desc: 'Conseils personnalisés et motivation', 
    icon: <User className="w-6 h-6" /> 
  }
];