import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
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
import AdminPermiso from "./pages/AdminPermiso";
import AgradecimientoView from "./pages/AgradecimientoView";


import global_en from './locates/en/global.json'
import global_es from './locates/es/global.json'
import FAQ from "./pages/FAQ";
import Checkout from "./pages/Checkout";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'auto',
  fallbackLng: 'es',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
})






// estilo pal header
const mainContentStyle = {
  marginTop: '100px', // Ajusta el valor según la altura de tu encabezado
};

export default function App() {





  return (
    <I18nextProvider i18n={i18next}>
      <NativeBaseProvider >
        <Router>
          <UserProvider>
            <div style={mainContentStyle}>
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route index element={<Home />} />
                  <Route path="Tours" element={<Tours />} />
                  <Route path="Blog" element={<Blog />} />
                  <Route path="Nosotros" element={<Nosotros />} />
                  <Route path="Contacto" element={<Contacto />} />
                  <Route path="trip/:id/:titulo/" element={<DetalleViaje />} />
                  <Route path="trip/:id" element={<DetalleViaje />} />
                  <Route path="Carrito" element={<Carrito />} />
                  <Route path="Cuenta" element={<Cuenta />} />
                  <Route path="Login" element={<Login />} />
                  <Route path="Registro" element={<Registro />} />
                  <Route path="Administrador" element={<AdminPermiso />} />
                  <Route path="success" element={<AgradecimientoView />} />
                  <Route path="FAQ" element={<FAQ />} />
                  <Route path="Stripe" element={<Checkout />} />
                  <Route path="*" element={<NoPage />} />
                </Route>

              </Routes>
              <Footer />
            </div>
          </UserProvider>
        </Router>
      </NativeBaseProvider>
    </I18nextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
