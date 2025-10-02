import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from '@/components/property/BookingSection';
import ReviewSection from '@/components/property/ReviewSection';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
      <ReviewSection review={property.review} />
    </div>
  );
}
