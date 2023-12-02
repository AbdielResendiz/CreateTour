import {  Image,  Flex, HStack, AspectRatio, VStack, Button, Text } from "native-base";
import FlatListViajesComponent from "../Components/FlatListViajesComponent";
import { useNavigate } from "react-router-dom";






const Tours = () => {
        //para navegar a otras vistas
   const navigate = useNavigate();

   const handleClick = () => {
    navigate(`/trip/3`);
  };



    return (
        <Flex w="100%">
            <HStack w={"100%"}>
               
                    <Image source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/bg-tours.webp"
                    }} alt="Alternate Text" width={"70%"} height={96}  resizeMode="cover"/>
                

                <VStack justifyContent={"center"} alignSelf={"center"} w={"30%"} p={10}>
                    <Text mt={4}  >NUEVAS EXPERIENCIAS</Text>
                    <Text bold fontSize={"4xl"} px={4}>XPLOR
                        ADVENTURE
                        PARK</Text>
                    <Text fontSize={"md"}>
                    Los espectaculares escenarios naturales que rodean la Riviera Maya se exhiben en Xplor. {"\n"}
                        •Costo: $153.00 USD {"\n"}
                        •Hora de salida 7:00 AM {"\n"}
                        •Duración: 6 horas {"\n"}
                        •Boleto de admisión incluido {"\n"}

                    </Text>
                    <Button  m={5} colorScheme={"amber"} size={"lg"}
                    onPress={()=>{handleClick()} }>VER TOUR</Button>

                </VStack>



            </HStack>





            <FlatListViajesComponent/>
        </Flex>
    );
  };
  
  export default Tours;