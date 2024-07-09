import React, { useState, useEffect } from 'react';
import bookingService from '../../services/bookingServices';
import './BookingHistory.css';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const data = await bookingService.getBookingHistory();
        setBookings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingHistory();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="booking-history">
      <h1>Booking History</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <p>Vehicle: {booking.vehicle.make} {booking.vehicle.model}</p>
            <p>Rental Period: {booking.startDate} to {booking.endDate}</p>
            <p>Price: ${booking.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
