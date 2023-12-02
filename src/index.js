import ReactDOM from "react-dom/client";
import {   BrowserRouter as Router,
  Route,
  Routes,
  Navigate } from "react-router-dom";
  import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
  } from '@stripe/react-stripe-js';
  import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import DetalleViaje from "./pages/DetalleViaje";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Footer from "./pages/Footer";
import { UserProvider } from "./helper/UserContext";
import Cuenta from "./pages/Cuenta";
import { NativeBaseProvider } from "native-base";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Tours from "./pages/Tours";
import Nosotros from "./pages/Nosotros";
import URL from "./helper/baseURL";


const stripePromise = loadStripe("pk_test_51OHTHqGhUhhWDkJz6fviWUAbK98E2SJJda15BEau8gfxN7DfACAmOaO3j5BzOYpKq1HG9DKze6Vm72FjzXmB9T6A00VuvnwjR3");



const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Cambia la URL a la que envías la solicitud POST
    fetch("https://createtours.com.mx/backend/public/stripe/react", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch("https://createtours.com.mx/backend/public/stripe/status", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/Checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null;
}

export default function App() {





  return (
    <NativeBaseProvider>
    <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Tours" element={<Tours />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="trip/:id/" element={<DetalleViaje />} />
          <Route path="Carrito" element={<Carrito />} />
          <Route path="Cuenta" element={<Cuenta />} />
          <Route path="Login" element={<Login />} />
          <Route path="Registro" element={<Registro />} />
          <Route path="Checkout" element={<CheckoutForm />} />
          <Route path="Return" element={<Return />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      
      </Routes>
      <Footer/>
      </UserProvider>
    </Router>
    </NativeBaseProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
