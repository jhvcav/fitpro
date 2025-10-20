import React from 'react';

export const NavLink = ({ onClick, active, children }) => (
  <button 
    onClick={onClick} 
    className={`transition ${active ? 'text-white' : 'text-gray-300 hover:text-white'}`}
  >
    {children}
  </button>
);