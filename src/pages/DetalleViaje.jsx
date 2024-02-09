import React from "react";
import { useParams } from "react-router-dom";
import { HStack, Box, Text, VStack, Center, Divider, Stack, Pressable, View } from "native-base";
import { useState, useEffect } from "react";
import fetchPost from "../helper/fetchPost";
import URL from "../helper/baseURL";
import PrecioComponent from "../Components/PreciosComponent";
import { useTranslation } from 'react-i18next';
import SwiperComponent from "../Components/SwiperComponent";

const DetalleViaje = (props) => {
  const { t } = useTranslation("global");

  const { id } = useParams();

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

    }

  }

  useEffect(() => {
    verViaje()
  }, []);


  const [tab, setTab] = useState(0);

  const TabHandle = ({ n }) => {
    let content;

    switch (n) {
      case 1:
        content = <Text textAlign={"justify"} alignSelf={"flex-start"} mx={2} fontSize={["sm", "sm", "md", "md"]}>{t(`viajes.viaje${viaje.ID}.salida`)} {"\n"} {"\n"} {t(`viajes.viaje${viaje.ID}.regreso`)}</Text>;
        break;
      case 2:
        content = <VStack alignSelf={"flex-start"} mx={2}>
          <Text bold fontSize={"lg"}>{t("viaje.intinerario")}</Text>
          <Text textAlign={"justify"} fontSize={["sm", "sm", "md", "md"]}>{t(`viajes.viaje${viaje.ID}.intinerario`)}</Text>
        </VStack>;
        break;
      case 3:
        content = <VStack alignSelf={"flex-start"} mx={2}>
          <Text bold fontSize={"lg"}>{t("viaje.incl")}  </Text>
          <Text textAlign={"justify"} fontSize={["sm", "sm", "md", "md"]}>
            {t(`viajes.viaje${viaje.ID}.incluido`)} {'\n'}
          </Text>
          <Text bold fontSize={"lg"}> {'\n'}{t("viaje.noincl")}</Text>
          <Text fontSize={["sm", "sm", "md", "md"]}>
            {t(`viajes.viaje${viaje.ID}.noIncluido`)}
          </Text>
        </VStack>;
        break;
      case 4:
        content = <Text textAlign={"justify"} alignSelf={"flex-start"} mx={2} fontSize={["sm", "sm", "md", "md"]} >{t(`viajes.viaje${viaje.ID}.infoAdicional`)}</Text>;
        break;
      case 5:
        content = <Box alignSelf={"center"} ml={[-10, -5, 0, 0]} w={[96, 480, 768, 992]} h={[96, 96, 480, 768]}>

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
        content = <Text alignSelf={"flex-start"} textAlign={"justify"} fontSize={["sm", "sm", "md", "md"]}>{t(`viajes.viaje${viaje.ID}.descripcion`)}</Text>;
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
              lg: "md"
            }} color={count === tab ? "#28b5a4" : "black"}
            >
              {titulo}
            </Text>
          </Box>
        )}
      </Pressable>
    );
  };




  return (
    <View mt={[20, 20, 10, 10]}>



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
            <PrecioComponent PrecioInfantilExtranjero={viaje.PrecioInfantilExtranjero}
              PrecioInfantilNacional={viaje.PrecioInfantilNacional}
              PrecioAdultoExtranjero={viaje.PrecioAdultoExtranjero}
              PrecioAdultoNacional={viaje.PrecioAdultoNacional}
              viaje={viaje} />
          </Box>

        </Stack>


        {/* TABS */}


        <VStack w={"90%"} alignSelf={"center"} p={2} my={"1rem"} borderWidth={2} shadow={6} borderRadius={10} borderColor={"muted.300"}  >
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
          <Center p={4} >
            <TabHandle n={tab} />
          </Center>
        </VStack>




      </VStack>
    </View>
  );
};

export default DetalleViaje;
