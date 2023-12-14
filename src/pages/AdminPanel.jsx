import React from "react";
import { Heading, View, Text, Button } from "native-base";
import DataTable from "../Components/DataTable";
import { useUser } from "../helper/UserContext";


const AdminPanel = () => {

    const { logout } = useUser();

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
            <DataTable />
            <Button onPress={() => logout()} w={"50%"} alignSelf={"center"} >
                Cerrar sesion
            </Button>
        </View>


    );
}

export default AdminPanel; 