import { HStack, Text, Center, Pressable, Stack, Flex } from "native-base";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";
import { useUser } from "../helper/UserContext";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation("global");
  const { carrito } = useUser();
  const [carritoCantidad, setCarritoCantidad] = useState(0);
  useEffect(() => {
    let cantidad = carrito.length;
    setCarritoCantidad(cantidad)
    console.log("Carrito lengh: ", cantidad)
  }, [carrito])

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,

    zIndex: 1000, // Ajusta el valor según sea necesario
  };



  const handlePressFB = () => {
    // La URL de Facebook a la que se redirigirá al presionar el ícono
    const facebookUrl = 'https://www.facebook.com/CreateToursOficialMx/';

    // Abre la URL en una nueva pestaña
    window.open(facebookUrl, '_blank');
  };

  const handlePressIG = () => {
    // La URL de Facebook a la que se redirigirá al presionar el ícono
    const facebookUrl = 'https://www.instagram.com/createtours.mx';

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

    textDecoration: "none",


  };

  const CustomLink = ({ to, text }) => {
    return (
      <Link to={to} style={linkStyle} >
        <Text p={[1, 2, 3, 4]} fontSize={["sm", "md", "lg", "xl"]} >{text}</Text>
      </Link>
    );
  };

  return (
    <div >
      <Flex style={headerStyle}>
        <Stack direction={["column", "column", "row", "row"]} bg="#449bab" justifyContent="center" py={3} space={[0, 1, 2, 4]} >

          <HStack space={[1, 3, 4, 5]} justifyContent="center" >
            <Pressable onPress={() => { handlePressFB() }}>
              <IconContext.Provider value={{ color: "#edf5f7", size: "1.3em" }}>
                <FaFacebook />
              </IconContext.Provider>
            </Pressable>

            <Pressable onPress={() => { handlePressIG() }}>
              <IconContext.Provider value={{ color: "#edf5f7", size: "1.3em" }}>
                <FaInstagram />
              </IconContext.Provider>
            </Pressable>

            <Pressable onPress={() => { handlePressWA() }}>
              <HStack px={7}>
                <IconContext.Provider value={{ color: "#edf5f7", size: "1.3em" }}>
                  <FiPhone />
                </IconContext.Provider>
                <Text color={"#edf5f7"} fontSize={["xs", "sm", "md", "lg"]} px={2}>998 230 4219</Text>
              </HStack>
            </Pressable>
          </HStack>





          <Pressable onPress={() => { handlePressEmail() }} alignSelf="center">
            <HStack px={7}>
              <IconContext.Provider value={{ color: "#edf5f7", size: "1.5em" }}>
                <FiMail />
              </IconContext.Provider>
              <Text color={"#edf5f7"} fontSize={["xs", "sm", "md", "lg"]} px={2}>contacto@createtours.com.mx</Text>
            </HStack>
          </Pressable>


        </Stack>

        <HStack justifyContent="center" px={[1, 2, 3, 4]} mb={0} py={3} bg={"white"}>
          <CustomLink to="/" text={t("menu.inicio")} />
          <CustomLink to="/Tours" text="Tours" />
          <CustomLink to="/Blog" text="Blog" />
          <CustomLink to="/Nosotros" text={t("menu.Nosotros")} />
          <CustomLink to="/Contacto" text={t("menu.Contacto")} />
          <HStack px={[1, 2, 3, 4]} shadow={3} borderRadius={10} >
            <Center>
              <IconContext.Provider value={{ color: "#449bab", size: "1.4rem" }}>
                <TiShoppingCart />
              </IconContext.Provider>

            </Center>

            <Link to="/Carrito" style={linkStyle}><Text fontSize={["sm", "md", "lg", "xl"]}>{t("menu.Carrito")}</Text></Link>
            {carritoCantidad > 0 ?
              <Center>
                <Center bgColor={"amber.400"} size={[4, 4, 4, 4]} mx={[1, 1, 2, 2]} p={[1, 2, 3, 4]} borderRadius={100}>
                  <Text bold fontSize={["xs", "sm", "md", "lg"]}>{carritoCantidad}</Text>
                </Center>
              </Center>
              :
              null}
          </HStack>
          <CustomLink to="/FAQ" text="FAQ" />


        </HStack>
      </Flex>


      <Outlet />
    </div>
  )
};

export default Header;