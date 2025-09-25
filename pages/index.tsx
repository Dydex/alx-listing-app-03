import Image from 'next/image';
import { HeroBg } from '@/constants';
import Button from '@/components/common/Button';
import Pill from '@/components/common/Pill';
import Card from '@/components/common/Card';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import React, { useState } from 'react';

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
    <>
      {/* Hero section */}
      <section className='bg-[#ffffff] flex items-center justify-center '>
        <div className='relative w-[95%] '>
          <Image src={HeroBg} alt='Hero-bg image' width={1608} height={481} />
        </div>

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
          <h1 className=''>
            Find your favorite <br /> place here!
          </h1>
          <h6 className='text-[24px]'>
            The best prices for over 2 million properties worldwide
          </h6>
        </div>
      </section>

      {/* Filter section */}
      <section className='bg-[#ffffff] h-[100px] flex justify-center items-center '>
        <div className='flex justify-between items-center w-[95%] text-xs'>
          <div className='flex '>
            <div className='max-w-5xl mx-auto flex flex-wrap gap-3 justify-center'>
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
          <div className='flex gap-3 '>
            <div className='px-6 py-2 rounded-full text-black border border-[#E9E9E9]'>
              <Button
                className='bg-white'
                label='Filter'
                onClick={() => {
                  /* handle search click */
                }}
              />
            </div>

            <div className='px-6 py-2 rounded-full text-black border border-[#E9E9E9]'>
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

      {/*  */}
      <section className='w-[95%] mx-auto py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <Card
              title={property.name}
              price={property.price}
              rating={property.rating}
              image={property.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
