import BookingForm from '@/components/booking/BookingForm';
import OrderSummary from '@/components/booking/OrderSummary';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { useRouter } from 'next/router';

export default function BookingPage() {
  const Router = useRouter();

  return (
    <>
      <div
        className='flex gap-2 py-5 bg-[#F8FAFC]'
        onClick={() => Router.back()}
      >
        <div className='w-[80%] m-auto '>
          <img src='/icons/Arrow Left.png' alt='Arrow' width={16} height={6} />
          <h6>Booking</h6>
        </div>
      </div>
      <div className='container mx-auto p-6'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='grid grid-row-2'>
            <BookingForm />
          </div>
          <div>
            {PROPERTYLISTINGSAMPLE.map((item) => (
              <OrderSummary bookingDetails={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
