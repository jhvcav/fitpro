import React, { useState } from 'react';
import { GoalCard } from './GoalCard';
import { ProgramCreation } from './ProgramCreation';
import { goalsData } from '../../data/goals';

export const QuizSection = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [userGoal, setUserGoal] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quel est votre objectif ?
          </h2>
          <p className="text-xl text-gray-300">
            Choisissez votre but et nous créerons un plan personnalisé pour vous
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {goalsData.map((goal) => (
            <GoalCard 
              key={goal.id} 
              goal={goal} 
              onClick={() => { 
                setUserGoal(goal.id); 
                setQuizStep(1); 
              }} 
            />
          ))}
        </div>

        {quizStep === 1 && <ProgramCreation />}
      </div>
    </div>
  );
};