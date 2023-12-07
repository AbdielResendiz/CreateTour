import React from "react";
import { useParams } from "react-router-dom";
import { HStack, Box, Text, VStack, Center, Divider, Stack, Pressable, Image, Spinner, Heading } from "native-base";
import { useState, useEffect } from "react";
import fetchPost from "../helper/fetchPost";
import URL from "../helper/baseURL";
import PrecioComponent from "../Components/PreciosComponent";
import { useTranslation } from 'react-i18next'

const DetalleViaje = (props) => {
  const { t } = useTranslation("global")
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
  }, [])



  const [tab, setTab] = useState(0);

  const TabHandle = ({ n }) => {
    let content;

    switch (n) {
      case 1:
        content = <Text>{viaje.Salida} {"\n"} {viaje.Regreso}</Text>;
        break;
      case 2:
        content = <VStack>
          <Text bold fontSize={"lg"}>{t("viaje.intinerario")}</Text>
          <Text>{viaje.Intinerario}</Text>
        </VStack>;
        break;
      case 3:
        content = <VStack>
          <Text bold>El costo Incluye</Text>
          <Text>
            {viaje.Incluido}
          </Text>
          <Text bold>El costo NO Incluye</Text>
          <Text>
            {viaje.NoIncluido}
          </Text>
        </VStack>;
        break;
      case 4:
        content = <Text>{viaje.InfoAdicional}</Text>;
        break;
      case 5:
        content = <Box ml={[-10, -5, 0, 0]} w={[96, 480, 768, 992]} h={[96, 96, 480, 768]}>
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
        content = <Text fontSize={["sm", "md", "lg", "lg"]}>{viaje.Descripcion}</Text>;
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

  const Loader = () => {
    return <HStack space={2} mt={10} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Cargando
      </Heading>
    </HStack>;
  };


  return (
    <div>

      {/* Mostrar otros detalles del viaje aquí */}
      {/* <SwiperComponent/> */}


      <VStack bg="#fafafa" p={1} m={1}>

        {
          isLoading ? <Loader /> :
            <Image source={{
              uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${viaje.Foto}`
            }} alt="Foto Tour" width={"100%"} height={96}
              onError={(e) => {
                console.error("Error al cargar la imagen:", e.nativeEvent.error);
                // Puedes mostrar una imagen alternativa o realizar otra acción
              }} />

        }


        {/* Titulo y precios */}
        <Stack direction={["column", "column", "row", "row"]} w={"100%"} space={3} p={1} m={1}  >

          <HStack flex={1} ml={2} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={2} m={2} justifyContent={"center"} >

            <Text bold mx={2} p={2} py={10} alignSelf={"center"} fontSize={["xl", "2xl", "4xl", "6xl"]} >{viaje.Titulo}</Text>



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
                  Horas
                </Text>
              </Center>
            </VStack>

          </HStack>

          <PrecioComponent viaje={viaje} />

        </Stack>


        {/* TABS */}


        <VStack flex={1} p={2} my={"1rem"} borderWidth={2} shadow={6} borderRadius={10} borderColor={"muted.300"} ml={"1rem"} >
          <Stack direction={{
            base: "column",
            md: "row",
            lg: "row"
          }}>

            <CustomPressable count={0} titulo="Descripción" />
            <CustomPressable count={1} titulo="Salida y Regreso" />
            <CustomPressable count={2} titulo="Intinerario" />
            <CustomPressable count={3} titulo="¿Qué incluye y  qué no?" />
            <CustomPressable count={4} titulo="Información adicional" />
            <CustomPressable count={5} titulo="Mapa" />

          </Stack>
          <Divider />

          {/* Contenido, descripcion, mapa, etc */}
          <Box p={4}>
            <TabHandle n={tab} />
          </Box>
        </VStack>




      </VStack>
    </div>


  );
};

export default DetalleViaje;
