import React from "react";
import { Image, Text, Flex, VStack, Center, ZStack, Box, Divider, Stack, Button } from "native-base";
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

  const { t } = useTranslation("global")

  const navigate = useNavigate();

  return (
    <Flex w="100%" >

      <Image source={{
        uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
      }} alt="Alternate Text" width={"100%"} height={96} />


      {/* ICONOS */}
      <Stack direction={["column", "column", "row"]} justifyContent={"center"} space={12} p={10}>
        <IconTextComponent icon={<AiOutlineLike />} text={t("mainSection.icono1")} />
        <IconTextComponent icon={<GiPalmTree />} text={t("mainSection.icono2")} />
        <IconTextComponent icon={<BsBoxSeam />} text="24/7" />
      </Stack>

      <Box h={96} mb={32}>
        <ZStack>

          <Flex w="60%" flexDirection="column" justifyContent="flex-start" mt={56} ml={12}>
            <Text fontSize={["lg", "xl", "2xl", "4xl"]} color={"#494d41"}  >CREATE TOURS</Text>
            <Text bold fontSize={["md", "lg", "lg", "2xl"]}  >{t("mainSection.quienes")}</Text>
            <Text fontSize={["md", "md", "lg", "xl"]} color={"#494d41"} pr={12} bg={"white"} textAlign={"justify"}  >
              {t("mainSection.about")}
            </Text>
          </Flex>

          <Flex w="100%" flexDirection="row" justifyContent="flex-end" mb={34}>

            <Image source={{
              uri: "https://createtours.com.mx/backend/public/Imagenes/logo-background.webp"
            }} alt="Alternate Text" width={"80%"} height={96} resizeMode="cover" />


          </Flex>

        </ZStack>

      </Box>


      <Box h={96}>
        <ZStack>

          <Flex w="100%" flexDirection="row" justifyContent="center" mb={34}>

            <Image source={{
              uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
            }} alt="Alternate Text" width={"100vw"} height={96} resizeMode="cover" />


          </Flex>


        </ZStack>
        <Center mt={24}>
          <Text fontSize={["xl", "4xl", "4xl", "6xl"]} >
            {t("mainSection.disfruta")}
          </Text>
        </Center>

      </Box>
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
