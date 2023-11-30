import React from "react";
import { Image, Text, AspectRatio, Flex, HStack, VStack, Center, ZStack , Box, Divider} from "native-base";
import ViajesAleatoreosComponent from "../Components/ViajesAleatoreosComponent";
import { AiOutlineLike } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { IconContext } from "react-icons";


const IconTextComponent = ({ icon, text }) => {
  return (
    <VStack>
      <Center>
      <IconContext.Provider value={{ color: "#555555", size:"4rem" }}>
        {icon}
      </IconContext.Provider>
        
      </Center>
      <Text alignSelf={"center"} bold py={3} fontSize={"xl"}>
        {text}
      </Text>
    </VStack>
  );
};

const Home = () => {
  return (
    <Flex w="100%">
      <AspectRatio w={"100%"} ratio={16 / 9} >
        <Image source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
        }} alt="Alternate Text" width={"100%"} height={"auto"} />
      </AspectRatio>

      {/* ICONOS */}
      <HStack justifyContent={"center"} space={12} p={10}>
        <IconTextComponent icon={<AiOutlineLike />} text="+20 DESTINOS" />
        <IconTextComponent icon={<GiPalmTree />} text="RESERVAS SEGURAS" />
        <IconTextComponent icon={<BsBoxSeam />} text="24/7" />
      </HStack>

      <Box h={96} mb={10}>
        <ZStack>
          
         <Flex w="100%" flexDirection="row" justifyContent="flex-end" mb={34}>
          <AspectRatio w={"60vw"} ratio={14 / 8} >
                <Image source={{
                  uri: "https://createtours.com.mx/backend/public/Imagenes/logo-background.webp"
                }} alt="Alternate Text" width={"100%"} height={"auto"}  />
              </AspectRatio>

          </Flex>

          <Flex w="30%" flexDirection="column" justifyContent="flex-start" mt={56} ml={56}>
            <Text fontSize={"lg"} color={"#494d41"}>CREATE TOURS</Text>
            <Text bold fontSize={"xl"}>¡QUIENES SOMOS!</Text>
            <Text fontSize={"md"} color={"#494d41"} pr={12}>En CREATE TOURS creamos recorridos seguros, confiables, pero sobre todo inolvidables, que hacen que nuestros usuarios vivan experiencias a lo grande en cada uno de sus destinos.</Text>
          </Flex>
        </ZStack>

      </Box>


      <Box h={96}>
        <ZStack>
          
         <Flex w="100%" flexDirection="row" justifyContent="center" mb={34}>
          
                <Image source={{
                  uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
                }} alt="Alternate Text" width={"100vw"} height={96} resizeMode="cover"/>
             

          </Flex>

         
        </ZStack>
        <Center mt={24}>
            <Text bold fontSize={"6xl"}>DISFRUTA LA RIVERA MAYA</Text>
        </Center>

      </Box>
      <VStack size={"md"}>
                
        <Image alignSelf={"center"} source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"
        }} alt="Alternate Text" width={72} height={40}  resizeMode="cover"/>
        <Center >
        <Text width={96} fontSize={"md"}>
        En CREATE TOURS creamos recorridos seguros, confiables, pero sobre todo inolvidables, 
        que hacen que nuestros usuarios vivan experiencias a lo grande en cada uno de sus destinos.
        </Text>

        </Center>

      </VStack>

      <Center py={10}>
        <VStack>
          <Text bold fontSize={"2xl"}>
            UNA AVENTURA GARANTIZADA
          </Text>
          <Divider thickness={2} bg="#449bab"/>
        </VStack>
      </Center>


    

      

      


      <ViajesAleatoreosComponent />
    </Flex>
  );
};

export default Home;
