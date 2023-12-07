import React from "react";
import { Text, Pressable, Image, VStack, Center, Button, HStack, Divider } from "native-base";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'




const ViajeComponent = ({ id, imageUri, titulo, lugar, duracion, precio }) => {
  const { t } = useTranslation("global")


  //para navegar a otras vistas
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trip/${id}/${titulo}`);
  };


  return (

    <VStack m={4} borderColor={"#f0f0f0"} borderWidth={1} borderRadius={10} pb={2} bg="white" shadow={6}>
      <Pressable onPress={() => handleClick()} >
        <Image size={64} borderTopRadius={10} source={{
          uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${imageUri}`
        }} alt="Alternate Text" />

        <Center>
          <Text bold fontSize={"lg"} p={4}  >{titulo}</Text>
        </Center>

        <HStack justifyContent={"center"} pb={4}>
          <IconContext.Provider value={{ color: "#44c5d3", size: "1.5em" }}>
            <IoLocationOutline />
          </IconContext.Provider>
          <Text fontSize={"md"} marginTop={-0.5} px={2}>{lugar}</Text>
        </HStack>

        <HStack justifyContent={"center"}>
          <IconContext.Provider value={{ color: "#44c5d3", size: "1.3em" }}>
            <FaRegClock />
          </IconContext.Provider>
          <Text fontSize={"md"} pb={4} px={2} marginTop={-1}> {duracion + ' ' + t('viajeComponent.horas')}</Text>
        </HStack>

        <Divider w="80%" alignSelf={"center"} />
        <Center py={3}>
          <Text bold fontSize={"xl"} >${precio}USD</Text>
        </Center>

        {/* <Button mx={2} onPress={()=>navigate(`/trip/${id}/${titulo}/${duracion}` )} >
      Ver más
    </Button> */}


        <Button mx={2} onPress={() => handleClick()} >
          {t('viajeComponent.boton')}
        </Button>
      </Pressable>

    </VStack>
  );
};

export default ViajeComponent;
