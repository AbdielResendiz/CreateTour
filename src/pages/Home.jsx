import React from "react";
import { Image, Text, Flex, VStack, Center, ZStack,  Divider, Stack, Button } from "native-base";
import ViajesAleatoreosComponent from "../Components/ViajesAleatoreosComponent";
import { AiOutlineLike } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import "../App.css"


const IconTextComponent = ({ icon, text }) => {

  return (
    <Stack direction="column" >
      <Center>
        <IconContext.Provider value={{ color: "#555555", size: "4rem" }}>
          {icon}
        </IconContext.Provider>

      </Center>
      <Text alignSelf={"center"} py={3} fontSize={"xl"}>
        {text}
      </Text>
    </Stack>
  );
};

const Home = () => {

  const { t } = useTranslation("global");

  const navigate = useNavigate();

  return (
    <Flex w="100%" mt={[12, 12, 24, 24]}>

      <Image bg={"#449bab"} source={{
        uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
      }} alt="Alternate Text" width={"100%"} h={[48, 48, 96, 96]} resizeMode="cover" />


      {/* ICONOS */}
      <Stack direction={["column", "column", "row"]} justifyContent={"center"} space={12} p={10}>
        <IconTextComponent icon={<AiOutlineLike />} text={t("mainSection.icono1")} />
        <IconTextComponent icon={<GiPalmTree />} text={t("mainSection.icono2")} />
        <IconTextComponent icon={<BsBoxSeam />} text="24/7" />
      </Stack>


      <Stack direction={["column", "column", "row", "row"]} >
        <Flex w={["80%", "80%", "25%", "25%"]} flexDirection="column" bg={"#eeeeee"} zIndex={9}
          justifyContent={["center", "center", "flex-start", "flex-start"]} mt={[10, 10, 32, 56]} ml={[10, 10, 20, 40]}   >
          <Text fontSize={["lg", "xl", "2xl", "4xl"]} color={"#494d41"}  >CREATE TOURS</Text>
          <Text bold fontSize={["md", "lg", "lg", "2xl"]}  >{t("mainSection.quienes")}</Text>
          <Text fontSize={["md", "md", "lg", "xl"]} color={"#494d41"} bg={"#eeeeee"} textAlign={"justify"}  >
            {t("mainSection.about")}
          </Text>
        </Flex>

        <Image alignSelf={["center", "center", "flex-end", "flex-end"]} ml={[0, 0, 0, -32]} source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/logo-background.webp"
        }} alt="Alternate Text" width={["100%", "100%", "70%", "70%"]} h={[64, 64, 96, 96]} resizeMode="contain" />





      </Stack>





      <ZStack h={[32, 32, 64, 64]} w={"100%"}>



        <Image alignSelf={"center"} source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
        }} alt="Alternate Text" width={"100%"} height={[32, 32, 64, 64]} resizeMode="contain" />




        <Text mt={[5, 5, 16, 16]} textAlign={"center"} alignSelf={"center"} bold fontSize={["xl", "xl", "2xl", "4xl"]} >
          {t("mainSection.disfruta")}
        </Text>


      </ZStack>




      <VStack size={"md"} fontWeight={400}>

        <Image alignSelf={"center"} source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"
        }} alt="Alternate Text" width={72} height={40} resizeMode="cover" />
        <Center >
          <Text width={"80%"} fontSize={["lg", "lg", "xl", "2xl"]}  >
            {t("mainSection.about")}
          </Text>

        </Center>

      </VStack>

      <Center py={10}>
        <VStack>
          <Text fontSize={["xl", "2xl", "2xl", "4xl"]} >
            {t("mainSection.slogan")}
          </Text>
          <Divider thickness={2} bg="#449bab" />
        </VStack>
      </Center>

      <ViajesAleatoreosComponent />

      <Center>
        <Button size={"lg"} colorScheme={"amber"} my={5}
          onPress={() => { navigate('/Tours') }}>
          {t("mainSection.verTodos")}
        </Button>
      </Center>
    </Flex>
  );
};

export default Home;
