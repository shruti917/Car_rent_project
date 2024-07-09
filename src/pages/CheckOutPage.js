import React from 'react';
import CheckoutForm from '../components/Checkout/CheckoutForm';

const CheckoutPage = ({ match }) => {
  const { bookingId } = match.params;
  return (
    <div>
      <h1>Checkout Page</h1>
      <CheckoutForm bookingId={bookingId} />
    </div>
  );
};

export default CheckoutPage;
