import { HStack, Text, Center, Stack, Box, Image, View, Pressable } from "native-base";
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

    }, [carrito])

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,

        zIndex: 1000, // Ajusta el valor según sea necesario
    };


    const handlePressTurismo = () => {

        const Url = `https://sedeturqroo.gob.mx/siturq/index.php?op=4`;

        // Abre la URL en una nueva pestaña
        window.open(Url, '_blank');
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
                <Text p={[1, 1, 2, 2]} borderWidth={1} borderRadius={10} fontFamily={"Avenir"}
                    shadow={3} mx={[2, 2, 4, 4]} bg={"#eeeeee"} borderColor={"muted.300"}
                    fontSize={["xs", "xs", "md", "lg"]} >
                    {text}</Text>
            </Link>
        );
    };

    const handleClick = () => {
        // Al hacer clic en el enlace, desplázate suavemente hacia la parte superior
        scroll.scrollToTop();
    };


    return (
        <View w={"100%"} >
            <View style={headerStyle} zIndex={9}  >
                <HStack w={"100%"} alignSelf={"center"} justifyContent={"center"} bg={"#eeeeee"}>

                    <Box width={[24, 24, 40, 56]} height={[12, 12, 16, 24]} bg={"#eeeeee"} />

                    <Center bg="#eeeeee" justifyContent="center" py={3}  >
                        <Link to={"/"} onClick={handleClick}>
                            <Image alignSelf={"center"} source={{
                                uri: "https://createtours.com.mx/pictures/logo-create.png"
                            }} alt="Alternate Text" width={[32, 32, 48, 64]} height={[20, 20, 24, 32]} resizeMode="contain" />
                        </Link>
                    </Center>

                    <Pressable onPress={handlePressTurismo} alignSelf={"center"}>
                        <Image source={{
                            uri: "https://createtours.com.mx/pictures/SEDETUR.png"
                        }} alt="Alternate Text" width={[24, 24, 40, 56]} height={[12, 12, 16, 24]} resizeMode="contain" />
                    </Pressable>


                </HStack>




                {/* STACK de menu */}
                <Stack mt={[-5, -5, 0, 0]} w={"100%"} direction={["column", "column", "row", "row"]} justifyContent={"center"} alignSelf={"center"} bg={"#eeeeee"} alignItems="center" >
                    <HStack justifyContent={["center", "center", "flex-end", "flex-end"]} mb={0} py={[1, 1, 2, 3]} >
                        <CustomLink to="/" text={t("menu.inicio")} />
                        <CustomLink to="/Tours" text="Tours" />
                        <CustomLink to="/Blog" text="Blog" />
                        <CustomLink to="/Nosotros" text={t("menu.Nosotros")} />



                    </HStack>
                    {/* STACK de menu */}
                    <HStack justifyContent={["center", "center", "flex-start", "flex-start"]} mb={0} py={[1, 1, 2, 3]} alignItems="center"  >
                        <CustomLink to="/Contacto" text={t("menu.Contacto")} />
                        <CustomLink to="/FAQ" text="FAQ" />
                        {/* Boton carrito */}
                        <Link to="/Carrito" style={linkStyle}>
                            <HStack p={1} shadow={3} borderRadius={10} borderColor={"muted.300"} borderWidth={1} bg={"#449bab"} >

                                <Center>
                                    <IconContext.Provider value={{ color: "#eeeeee", size: "1.5em" }}>
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