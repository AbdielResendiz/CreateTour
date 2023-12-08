import React from 'react';
import { Box, VStack, Text, Divider, Button, HStack } from 'native-base';
import { useState } from 'react';
import ModalAgregarCarrito from './ModalAgregarCarrito';

const TipoTextoA = ({ texto, precio }) => (
  <VStack p={3}>
    <Text bold fontSize={{
      base: "sm",
      md: "md",
      lg: "lg"
    }}>${precio} USD</Text>
    <Text fontSize={{
      base: "xs",
      md: "sm",
      lg: "md"
    }} color={"muted.600"}>/ {texto} </Text>
  </VStack>
);



const PrecioComponent = ({ viaje }) => {

  //modal disponibilidad
  const [showModal, setShowModal] = useState(false);





  return (
    <Box flexDirection={"column"} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={4} m={1} justifyContent={"center"}>
      <HStack justifyContent={"center"}>
        <VStack space={3} justifyContent={"center"}>
          <TipoTextoA texto="Adulto Extranjero" precio={viaje.PrecioAdultoExtranjero} />
          <TipoTextoA texto="Adulto Nacional" precio={viaje.PrecioAdultoNacional} />
        </VStack>
        <Divider orientation="vertical" h={"80%"} alignSelf={"center"} />
        <VStack space={3} justifyContent={"center"}>
          <TipoTextoA texto="Niño Extranjero" precio={viaje.PrecioInfantilExtranjero} />
          <TipoTextoA texto="Niño Nacional" precio={viaje.PrecioInfantilNacional} />
        </VStack>

      </HStack>

      <Button colorScheme={"amber"} onPress={() => setShowModal(true)}>
        Aparta tu lugar
      </Button>


      <ModalAgregarCarrito isOpen={showModal} onClose={() => setShowModal(false)}
        viajeID={viaje.ID} foto={viaje.Foto} titulo={viaje.Titulo} PrAdultoNac={viaje.PrecioAdultoNacional}
        PrAdultoEx={viaje.PrecioAdultoExtranjero} PrInfanteNac={viaje.PrecioInfantilNacional} PrInfanteEx={viaje.PrecioInfantilExtranjero} />
      {/* MODAL DE CONFIRMAR */}





    </Box>
  );
};

export default PrecioComponent;
