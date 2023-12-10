import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import { CheckoutForm } from '../Components/CheckoutForm'
import { Center } from 'native-base';



const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Checkout = (props) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  const {total} =props;
  console.log("total checkout", total)
  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file
  
  return (
    <Center mt={10}  mb={40} w="100%"> 
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm total={total} />
      </Elements>
    </Center>
  )
}

export default Checkout