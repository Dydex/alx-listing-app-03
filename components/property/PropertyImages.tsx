import { PropertyProps } from '@/interfaces';

const PropertyImage: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className='w-[95%] mx-auto mt-16'>
      <h1 className='text-4xl font-bold'>{property.name}</h1>
      <div className='flex items-center space-x-2 mt-2'>
        <span className='text-yellow-500'>{property.rating} stars</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className='flex gap-2` mt-4 w-full'>
        <img
          src={property.image}
          alt={property.name}
          className='col-span-2 w-[50%] h-96 object-cover rounded-lg'
        />
        <div className='flex flex-col '>
          <img
            src={property.image}
            alt={property.name}
            className='col-span-2 w-[100%] h-48  rounded-lg'
          />

          <div className='flex '>
            <img
              src={property.image}
              alt={property.name}
              className='col-span-2 w-50% h-48 object-cover rounded-lg'
            />
            <img
              src={property.image}
              alt={property.name}
              className='col-span-2 w-[50%] h-48 object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Add more images */}
      </div>
      <ul className='flex flex-wrap space-x-4'>
        {property.category.map((amenity, index) => (
          <li key={index} className='bg-gray-200 p-2 rounded-md text-black'>
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyImage;
