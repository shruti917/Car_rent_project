import api from './api';

const processPayment = async (bookingId, paymentMethod) => {
  try {
    const response = await api.post('/payments', { bookingId, paymentMethod });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default { processPayment };
