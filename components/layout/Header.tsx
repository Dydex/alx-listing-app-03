import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { InputProps } from '../../interfaces';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <div className=' flex items-center justify-center bg-[#34967c] gap-4 '>
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
        <div className='flex bg-[#ffffff] py-5 items-center justify-center gap-4 '>
          <Image
            src='/images/Vector.png'
            alt='Alx-logo'
            width={58.73}
            height={30.6}
          />

          <div className=' flex h-[88px] w-1/2 items-center justify-center border border-black rounded-[18px] bg-[#F6F6F6]'>
            <div className='flex flex-col gap-2 '>
              <label htmlFor='Search Location' className='text-black'>
                Location
              </label>
              <input
                type='text'
                placeholder='Search for destination'
                className='text-black w-[133px] text-[13px]'
              />
            </div>

            <div className='flex flex-col  gap-2'>
              <label
                htmlFor='Search Location'
                className='text-black text-[13px]'
              >
                Check in
              </label>
              <input
                type='text'
                placeholder='Add date'
                className='text-black w-[133px] text-[13px] '
              />
            </div>

            <div className='flex flex-col  gap-2'>
              <label htmlFor='Search Location' className='text-black'>
                Check out
              </label>
              <input
                type='text'
                placeholder='Add date'
                className='text-black w-[133px] text-[13px]'
              />
            </div>

            <div className='flex flex-col  gap-2 '>
              <label htmlFor='Search Location' className='text-black'>
                People
              </label>
              <input
                type='text'
                placeholder='Add guest'
                className='text-black w-[133px] text-[13px] '
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
        <div className='flex items-center justify-center bg-[#ffffff] h-[84px] gap-4'>
          <div>
            <Image
              src='/images/living-room 1.png'
              alt='Rooms'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Rooms</h6>
          </div>

          <div>
            <Image
              src='/images/mansion 1.png'
              alt='mansion'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Mansion</h6>
          </div>

          <div>
            <Image
              src='/images/farm 1.png'
              alt='Countryside'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Countryside</h6>
          </div>

          <div>
            <Image
              src='/images/villa 1.png'
              alt='Villa'
              width={34}
              height={88}
            />
            <h6 className='text-[12px]'>Villa</h6>
          </div>

          <div>
            <Image
              src='/images/palm-tree 1.png'
              alt='Tropical'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Tropical</h6>
          </div>

          <div>
            <Image
              src='/images/key-chain 1.png'
              alt='New'
              width={34}
              height={34}
            />
            <h6>New</h6>
          </div>

          <div>
            <Image
              src='/images/swimming-pool 1.png'
              alt='Amazing pool'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Amazing pool </h6>
          </div>

          <div>
            <Image
              src='/images/vacations 1.png'
              alt='Beach house'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Beach house</h6>
          </div>

          <div>
            <Image
              src='/images/island (1) 1.png'
              alt='Island'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Island</h6>
          </div>

          <div>
            <Image
              src='/images/tent 1.png'
              alt='Camping'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Camping</h6>
          </div>

          <div>
            <Image
              src='/images/apartment 1.png'
              alt='Apartment'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Apartment</h6>
          </div>

          <div>
            <Image
              src='/images/home 1.png'
              alt='House'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>House</h6>
          </div>

          <div>
            <Image
              src='/images/cottage 1.png'
              alt='Lakefront'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Lakefront</h6>
          </div>

          <div>
            <Image
              src='/images/barn 1.png'
              alt='Farm house'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Farm house</h6>
          </div>

          <div>
            <Image
              src='/images/treehouse (1) 1.png'
              alt='Treehouse'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Treehouse</h6>
          </div>

          <div>
            <Image
              src='/images/cabin 1.png'
              alt='Cabins'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Cabins</h6>
          </div>

          <h6>
            <Image
              src='/images/castle-tower 1.png'
              alt='Castles'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Castles</h6>
          </h6>

          <div>
            <Image
              src='/images/farm 1.png'
              alt='Countryside'
              width={34}
              height={34}
            />
            <h6 className='text-[12px]'>Countryside</h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
