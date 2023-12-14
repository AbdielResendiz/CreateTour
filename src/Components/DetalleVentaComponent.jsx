import React from "react";
import { Text, Image, HStack, VStack, Flex, View } from "native-base";

const DetalleVentaComponent = ({ id, index, foto, titulo, fecha, adultoN, adultoE, kidN, kidE, subtotal }) => {



    return (
        <View>


            <HStack flex={1} width={"100%"} m={2} shadow={6} borderRadius={10} borderColor={"#aaaaaa"} borderWidth={1}>

                <Image w={40} h={40} borderLeftRadius={10} source={{ uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${foto}` }} alt="detalle venta" />


                <Flex p={2}>
                    <VStack>
                        <Text bold fontSize={["md", "md", "lg", "xl"]}>
                            Título: <Text bold>{titulo}</Text>
                        </Text>
                        <Text bold fontSize={["sm", "sm", "md", "lg"]}>
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

                    <Text bold fontSize={["sm", "sm", "md", "lg"]}>
                        Subtotal: ${subtotal} USD
                    </Text>


                </Flex>
            </HStack>
        </View>
    );
};

export default DetalleVentaComponent;