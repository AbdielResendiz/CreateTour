import React from 'react';
import { Center, Image, Text, View, Stack,  VStack } from 'native-base';


const Nosotros = () => {

  const NosotrosComponent = ({  subtitle, description, imageUrl, resize }) => {
    return (
      <Stack direction={"row"} w={"100%"}>
        <VStack w={"40%"} p={10} mx={10}>
          <Text fontSize={"2xl"} color={"#494d41"}>CREATE TOURS</Text>
          <Text bold fontSize={"5xl"}>{subtitle}</Text>
          <Text fontSize={"lg"} color={"#494d41"}  textAlign={"justify"}>{description}</Text>
        </VStack>
        <Image
          source={{ uri: imageUrl }}
          alt="Alternate Text"
          width={"60%"}
          height={96}
          resizeMode={resize}
        />
      </Stack>
    );
  };


  const Valores = ({valor})=>{
    return (
      <Center bg={"#0e0337"} borderRadius={5} p={4}>
        <Text color={"white"} bold fontSize={"lg"}>
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
            resize={"contain"}/>

          <Stack direction={"row"} w={"100%"}>
            <Image
                source={{ uri: "https://createtours.com.mx/backend/public/Imagenes/Mision.png" }}
                alt="Alternate Text"
                width={"60%"}
                height={96}
                resizeMode="cover"
              />
            <VStack w={"30%"} p={10} mx={10}>
              <Text fontSize={"2xl"} color={"#494d41"}>CREATE TOURS</Text>
              <Text bold fontSize={"5xl"}>MISIÓN</Text>
              <Text fontSize={"lg"} color={"#494d41"}  textAlign={"justify"}>
                Ofrecerte una experiencia única, con una atención de calidad que
                haga de tu recorrido toda una aventura inolvidable de inicio a fin.
                </Text>
            </VStack>
          </Stack>



          <Stack direction={"row"} w={"100%"}>

            <VStack w={"40%"} p={10} mx={10}>
              <Text fontSize={"2xl"} color={"#494d41"}>CREATE TOURS</Text>
              <Text bold fontSize={"5xl"}>VISIÓN</Text>
              <Text fontSize={"lg"} color={"#494d41"}  textAlign={"justify"}>
              Posicionarnos como una de las mejores agencias generadoras de experiencia reconocidas en la 
              Rivera Maya que brinda confianza, seguridad y un servicio de calidad a todos aquellos que la
               aventura les llama.
                </Text>
            </VStack>
            <Image
                source={{ uri: "https://createtours.com.mx/backend/public/Imagenes/Vision.png" }}
                alt="Alternate Text"
                width={"60%"}
                height={96}
                resizeMode="cover"
              />
          </Stack>
          


        <VStack space={5} mb={5}>
          <Text bold fontSize={"6xl"}>Valores</Text>
          <Stack direction={"row"} space={5}>
            <Valores  valor={"Amabilidad"}/>
            <Valores  valor={"Calidad y Servicio"}/>
            <Valores  valor={"Puntualidad y Confiabilidad"}/>
            <Valores  valor={"Deversión y trabajo en equipo"}/>
          </Stack>

          <Stack direction={"row"} space={5}>
            <Valores  valor={"Honestidad y Transparencia"}/>
            <Valores  valor={"Innovación e inspiración"}/>
            <Valores  valor={"Integridad y Respeto"}/>
            <Valores  valor={"Pasión y Compromiso"}/>
          </Stack>

        </VStack>
  
  
      </View>
    
  );
};

export default Nosotros;