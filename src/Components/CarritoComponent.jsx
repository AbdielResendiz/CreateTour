import React, { useState } from "react";
import { Box, Text, Image, HStack, VStack, Button, Modal, Stack } from "native-base";
import { IconContext } from "react-icons";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../helper/UserContext";


const CarritoComponent = ({ id, index, foto, titulo, fecha, adultoN, adultoE, kidN, kidE, subtotal }) => {
    // variables y funciones de useContext
    const { eliminarCarrito } = useUser();
    console.log("id viaje: ", id);
    console.log("index viaje carrito: ", index);

    const [showModal, setShowModal] = useState(false);

    return (
        <Stack direction={["column", "column", "row", "row"]} flex={1} mx={5} my={5} shadow={6} borderRadius={10} borderColor={"#aaaaaa"} borderWidth={1}>

            <Image borderLeftRadius={[0, 0, 10, 10]}
                borderTopRadius={[10, 10, 0, 0]}
                source={{ uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${foto}` }}
                alt={titulo}
                w={["100%", "100%", 80, 96]}
                h={[40, 40, 48, 56]}
                resizeMode="cover"
            />


            <Box flex={1} p={2} alignSelf={"flex-start"}>
                <VStack>
                    <Text bold fontSize={["md", "md", "lg", "xl"]}>
                        Título: <Text bold>{titulo}</Text>
                    </Text>
                    <Text bold fontSize={["md", "md", "md", "lg"]}>
                        Fecha: <Text bold>{fecha}</Text>
                    </Text>
                </VStack>

                <HStack space={10} justifyContent={"center"}>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        Adultos (Nacional): <Text bold>{adultoN}</Text>{" "}
                    </Text>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        Niños (Nacional): <Text bold>{kidN}</Text>{" "}
                    </Text>
                </HStack>

                <HStack space={10} justifyContent={"center"}>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        Adultos (Extranjero): <Text bold>{adultoE}</Text>{" "}
                    </Text>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        Niños (Extranjero): <Text bold>{kidE}</Text>
                    </Text>
                </HStack>

                <Text bold fontSize={["md", "md", "lg", "lg"]}>
                    Subtotal: ${subtotal} USD
                </Text>

                <HStack space={5} justifyContent={"center"} paddingRight={5} my={4}>
                    <Button
                        colorScheme={"secondary"}
                        onPress={() => setShowModal(true)}
                        endIcon={
                            <IconContext.Provider value={{ color: "#edf5f7", size: "1.3em" }}>
                                <MdDeleteForever />
                            </IconContext.Provider>
                        }>
                        Borrar
                    </Button>

                    {/* MODAL DE CONFIRMAR */}

                    <Modal isOpen={showModal} onClose={() => setShowModal(false)} justifyContent="center"  >
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>Eliminar del carrito</Modal.Header>
                            <Modal.Body>
                                <Text>
                                    ¿Seguro que quieres borrar del carrito <Text bold>{titulo}</Text> ?
                                </Text>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                    <Button variant="ghost" colorScheme="blueGray" onPress={() => setShowModal(false)}>
                                        Cancelar
                                    </Button>
                                    <Button colorScheme={"danger"} onPress={() => eliminarCarrito(index)}>
                                        Eliminar
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </HStack>
            </Box>
        </Stack>
    );
};

export default CarritoComponent;
