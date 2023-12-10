import React, { useState } from 'react';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';
import { useUser } from '../helper/UserContext';

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const {carrito}= useUser;
  const elements = useElements();
  const { t } = useTranslation("global");
  const { total } = props;

  const [errorMessage, setErrorMessage] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const backendUrl = process.env.REACT_APP_STRIPE_PK_AIRCODE_URL;

  const handleSubmit = async (event ) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

   
    console.log("price form: ", total)

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        email: emailInput,
        amount: total * 100,
        paymentMethodType: "card",
        name: nameInput,
        phone: phoneInput,
        tours: carrito
      }),
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit} className='px-4'>

      
      <div className='mb-3'> 
      <h3>{t("carritoVista.aviso")}</h3>
        <label htmlFor="name-input">{t("carritoVista.mensajeNombre")} </label>
        <div>
          <input  style={{ width: '70%' }} value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" id="name-input" placeholder='John Doe' />
        </div>

        <label htmlFor="phone-input">{t("carritoVista.phone")}</label>
        <div>
          <input  style={{ width: '70%' }} value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} type="tel" id="phone-input" placeholder='123-456-7890' />
        </div>

        <label htmlFor="email-input">{t("carritoVista.email")}</label>
        <div>
          <input  style={{ width: '70%' }} value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type="email" id="email-input" placeholder='johndoe@gmail.com' />
        </div>
      </div>
      <PaymentElement />
      <button
  type="submit"
  disabled={!stripe || !elements}
  style={{
    padding: '10px 20px',
    fontSize: '1.2em',
    backgroundColor: '#449bab',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto',
    border: '2px solid white'
  }}
>
  Pagar
</button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};