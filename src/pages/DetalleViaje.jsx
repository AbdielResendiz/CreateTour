import React from "react";
import { useParams } from "react-router-dom";
import SwiperComponent from "../Components/SwiperComponent";
import { HStack, Box, Text, VStack, Center, Divider, Button, Stack, Pressable } from "native-base";
import { useState, useEffect } from "react";
import fetchPost from "../helper/fetchPost";
import URL from "../helper/baseURL";


const DetalleViaje = (props) => {
  const { id} = useParams();




//manejar y obtener datos del viaje
const [viaje, setViaje] = useState([])
//status de respuesta JSON DETALLE VIAJE
const [status, setStatus] = useState(null)

const verViaje = async()=>{
    const BASE_URL= URL.BASE_URL;
        
     const dataViaje = new FormData();
    //para enviar datos por POST
    dataViaje.append("ID", parseInt(id));
    const url = `${BASE_URL}viajes/detalle`
    const options = {
      method:'POST',
       body: dataViaje
    };
    const res = await fetchPost(url, options);
   
    console.log("Viaje detalle:", res);
    setViaje(res.data);
    setStatus(res.status);

   // 
    
    
  }

  useEffect(() => {
   verViaje()
   console.log("Viaje detalle : ", viaje)
   console.log("base url: ", URL.BASE_URL)
   console.log("id : ", id);
   console.log("tipo id: ", typeof(id))
   
  }, [])

  useEffect(() => {
   
    console.log("Tab:  ", tab)
   }, [])


  const [tab, setTab] = useState(0);

  const TabHandle = ({ n }) => {
    let content;
  
    switch (n) {
      case 1:
        content = <Text>{viaje.Salida} {"\n"} {viaje.Regreso}</Text>;
        break;
      case 2:
        content = <VStack>
                    <Text bold fontSize={"lg"}>Intinerario</Text>
                    <Text>{viaje.Intinerario}</Text>
                 </VStack>;
        break;
      case 3:
        content = <VStack>
                    <Text bold>El costo Incluye</Text>
                    <Text>
          	          {viaje.Incluido}
                    </Text>
                    <Text bold>El costo NO Incluye</Text>
                    <Text>
                      {viaje.NoIncluido}
                    </Text>
                  </VStack>;
        break;
      case 4:
        content = <Text>{viaje.InfoAdicional}</Text>;
        break;
      case 5:
        content = <div>
              <iframe
      title="Mapa  de Google"
      src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d954683.8992399486!2d-89.403867!3d20.822256!3m2!1i1024!2i768!4f13.1!2m1!1sChichen%20Itza!5e0!3m2!1ses!2smx!4v1701117548226!5m2!1ses!2smx"
      width="600"
      height="450"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>;
        break;
      default:
        content = <Text>{viaje.Descripcion}</Text>;
        break;
    }
  
    return content;
  };

  const CustomPressable = ({ count, titulo }) => {
    return (
      <Pressable maxW="96" onPress={()=>setTab(count)} isFocused={ count===tab ? true : false } isPressed={ count===tab ? true : false } >
        {({ isHovered, isPressed, isFocused  }) => (
          <Box borderBottomWidth={ isHovered || isFocused || isPressed ? 3 : 0} py={3} px={4} borderColor={"#28b5a4"}>
                     <Text
            style={{
              fontWeight: isHovered || isFocused  || isPressed ? 'bold' : 'normal',
              color: isHovered || isFocused || isPressed ? '#28b5a4' : 'black',
            }}
          >
            {titulo}
          </Text>
          </Box>
        )}
      </Pressable>
    );
  };


  return (
    <div>

      {/* Mostrar otros detalles del viaje aquí */}
      <SwiperComponent/>

      <VStack bg="#fafafa"  p={1} m={1}>

        {/* Titulo y precios */}
        <Stack direction={"row"} w="100%" space={5}  p={1} m={1} >

          <HStack w={"40rem"} ml={"2rem"} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={1} m={1} justifyContent={"center"} >
            <Text bold fontSize={"6xl"} mx={10} p={10}>{viaje.Titulo}</Text>
            
                <VStack bg="#28b5a4" w={20} h={20} m={5} mt={10}  borderRadius={10} mx={10} shadow={5} justifyContent={"center"}>
                  <Center h={10}>
                    <Text bold color={"#ffffff"} fontSize={"4xl"}> 
                    {viaje.Duracion}
                    </Text>
                  </Center>

                  <Center bg="#ffffff" w={20} borderColor={"#28b5a4"} borderWidth={3} borderBottomRadius={8} mb={-3}   >
                    <Text fontSize={"md"} >
                    Horas
                    </Text>
                  </Center>
                </VStack>
          </HStack>

          <Box shadow={6}  borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={4} m={1} justifyContent={"center"}>
            <HStack>
            <VStack space={3} justifyContent={"center"}>
              <VStack p={3}>
                <Text bold fontSize={"xl"}>${viaje.PrecioAdultoExtranjero} USD</Text>
                <Text fontSize={"md"} color={"muted.600"}>/ Adulto Extranjero </Text>
              </VStack>
            
              

              <VStack p={3}>
                <Text bold fontSize={"xl"}>${viaje.PrecioAdultoNacional} USD</Text>
                <Text fontSize={"md"} color={"muted.600"}>/ Adulto Nacional </Text>
              </VStack>
            </VStack>
            <Divider orientation="vertical" h={"80%"} alignSelf={"center"} />

            <VStack space={3} justifyContent={"center"}>
              <VStack p={3}>
                <Text bold fontSize={"xl"}>${viaje.PrecioInfantilExtranjero} USD</Text>
                <Text fontSize={"md"} color={"muted.600"}>/ Niño Extranjero </Text>
              </VStack>
              
              
              <VStack p={3}>
                <Text bold fontSize={"xl"}>${viaje.PrecioInfantilNacional} USD</Text>
                <Text fontSize={"md"} color={"muted.600"}>/ Adulto Nacional </Text>
              </VStack>
            </VStack>



            </HStack>
           
         

    


            <Button>
              <Text bold letterSpacing={"xl"}  color={"white"}>
                Disponibilidad
              </Text>
            </Button>

          </Box>

        </Stack>


        {/* TABS */}

        <VStack w={"40rem"} p={3} my={"1rem"} borderWidth={2} shadow={6} borderRadius={10} borderColor={"muted.300"} mx={"2.5rem"} >
          <Stack direction={"row"}>

            <CustomPressable count={0} titulo="Descripción" />
            <CustomPressable count={1} titulo="Salida y Regreso" />
            <CustomPressable count={2} titulo="Intinerario" />
            <CustomPressable count={3} titulo="¿Qué incluye y  qué no?" />
            <CustomPressable count={4} titulo="Información adicional" />
            <CustomPressable count={5} titulo="Mapa" />

          </Stack>
          <Divider />

          {/* Contenido, descripcion, mapa, etc */}
          <Box p={4}>
            <TabHandle n={tab} />
          </Box>

        </VStack>


      </VStack>
    </div>


  );
}; 

export default DetalleViaje;
