import React from "react";
import { Heading, View, Text, VStack } from "native-base";
import DataTable from "../Components/DataTable";


const AdminPanel = () => {






    const HeaderAdmin = () => {

        return (
            <View flex={1}>
                <Heading alignSelf={"center"} fontSize={"2xl"} py={5}> Bienvenido al panel de administrador</Heading>
                <Text textAlign={"center"} fontSize={"lg"} mb={3}>Aquí podras ver el historial y estatus de las ventas</Text>



            </View>
        );
    }





    return (
        <View>
            <HeaderAdmin />

            {/* tabla */}
            <VStack m={5} borderRadius={10} borderColor={"muted.400"} borderWidth={1} w="90%">
                {/*  columnas de tabla */}






            </VStack>



            <DataTable />



        </View>


    );
}

export default AdminPanel; 