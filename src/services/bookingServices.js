import api from './api';

const bookVehicle = async (vehicleId, rentalDuration) => {
  try {
    // Assume booking is handled on your backend
    const response = await api.post('/bookings', { vehicleId, rentalDuration });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Booking failed');
  }
};

const getBookingHistory = async () => {
  try {
    const response = await api.get('/bookings/history');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch booking history');
  }
};

export default { bookVehicle, getBookingHistory };
