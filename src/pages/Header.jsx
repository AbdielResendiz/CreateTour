import { HStack, NativeBaseProvider, Text,Box } from "native-base";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FiPhone, FiMail  } from "react-icons/fi";
import { IconContext } from "react-icons";






const   Header = () => {

 





  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    
  };

  return (
    <>
      <HStack bg="#449bab" justifyContent="center" py={5} space={4} w="100%">

        <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
            <FaFacebook />
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
            <FaInstagram  />
        </IconContext.Provider>

        <HStack px={7}>
          <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
              <FiPhone />
          </IconContext.Provider>
          <Text color={"#edf5f7"} fontSize={"lg"}  px={2}>998 230 4219</Text>
        </HStack>

        <HStack px={7}>
          <IconContext.Provider value={{ color: "#edf5f7", size:"1.5em" }}>
              <FiMail />
          </IconContext.Provider>
          <Text color={"#edf5f7"} fontSize={"lg"} px={2}>contacto@createtours.com.mx</Text>
        </HStack>
      </HStack>

      <HStack justifyContent="space-between" px={"25%"}>
        <Link to="/" style={linkStyle} >
          <Text  fontSize="xl">Inicio</Text>
        </Link>
        <Link to="/" style={linkStyle}><Text  fontSize="xl">Tours</Text></Link>
        <Link to="/blogs" style={linkStyle}><Text  fontSize="xl">Blog</Text></Link>
        <Link to="/" style={linkStyle}><Text  fontSize="xl">Nosotros</Text></Link>
        <Link to="/contact" style={linkStyle}><Text  fontSize="xl">Contacto</Text></Link>
        <Link to="/Carrito" style={linkStyle}><Text  fontSize="xl">Carrito</Text></Link>
        <Link to="/Cuenta" style={linkStyle}><Text  fontSize="xl">Cuenta</Text></Link>
        <Link to="/Registro" style={linkStyle}><Text  fontSize="xl">Registro</Text></Link>
        <Link to="/Login" style={linkStyle}><Text  fontSize="xl">Login</Text></Link>

      </HStack>
      

      <Outlet />
    </>
  )
};

export default Header;