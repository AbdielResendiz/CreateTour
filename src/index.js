import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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



export default function App() {
  return (
    <NativeBaseProvider>
    <BrowserRouter>
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
          <Route path="*" element={<NoPage />} />
        </Route>
      
      </Routes>
      <Footer/>
      </UserProvider>
    </BrowserRouter>
    </NativeBaseProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
