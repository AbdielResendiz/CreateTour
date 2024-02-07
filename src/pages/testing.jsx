import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Divider, Button, HStack } from 'native-base';
import ModalAgregarCarrito from './ModalAgregarCarrito';
import { useTranslation } from 'react-i18next'





const PrecioComponent = ({ viaje }) => {

    //modal disponibilidad
    const [showModal, setShowModal] = useState(false);
    const { t, i18n } = useTranslation("global");




    const TipoTextoA = ({ texto, precio }) => (
        <VStack p={3}>
            <Text bold fontSize={{
                base: "sm",
                md: "md",
                lg: "lg"
            }}>{precio}</Text>
            <Text fontSize={{
                base: "xs",
                md: "sm",
                lg: "md"
            }} color={"muted.600"}>/ {texto} </Text>
        </VStack>
    );

    const [exchangeRate, setExchangeRate] = useState(null);
    const [precioAdultoNacMXN, setPrecioAdultoNacMXN] = useState(null);
    const [precioAdultoExMXN, setPrecioAdultiExMXN] = useState(null);
    const [precioInfantilNacMXN, setPrecioInfantilNacMXN] = useState(null);
    const [precioInfantilExMXN, setPrecioInfantilExMXN] = useState(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(
                    `https://open.er-api.com/v6/latest/USD`
                );
                const data = await response.json();
                console.log(data.rates.MXN);
                setExchangeRate(data.rates.MXN);
                setPrecioAdultoNacMXN(Number((data.rates.MXN * viaje.PrecioAdultoNacional).toFixed(2)));
                setPrecioAdultiExMXN(Number((data.rates.MXN * viaje.PrecioAdultoExtranjero).toFixed(2)));
                setPrecioInfantilNacMXN(Number((data.rates.MXN * viaje.PrecioInfantilNacional).toFixed(2)));
                setPrecioInfantilExMXN(Number((data.rates.MXN * viaje.PrecioInfantilExtranjero).toFixed(2)));


            } catch (error) {
                console.error('Error fetching exchange rate:', error);
            }
        };

        fetchExchangeRate();
    }, []);


    return (
        <Box flexDirection={"column"} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={1} p={4} m={1} justifyContent={"center"}>
            <HStack justifyContent={"center"}>
                <VStack space={3} justifyContent={"center"}>
                    <TipoTextoA
                        texto={i18n.language === "es" ? "Adulto Extranjero" : "Foreign Adult"}
                        precio={i18n.language === "es" ? `$${precioAdultoExMXN} MXN` : `$${viaje.PrecioAdultoExtranjero} USD`}
                    />
                    <TipoTextoA
                        texto={i18n.language === "es" ? "Adulto Nacional" : "Domestic Adult"}
                        precio={i18n.language === "es" ? `$${precioAdultoNacMXN} MXN` : `$${viaje.PrecioAdultoNacional} USD`}
                    />
                </VStack>
                <Divider orientation="vertical" h={"80%"} alignSelf={"center"} />
                <VStack space={3} justifyContent={"center"}>
                    <TipoTextoA
                        texto={i18n.language === "es" ? "Niño Extranjero" : "Foreign Child"}
                        precio={i18n.language === "es" ? `$${precioInfantilExMXN} MXN` : `$${viaje.PrecioInfantilExtranjero} USD`}
                    />
                    <TipoTextoA
                        texto={i18n.language === "es" ? "Niño Nacional" : "Domestic Child"}
                        precio={i18n.language === "es" ? `$${precioInfantilNacMXN} MXN` : `$${viaje.PrecioInfantilNacional} USD`}
                    />
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
