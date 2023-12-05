import React, { useState } from "react";
import { Box, Text, Image, HStack, VStack, Button, AspectRatio, Modal } from "native-base";
import { IconContext } from "react-icons";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../helper/UserContext";
import ModalExample from "./ModalEample";

const DetalleVentaComponent = ({ id, index, foto, titulo, fecha, adultoN, adultoE, kidN, kidE, subtotal }) => {
    // variables y funciones de useContext
    const { eliminarCarrito } = useUser();
    console.log("id viaje: ", id);

    const [showModal, setShowModal] = useState(false);

    return (
        <HStack width={760} ml={10} my={5} shadow={6} borderRadius={10} borderColor={"#aaaaaa"} borderWidth={1}>
            <AspectRatio w={400} ratio={16 / 9}>
                <Image borderLeftRadius={10} source={{ uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${foto}` }} alt={titulo} />
            </AspectRatio>

            <Box p={5}>
                <VStack>
                    <Text bold fontSize={"xl"}>
                        Título: <Text bold>{titulo}</Text>
                    </Text>
                    <Text bold fontSize={"lg"}>
                        Fecha: <Text bold>{fecha}</Text>
                    </Text>
                </VStack>

                <HStack space={10} justifyContent={"center"}>
                    <Text>
                        Adultos (Nacional) <Text bold>{adultoN}</Text>{" "}
                    </Text>
                    <Text>
                        Niños (Nacional): <Text bold>{kidN}</Text>{" "}
                    </Text>
                </HStack>

                <HStack space={10} justifyContent={"center"}>
                    <Text>
                        Adultos (Extranjero): <Text bold>{adultoE}</Text>{" "}
                    </Text>
                    <Text>
                        Niños (Extranjero): <Text bold>{kidE}</Text>
                    </Text>
                </HStack>

                <Text bold fontSize={"lg"}>
                    Subtotal: ${subtotal} USD
                </Text>

                <HStack space={5} justifyContent={"center"} paddingRight={5} my={4}>



                </HStack>
            </Box>
        </HStack>
    );
};

export default DetalleVentaComponent;