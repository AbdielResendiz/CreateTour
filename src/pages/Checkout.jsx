import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import { CheckoutForm } from '../Components/CheckoutForm'
import { Center } from 'native-base';



const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'mxn',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};




const Checkout = ({ total, carrito }) => {




  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file

  return (
    <Center mt={10} mb={40} w={["75%", "75%", "80%", "100%"]} >
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm total={total} carrito={carrito} />
      </Elements>
    </Center>
  )
}

export default Checkout