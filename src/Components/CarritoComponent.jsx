import React, { useRef, useState } from "react";
import { Box, Text, Image, HStack, VStack, Button, Popover, Stack } from "native-base";
import { IconContext } from "react-icons";
import { MdDeleteForever } from "react-icons/md";
import { useUser } from "../helper/UserContext";
import { useTranslation } from "react-i18next";


const CarritoComponent = ({ id, index, foto, titulo, fecha, adultoN, adultoE, kidN, kidE, subtotal, subtotalMXN }) => {
    // variables y funciones de useContext
    const { eliminarCarrito } = useUser();
    const { t, i18n } = useTranslation("global");

    const [showPopover, setShowPopover] = useState(false);
    const initialFocusRef = useRef(null);

    const handleBorrar = (item) => {
        eliminarCarrito(item);
        setShowPopover(false);

    }

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

                <HStack space={5} justifyContent={"space-between"}>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.adultoN")}: <Text bold>{adultoN}</Text>{" "}
                    </Text>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.infanteE")}: <Text bold>{kidN}</Text>{" "}
                    </Text>
                </HStack>

                <HStack space={5} justifyContent={"space-between"}>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.adultoE")}: <Text bold>{adultoE}</Text>{" "}
                    </Text>
                    <Text fontSize={["xs", "xs", "sm", "md"]}>
                        {t("modalCarrito.infanteE")}: <Text bold>{kidE}</Text>
                    </Text>
                </HStack>

                <Text bold fontSize={["md", "md", "lg", "lg"]}>
                    Subtotal: ${i18n.language === "es" ? parseFloat(subtotalMXN).toFixed(2) : subtotal}
                    {t("modalCarrito.moneda")}:
                </Text>

                <HStack space={5} justifyContent={"center"} paddingRight={5} my={4}>
                    <Popover
                        isOpen={showPopover}
                        onClose={() => setShowPopover(false)}
                        initialFocusRef={initialFocusRef}
                        trigger={(triggerProps) => (
                            <Button
                                colorScheme={"secondary"}
                                {...triggerProps}
                                onPress={() => setShowPopover(true)}
                                endIcon={
                                    <IconContext.Provider value={{ color: "#edf5f7", size: "1.3em" }}>
                                        <MdDeleteForever />
                                    </IconContext.Provider>
                                }
                            >
                                {t("carritoVista.borrar")}
                            </Button>
                        )}
                    >
                        <Popover.Content maxWidth="600px" minWidth={"400px"}>
                            <Popover.Arrow />
                            <Popover.CloseButton />
                            <Popover.Header>{t("carritoVista.tituloPop")}</Popover.Header>
                            <Popover.Body>
                                <HStack>
                                    <Text>
                                        {t("carritoVista.mensajePop")} {" "}
                                    </Text>  <Text bold>{titulo}</Text>
                                    <Text>
                                        ?
                                    </Text>
                                </HStack>

                            </Popover.Body>
                            <Popover.Footer justifyContent="flex-end">
                                <Button.Group space={2}>
                                    <Button variant="outline" colorScheme="muted" ref={initialFocusRef} onPress={() => setShowPopover(false)}>
                                        {t("carritoVista.cancelar")}
                                    </Button>
                                    <Button colorScheme={"danger"} onPress={() => handleBorrar(index)}>
                                        {t("carritoVista.borrar")}
                                    </Button>
                                </Button.Group>
                            </Popover.Footer>
                        </Popover.Content>
                    </Popover>
                </HStack>
            </Box>
        </Stack>
    );
};

export default CarritoComponent;
