import React from "react";
import { Box, Button, HStack, Text } from "native-base";

const VentaComponent = () => {

    return (
        <Box p={3} m={3} borderWidth={1} borderRadius={10} shadow={6} flex={1} alignSelf={"center"}>

            <HStack justifyContent={"center"} space={10} mb={4}>
                <Text>ID Venta: <Text bold> 1</Text></Text>

                <Text>Status: <Text bold> Pagado (atendido)</Text></Text>
                <Text>Fecha de pago: <Text bold> Pagado (atendido)</Text></Text>
            </HStack>

            <HStack justifyContent={"center"} space={10}>
                <Text>Nombre: <Text bold> Abdiel Reséndiz</Text></Text>
                <Text>Email: <Text bold> cabdielr94@gmail.comn</Text></Text>

                <Text>Teléfono: <Text bold> 442 546 6824</Text></Text>

            </HStack>

            <HStack space={5} justifyContent={"center"} >
                <Button colorScheme={"amber"}>
                    Ver detalle de compra
                </Button>
                <Button >
                    Cambiar Status
                </Button>
            </HStack>

        </Box>


    );
}
export default VentaComponent;