import { BookingProps } from '@/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const OrderSummary: React.FC<{ bookingDetails: BookingProps }> = ({
  bookingDetails,
}) => {
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.bookdate
  );

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInTime = end.getTime() - start.getTime();
  const nights = Math.max(1, Math.ceil(diffInTime / (1000 * 60 * 60 * 24)));

  return (
    <>
      <div className='bg-white p-6 shadow-md rounded-lg'>
        <h2 className='text-xl font-semibold'>Review Order Details</h2>
        <div className='flex items-center mt-4'>
          <img
            src='https://example.com/property.jpg'
            alt='Property'
            className='w-32 h-32 object-cover rounded-md'
          />
          <div className='ml-4'>
            <h3 className='text-lg font-semibold'>{bookingDetails.name}</h3>
            <p className='text-sm text-gray-500'>
              {bookingDetails.rating}(345 reviews)
            </p>
            <p className='text-sm text-gray-500'>
              {new Date(startDate).toLocaleDateString()} • {nights}{' '}
              {nights === 1 ? 'night' : 'nights'}
            </p>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className='mt-6'>
          <div className='flex justify-between'>
            <p>Booking Fee</p>
            {/* <p>${bookingDetails.bookingFee}</p> */}
          </div>
          <div className='flex justify-between mt-2'>
            <p>Subtotal</p>
            <p>${bookingDetails.price}</p>
          </div>
          <div className='flex justify-between mt-2 font-semibold'>
            <p>Grand Total</p>
            {/* <p>${bookingDetails.bookingFee + bookingDetails.price}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
