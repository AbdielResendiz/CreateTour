import React from "react";
import { useParams } from "react-router-dom";
import { HStack, Box, Text, VStack, Center, Divider, Stack, Pressable, Image, Spinner, Heading } from "native-base";
import { useState, useEffect } from "react";
import fetchPost from "../helper/fetchPost";
import URL from "../helper/baseURL";
import PrecioComponent from "../Components/PreciosComponent";
import { useTranslation } from 'react-i18next';
import SwiperComponent from "../Components/SwiperComponent";

const DetalleViaje = (props) => {
  const { t } = useTranslation("global");





  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);


  //manejar y obtener datos del viaje
  const [viaje, setViaje] = useState([])

  const verViaje = async () => {
    const BASE_URL = URL.BASE_URL;

    const dataViaje = new FormData();
    //para enviar datos por POST
    dataViaje.append("ID", parseInt(id));
    const url = `${BASE_URL}viajes/detalle`
    const options = {
      method: 'POST',
      body: dataViaje
    };
    const res = await fetchPost(url, options);

    console.log("Viaje detalle:", res);
    if (res.status === true) {

      setViaje(res.data);
      setIsLoading(false)
    }

  }





  useEffect(() => {
    verViaje()
  }, []);

  // Construir la clave de traducción dinámicamente
  const claveDeTraduccion = `viajes.viaje${viaje.ID}.map`;

  // Usar la clave construida en la función t()
  const textoMapa = t(claveDeTraduccion);



  const [tab, setTab] = useState(0);

  const TabHandle = ({ n }) => {
    let content;

    switch (n) {
      case 1:
        content = <Text>{t(`viajes.viaje${viaje.ID}.salida`)} {"\n"} {t(`viajes.viaje${viaje.ID}.regreso`)}</Text>;
        break;
      case 2:
        content = <VStack>
          <Text bold fontSize={"lg"}>{t("viaje.intinerario")}</Text>
          <Text>{t(`viajes.viaje${viaje.ID}.intinerario`)}</Text>
        </VStack>;
        break;
      case 3:
        content = <VStack>
          <Text bold>{t("viaje.incl")}</Text>
          <Text>
            {t(`viajes.viaje${viaje.ID}.incluido`)}
          </Text>
          <Text bold>{t("viaje.noincl")}</Text>
          <Text>
            {t(`viajes.viaje${viaje.ID}.noIncluido`)}
          </Text>
        </VStack>;
        break;
      case 4:
        content = <Text>{t(`viajes.viaje${viaje.ID}.infoAdicional`)}</Text>;
        break;
      case 5:
        content = <Box ml={[-10, -5, 0, 0]} w={[96, 480, 768, 992]} h={[96, 96, 480, 768]}>
          {/* Prueba variable bilingue */}
          <Text>    </Text>
          <iframe
            title="Mapa  de Google"
            src={viaje.Maps}
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>;
        break;
      default:
        content = <Text fontSize={["sm", "md", "lg", "lg"]}>{t(`viajes.viaje${viaje.ID}.descripcion`)}</Text>;
        break;
    }

    return content;
  };

  const CustomPressable = ({ count, titulo }) => {
    return (
      <Pressable onPress={() => setTab(count)} isFocused={count === tab ? true : false} isPressed={count === tab ? true : false} py={1}>
        {({ isHovered, isPressed, isFocused }) => (
          <Box borderBottomWidth={isHovered || isFocused || isPressed ? 3 : 0} py={{
            base: "md",
            md: "md",
            lg: "lg"
          }} px={4} borderColor={"#28b5a4"}>
            <Text bold fontSize={{
              base: "xm",
              md: "sm",
              lg: "xl"
            }} color={count === tab ? "#28b5a4" : "black"}
            >
              {titulo}
            </Text>
          </Box>
        )}
      </Pressable>
    );
  };


  useEffect(() => {

    console.log("Tab:  ", tab)
  }, [tab]);






  // Función para obtener la clave de traducción de un viaje por ID



  const Loader = () => {
    return <HStack space={2} mt={10} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        {t("viaje.load")}
      </Heading>
    </HStack>;
  };


  return (
    <>

      {/* Mostrar otros detalles del viaje aquí */}
      {/* {
        isLoading ? <Loader /> : 
          <SwiperComponent id={id} />
      } */}
      {/* <Image source={{
        uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
      }} alt="Alternate Text" width={"100%"} height={96} /> */}

      <Box w={"95vw"} h={"35vw"}>
        <SwiperComponent id={id} />
      </Box >

      <VStack bg="#fafafa" p={1} m={1}>



        {/* Titulo y precios */}
        <Stack direction={["column", "column", "row", "row"]} w={"100%"} space={3} p={1} m={1}  >

          <HStack w={["95%", "95%", "45%", "60%"]} flex={1} ml={2} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={2} m={2} justifyContent={"center"} >

            <Text bold mx={2} p={2} py={5} alignSelf={"center"} fontSize={["xl", "2xl", "4xl", "6xl"]} >{viaje.Titulo}</Text>



            <VStack bg="#28b5a4" w={12} h={12} mr={2} ml={10} borderRadius={5} shadow={5} justifyContent={"center"} alignSelf={"center"}>
              <Center h={10}>
                <Text bold color={"#ffffff"} fontSize={{
                  base: "md",
                  md: "lg",
                  lg: "xl"
                }}>
                  {viaje.Duracion}
                </Text>
              </Center>

              <Center bg="#ffffff" w={12} borderColor={"#28b5a4"} borderWidth={3} borderBottomRadius={8} mb={-5}   >
                <Text fontSize={{
                  base: "xs",
                  md: "sm",
                  lg: "md"
                }} >
                  {t("viaje.h")}
                </Text>
              </Center>
            </VStack>

          </HStack>
          <Box w={["95%", "95%", "45%", "40%"]}>
            <PrecioComponent viaje={viaje} />
          </Box>

        </Stack>


        {/* TABS */}


        <VStack flex={1} alignSelf={"center"} p={2} my={"1rem"} borderWidth={2} shadow={6} borderRadius={10} borderColor={"muted.300"}  >
          <Stack direction={{
            base: "column",
            md: "row",
            lg: "row"
          }}>

            <CustomPressable count={0} titulo={t("viaje.desc")} />
            <CustomPressable count={1} titulo={t("viaje.salida")} />
            <CustomPressable count={2} titulo={t("viaje.intinerario")} />
            <CustomPressable count={3} titulo={t("viaje.incluye")} />
            <CustomPressable count={4} titulo={t("viaje.info")} />
            <CustomPressable count={5} titulo={t("viaje.map")} />

          </Stack>
          <Divider />

          {/* Contenido, descripcion, mapa, etc */}
          <Box p={4}>
            <TabHandle n={tab} />
          </Box>
        </VStack>




      </VStack>
    </>


  );
};

export default DetalleViaje;
