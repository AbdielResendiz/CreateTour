import React, { useState } from 'react';
import fetchPost from 'tu_ruta_a/fetchPost'; // Asegúrate de ajustar la ruta correctamente

const StripePayment = () => {
  const [tokenResult, setTokenResult] = useState(null);

  const handlePayment = async (amount) => {
    const stripe = window.Stripe('pk_test_51H7bbSxxxxxxxxxxxxx');
    
    try {
      const { token } = await stripe.createToken();
      console.log('Token Generated', token);

      setTokenResult(token);

      const response = await fetchPost('/stripe/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenId: token.id,
          amount: amount
        }),
      });

      console.log(response.data);
      setTokenResult(response.data.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(tokenResult, null, 2)}</pre>
      
      <div className="d-grid mb-3">
        <button className="btn btn-dark" onClick={() => handlePayment(50)}>
          Pay $50
        </button>
      </div>
    </div>
  );
};

export default StripePayment;
