import * as React from "react";
import { Center, Text, Pressable, VStack, Flex, Stack, Image, HStack } from "native-base";
import { BiLogIn } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import whatsapp from "../Lotties/whatsapp.json"
import { Link } from "react-router-dom";

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
                <Text p={[1, 2, 3, 4]} fontSize={["sm", "md", "lg", "xl"]} color={"#f3f3f3"} >{text}</Text>
            </Link>
        );
    };

    const handlePressLP = () => {

        const Url = `https://lpmarketinggroup.com.mx/`;

        // Abre la URL en una nueva pestaña
        window.open(Url, '_blank');
    };

    return (
        <VStack>
            <Pressable justifyContent={"flex-start"} w={[20, 20, 32, 40]} h={[20, 20, 32, 40]} left={[5, 5, 8, 10]} bottom={10} zIndex={9} position={"fixed"}
                onPress={() => handlePressWA()}>
                <Lottie animationData={whatsapp} loop={true} />
            </Pressable>
            <Stack direction={["column", "column", "row", "row"]} width={"100%"} bg="#101010" h={[96, 96, 40, 40]} justifyContent={"space-between"}>
                <Image bg={"#ffffff"}
                    source={{
                        uri: "https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"
                    }}
                    alt="Create tours"
                    size="lg"
                    resizeMode="contain" m={5} borderRadius={10} alignSelf={"center"} ml={[0, 0, 32, 48]}

                />

                <HStack py={4} alignSelf={"center"}>
                    <Stack direction={"column"}>
                        <Text color={"#ffffff"} bold >MENU PRINCIPAL</Text>
                        <CustomLink to="/" text="Inicio" />
                        <CustomLink to="/Tours" text="Tours" />
                    </Stack>
                    <Stack direction={"column"}>
                        <Text bold >.</Text>
                        <CustomLink to="/Blog" text="Blog" />
                        <CustomLink to="/Nosotros" text="Nosotros" />
                        <CustomLink to="/Contacto" text="Contacto" />
                    </Stack>
                </HStack>

                <Pressable onPress={() => handlePressLP()} bg={"#101010"}>
                    <Text bold color="#ffffff" fontSize={"sm"} mt={3} textAlign={"center"}>Creado y diseñado por:</Text>
                    <Image
                        source={{
                            uri: "https://lpmarketinggroup.com.mx/wp-content/uploads/2023/04/LP_Logo-LP.png"
                        }}
                        alt="Create tours"
                        size="lg"
                        resizeMode="contain" borderRadius={10} alignSelf={"center"}

                    />
                </Pressable>


                <Center bg={"#101010"}>
                    <Pressable onPress={() => { navigate(`/Login`) }} mr={10} p={3}>

                        <IconContext.Provider value={{ color: "#edf5f7", size: "3rem" }}>
                            <BiLogIn />
                        </IconContext.Provider>

                    </Pressable>
                </Center>

            </Stack>

        </VStack>
    );
};

export default Footer; 