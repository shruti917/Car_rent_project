import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bookingService from '../../services/bookingServices';

const BookingForm = () => {
  const [vehicleId, setVehicleId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const booking = await bookingService.bookVehicle({ vehicleId, startDate, endDate });
      navigate(`/bookings/summary/${booking.id}`);  // Redirect to booking summary page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Book a Vehicle</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle ID"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
