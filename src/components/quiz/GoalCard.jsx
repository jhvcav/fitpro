import React from 'react';
import { ChevronRight } from 'lucide-react';

export const GoalCard = ({ goal, onClick }) => (
  <button
    onClick={onClick}
    className={`${goal.color} p-8 rounded-2xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
  >
    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
      {goal.icon}
    </div>
    <h3 className="text-2xl font-bold mb-2">{goal.title}</h3>
    <ChevronRight className="w-8 h-8 mx-auto mt-4 group-hover:translate-x-2 transition-transform" />
  </button>
);