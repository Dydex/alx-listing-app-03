import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='h-[300px]'>
      <div className='bg-[#34967c] w-full  h-[20px] '></div>
      <div className='flex w-[95%] pt-8 pb-4'>
        <div className='flex flex-col mx-auto gap-4'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Image
              src='/images/Vector.png'
              alt='Alx-logo'
              width={58.73}
              height={30.6}
            />
          </div>
          <div>
            <p className='text-xs'>
              ALX is a platform where travelers can discover and book unique,
              comfortable, and <br /> affordable lodging options worldwide. From
              cozy city apartments and tranquil <br /> countryside retreats to
              exotic beachside villas, ALX connects you with the perfect <br />{' '}
              place to stay for any trip.
            </p>
          </div>
        </div>
        <div className='flex gap-35'>
          <div className=''>
            <h6>Explore</h6>
            <div className='text-xs'>
              <p>Apartments in Dubai</p>
              <p>Hotels in New York</p>
              <p>Villa in Spain</p>
              <p>Mansion in Indonesia</p>
            </div>
          </div>
          <div className=''>
            <h6>Company</h6>
            <div className='text-xs'>
              <p>About us</p>
              <p>Blog</p>
              <p>Career</p>
              <p>Customers</p>
              <p>Brand</p>
            </div>
          </div>
          <div className=''>
            <h6>Help</h6>
            <div className='text-xs'>
              <p>Support</p>
              <p>Cancel booking</p>
              <p>Refunds Process</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
