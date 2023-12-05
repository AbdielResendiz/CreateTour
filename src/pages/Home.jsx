import React from "react";
import { Image, Text, Flex, VStack, Center, ZStack, Box, Divider, Stack, Button } from "native-base";
import ViajesAleatoreosComponent from "../Components/ViajesAleatoreosComponent";
import { AiOutlineLike } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
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


  const navigate = useNavigate();

  return (
    <Flex w="100%" borderWidth={4}>

      <Image source={{
        uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
      }} alt="Alternate Text" width={"100%"} height={96} />


      {/* ICONOS */}
      <Stack direction={["column", "column", "row"]} justifyContent={"center"} space={12} p={10}>
        <IconTextComponent icon={<AiOutlineLike />} text="+20 DESTINOS" />
        <IconTextComponent icon={<GiPalmTree />} text="RESERVAS SEGURAS" />
        <IconTextComponent icon={<BsBoxSeam />} text="24/7" />
      </Stack>

      <Box h={96} mb={32}>
        <ZStack>

          <Flex w="60%" flexDirection="column" justifyContent="flex-start" mt={56} ml={12}>
            <Text fontSize={["lg", "xl", "2xl", "4xl"]} color={"#494d41"}  >CREATE TOURS</Text>
            <Text bold fontSize={["md", "lg", "lg", "2xl"]}  >¡QUIENES SOMOS!</Text>
            <Text fontSize={["md", "md", "lg", "xl"]} color={"#494d41"} pr={12} bg={"white"} textAlign={"justify"}  >
              En CREATE TOURS creamos recorridos seguros, confiables, pero sobre todo inolvidables,
              que hacen que nuestros usuarios vivan experiencias a lo grande en cada uno de sus destinos.
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
            DISFRUTA LA RIVERA MAYA</Text>
        </Center>

      </Box>
      <VStack size={"md"} fontWeight={400}>

        <Image alignSelf={"center"} source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"
        }} alt="Alternate Text" width={72} height={40} resizeMode="cover" />
        <Center >
          <Text width={"80%"} fontSize={["lg", "lg", "xl", "2xl"]}  >
            En CREATE TOURS creamos recorridos seguros, confiables, pero sobre todo inolvidables,
            que hacen que nuestros usuarios vivan experiencias a lo grande en cada uno de sus destinos.
          </Text>

        </Center>

      </VStack>

      <Center py={10}>
        <VStack>
          <Text fontSize={["xl", "2xl", "2xl", "4xl"]} >
            UNA AVENTURA GARANTIZADA
          </Text>
          <Divider thickness={2} bg="#449bab" />
        </VStack>
      </Center>

      <ViajesAleatoreosComponent />

      <Center>
        <Button size={"lg"} colorScheme={"amber"} my={5}
          onPress={() => { navigate('/Tours') }}>
          Ver todos los Tours
        </Button>
      </Center>
    </Flex>
  );
};

export default Home;
