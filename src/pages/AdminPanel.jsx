import React, {useEffect, useState} from "react";
import { Heading, View, Text, VStack, HStack, Center } from "native-base";
import { useUser } from "../helper/UserContext";
import TablaVentas from "../Components/TablaVentas";


const AdminPanel = () => {

    const { tipo, userId } = useUser();
    



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
            <VStack  m={5} borderRadius={10} borderColor={"muted.400"} borderWidth={1} w="90%">
                {/*  columnas de tabla */}
               <TablaVentas/>



            </VStack>
            
            
        
        </View>

       
    );
}

export default AdminPanel; 