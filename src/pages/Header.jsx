import { HStack,  Text, Center, Pressable} from "native-base";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FiPhone, FiMail  } from "react-icons/fi";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";







const   Header = () => {


  const handlePressFB = () => {
    // La URL de Facebook a la que se redirigirá al presionar el ícono
    const facebookUrl = 'https://www.facebook.com/Createtourslapaz/';

    // Abre la URL en una nueva pestaña
    window.open(facebookUrl, '_blank');
  };

  const handlePressIG = () => {
    // La URL de Facebook a la que se redirigirá al presionar el ícono
    const facebookUrl = 'https://www.instagram.com/createtours/?hl=es-la';

    // Abre la URL en una nueva pestaña
    window.open(facebookUrl, '_blank');
  };

  const handlePressWA = () => {
    // El número de teléfono de WhatsApp al que se enviará un mensaje (puedes cambiarlo según tus necesidades)
    const whatsappNumber = '9982304219';

    // Construye la URL de WhatsApp con el número de teléfono
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    // Abre la URL en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };
 

  const handlePressEmail = () => {
    // La dirección de correo electrónico a la que se enviará el correo
    const toEmail = 'contacto@createtours.com.mx';

    // El asunto del correo electrónico
    const subject = 'Asunto del correo electrónico';

    // Construye la URL "mailto" con la dirección de correo electrónico y el asunto
    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}`;

    // Abre la URL en una nueva pestaña
    window.open(mailtoUrl, '_blank');
  };





  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    
  };

  return (
    <div>
      <HStack bg="#449bab" justifyContent="center" py={3} my={3} space={4} >


        <Pressable onPress={()=>{handlePressFB()}}>
          <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
              <FaFacebook /> 
          </IconContext.Provider>
        </Pressable>
        
        <Pressable onPress={()=>{handlePressIG()}}>
          <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
              <FaInstagram  />
          </IconContext.Provider>
        </Pressable>


        <Pressable onPress={()=>{handlePressWA()}}>
          <HStack px={7}>
            <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
                <FiPhone />
            </IconContext.Provider>
            <Text color={"#edf5f7"} fontSize={"lg"}  px={2}>998 230 4219</Text>
          </HStack>
        </Pressable>


        <Pressable onPress={()=>{handlePressEmail()}}>
          <HStack px={7}>
            <IconContext.Provider value={{ color: "#edf5f7", size:"1.5em" }}>
                <FiMail />
            </IconContext.Provider>
            <Text color={"#edf5f7"} fontSize={"lg"} px={2}>contacto@createtours.com.mx</Text>
          </HStack>
        </Pressable>


      </HStack>

      <HStack justifyContent="center" px={"3rem"} mb={2}>
        <Link to="/" style={linkStyle} >
          <Text  fontSize="xl">Inicio</Text>
        </Link>
        <Link to="/Tours" style={linkStyle}><Text  fontSize="xl">Tours</Text></Link>
        <Link to="/Blog" style={linkStyle}><Text  fontSize="xl">Blog</Text></Link>
        <Link to="/Nosotros" style={linkStyle}><Text  fontSize="xl">Nosotros</Text></Link>
        <Link to="/Contacto" style={linkStyle}><Text  fontSize="xl">Contacto</Text></Link>
        <HStack px={7} borderWidth={1} borderRadius={10} borderColor={"#449bab"}>
          <Center>
            <IconContext.Provider value={{ color: "#449bab", size:"1.5em" }}>
              <TiShoppingCart />
            </IconContext.Provider>

          </Center>

          <Link to="/Carrito" style={linkStyle}><Text  fontSize="xl">Carrito</Text></Link>
        </HStack>
        
        {/* <Link to="/Checkout" style={linkStyle}><Text  fontSize="xl">Pagar</Text></Link> */}
        {/* <Link to="/Cuenta" style={linkStyle}><Text  fontSize="xl">Cuenta</Text></Link>
        <Link to="/Registro" style={linkStyle}><Text  fontSize="xl">Registro</Text></Link>
        <Link to="/Login" style={linkStyle}><Text  fontSize="xl">Login</Text></Link> */}

      </HStack>
      

      <Outlet />
    </div>
  )
};

export default Header;