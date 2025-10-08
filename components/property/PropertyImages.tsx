import { PropertyProps } from '@/interfaces';

const PropertyImage: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className='w-[95%] mx-auto mt-16'>
      <h1 className='text-4xl font-bold'>{property.name}</h1>
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

      {/* Image Grid */}
      <div className='flex gap-2 mt-4 w-full'>
        <img
          src={property.image}
          alt={property.name}
          className='col-span-2 w-[50%] h-96 object-cover rounded-tl-lg rounded-bl-lg'
        />
        <div className='flex flex-col gap-2'>
          <img
            src={property.image}
            alt={property.name}
            className='col-span-2 w-[100%] h-46 rounded-tr-lg'
          />

          <div className='flex gap-2 '>
            <img
              src={property.image}
              alt={property.name}
              className='col-span-2 w-50% h-48 object-cover'
            />
            <img
              src={property.image}
              alt={property.name}
              className='col-span-2 w-[50%] h-48 object-cover rounded-br-lg'
            />
          </div>
        </div>

        {/* Add more images */}
      </div>

      <ul className='flex flex-wrap space-x-4 mt-4'>
        {property.category.map((amenity, index) => (
          <li
            key={index}
            className='bg-[#E9E9E9] pl-4 pt-2 pb-2 pr-4 rounded-full text-black'
          >
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyImage;
