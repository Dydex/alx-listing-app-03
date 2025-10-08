const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className='bg-white sticky top-10 p-6 shadow-md h-[400px] rounded-lg w-[35%] mt-8'>
      <h3 className='text-xl text-[#8E8E8E] font-semibold'>
        {' '}
        <span className='text-black'>${price}</span> /night
      </h3>
      <div className='mt-4'>
        <label className='text-black'>Check in</label>
        <input
          type='date'
          className='border border-[#E6E6E6] p-2 w-full mt-2 text-[#E6E6E6]'
        />
      </div>
      <div className='mt-4'>
        <label className='text-black'>Check out</label>
        <input
          type='date'
          className='border border-[#E6E6E6] p-2 w-full mt-2 text-[#E6E6E6]'
        />
      </div>

      <div className='mt-4 flex justify-between'>
        <p className='text-[#8E8E8E]'>${price} x 7 nights</p>
        <p className='text-black'>
          <strong>${price * 7}</strong>
        </p>
      </div>

      {/* Total payment */}
      <div className='mt-4 flex justify-between items-end border-t border-[#E6E6E6]  '>
        <p className='text-[#8E8E8E] mt-4'>Total payment:</p>
        <p className='text-[#34967C]'>
          <strong>${price * 7}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button className='mt-4 w-[100%] bg-[#34967C] text-white py-2 px-4 rounded-md'>
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
