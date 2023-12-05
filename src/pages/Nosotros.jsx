import React from 'react';
import { Center, Image, Text, View, Stack, VStack } from 'native-base';


const Nosotros = () => {

  const NosotrosComponent = ({ subtitle, description, imageUrl, mr }) => {
    return (
      <Stack direction={"row"} w={"100%"}>
        <VStack w={"35%"} p={5} mx={5} >
          <Text fontSize={["md", "lg", "xl", "2xl"]} color={"#494d41"}  >CREATE TOURS</Text>
          <Text bold fontSize={["xl", "2xl", "4xl", "5xl"]}  >{subtitle}</Text>
          <Text fontSize={["md", "md", "lg", "lg"]} color={"#494d41"} textAlign={"justify"}>{description}</Text>
        </VStack>
        <Image
          source={{ uri: imageUrl }}
          alt="Alternate Text"
          width={"60%"}
          height={80}
          resizeMode={"stretch"}
          justifyContent={"flex-end"}
        />
      </Stack>
    );
  };


  const Valores = ({ valor }) => {
    return (
      <Center bg={"#0e0337"} borderRadius={5} p={[1, 2, 3, 4]}>
        <Text color={"white"} bold fontSize={["sm", "sm", "md", "lg"]}>
          {valor}
        </Text>
      </Center>
    );
  }


  return (

    <View direction={"column"} alignItems="center" py={10} w="100%" flex={1}>
      <NosotrosComponent
        subtitle={"NOSOTROS"}
        description={"Tu puerta de entrada a experiencias de viaje únicas y memorables! Fundada con pasión y compromiso, nuestra empresa se dedica a ofrecerte aventuras excepcionales que capturarán tu corazón y desatarán tu espíritu explorador."}
        imageUrl={"https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"}
        resize={"cover"} mr={3} />

      <Stack direction={"row"} w={"100%"}>
        <Image
          source={{ uri: "https://createtours.com.mx/backend/public/Imagenes/Mision.png" }}
          alt="Alternate Text"
          width={"60%"}
          height={96}
          resizeMode="cover"
        />


        <VStack w={"35%"} p={10} >
          <Text fontSize={["md", "lg", "xl", "2xl"]} color={"#494d41"} >CREATE TOURS</Text>
          <Text bold fontSize={["xl", "2xl", "4xl", "5xl"]}   >MISIÓN</Text>
          <Text fontSize={["md", "md", "lg", "lg"]} color={"#494d41"} textAlign={"justify"}>
            Ofrecerte una experiencia única, con una atención de calidad que
            haga de tu recorrido toda una aventura inolvidable de inicio a fin.
          </Text>
        </VStack>
      </Stack>


      <NosotrosComponent
        subtitle={"VISIÓN"}
        description={"Posicionarnos como una de las mejores agencias generadoras de experiencia reconocidas en la Rivera Maya que brinda confianza, seguridad y un servicio de calidad a todos aquellos que la aventura les llama."}
        imageUrl={"https://createtours.com.mx/backend/public/Imagenes/Vision.png"}
        mr={"1rem"} />






      <VStack flex={1} space={5} mb={5} >
        <Text bold fontSize={"6xl"} textAlign={"center"} >Valores</Text>
        <Stack direction={["column", "column", "row", "row"]} space={[3, 3, 4, 5]}>
          <Valores valor={"Amabilidad"} />
          <Valores valor={"Calidad y Servicio"} />
          <Valores valor={"Puntualidad y Confiabilidad"} />
          <Valores valor={"Deversión y trabajo en equipo"} />
        </Stack>

        <Stack direction={["column", "column", "row", "row"]} space={5}>
          <Valores valor={"Honestidad y Transparencia"} />
          <Valores valor={"Innovación e inspiración"} />
          <Valores valor={"Integridad y Respeto"} />
          <Valores valor={"Pasión y Compromiso"} />
        </Stack>

      </VStack>


    </View>

  );
};

export default Nosotros;