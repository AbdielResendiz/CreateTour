import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../Components/CheckoutForm'
import { Center } from 'native-base';



const stripePromise = loadStripe("pk_test_51OHTHqGhUhhWDkJz6fviWUAbK98E2SJJda15BEau8gfxN7DfACAmOaO3j5BzOYpKq1HG9DKze6Vm72FjzXmB9T6A00VuvnwjR3");



const Checkout = ({ total, carrito }) => {

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {


    // Crear el objeto con los datos a enviar
    const postData = {
      total: total
    };
    // Create PaymentIntent as soon as the page loads
    fetch("https://createtours.com.mx/stripe/public/create.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData)
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };




  // const appearance = {
  //   theme: 'stripe',
  // };

  // const options = {
  //   mode: 'payment',
  //   amount: total,
  //   currency: 'mxn',

  //   clientSecret,
  //   appearance,
  // };



  //const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


  // import meta.env.VITE_STRIPE_PK is the publishable key you can either directly paste your stripe key here but not recommending if you are planning to upload the code on github as it should remain only available to you or save the key in .env file

  return (
    <Center mt={10} mb={40} w={["75%", "75%", "80%", "100%"]} >
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Center>
  )
}

export default Checkout