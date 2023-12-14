import { HStack, Text, Center, Stack, Flex, Image, View } from "native-base";
import { Outlet, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";
import { useUser } from "../helper/UserContext";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from 'react-scroll';

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






  const linkStyle = {

    textDecoration: "none",


  };

  const CustomLink = ({ to, text }) => {
    const handleClick1 = () => {
      // Al hacer clic en el enlace, desplázate suavemente hacia la parte superior
      scroll.scrollToTop();
    };
    return (
      <Link to={to} style={linkStyle} onClick={handleClick1} >
        <Text p={[1, 1, 2, 2]} borderWidth={1} borderRadius={10} shadow={3} mx={[2, 2, 4, 4]} bg={"#eeeeee"} borderColor={"muted.300"} fontSize={["sm", "md", "lg", "xl"]} >{text}</Text>
      </Link>
    );
  };

  const handleClick = () => {
    // Al hacer clic en el enlace, desplázate suavemente hacia la parte superior
    scroll.scrollToTop();
  };

  return (
    <View >
      <View style={headerStyle} zIndex={9} onClick={handleClick} >
        <HStack w={"100%"} alignSelf={"center"} justifyContent={"center"} bg={"#eeeeee"}>

        <Image alignSelf={"center"} source={{
              uri: "https://seeklogo.com/images/Q/quintana-roo-gobierno-del-estado-logo-733FFA528C-seeklogo.com.png"
            }} alt="Alternate Text" width={[24, 24, 40, 56]} height={[12, 12, 16, 24]} resizeMode="contain" />

        <Center bg="#eeeeee" justifyContent="center" py={3}  >
          <Link to={"/"}>
            <Image alignSelf={"center"} source={{
              uri: "https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"
            }} alt="Alternate Text" width={[32, 32, 48, 64]} height={[20, 20, 24, 32]} resizeMode="contain" />
          </Link>
        </Center>

        <Image alignSelf={"center"} source={{
              uri: "https://cgc.qroo.gob.mx/cjg/wp-content/uploads/2016/11/SEDETUR.png"
            }} alt="Alternate Text" width={[24, 24, 40, 56]} height={[12, 12, 16, 24]} resizeMode="contain" />

        </HStack>
 


 
        {/* STACK de menu */}
        <Stack mt={[-5, -5, 0, 0]} w={"100%"} direction={["column", "column", "row", "row"]} justifyContent={"center"} alignSelf={"center"} bg={"#eeeeee"}>
          <HStack justifyContent={["center", "center", "flex-end", "flex-end"]} mb={0} py={[1, 1, 2, 3]} >
            <CustomLink to="/" text={t("menu.inicio")} />
            <CustomLink to="/Tours" text="Tours" />
            <CustomLink to="/Blog" text="Blog" />
            <CustomLink to="/Nosotros" text={t("menu.Nosotros")} />




          </HStack>
          {/* STACK de menu */}
          <HStack justifyContent={["center", "center", "flex-start", "flex-start"]} mb={0} py={[1, 1, 2, 3]}  >
            <CustomLink to="/Contacto" text={t("menu.Contacto")} />
            <CustomLink to="/FAQ" text="FAQ" />
            {/* Boton carrito */}
            <Link to="/Carrito" style={linkStyle}>
              <HStack p={1} mx={5} ml={10} shadow={3} borderRadius={10} borderColor={"muted.300"} borderWidth={1} mt={-1} bg={"#449bab"} >

                <Center>
                  <IconContext.Provider value={{ color: "#eeeeee", size: "2rem" }}>
                    <TiShoppingCart />
                  </IconContext.Provider>

                </Center>


                {carritoCantidad > 0 ?
                  <Center>
                    <Center bgColor={"amber.400"} size={[4, 4, 4, 4]} mx={[1, 1, 2, 2]} p={[1, 2, 3, 3]} borderColor={"muted.300"} borderWidth={1} borderRadius={100}>
                      <Text bold fontSize={["xs", "sm", "md", "lg"]}>{carritoCantidad}</Text>
                    </Center>
                  </Center>
                  :
                  null}

              </HStack>
            </Link>



          </HStack>
        </Stack>




      </View>


      <Outlet />
    </View>
  )
};

export default Header;