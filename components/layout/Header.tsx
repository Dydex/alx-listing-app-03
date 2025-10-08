import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { categories } from '@/constants';

const Header: React.FC = () => {
  return (
    <header className='border-b border-[#E6E6E6]'>
      <div className=' flex items-center justify-center bg-[#34967c] w-full gap-4 h-[27px] '>
        <Image
          src='/icons/Case Minimalistic.png'
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

      <section className='flex flex-col justify-center items-center bg-[#ffffff] '>
        {/* Naviagtion & Search Bar */}
        <div className='flex flex-col md:flex-row py-2 items-center justify-between w-[95%] mx-auto gap-4'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Image
              src='/icons/Vector.png'
              alt='Alx-logo'
              width={58.73}
              height={30.6}
            />
          </div>

          {/* Search Bar */}
          <div
            className='
    flex flex-col sm:flex-row items-center justify-center
    border border-[#E9E9E9] rounded-full bg-white
    w-full sm:w-auto px-4 py-3 sm:py-2 gap-3 sm:gap-5'
          >
            {/* Location */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='Location'
                className='text-black text-sm hidden sm:block'
              >
                Location
              </label>
              <input
                id='Location'
                type='text'
                placeholder='Search for destination'
                className='
        text-black w-full sm:w-[170px] text-sm sm:text-xs outline-none 
        border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
      '
              />
            </div>

            {/* Check in */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='Checkin'
                className='text-black text-sm hidden sm:block'
              >
                Check in
              </label>
              <input
                id='Checkin'
                type='text'
                placeholder='Add date'
                className='
        text-black w-full sm:w-[100px] text-sm sm:text-xs outline-none 
        border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
      '
              />
            </div>

            {/* Check out */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='Checkout'
                className='text-black text-sm hidden sm:block'
              >
                Check out
              </label>
              <input
                id='Checkout'
                type='text'
                placeholder='Add date'
                className='
        text-black w-full sm:w-[100px] text-sm sm:text-xs outline-none 
        border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
      '
              />
            </div>

            {/* People */}
            <div className='flex flex-col gap-1 w-full sm:w-auto'>
              <label
                htmlFor='People'
                className='text-black text-sm hidden sm:block'
              >
                People
              </label>
              <input
                id='People'
                type='text'
                placeholder='Add guest'
                className='
        text-black w-full sm:w-[100px] text-sm sm:text-xs outline-none 
        border border-gray-200 sm:border-0 rounded-lg sm:rounded-none px-2 py-2 sm:px-0 sm:py-0
      '
              />
            </div>

            {/* Search Button */}
            <div>
              {' '}
              <Button
                icon={
                  <Image
                    src='/icons/Frame 22.png'
                    alt='Search-icon'
                    width={42}
                    height={42}
                  />
                }
                className='w-[42px] h-[42px]'
                label='Search'
                onClick={() => {
                  /* handle search click */
                }}
              />{' '}
            </div>
          </div>

          {/* Sign in/up */}
          <div className='flex gap-2 text-xs mt-4 md:mt-0'>
            <div className='bg-black px-6 py-3 rounded-full text-white'>
              <Button
                className=''
                label='Sign in'
                onClick={() => {
                  /* handle sign in click */
                }}
              />
            </div>

            <div className='bg-black px-6 py-3 rounded-full text-white'>
              <Button
                label='Sign up'
                onClick={() => {
                  /* handle sign up click */
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
