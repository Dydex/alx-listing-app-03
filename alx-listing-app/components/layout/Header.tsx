import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { InputProps } from '../../interfaces';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <div className='flex bg-white'>
          <Image
            src='/images/Vector.png'
            alt='Alx-logo'
            width={58.73}
            height={30.6}
          />

          <div className=' flex rounded-8px'>
            <div className='flex flex-col items-center gap-2 '>
              <label htmlFor='Search Location' className='text-black'>
                Location
              </label>
              <input type='text' placeholder='Search for destination' />
            </div>

            <div className='flex flex-col items-center gap-2'>
              <label htmlFor='Search Location' className='text-black'>
                Check in
              </label>
              <input type='text' placeholder='Add date' />
            </div>

            <div className='flex flex-col items-center gap-2'>
              <label htmlFor='Search Location' className='text-black'>
                Check out
              </label>
              <input type='text' placeholder='Add date' />
            </div>

            <div className='flex flex-col items-center gap-2 '>
              <label htmlFor='Search Location' className='text-black'>
                People
              </label>
              <input
                type='text'
                placeholder='Add guest'
                className='text-black'
              />
            </div>

            <div>
              <Button
                label='Search'
                onClick={() => {
                  /* handle search click */
                }}
              />
            </div>
          </div>

          <div>
            <Button
              label='Sign in'
              onClick={() => {
                /* handle sign in click */
              }}
            />
          </div>

          <div>
            <Button
              label='Sign Up'
              onClick={() => {
                /* handle sign up click */
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
