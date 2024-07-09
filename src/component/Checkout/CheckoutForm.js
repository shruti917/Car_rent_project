import React, { useState } from 'react';
import paymentService from '../../services/paymentService';

const CheckoutForm = ({ bookingId }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await paymentService.processPayment(bookingId, paymentMethod);
      // Redirect to confirmation page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
