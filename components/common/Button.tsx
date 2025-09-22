import React from 'react';
// Update the path below to the actual location of your interfaces file
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition'
    >
      {label}
    </button>
  );
};

export default Button;
