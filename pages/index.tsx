import Image from 'next/image';
import { HeroBg } from '@/constants';
import Button from '@/components/common/Button';
import Pill from '@/components/common/Pill';
import Card from '@/components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import React, { useState } from 'react';
import { categories } from '@/constants';
import { ChevronDown } from 'lucide-react';

const filters = [
  'All',
  'Top Villa',
  'Free Reschedule',
  'Book Now, Pay Later',
  'Self CheckIn',
  'Instant Book',
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <main className='bg-white'>
      <section className='flex flex-col justify-center items-center bg-[#ffffff] '>
        {/* Naviagtion & Search Bar */}
        <div className='flex flex-col md:flex-row py-5 items-center justify-between w-[95%] mx-auto gap-4'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Image
              src='/images/Vector.png'
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
                    src='/images/Frame 22.png'
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

        {/* Different Property Images */}
        <section
          className='
    flex items-center w-[95%] h-[100px] gap-4 md:gap-1 px-2 py-2
    overflow-x-auto md:overflow-visible scroll-smooth snap-x md:snap-none
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
    justify-start md:justify-between'>
          {categories.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center flex-shrink-0 snap-start'
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={item.height || 40}
                className='rounded-full'
              />
              <h6 className='text-[#616161] text-xs mt-2 font-medium'>
                {item.label}
              </h6>
            </div>
          ))}
        </section>
      </section>

      {/* Hero section */}
      <section className='relative bg-white mx-auto w-[95%]'>
        {/* Background Image */}
        <Image
          src={HeroBg}
          alt='Hero-bg image'
          width={1608}
          height={481}
          priority
          className='w-full max-w-[1600px] mx-auto h-auto rounded-3xl'
        />

        {/* Overlay Text */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
          <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight'>
            Find your favorite <br /> place here!
          </h1>
          <p className='text-base sm:text-lg md:text-2xl mt-4'>
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      {/* Filter section */}
      <section className='bg-white py-4 sm:py-6'>
        <div className='flex flex-col sm:flex-row justify-between items-center w-[95%] mx-auto gap-4 text-xs sm:text-sm'>
          {/* Filter Pills */}
          <div className='w-full sm:w-auto'>
            <div className='max-w-5xl mx-auto flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start'>
              {filters.map((filter) => (
                <Pill
                  key={filter}
                  label={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>
          </div>

          {/* Filter & Sort Buttons */}
          <div className='flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-end'>
            <div className='px-4 sm:px-6 py-2 rounded-full text-black border border-[#E9E9E9]'>
              <Button
                className='bg-white'
                label='Filter'
                onClick={() => {
                  /* handle filter click */
                }}
              />
            </div>

            <div className='px-4 sm:px-6 py-2 rounded-full text-black border border-[#E9E9E9]'>
              <Button
                className='bg-white'
                label='Sort by: Highest Price'
                onClick={() => {
                  /* handle search click */
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className='w-[95%] mx-auto py-4 bg-white text-sm'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-8'>
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <Card
              key={property.name}
              title={property.name}
              price={property.price}
              rating={property.rating}
              image={property.image}
            />
          ))}
        </div>
        <div className=' flex flex-col items-center justify-center bg-[#ffffff]  gap-4 h-[150px] '>
          <div className='bg-black px-6 py-2 rounded-full text-white'>
            <Button
              label='Show more'
              onClick={() => {
                /* show more */
              }}
            />
          </div>
          <h1 className=' text-black'>Click to see more listings</h1>
        </div>
      </section>
    </main>
  );
}
