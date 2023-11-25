import React from "react";
import { useParams, useLocation } from "react-router-dom";
import SwiperComponent from "../Components/SwiperComponent";
import { HStack, Box, Text, VStack, Center } from "native-base";

const DetalleViaje = (props) => {
  const { id, titulo, duracion } = useParams();
  const location = useLocation();
  const { foto } = location.state || {};

  console.log("foto uri: ", foto)



  // Aquí puedes usar el ID para obtener la información del viaje específico
  // y mostrar los detalles del viaje en este componente

  return (
    <div>

      {/* Mostrar otros detalles del viaje aquí */}
      <SwiperComponent/>

      <VStack bg="#fafafa" borderColor={"#ff0000"} borderWidth={1} p={1} m={1}>
        <HStack borderColor={"#00ff00"} borderWidth={1} p={1} m={1} >

          <HStack orderColor={"#0000ff"} borderWidth={1} p={1} m={1} justifyContent={"center"} >
            <Text bold fontSize={"6xl"} p={10}>{titulo} {id}</Text>
            
                <VStack bg="#28b5a4" w={20} h={20} m={5} mt={10}  borderRadius={10} shadow={5} justifyContent={"center"}>
                  <Center h={10}>
                    <Text bold color={"#ffffff"} fontSize={"4xl"}>
                    {duracion}
                    </Text>
                  </Center>

                  <Center bg="#ffffff" w={20} borderColor={"#28b5a4"} borderWidth={3} borderBottomRadius={8} mb={-3}  >
                    <Text fontSize={"md"} >
                    Horas
                    </Text>
                  </Center>
                </VStack>


            
          </HStack>

          <Box borderColor={"#05f595"} borderWidth={5} p={1} m={1}>
            <Text>
              Duracion: {props.duracion}
              IMAGEN: {props.imageUri}
            </Text>

          </Box>

        </HStack>


        {/* TABS */}
        <VStack borderColor={"#ff0000"} borderWidth={5} p={1} m={1} >
          <Text fontSize={"xl"}>
            Tabs
          </Text>

        </VStack>

      </VStack>
    </div>


  );
}; 

export default DetalleViaje;
