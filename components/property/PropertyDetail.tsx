import { PropertyProps } from '@/interfaces/index';
import { useState } from 'react';
import {
  Wifi,
  Bed,
  Bath,
  Sun,
  Mountain,
  Users,
  Bell,
  Sparkles,
  ChefHat,
  CreditCard,
  UtensilsCrossed,
  Flame,
  Martini,
  Waves,
} from 'lucide-react';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [isExpaneded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 850;

  const iconMap: Record<string, React.ReactNode> = {
    bathtub: <Bath className='w-6 h-6 text-gray-500' />,
    bed: <Bed className='w-6 h-6 text-gray-500' />,
    bell: <Bell className='w-6 h-6 text-gray-500' />,
    broom: <Sparkles className='w-6 h-6 text-gray-500' />,
    chef: <ChefHat className='w-6 h-6 text-gray-500' />,
    'credit card': <CreditCard className='w-6 h-6 text-gray-500' />,
    'hot tub': <Flame className='w-6 h-6 text-gray-500' />, // closest icon
    mountain: <Mountain className='w-6 h-6 text-gray-500' />,
    pan: <UtensilsCrossed className='w-6 h-6 text-gray-500' />,
    people: <Users className='w-6 h-6 text-gray-500' />,
    pool: <Waves className='w-6 h-6 text-gray-500' />,
    shaker: <Martini className='w-6 h-6 text-gray-500' />,
    sunrise: <Sun className='w-6 h-6 text-gray-500' />,
    wifi: <Wifi className='w-6 h-6 text-gray-500' />,
  };

  return (
    <div className='container pr-6 w-[62%] border-t border-white mt-8 '>
      {/* Description */}
      <div className=''>
        <div className='mt-4'>
          <h2 className='text-2xl font-semibold'>Description</h2>
          <p className='whitespace-pre-line'>
            {isExpaneded
              ? property.description
              : `${property.description.slice(0, MAX_LENGTH)}`}
          </p>
        </div>

        <p onClick={() => setIsExpanded(!isExpaneded)}>
          {isExpaneded ? 'Show less' : 'Read more'}
        </p>

        {/* Amenities */}
        <div className='border-t border-white mt-10 mb-8'>
          <h2 className='text-2xl font-semibold pt-10'>
            What this place offers
          </h2>
          <p className='pt-2'>
            Each home is fully equipped to meet your needs, with ample space and
            privacy.
          </p>
          <ul className='grid grid-cols-2 gap-y-6 gap-x-6 mt-6 text-lg'>
            {property.amenities.map((list, index) => (
              <li key={index} className='flex items-center gap-2'>
                {iconMap[list] || <Wifi className='w-4 h-4 text-gray-400' />}
                <span className='capitalize'>{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
