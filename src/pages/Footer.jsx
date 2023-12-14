import * as React from "react";
import { Center, Text, Pressable, VStack, Stack, Image, HStack } from "native-base";
import { IconContext } from "react-icons";
import Lottie from "lottie-react";
import whatsapp from "../Lotties/whatsapp.json"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import { FiMail } from "react-icons/fi";

const Footer = () => {


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



            <Stack mt={10} py={3} direction={["column", "column", "row", "row"]} width={"100%"} bg="#449bab" justifyContent={"center"} alignContent={"center"}>


                {/* Redes sociales */}
                <HStack space={[10, 10, 4, 5]} justifyContent="center" alignSelf={"center"}>
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
                            <Text fontSize={"xs"} color="#ffffff">contacto@createtours.com.mx</Text>
                        </HStack>
                    </Pressable>
                </HStack>








                {/* boton acceso admin */}
                {/* <Pressable alignSelf={"center"} onPress={() => { navigate(`/Login`) }} p={3} bg={"#449bab"} mt={[-8, -8, 0, 0]}>

                    <IconContext.Provider value={{ color: "#edf5f7", size: "3rem" }}>
                        <BiLogIn />
                    </IconContext.Provider>

                </Pressable> */}




            </Stack>


        </>

    );
};

export default Footer; 