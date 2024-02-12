import React, { useState } from "react";
import { Box, Text, Image, HStack, VStack, Button, Modal, Stack } from "native-base";
import { IconContext } from "react-icons";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../helper/UserContext";
import { useTranslation } from "react-i18next";


const CarritoComponent = ({ id, index, foto, titulo, fecha, adultoN, adultoE, kidN, kidE, subtotal }) => {
    // variables y funciones de useContext
    const { eliminarCarrito } = useUser();
    const { t } = useTranslation("global");

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
                        Tour: <Text bold>{titulo}</Text>
                    </Text>
                    <Text bold fontSize={["md", "md", "md", "lg"]}>
                        {t("modalCarrito.fecha2")}: <Text bold>{fecha}</Text>
                    </Text>
                </VStack>

                <HStack space={10} justifyContent={"center"}>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.adultoN")}: <Text bold>{adultoN}</Text>{" "}
                    </Text>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.infanteE")}: <Text bold>{kidN}</Text>{" "}
                    </Text>
                </HStack>

                <HStack space={10} justifyContent={"center"}>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.adultoE")}: <Text bold>{adultoE}</Text>{" "}
                    </Text>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.infanteE")}: <Text bold>{kidE}</Text>
                    </Text>
                </HStack>

                <Text bold fontSize={["md", "md", "lg", "lg"]}>
                    Subtotal: ${subtotal} {t("modalCarrito.moneda")}:
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
                        {t("carritoVista.borrar")}
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
                                        {t("carritoVista.borrar")}:
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
