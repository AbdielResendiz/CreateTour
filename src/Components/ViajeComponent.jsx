import React from "react";
import { Text, Pressable, Image, VStack, Center, Button, HStack, Divider} from "native-base";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaRegClock } from "react-icons/fa";




const ViajeComponent = ({ imageUri, titulo, lugar, duracion, precio }) => {
    return (
   <VStack m={4} borderColor={"#f0f0f0"} borderWidth={1} borderRadius={10} pb={2} bg="white" shadow={6}>
    <Pressable>
    <Image size={300} borderTopRadius={10} source={{
      uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${imageUri}`
    }} alt="Alternate Text" />
    </Pressable>
    <Center>
      <Text bold fontSize={"xl"} p={4}>{titulo }</Text>
    </Center>

    <HStack justifyContent={"center"} pb={4}>
      <IconContext.Provider value={{ color: "#44c5d3", size:"1.5em" }}>
        <IoLocationOutline />
      </IconContext.Provider>
      <Text fontSize={"lg"} marginTop={-0.5}  px={2}>{lugar}</Text>
    </HStack>

    <HStack justifyContent={"center"}>
      <IconContext.Provider  value={{ color: "#44c5d3", size:"1.3em" }}>
        <FaRegClock />
      </IconContext.Provider>
      <Text  fontSize={"lg"} pb={4} px={2} marginTop={-1}>{duracion} Horas</Text>
    </HStack>

    <Divider w="80%" alignSelf={"center"}/>
    <Center py={3}>
      <Text bold fontSize={"2xl"} >${precio}USD</Text>
    </Center>

    <Button mx={2}>
      Ver más
    </Button>
    
   </VStack>
    );
  };
  
  export default ViajeComponent;
  