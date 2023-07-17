import React from 'react';

export default function PremiumPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment processing here
  };

  return (
    <div>
      <h1>Premium Plan</h1>
      <form onSubmit={handleSubmit}>
        <h2>Credit Card</h2>
        <input type="text" name="cardNumber" placeholder="Card Number" required />
        <input type="text" name="expiryDate" placeholder="Expiry Date" required />
        <input type="text" name="cvv" placeholder="CVV" required />
        <button type="submit">Pay with Credit Card</button>
      </form>
      <button>Pay with PayPal</button>
    </div>
  );
}