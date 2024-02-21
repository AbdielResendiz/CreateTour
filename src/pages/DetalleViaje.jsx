import React from "react";
import { useParams } from "react-router-dom";
import { HStack, Box, Text, VStack, Center, Stack, Pressable, View } from "native-base";
import { useState, useEffect } from "react";
import fetchPost from "../helper/fetchPost";
import URL from "../helper/baseURL";
import PrecioComponent from "../Components/PreciosComponent";
import { useTranslation } from 'react-i18next';
import SwiperComponent from "../Components/SwiperComponent";
import Loader from "../Components/Loader";
import { FaCircleInfo, FaArrowRightArrowLeft, FaMap, FaListCheck, FaBookOpen, FaLocationDot } from "react-icons/fa6";

const DetalleViaje = (props) => {
  const { t } = useTranslation("global");

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  //manejar y obtener datos del viaje
  const [viaje, setViaje] = useState([])

  const verViaje = async () => {
    setLoading(true);
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

    if (res.status === true) {

      setViaje(res.data);
      setLoading(false);

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
        content =
          <Text textAlign={"justify"} alignSelf={"flex-start"} mx={2} fontSize={["sm", "sm", "md", "md"]}>
            {t(`viajes.viaje${viaje.ID}.salida`)} {"\n"} {"\n"} {t(`viajes.viaje${viaje.ID}.regreso`)}
          </Text>;
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
        content = <Text textAlign={"justify"} alignSelf={"flex-start"} mx={2} fontSize={["sm", "sm", "md", "md"]} >
          {t(`viajes.viaje${viaje.ID}.infoAdicional`)}
        </Text>;
        break;
      case 5:
        content =
          <Box alignSelf="center"
            w={[80, 96, "70vw", "60vw", "60vw"]} h={96}>

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

  const CustomPressable = ({ count, titulo, icon: IconComponent }) => {
    return (
      <Pressable onPress={() => setTab(count)} isFocused={count === tab ? true : false}
        isPressed={count === tab ? true : false} py={1} borderBottomWidth={1}
        borderBottomRadius={10} shadow={3} borderColor={"muted.300"}
        _hover={{
          borderBottomWidth: 4,
          borderColor: "#28b5a4",
          shadow: 1
        }}>
        {({ isHovered, isPressed, isFocused }) => (
          <HStack py={1} pl={4} alignItems="center" space={2}>

            {IconComponent && <IconComponent size={20} color={count === tab ? "#28b5a4" : "#0e0238"} />}
            <Text bold fontSize={{
              base: "xm",
              md: "sm",
              lg: "md"
            }} color={count === tab ? "#28b5a4" : "#0e0238"} fontFamily={"Avenir"}
            >
              {titulo}
            </Text>
          </HStack>
        )}
      </Pressable>
    );
  };




  return (
    <View mt={{ base: 0, md: 12 }} w="100%">



      {
        loading ?
          <Loader texto="" />
          :
          <>
            <Box w={"85vw"} h={"500px"} alignSelf="center" >
              <SwiperComponent id={id} />
            </Box >


            <VStack bg="#fff" p={1} m={1} w="80vw" alignSelf="center">
              {/* Titulo y precios */}
              <Stack direction={["column", "column", "row", "row", "row"]} w={"100%"}
                space={3} p={1} m={1}  >

                <HStack w={["94%", "95%", "45%", "60%", "60%"]} flex={1} shadow={6}
                  borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={2}
                  justifyContent={"center"} >

                  <Text bold mx={2} p={2} py={5} alignSelf={"center"} fontFamily="ElMessiri"
                    textAlign="center" fontSize={["xl", "2xl", "2xl", "4xl", "4xl"]} >
                    {viaje.Titulo}
                  </Text>



                  <VStack bg="#28b5a4" w={20} h={20} mr={2} ml={10} borderRadius={5}
                    shadow={5} justifyContent={"space-between"} alignSelf={"center"} mb={4}>
                    <Center bg="#ffffff" w={20} borderColor={"#28b5a4"} borderWidth={3}
                      borderTopRadius={8} alignSelf={"flex-start"}   >
                      <Text fontSize={{
                        base: "xs",
                        md: "sm",
                        lg: "md"
                      }} >
                        {t("viaje.d")}
                      </Text>
                    </Center>
                    <Center h={10}>
                      <Text bold color={"#ffffff"} fontSize={"xl"}>
                        {viaje.Duracion}
                      </Text>
                    </Center>

                    <Center bg="#ffffff" w={20} borderColor={"#28b5a4"}
                      borderWidth={3} borderBottomRadius={8} mb={-5}   >
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

                <Box w={["95%", "95%", "45%", "40%", "40%"]} flex={1}>
                  <PrecioComponent PrecioInfantilExtranjero={viaje.PrecioInfantilExtranjero}
                    PrecioInfantilNacional={viaje.PrecioInfantilNacional}
                    PrecioAdultoExtranjero={viaje.PrecioAdultoExtranjero}
                    PrecioAdultoNacional={viaje.PrecioAdultoNacional}
                    viaje={viaje} />
                </Box>

              </Stack>


              {/* TABS */}


              <Stack direction={{
                base: "column",
                lg: "row"
              }} w={"100%"} alignSelf={"center"} my={"1rem"}
                borderWidth={2} shadow={6} borderRadius={10} borderColor={"muted.300"}
                justifyContent={"space-between"} space={2}>
                <Stack direction={"column"} w={{
                  base: "100%",
                  lg: "20%"
                }} bg="muted.200" shadow={7} borderRadius={10} >

                  <CustomPressable count={0} titulo={t("viaje.desc")} icon={FaBookOpen} />
                  <CustomPressable count={1} titulo={t("viaje.salida")} icon={FaArrowRightArrowLeft} />
                  <CustomPressable count={2} titulo={t("viaje.intinerario")} icon={FaMap} />
                  <CustomPressable count={3} titulo={t("viaje.incluye")} icon={FaListCheck} />
                  <CustomPressable count={4} titulo={t("viaje.info")} icon={FaCircleInfo} />
                  <CustomPressable count={5} titulo={t("viaje.map")} icon={FaLocationDot} />

                </Stack>


                {/* Contenido, descripcion, mapa, etc */}
                <Box p={4} w={{
                  base: "100%",
                  lg: "80%"
                }}>
                  <TabHandle n={tab} />
                </Box>
              </Stack>




            </VStack>
          </>


      }




    </View>
  );
};

export default DetalleViaje;
