
import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../component/Booking/BookingForm';

const BookingPage = () => {
  const { vehicleId } = useParams(); // Use useParams hook instead
  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm vehicleId={vehicleId} />
    </div>
  );
};

export default BookingPage;