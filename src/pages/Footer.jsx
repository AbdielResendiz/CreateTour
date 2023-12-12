import * as React from "react";
import { Center, Text, Pressable, VStack, Stack, Image, HStack, Flex } from "native-base";
import { BiLogIn } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import whatsapp from "../Lotties/whatsapp.json"
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const navigate = useNavigate();

    const handlePressWA = () => {
        // El número de teléfono de WhatsApp al que se enviará un mensaje (puedes cambiarlo según tus necesidades)
        const whatsappNumber = '9982304219';

        // Construye la URL de WhatsApp con el número de teléfono
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;

        // Abre la URL en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    };
    const CustomLink = ({ to, text }) => {
        return (
            <Link to={to} style={{ decoration: "none" }} >
                <Text p={[1, 2, 3, 4]} fontSize={["sm", "sm", "md", "lg"]} color={"#f3f3f3"} >{text}</Text>
            </Link>
        );
    };

    const handlePressLP = () => {

        const Url = `https://lpmarketinggroup.com.mx/`;

        // Abre la URL en una nueva pestaña
        window.open(Url, '_blank');
    };


    const handlePressTurismo = () => {

        const Url = `https://sedeturqroo.gob.mx/siturq/index.php?op=4`;

        // Abre la URL en una nueva pestaña
        window.open(Url, '_blank');
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

    const { t, i18n } = useTranslation("global");

    return (
        <>
            {/* Boton WhatsAP */}
            <Pressable bottom={10} zIndex={9} position={"fixed"} justifyContent={"flex-start"} w={[16, 16, 32, 40]} h={[16, 16, 32, 40]} left={[5, 5, 8, 10]}
                onPress={() => handlePressWA()}>
                <Lottie animationData={whatsapp} loop={true} />
            </Pressable>
            {/* Boton traducciom */}
            <VStack bottom={10} right={3} zIndex={9} position={"fixed"} justifyContent="flex-end"
                borderRadius={10} bg={"#dfdfdf"} borderWidth={1} borderColor={"muted.400"}>
                <Text borderTopRadius={10} p={1} fontSize={["xs", "xs", "md", "md"]}> {t("header.chooseLanguage")}</Text>
                <Pressable variant={"subtle"} onPress={() => i18n.changeLanguage("en")} px={1} py={[1, 1, 3, 3]}  >
                    <HStack justifyContent={"center"}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/usa.png"
                            }}
                            alt="English"
                            w={[5, 5, 10, 12]}
                            h={[5, 5, 10, 12]}
                            alignSelf={"center"}
                        />
                        <Center>
                            <Text textAlign={"center"} justifyContent={"center"} bold p={[1, 1, 3, 3]}>EN</Text>
                        </Center>
                    </HStack>
                </Pressable>

                <Pressable variant={"subtle"} onPress={() => i18n.changeLanguage("es")} borderBottomRadius={10} px={1} py={[1, 1, 3, 3]}  >
                    <HStack justifyContent={"center"}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/mexico.png"
                            }}
                            alt="Spanish"
                            w={[5, 5, 10, 12]}
                            h={[5, 5, 10, 12]}
                            alignSelf={"center"}
                        />
                        <Center>
                            <Text textAlign={"center"} justifyContent={"center"} bold p={[1, 1, 3, 3]}>ES</Text>
                        </Center>
                    </HStack>
                </Pressable>
            </VStack>


            <VStack mt={[96, 96, 10, 10]}>
                <Stack direction={["column", "column", "row", "row"]} width={"100%"} bg="#101010" h={[96, 96, 80, 80]} justifyContent={"center"}>
                    <Stack direction={["column", "column", "row", "row"]} bg="#101010">
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/backend/public/Imagenes/logo-footer.png"
                            }}
                            alt="Create tours"
                            size={"2xl"}
                            resizeMode="contain" borderRadius={10} alignSelf={"center"}

                        />
                        <Pressable mt={8} onPress={() => handlePressTurismo()}>
                            <Image
                                source={{
                                    uri: "https://createtours.com.mx/pictures/SEDETUR.png"
                                }}
                                alt="Create tours"
                                size={"2xl"}
                                resizeMode="contain" borderRadius={10} alignSelf={"center"}

                            />
                        </Pressable>



                    </Stack>

                    {/* Redes sociales */}
                    <HStack space={[10, 10, 4, 5]} justifyContent="center" alignSelf={"center"}>
                        <Pressable onPress={() => { handlePressFB() }}>
                            <IconContext.Provider value={{ color: "#edf5f7", size: "2em" }}>
                                <FaFacebook />
                            </IconContext.Provider>
                        </Pressable>

                        <Pressable onPress={() => { handlePressIG() }}>
                            <IconContext.Provider value={{ color: "#edf5f7", size: "2em" }}>
                                <FaInstagram />
                            </IconContext.Provider>
                        </Pressable>


                    </HStack>
                    {/* MENU footer nav */}
                    <Center bg={"#101010"} pt={20}>
                        <HStack py={4} alignSelf={"center"} bg={"#101010"} >
                            <Stack direction={"column"}>
                                <Text color={"#ffffff"} bold >MENU</Text>
                                <CustomLink to="/" text={t("menu.inicio")} />
                                <CustomLink to="/Tours" text="Tours" />
                                <CustomLink to="/Carrito" text={t("menu.Carrito")} />
                            </Stack>
                            <Stack direction={"column"}>
                                <Text bold >.</Text>
                                <CustomLink to="/Blog" text="Blog" />
                                <CustomLink to="/Nosotros" text={t("menu.Nosotros")} />
                                <CustomLink to="/Contacto" text={t("menu.Contacto")} />
                            </Stack>
                        </HStack>

                    </Center>

                    {/* LOGO LP MARKETING */}
                    <Pressable onPress={() => handlePressLP()} bg={"#101010"} pt={10}>
                        <Text color="#ffffff" fontSize={"sm"} mt={16} textAlign={"center"}>{t("menu.creado")}</Text>
                        <Image
                            source={{
                                uri: "https://lpmarketinggroup.com.mx/wp-content/uploads/2023/04/LP_Logo-LP.png"
                            }}
                            alt="Create tours"
                            size="xl"
                            resizeMode="contain" borderRadius={10} alignSelf={"center"}

                        />
                    </Pressable>

                    {/* boton acceso admin */}
                    <Center bg={"#101010"}>
                        <Pressable onPress={() => { navigate(`/Login`) }} p={3}>

                            <IconContext.Provider value={{ color: "#edf5f7", size: "3rem" }}>
                                <BiLogIn />
                            </IconContext.Provider>

                        </Pressable>
                    </Center>




                </Stack>

            </VStack>
        </>

    );
};

export default Footer; 