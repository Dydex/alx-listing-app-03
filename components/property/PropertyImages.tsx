import { PropertyProps } from '@/interfaces';
import { useRef, useState, useEffect } from 'react';

const PropertyImage: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const images = [
    property.image,
    property.image,
    property.image,
    property.image,
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check which image is in view
  const handleScroll = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      const index = Math.round(scroll.scrollLeft / scroll.offsetWidth);
      setCurrentIndex(index + 1);
    }
  };

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) scroll.addEventListener('scroll', handleScroll);
    return () => scroll?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full sm:w-[95%] mx-auto mt-16'>
      <div className='flex flex-col-reverse sm:flex-col'>
        {/* Property Name & Location  */}
        <div className='pl-4 sm:pl-0 mt-4 sm:mt-0'>
          <h1 className='text-2xl sm:text-4xl font-bold'>{property.name}</h1>
          <div className='flex space-x-2'>
            <div className='flex items-center space-x-2  mt-2'>
              <img src='/icons/Star 2.png' alt='Star' width={16} height={2} />
              <span className='text-yellow-500'>{property.rating} stars</span>
            </div>
            <div className='flex items-start space-x-2 mt-2'>
              <img
                src='/icons/Location.png'
                alt='Location'
                width={16}
                height={20}
              />
              <span>
                {property.address.city}, {property.address.country}
              </span>
            </div>
          </div>
        </div>

        {/* Image Grid for Tabs/Desktop */}
        <div className='hidden sm:flex gap-2 mt-4 w-full'>
          <img
            src={property.image}
            alt={property.name}
            className='col-span-2 w-[50%] h-96 object-cover rounded-tl-lg rounded-bl-lg'
          />
          <div className='flex flex-col gap-2'>
            <img
              src={property.image}
              alt={property.name}
              className='col-span-2 w-[99.5%] h-46 rounded-tr-lg'
            />

            <div className='flex gap-2 '>
              <img
                src={property.image}
                alt={property.name}
                className='col-span-2 w-[49%] h-48 object-cover'
              />
              <img
                src={property.image}
                alt={property.name}
                className='col-span-2 w-[49%] h-48 object-cover rounded-br-lg'
              />
            </div>
          </div>
        </div>

        {/* Image Grid for Mobile */}
        <div className='relative sm:hidden '>
          <div
            ref={scrollRef}
            className=' flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth w-full'
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={property.name}
                className='w-full h-80 flex-shrink-0 object-cover snap-center'
              />
            ))}
          </div>

          <div className='absolute bottom-2 right-3 bg-black/60 text-white text-sm px-2 py-1 rounded-full'>
            {currentIndex}/{images.length}
          </div>
        </div>
      </div>

      <ul className='pl-4 sm:pl-0 flex flex-wrap space-x-4 mt-4'>
        {property.category.map((amenity, index) => (
          <li
            key={index}
            className='bg-[#E9E9E9] pl-4 pt-2 pb-2 pr-4 rounded-full text-xs sm:text-lg text-black'
          >
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyImage;
