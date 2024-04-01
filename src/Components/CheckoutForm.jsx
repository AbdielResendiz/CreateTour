import React, { useState, useEffect } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';
import { Spinner, Checkbox, Text, HStack, Pressable } from 'native-base';
import TagManager from 'react-gtm-module';
import { useNavigate } from "react-router-dom";

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);


  const { t } = useTranslation("global");
  const { total, carrito } = props;



  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const [terminos, setTerminos] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/success`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };




  const navigate = useNavigate();
  const handleTerminos = () => {
    navigate("/Devoluciones")
  };


  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <form onSubmit={handleSubmit} style={{ paddingInline: "40px" }} id="payment-form">


      <div className='mb-3'>
        <h3>{t("carritoVista.aviso")}</h3>

        <label htmlFor="name-input">{t("carritoVista.mensajeNombre")} </label>

        <div>
          <input style={{ width: '70%' }} value={nameInput} onChange={(e) => setNameInput(e.target.value)}

            type="text" id="name-input" placeholder={t("carritoVista.name")} />
        </div>

        <label htmlFor="phone-input">{t("carritoVista.phone")}</label>
        <div>
          <input style={{ width: '70%' }} value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)}
            type="tel" id="phone-input" placeholder={t("carritoVista.phone")} />
        </div>

        <label htmlFor="email-input">{t("carritoVista.email")}</label>
        <div>
          <input style={{ width: '70%' }} value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
            type="email" id="email-input" placeholder={t("carritoVista.email")} />
        </div>


        <div>
          <Text textAlign="justify">
            {t("carritoVista.terminosMensaje")}
          </Text>
          <HStack justifyContent={"center"} alignItems="center" space={2}>
            <Checkbox value={terminos} onChange={() => setTerminos(!terminos)} my={2} />
            <Pressable onPress={() => handleTerminos()}>
              <Text underline>
                {t("carritoVista.terminosCheckBox")}
              </Text>
            </Pressable>
          </HStack>
        </div>

      </div>

      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <button
        type="submit"
        disabled={isLoading || !stripe || !elements} id="submit"

        style={{
          padding: '10px 20px',
          fontSize: '1.2em',
          backgroundColor: '#449bab',
          color: 'white',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'block',
          margin: '20px auto',
          border: '2px solid white',
          marginBottom: '-90px'
        }}
      >
        {t("carritoVista.listaCarrito.pagar")}
      </button>

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}


    </form>
  );
};