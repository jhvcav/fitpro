import React from 'react';

export const StatCard = ({ value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);