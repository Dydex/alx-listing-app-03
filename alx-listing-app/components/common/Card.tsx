import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ image, title, price, location }) => {
  return (
    <div className='bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-gray-500'>{location}</p>
        <p className='text-indigo-600 font-bold mt-2'>${price}/night</p>
      </div>
    </div>
  );
};

export default Card;
