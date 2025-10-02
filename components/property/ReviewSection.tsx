import { PropertyProps, ReviewSectionProps } from '@/interfaces';

const ReviewSection: React.FC<ReviewSectionProps> = ({ review }) => {
  return (
    <div className='mt-8'>
      <h3 className='text-2xl font-semibold'>Reviews</h3>
      {review.map((reviews, index) => (
        <div key={index} className='border-b pb-4 mb-4'>
          <div className='flex items-center'>
            <img
              src={reviews.avatar}
              alt={reviews.name}
              className='w-12 h-12 rounded-full mr-4'
            />
            <div>
              <p className='font-bold'>{reviews.name}</p>
              <p className='text-yellow-500'>{reviews.rating} stars</p>
            </div>
          </div>
          <p>{reviews.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
