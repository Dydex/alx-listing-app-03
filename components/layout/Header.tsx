import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header>
      <div className=' flex items-center justify-center bg-[#34967c] w-full gap-4 h-[27px] '>
        <Image
          src='/images/Case Minimalistic.png'
          alt='Case-image'
          width={15}
          height={15}
        />
        <p className='text-xs'>
          Overseas trip? Get the latest information on travel guides
        </p>
        <Button
          className='bg-black px-2 py-0.5 rounded-full text-white text-xs'
          label='More Info'
          onClick={() => {
            /* handle search click */
          }}
        />
      </div>
    </header>
  );
};

export default Header;
