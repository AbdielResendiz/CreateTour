import React, { useEffect, useState } from "react";
import { Text, Pressable, Image, VStack, Center, Button, HStack, Divider } from "native-base";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useUser } from "../helper/UserContext";
import TagManager from 'react-gtm-module';




const ViajeComponent = ({ id, imageUri, titulo, lugar, duracion, precio }) => {
  const { t, i18n } = useTranslation("global");
  const { precioUSD } = useUser();

  //para navegar a otras vistas
  const navigate = useNavigate();

  const handleClick = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'button_click',
        category: 'Interactions',
        action: 'click',
        label: `Tour: ${titulo}`
      }
    });
    navigate(`/trip/${id}/${titulo}`);
  };


  const [precioMXN, setPrecioMXN] = useState(null);



  useEffect(() => {
    const actualizarPrecioMXN = () => {
      try {
        setPrecioMXN(Number((precioUSD * precio).toFixed(2)));
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    // Inicialización del precio en MXN
    actualizarPrecioMXN();
  }, [precioUSD, precio]);


  return (

    <VStack m={4} borderColor={"#f0f0f0"} borderWidth={1} borderRadius={10} pb={2} bg={"#eeeeee"} shadow={6}>
      <Pressable onPress={() => handleClick()} >
        <Image size={64} borderTopRadius={10} source={{
          uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${imageUri}`
        }} alt="Alternate Text" />

        <Center>
          <Text fontFamily={"ElMessiri"} bold fontSize={"lg"} p={4}  >{titulo}</Text>
        </Center>

        <HStack justifyContent={"center"} pb={4} alignItems={"center"} space={2}>
          <IconContext.Provider value={{ color: "#44c5d3", size: "1.5em" }}>
            <IoLocationOutline />
          </IconContext.Provider>
          <Text fontFamily="Avenir" fontSize={"md"} >{lugar}</Text>
        </HStack>


        {duracion !== null ?
          <HStack justifyContent={"center"} alignItems="center" space={2} mb={2}>
            <IconContext.Provider value={{ color: "#44c5d3", size: "1.3em" }}>
              <FaRegClock />
            </IconContext.Provider>
            <Text fontFamily="Avenir" fontSize={"md"}> {duracion + ' ' + t('viajeComponent.horas')}</Text>
          </HStack>
          :
          null
        }


        <Divider w="80%" alignSelf={"center"} />
        <Center py={3}>
          <Text fontFamily="Avenir" bold fontSize={"xl"} >
            {i18n.language === "es" ? `$${precioMXN} MXN` : `$${precio} USD`}
          </Text>
        </Center>
      </Pressable>

      {/* <Button mx={2} onPress={()=>navigate(`/trip/${id}/${titulo}/${duracion}` )} >
      Ver más
    </Button> */}


      <Button mx={2} onPress={() => handleClick()} >
        {t('viajeComponent.boton')}
      </Button>


    </VStack>
  );
};

export default ViajeComponent;
