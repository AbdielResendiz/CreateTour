import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Divider, Button, HStack, Icon } from 'native-base';
import ModalAgregarCarrito from './ModalAgregarCarrito';
import { useTranslation } from 'react-i18next'
import { useUser } from '../helper/UserContext';
import TagManager from 'react-gtm-module';
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";



const PrecioComponent = ({ viaje, PrecioAdultoNacional, PrecioAdultoExtranjero, PrecioInfantilNacional, PrecioInfantilExtranjero }) => {

  //modal disponibilidad
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation("global");
  //obtiene precio del dolar a MXN
  const { precioUSD } = useUser();



  const TipoTextoA = ({ texto, precio }) => (
    <VStack p={3}>
      <Text bold fontSize={["md", "lg", "md", "lg", "xl"]}>$ {precio}</Text>
      <Text fontSize={["sm", "md", "sm", "sm", "md"]} color={"muted.600"}>/ {texto} </Text>
    </VStack>
  );


  const [precioAdultoNacMXN, setPrecioAdultoNacMXN] = useState(null);
  const [precioAdultoExMXN, setPrecioAdultoExMXN] = useState(null);
  const [precioInfantilNacMXN, setPrecioInfantilNacMXN] = useState(null);
  const [precioInfantilExMXN, setPrecioInfantilExMXN] = useState(null);



  useEffect(() => {
    setPrecioAdultoNacMXN(Number((precioUSD * PrecioAdultoNacional).toFixed(2)));
    setPrecioAdultoExMXN(Number((precioUSD * PrecioAdultoExtranjero).toFixed(2)));
    setPrecioInfantilNacMXN(Number((precioUSD * PrecioInfantilNacional).toFixed(2)));
    setPrecioInfantilExMXN(Number((precioUSD * PrecioInfantilExtranjero).toFixed(2)));
  }, [precioUSD, PrecioAdultoNacional, PrecioAdultoExtranjero, PrecioInfantilNacional, PrecioInfantilExtranjero]);

  const preciosModal = {
    moneda: i18n.language === "es" ? "MXN" : "USD",
    PrAdultoNac: i18n.language === "es" ? precioAdultoNacMXN : PrecioAdultoNacional,
    PrAdultoEx: i18n.language === "es" ? precioAdultoExMXN : PrecioAdultoExtranjero,
    PrInfanteNac: i18n.language === "es" ? precioInfantilNacMXN : PrecioInfantilNacional,
    PrInfanteEx: i18n.language === "es" ? precioInfantilExMXN : PrecioInfantilExtranjero,
  };

  const textosModal = {
    AdultoExtranjero: i18n.language === "es" ? "Adulto Extranjero" : "Foreign Adult",
    AdultoNacional: i18n.language === "es" ? "Adulto Nacional" : "Domestic Adult",
    NiñoExtranjero: i18n.language === "es" ? "Niño Extranjero" : "Foreign Child",
    NiñoNacional: i18n.language === "es" ? "Niño Nacional" : "Domestic Child",
  };

  const ButonModal = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'button_click', // Nombre del evento, puedes personalizarlo
        category: 'Interactions', // Categoría del evento, personalizable
        action: 'click', // Acción del evento, personalizable
        label: 'Boton reservar tour' // Etiqueta del evento, personalizable
      }
    });
    setShowModal(true);

  }


  return (
    <Box flexDirection={"column"} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={4} m={1} justifyContent={"center"}>
      <HStack justifyContent={"center"}>
        <VStack space={3} justifyContent={"center"}>
          <TipoTextoA
            texto={textosModal.AdultoExtranjero}
            precio={preciosModal.PrAdultoEx + " " + preciosModal.moneda}
          />
          <TipoTextoA
            texto={textosModal.AdultoNacional}
            precio={preciosModal.PrAdultoNac + " " + preciosModal.moneda}
          />
        </VStack>
        <Divider orientation="vertical" h={"80%"} alignSelf={"center"} />
        <VStack space={3} justifyContent={"center"}>
          {
            preciosModal.PrInfanteEx !== null ?
              <TipoTextoA
                texto={textosModal.NiñoExtranjero}
                precio={preciosModal.PrInfanteEx + " " + preciosModal.moneda}
              />
              :
              null
          }
          {
            preciosModal.PrInfanteNac !== null ?
              <TipoTextoA
                texto={textosModal.NiñoNacional}
                precio={preciosModal.PrInfanteNac + " " + preciosModal.moneda}
              />
              :
              null
          }


        </VStack>


      </HStack>


      <Button colorScheme={"cyan"} onPress={() => ButonModal()} shadow={7}>
        <HStack space={2} justifyContent="center" alignItems="center">
          <TiShoppingCart color="#fff" size={"1.5em"} />
          <Text color="#fff" fontFamily={"Avenir"} bold fontSize="lg">
            {t(`modalCarrito.botonPrevio`)}

          </Text>
        </HStack>
      </Button>


      <ModalAgregarCarrito
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        viajeID={viaje.ID}
        foto={viaje.Foto}
        titulo={viaje.Titulo}
        //precios MXN
        PrAdultoNacMXN={precioAdultoNacMXN}
        PrAdultoExMXN={precioAdultoExMXN}
        PrInfanteNacMXN={precioInfantilNacMXN}
        PrInfanteExMXN={precioInfantilExMXN}
        //precios USD
        PrAdultoNac={PrecioAdultoNacional}
        PrAdultoEx={PrecioAdultoNacional}
        PrInfanteNac={PrecioAdultoNacional}
        PrInfanteEx={PrecioAdultoNacional}

        moneda={preciosModal.moneda}
        AdultoN={textosModal.AdultoNacional}
        AdultoE={textosModal.AdultoExtranjero}
        InfanteN={textosModal.NiñoNacional}
        InfanteE={textosModal.NiñoExtranjero}
      />





    </Box>
  );
};

export default PrecioComponent;
