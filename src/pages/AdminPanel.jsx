import React from "react";
import { Heading, View, Text, Button, Pressable, HStack } from "native-base";
import DataTable from "../Components/DataTable";
import { useUser } from "../helper/UserContext";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



const AdminPanel = () => {

    const { logout } = useUser();
    const navigate = useNavigate();

    const HeaderAdmin = () => {
        return (
            <View flex={1} mt={[12, 12, 24, 24]}>
                <Heading alignSelf={"center"} fontSize={"2xl"} py={5}> Bienvenido al panel de administrador</Heading>
                <Text textAlign={"center"} fontSize={"lg"} mb={3}>Aquí podras ver el historial de las ventas</Text>
            </View>
        );
    }

    return (
        <View mb={10}>
            <HeaderAdmin />

            <Pressable onPress={() => navigate("AgregarVenta")}
                bg="primary.500" h={12} w={64}
                m={4} justifyContent="center" alignItems="center"
                borderRadius={10} shadow={7}
            >
                <HStack space={3}>
                    <FaCartPlus color="#fff" />
                    <Text color="#fff" bold fontFamily="Avenir">
                        Agregar Venta
                    </Text>
                </HStack>

            </Pressable>

            <DataTable />
            <Button onPress={() => logout()} w={"50%"} alignSelf={"center"} >
                Cerrar sesion
            </Button>
        </View>


    );
}

export default AdminPanel; 