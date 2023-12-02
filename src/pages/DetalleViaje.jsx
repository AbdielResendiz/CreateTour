import React from "react";
import { useParams } from "react-router-dom";
import SwiperComponent from "../Components/SwiperComponent";
import { HStack, Box, Text, VStack, Center, Divider, Modal, Stack, Pressable, Image} from "native-base";
import { useState, useEffect } from "react";
import fetchPost from "../helper/fetchPost";
import URL from "../helper/baseURL";
import AgregarCarritoComponent from "../Components/AgregarCarritoComponent";
import PrecioComponent from "../Components/PreciosComponent";

const DetalleViaje = (props) => {
  const { id} = useParams();


  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
   console.log("FOTO viaje: " , viaje.Foto)
   
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
      src={viaje.Maps}
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
      <Pressable  onPress={()=>setTab(count)} isFocused={ count===tab ? true : false } isPressed={ count===tab ? true : false } >
        {({ isHovered, isPressed, isFocused  }) => (
          <Box borderBottomWidth={ isHovered || isFocused || isPressed ? 3 : 0} py={{
            base: "sm",
            md: "md",
            lg: "lg"
          }} px={4} borderColor={"#28b5a4"}>
                     <Text fontSize={{
                      base: "xm",
                      md: "sm",
                      lg: "xl"
                    }} color={ count===tab ?  "#28b5a4" : "black"}



            // style={{
            //   fontWeight: 'bold' ,
            //   color: isHovered || isFocused || isPressed ? '#28b5a4' : 'black',
            // }}


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
      {/* <SwiperComponent/> */}


      <VStack bg="#fafafa"  p={1} m={1}>
      <Image source={{
          uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${viaje.Foto}`
        }} alt="Alternate Text" width={"100%"} height={96} />

        {/* Titulo y precios */}
        <Stack direction={"row"}  w={"100%"} space={3}  p={1} m={1} >

          <HStack flex={1} w={"1rem"}  ml={2} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={2} m={2} justifyContent={"space-between"} >
            <Text bold  mx={2} p={2}  mt={4} fontSize={{
                      base: "lg",
                      md: "2xl",
                      lg: "4xl"
                    }}>{viaje.Titulo}</Text>
            
                <VStack bg="#28b5a4" w={12} h={12} mt={10} mr={2}  borderRadius={5} shadow={5} justifyContent={"center"}>
                  <Center h={10}>
                    <Text bold color={"#ffffff"} fontSize={{
                      base: "md",
                      md: "lg",
                      lg: "xl"
                    }}> 
                    {viaje.Duracion}
                    </Text>
                  </Center>

                  <Center bg="#ffffff" w={12} borderColor={"#28b5a4"} borderWidth={3} borderBottomRadius={8} mb={-5}   >
                    <Text fontSize={{
                      base: "xs",
                      md: "sm",
                      lg: "md"
                    }} >
                    Horas
                    </Text>
                  </Center>
                </VStack>
          </HStack>

          <PrecioComponent viaje={viaje}/>

        </Stack>


        {/* TABS */}

          
          <VStack flex={1}  p={2} my={"1rem"} borderWidth={2} shadow={6} borderRadius={10} borderColor={"muted.300"} ml={"1rem"} >
            <Stack direction={{
                      base: "column",
                      md: "row",
                      lg: "row"
                    }}>

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

    

     
        {/* <AgregarCarritoComponent viajeID={viaje.ID} titulo={viaje.Titulo} foto={viaje.Foto}
        PrAdultoNac={viaje.PrecioAdultoNacional} PrAdultoEx={viaje.PrecioAdultoExtranjero} 
        PrInfanteNac={viaje.PrecioInfantilNacional} PrInfanteEx={viaje.PrecioInfantilExtranjero} /> */}

  
       

      </VStack>
    </div>


  );
}; 

export default DetalleViaje;
