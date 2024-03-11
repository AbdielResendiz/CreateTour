import React, { useState, useEffect } from 'react';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useTranslation } from 'react-i18next';
import { Spinner, Checkbox, Text, HStack, Pressable, Modal, Button } from 'native-base';
import TagManager from 'react-gtm-module';
import { useNavigate } from "react-router-dom";

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const { t } = useTranslation("global");
  const { total, carrito } = props;


  const [errorMessage, setErrorMessage] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [load, setLoad] = useState(false);
  const [terminos, setTerminos] = useState(false);

  const backendUrl = process.env.REACT_APP_STRIPE_PK_AIRCODE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (terminos === false) {
      return window.alert(t("carritoVista.alertTerminos"));
    }

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
    setLoad(true);

    console.log("price form: ", total)
    console.log("Carrito form objeto?: ", carrito)
    console.log("Carrito form objeto?: ", typeof (carrito))

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'mxn',
        email: emailInput,
        amount: Math.round(total * 100),
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

    if (!error) {
      // Si no hay error, significa que el proceso de pago va a continuar hacia la redirección
      // Aquí es donde puedes disparar el evento a GTM antes de la redirección
      TagManager.dataLayer({
        dataLayer: {
          event: 'payment_success', // Puedes personalizar este nombre de evento
          category: 'Checkout', // Y estos valores según tus necesidades
          action: 'Payment Confirmation',
          label: 'Success',
          value: Math.round(total * 100) // Opcional: puedes enviar el valor total del carrito
        }
      });
      // La redirección se maneja automáticamente por Stripe después de este punto
    } else {
      // Manejo de errores de Stripe
      setErrorMessage(error.message);
      window.alert("Error ", error.message);
    }
  };

  useEffect(() => {
    console.log("terminos", terminos)
  }, [terminos])


  const navigate = useNavigate();
  const handleTerminos = () => {
    navigate("/TerminosCondiciones")
  };


  return (
    <form onSubmit={handleSubmit} style={{ paddingInline: "40px" }}>


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





      <PaymentElement />
      {
        load ?
          <Spinner /> :
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
              border: '2px solid white',
              marginBottom: '-90px'
            }}
          >
            {t("carritoVista.listaCarrito.pagar")}
          </button>

      }






      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}


    </form>
  );
};