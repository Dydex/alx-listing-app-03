import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { InputProps } from '../../interfaces';

const Header: React.FC = () => {
  return (
    <header>
      <div className=' flex items-center justify-center bg-[#34967c] w-full gap-4 '>
        <Image
          src='/images/Case Minimalistic.png'
          alt='Case-image'
          width={24}
          height={24}
        />
        <h6>Overseas trip? Get the latest information on travel guides</h6>
        <Button
          label='More Info'
          onClick={() => {
            /* handle search click */
          }}
        />
      </div>
      <div className='flex flex-col justify-center items-center bg-[#ffffff] '>
        {/* Naviagtion & Search Bar */}
        <div className='flex  py-5 items-center justify-between w-[95%] '>
          <div>
            <Image
              src='/images/Vector.png'
              alt='Alx-logo'
              width={58.73}
              height={30.6}
            />
          </div>

          <div className=' flex h-[68px] items-center justify-center border border-[#E9E9E9]  rounded-full'>
            <div className='flex flex-col gap-1 '>
              <label htmlFor='Location' className='text-black text-sm'>
                Location
              </label>
              <input
                id='Location'
                type='text'
                placeholder='Search for destination'
                className='text-black w-[133px] text-xs'
              />
            </div>

            <div className='flex flex-col  gap-1'>
              <label htmlFor='Check in' className='text-black text-sm'>
                Check in
              </label>
              <input
                id='Check in'
                type='text'
                placeholder='Add date'
                className='text-black w-[133px] text-xs '
              />
            </div>

            <div className='flex flex-col  gap-1'>
              <label htmlFor='Check out' className='text-black text-sm'>
                Check out
              </label>
              <input
                id='Check out'
                type='text'
                placeholder='Add date'
                className='text-black w-[133px] text-xs'
              />
            </div>

            <div className='flex flex-col  gap-1 '>
              <label htmlFor='People' className='text-black text-sm'>
                People
              </label>
              <input
                id='People'
                type='text'
                placeholder='Add guest'
                className='text-black w-[133px] text-xs '
              />
            </div>

            <div>
              <Button
                icon={
                  <Image
                    src='/images/Frame 22.png'
                    alt='Search-icon'
                    width={42}
                    height={42}
                  />
                }
                className='w-[42px] h-[42px]  rounded-[50px]'
                label='Search'
                onClick={() => {
                  /* handle search click */
                }}
              />
            </div>
          </div>

          <div className='flex gap-2 text-xs'>
            <div className='bg-black px-6 py-3 rounded-full text-white'>
              <Button
                className=' '
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

        {/* Different Property Images */}
        <div className='flex items-center justify-between  w-[95%] h-[84px]'>
          <div className='flex flex-col items-center'>
            <Image
              src='/images/living-room 1.png'
              alt='Rooms'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Rooms</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/mansion 1.png'
              alt='mansion'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Mansion</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/farm 1.png'
              alt='Countryside'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Countryside</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/villa 1.png'
              alt='Villa'
              width={34}
              height={88}
            />
            <h6 className='text-[#616161] text-xs'>Villa</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/palm-tree 1.png'
              alt='Tropical'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Tropical</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/key-chain 1.png'
              alt='New'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>New</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/swimming-pool 1.png'
              alt='Amazing pool'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Amazing pool </h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/vacations 1.png'
              alt='Beach house'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Beach house</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/island (1) 1.png'
              alt='Island'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Island</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/tent 1.png'
              alt='Camping'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Camping</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/apartment 1.png'
              alt='Apartment'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Apartment</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/home 1.png'
              alt='House'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>House</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/cottage 1.png'
              alt='Lakefront'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Lakefront</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/barn 1.png'
              alt='Farm house'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Farm house</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/treehouse (1) 1.png'
              alt='Treehouse'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Treehouse</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/cabin 1.png'
              alt='Cabins'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Cabins</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/castle-tower 1.png'
              alt='Castles'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Castles</h6>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src='/images/farm 1.png'
              alt='Lakeside'
              width={34}
              height={34}
            />
            <h6 className='text-[#616161] text-xs'>Countryside</h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
