import * as React from "react";
import { Center, Text, Pressable, VStack, Stack, Image, HStack } from "native-base";
import { BiLogIn } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import whatsapp from "../Lotties/whatsapp.json"
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import { FiMail } from "react-icons/fi";
import { animateScroll as scroll } from 'react-scroll';

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
            <Pressable bottom={10} zIndex={9} position={"fixed"} justifyContent={"flex-start"} w={[16, 16, 32, 40]} h={[16, 16, 32, 40]} left={0}
                onPress={() => handlePressWA()}>
                <Lottie animationData={whatsapp} loop={true} />
            </Pressable>
            {/* Boton traducciom */}
            <VStack bottom={10} right={0} zIndex={9} position={"fixed"} justifyContent="flex-end"
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



            <Stack py={4} direction={["column", "column", "row", "row"]} width={"100%"} bg="#449bab" justifyContent={"center"} alignSelf={"center"} alignContent={"center"}>
                {/* <Stack direction={"row"} bg="#101010" justifyContent={"center"} alignContent={"center"}>
                    <Image
                        source={{
                            uri: "https://createtours.com.mx/backend/public/Imagenes/logo-footer.png"
                        }}
                        alt="Create tours"
                        size={"sm"}
                        resizeMode="contain" alignSelf={"center"} mt={[-5, -5, 0, 0]}
                    />
                    <Pressable alignSelf={"center"} mt={[-5, -5, 0, 0]} onPress={() => handlePressTurismo()}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/SEDETUR.png"
                            }}
                            alt="SEDETUR"
                            size={"sm"}
                            resizeMode="contain"
                        />
                    </Pressable>
                </Stack> */}

                {/* Redes sociales */}
                <HStack space={5}  justifyContent="center" alignSelf={"center"}>
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



                {/* LOGO LP MARKETING */}
                {/* <Pressable mt={[0, 0, 3, 3]} onPress={() => handlePressLP()} bg={"#101010"} >
                    <Text color="#ffffff" fontSize={"xs"} textAlign={"center"} mb={[-8, -8, -6, -6]}>{t("menu.creado")}</Text>
                    <Image
                        source={{
                            uri: "https://lpmarketinggroup.com.mx/wp-content/uploads/2023/04/LP_Logo-LP.png"
                        }}
                        alt="Create tours"
                        size="xl"
                        resizeMode="contain" alignSelf={"center"}

                    />
                </Pressable> */}

                {/* boton acceso admin */}
                {/* <Pressable alignSelf={"center"} onPress={() => { navigate(`/Login`) }} p={3} bg={"#101010"} mt={[-8, -8, 0, 0]}>

                    <IconContext.Provider value={{ color: "#edf5f7", size: "3rem" }}>
                        <BiLogIn />
                    </IconContext.Provider>

                </Pressable> */}




            </Stack>


        </>

    );
};

export default Footer; 