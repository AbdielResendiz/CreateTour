import React, {useEffect, useState} from "react";
import { Heading, View, Text } from "native-base";
import { useUser } from "../helper/UserContext";
import TablaVentas from "../Components/TablaVentas";
import AdminPanel from "./AdminPanel";


const AdminPermiso = () => {

    const { tipo, userId } = useUser();
    



 useEffect(() => {
     // You can add additional logic here if needed
     console.log("tipo user: ", typeof(tipo) )
     console.log("ID USER: ", typeof(userId) )
  }, [tipo, userId]); 

        const ErrorAdmin = () => {
        
        return (
        <View flex={1}>
            <Heading alignSelf={"center"} fontSize={"2xl"} py={5}> Lo siento</Heading>
            <Text textAlign={"center"} fontSize={"lg"} mb={3}>No tienes permiso para ver esta página... </Text>
            
           
        
        </View>
        );
    }


    
return (
  <>
    {tipo === "1" && userId !== null ? (
      <AdminPanel />
    ) : (
      <ErrorAdmin />
    )}
  </>
);
}

export default AdminPermiso; 