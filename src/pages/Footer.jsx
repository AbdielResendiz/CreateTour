import * as React from "react";
import { Center, Text, Pressable, VStack, Stack, Image, HStack } from "native-base";
import { IconContext } from "react-icons";
import Lottie from "lottie-react";
import whatsapp from "../Lotties/whatsapp.json"
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import { FiMail } from "react-icons/fi";
import { animateScroll as scroll } from 'react-scroll';
import ReactGA from 'react-ga';

const Footer = () => {

    const handlePressWA = () => {
        // El número de teléfono de WhatsApp al que se enviará un mensaje (puedes cambiarlo según tus necesidades)
        const whatsappNumber = '9982304219';

        // Construye la URL de WhatsApp con el número de teléfono
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        ReactGA.event({
            category: 'Contact',
            action: 'Click en WhatsApp',
            label: `WhatsApp: ${whatsappNumber}`
        });

        // Abre la URL en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    };
    const CustomLink = ({ to, text }) => {

        const handleClick = () => {
            // Al hacer clic en el enlace, desplázate suavemente hacia la parte superior
            scroll.scrollToTop();
        };
        return (
            <Link to={to} style={{ decoration: "none" }} onClick={handleClick}>
                <Text p={1} fontSize={["xs", "xs", "sm", "sm"]} color={"#f3f3f3"} >{text}</Text>
            </Link>
        );
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
            <Pressable bottom={20} zIndex={9} position={"fixed"} justifyContent={"flex-start"} w={[16, 16, 24, 32]} h={[16, 16, 24, 32]} left={2}
                onPress={() => handlePressWA()}>
                <Lottie animationData={whatsapp} loop={true} />
            </Pressable>
            {/* Boton traducciom */}
            <VStack bottom={20} right={0} zIndex={9} position={"fixed"} justifyContent="flex-end"
                borderRadius={10} bg={"#dfdfdf"} borderWidth={1} borderColor={"muted.400"}>
                <Text borderTopRadius={10} p={1} fontSize={["xs", "xs", "md", "md"]}> {t("header.chooseLanguage")}</Text>
                <Pressable variant={"subtle"} onPress={() => i18n.changeLanguage("en")} px={1} py={[1, 1, 3, 3]}  >
                    <HStack justifyContent={"center"}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/usa.png"
                            }}
                            alt="English"
                            w={[5, 5, 8, 10]}
                            h={[5, 5, 8, 10]}
                            alignSelf={"center"}
                        />
                        <Center>
                            <Text textAlign={"center"} justifyContent={"center"} fontSize={["xs", "xs", "md", "md"]} bold p={[1, 1, 2, 2]}>EN</Text>
                        </Center>
                    </HStack>
                </Pressable>

                <Pressable variant={"subtle"} onPress={() => i18n.changeLanguage("es")} borderBottomRadius={10} px={1} py={[1, 1, 2, 2]}  >
                    <HStack justifyContent={"center"}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/mexico.png"
                            }}
                            alt="Spanish"
                            w={[5, 5, 8, 10]}
                            h={[5, 5, 8, 10]}
                            alignSelf={"center"}
                        />
                        <Center>
                            <Text textAlign={"center"} justifyContent={"center"} fontSize={["xs", "xs", "md", "md"]} bold p={[1, 1, 3, 3]}>ES</Text>
                        </Center>
                    </HStack>
                </Pressable>
            </VStack>


            <Stack py={4} px={2} direction={["column", "column", "row", "row"]} width={"100%"} bg="#449bab" justifyContent={"center"} alignSelf={"center"} alignContent={"center"}>


                {/* Redes sociales */}
                <HStack space={5} justifyContent="center" alignSelf={"center"}>
                    <Pressable onPress={() => { handlePressFB() }}>
                        <IconContext.Provider value={{ color: "#edf5f7", size: "1em" }}>
                            <FaFacebook />
                        </IconContext.Provider>
                    </Pressable>
                    <Pressable onPress={() => { handlePressIG() }}>
                        <IconContext.Provider value={{ color: "#edf5f7", size: "1em" }}>
                            <FaInstagram />
                        </IconContext.Provider>
                    </Pressable>
                    <Pressable onPress={() => { handlePressEmail() }} alignSelf="center" >
                        <HStack >
                            <IconContext.Provider value={{ color: "#edf5f7", size: "1em" }}>
                                <FiMail />
                            </IconContext.Provider>
                            <Text color="#ffffff" mx={2}>contacto@createtours.com.mx</Text>
                        </HStack>
                    </Pressable>
                </HStack>

                {/* MENU footer nav */}

                <Stack direction={"row"} alignSelf={"center"} bg={"#449bab"} space={2} justifyContent="center" >
                    <CustomLink to="/Privacidad" text="Políticas de privacidad" />
                    <CustomLink to="/Devoluciones" text="Políticas de devolución" />
                </Stack>
            </Stack>


        </>

    );
};

export default Footer; 