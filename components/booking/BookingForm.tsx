import { getNames } from 'country-list';

const BookingForm = () => {
  const countries = getNames();

  return (
    <>
      <div className='bg-white p-6 shadow-md rounded-lg'>
        <h2 className='text-xl font-semibold'>Contact Detail</h2>
        <form>
          {/* Contact Information */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label>First Name</label>
              <input type='text' className='border p-2 w-full mt-2' />
            </div>
            <div>
              <label>Last Name</label>
              <input type='text' className='border p-2 w-full mt-2' />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div>
              <label>Email</label>
              <input type='email' className='border p-2 w-full mt-2' />
            </div>
            <div>
              <label>Phone Number</label>
              <input type='text' className='border p-2 w-full mt-2' />
            </div>
          </div>

          {/* Payment Information */}
          <h2 className='text-xl font-semibold mt-6'>Pay with</h2>
          <div>
            <select
              id='card-type'
              name='card-type'
              required
              className='border p-2 w-full mt-4'
            >
              <option value=''>Credit or debit card</option>
              <option value='credit'>Credit Card</option>
              <option value='debit'>Debit Card</option>
            </select>
          </div>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Card number'
              className='border p-2 w-full mt-2'
            />
          </div>
          <div className='grid grid-cols-2'>
            <div>
              <input
                type='text'
                placeholder='Expiration date'
                className='border p-2 w-full '
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='CVV'
                className='border p-2 w-full'
              />
            </div>
          </div>

          {/* Billing Address */}
          <h2 className='text-xl font-semibold mt-6'>Billing Address</h2>
          <div className='mt-4'>
            <label>Street Address</label>
            <input
              type='text'
              placeholder='Street Address'
              className='border p-2 w-full mt-2'
            />
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div>
              <label>City</label>
              <input
                type='text'
                placeholder='City'
                className='border p-2 w-full mt-2'
              />
            </div>
            <div>
              <label>State</label>
              <input
                type='text'
                placeholder='State'
                className='border p-2 w-full mt-2'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div>
              <label>Zip Code</label>
              <input
                type='text'
                placeholder='Zip Code'
                className='border p-2 w-full mt-2'
              />
            </div>
            <div>
              <label>Country</label>
              <select
                name='country'
                id='country'
                className='border p-2.5 w-full mt-2'
              >
                <option value=''>Choose a Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='mt-6'>
            <h2 className='text-xl font-semibold'>Cancellation policy</h2>
            <p className='mt-2 text-gray-600'>
              Free cancellation before Aug 23. Cancel before check-in on Aug 24
              for a partial refund.
            </p>

            <h2 className='text-xl font-semibold mt-6'>Ground Rules</h2>
            <p className='mt-2 text-gray-600'>
              We ask every guest to remember a few simple things about what
              makes a great guest.
            </p>
            <ul className='mt-2 text-gray-600 list-disc list-inside'>
              <li>Follow the house rules</li>
              <li>Treat your Host’s home like your own</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button className='mt-10 bg-green-500 text-white py-2 px-4 rounded-md w-1/2'>
            Confirm & Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
