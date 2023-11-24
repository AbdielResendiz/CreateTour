import React from "react";
import { Box, Text, Image, HStack, VStack, Button, AspectRatio, Flex } from "native-base";
import { IconContext } from "react-icons";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const CarritoComponent = ({ id, foto, titulo, fecha, adultoN, adultoE, kidN, kidE }) => {

    console.log("id viaje: ",id)
  return (
    <HStack width={760} ml={10} my={5} shadow={6} borderRadius={10} borderColor={"#aaaaaa"} borderWidth={1}>
  
            <AspectRatio w={400} ratio={16 / 9} >
             <Image  borderLeftRadius={10} source={{
                uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${foto}`
                }} alt={titulo} />
            </AspectRatio>
          
      

        <Box p={5} >
            <VStack>
                <Text bold fontSize={"xl"}>Título: <Text bold>{adultoN}</Text>{titulo}</Text>
                <Text bold fontSize={"lg"}>Fecha: <Text bold>{adultoN}</Text>{fecha}</Text>
            </VStack>
            
            <HStack space={10} justifyContent={"center"}>
                <Text>Adultos (Nacional) <Text bold>{adultoN}</Text> </Text>
                <Text>Niños (Nacional): <Text bold>{kidN}</Text> </Text>
            </HStack>


            <HStack space={10} justifyContent={"center"}>
                <Text>Adultos (Extranjero): <Text bold>{adultoE}</Text> </Text>
                <Text>Niños (Extranjero): <Text bold>{kidE}</Text></Text>
            </HStack>

            <Text  bold fontSize={"lg"}>Subtotal: $3000.00 USD</Text>
            
            <HStack space={5} justifyContent={"center"} paddingRight={5} my={4}>
            
                <Button endIcon={
                    <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
                    <MdEdit />
                    </IconContext.Provider>
                }>
                    Editar  
                </Button>
                <Button colorScheme={"secondary"} endIcon={
                    <IconContext.Provider value={{ color: "#edf5f7", size:"1.3em" }}>
                    <MdDeleteForever />
                    </IconContext.Provider>
                }>
                    Editar  
                </Button>
        </HStack>
          
            
        </Box>

    

   
     
      
     

    </HStack>
  );
};

export default CarritoComponent;
