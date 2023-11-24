import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import DetalleViaje from "./pages/DetalleViaje";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Footer from "./pages/Footer";
import { UserProvider } from "./helper/UserContext";
import Cuenta from "./pages/Cuenta";
import { NativeBaseProvider } from "native-base";
import Carrito from "./pages/Carrito";



export default function App() {
  return (
    <NativeBaseProvider>
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="viaje/:id" element={<DetalleViaje />} />
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
