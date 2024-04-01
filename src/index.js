import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import React from "react";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import DetalleViaje from "./pages/DetalleViaje";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Footer from "./pages/Footer";
import { UserProvider } from "./helper/UserContext";
import { NativeBaseProvider } from "native-base";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Tours from "./pages/Tours";
import Nosotros from "./pages/Nosotros";
import AdminPermiso from "./pages/AdminPermiso";
import AgradecimientoView from "./pages/AgradecimientoView";
import Devoluciones from "./pages/Devoluciones";
import Privacidad from "./pages/Privacidad";


import global_en from './locates/en/global.json'
import global_es from './locates/es/global.json'
import blog_es from './locates/es/blog.json'
import blog_en from './locates/en/blog.json'
import FAQ from "./pages/FAQ";
import './fonts/fonts.css'
import Payment from "./stripe/Payment";
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import AgregarVenta from "./Components/admin/AgregarVenta";
import TerminosCompra from "./pages/TerminosCompra";
import Hotels from "./pages/Hotels";
import DetalleHotel from "./pages/DetalleHotel";
import StripeTest from "./pages/StripeTest";
import StripePayment from "./StripePayment";


const tagManagerArgs = {
  gtmId: 'GTM-T4F8XM5Q'
}

TagManager.initialize(tagManagerArgs)

ReactGA.initialize('G-VE154KHCW3');
ReactGA.pageview(window.location.pathname + window.location.search);


i18next.init({
  interpolation: { escapeValue: false },
  lng: 'auto',
  fallbackLng: 'en',
  resources: {
    en: {
      global: global_en,
      blog: blog_en

    },
    es: {
      global: global_es,
      blog: blog_es
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
                  <Route path="Hotels" element={<Hotels />} />
                  <Route path="Blog" element={<Blog />} />
                  <Route path="Nosotros" element={<Nosotros />} />
                  <Route path="Contacto" element={<Contacto />} />
                  <Route path="trip/:id/:titulo/" element={<DetalleViaje />} />
                  <Route path="trip/:id" element={<DetalleViaje />} />
                  <Route path="Carrito" element={<Carrito />} />
                  <Route path="DetalleHotel/:id/:titulo" element={<DetalleHotel />} />


                  <Route path="Login" element={<Login />} />
                  <Route path="Registro" element={<Registro />} />
                  <Route path="Administrador" element={<AdminPermiso />} />
                  <Route path="Administrador/AgregarVenta" element={<AgregarVenta />} />
                  <Route path="success" element={<AgradecimientoView />} />
                  <Route path="FAQ" element={<FAQ />} />
                  <Route path="Stripe" element={<Payment />} />
                  <Route path="Devoluciones" element={<Devoluciones />} />
                  <Route path="TerminosCondiciones" element={<TerminosCompra />} />
                  <Route path="Privacidad" element={<Privacidad />} />
                  <Route path="*" element={<NoPage />} />
                  <Route path="testing" element={<StripePayment />} />
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
