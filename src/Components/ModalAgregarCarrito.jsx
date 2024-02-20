import React from 'react';
import { VStack, Stack, Text, Modal, HStack, Input, Button } from 'native-base';
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from '../helper/UserContext';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import TagManager from 'react-gtm-module';
import { useNavigate } from "react-router-dom";


const ModalAgregarCarrito = (props) => {
  const { viajeID, foto, titulo, PrAdultoNac, PrAdultoEx, PrInfanteNac, PrInfanteEx, PrAdultoNacMXN, PrAdultoExMXN, PrInfanteNacMXN, PrInfanteExMXN, isOpen, onClose, moneda } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [fecha, setFecha] = useState("");
  const { t, i18n } = useTranslation("global");

  const { carrito, agregarAlCarrito } = useUser();


  const navigate = useNavigate();






  const [adultoNac, setAdultoNac] = useState(0);
  const [adultoEx, setAdultoEx] = useState(0);
  const [infanteNac, setInfanteNac] = useState(0);
  const [infanteEx, setInfanteEx] = useState(0);

  const [total, setTotal] = useState(0);
  // subtotal AdultoNacional(AN), Infante Nacional (IN), 
  const [subtotalAN, setSubtotalAN] = useState(0);
  const [subtotalAE, setSubtotalAE] = useState(0);
  const [subtotalIN, setSubtotalIN] = useState(0);
  const [subtotalIE, setSubtotalIE] = useState(0);

  const [totalMXN, setTotalMXN] = useState(0);
  // subtotal AdultoNacional(AN), Infante Nacional (IN), 
  const [subtotalANMXN, setSubtotalANMXN] = useState(0);
  const [subtotalAEMXN, setSubtotalAEMXN] = useState(0);
  const [subtotalINMXN, setSubtotalINMXN] = useState(0);
  const [subtotalIEMXN, setSubtotalIEMXN] = useState(0);

  // Calculos de subtotal
  useEffect(() => {
    const subtotalAE = parseFloat((adultoEx * PrAdultoEx).toFixed(2));
    const subtotalAN = parseFloat((adultoNac * PrAdultoNac).toFixed(2));
    const subtotalIE = parseFloat((infanteEx * PrInfanteEx).toFixed(2));
    const subtotalIN = parseFloat((infanteNac * PrInfanteNac).toFixed(2));
    const total = parseFloat((subtotalAE + subtotalAN + subtotalIE + subtotalIN).toFixed(2));

    setSubtotalAE(subtotalAE);
    setSubtotalAN(subtotalAN);
    setSubtotalIE(subtotalIE);
    setSubtotalIN(subtotalIN);
    setTotal(total);
  }, [adultoNac, adultoEx, infanteNac, infanteEx, subtotalAE, subtotalAN, subtotalIE, subtotalIN, i18n.language]);

  // Calculos de subtotal MXN
  useEffect(() => {
    const subtotalAEMXN = parseFloat((adultoEx * PrAdultoExMXN).toFixed(2));
    const subtotalANMXN = parseFloat((adultoNac * PrAdultoNacMXN).toFixed(2));
    const subtotalIEMXN = parseFloat((infanteEx * PrInfanteExMXN).toFixed(2));
    const subtotalINMXN = parseFloat((infanteNac * PrInfanteNacMXN).toFixed(2));
    const totalMXN = parseFloat((subtotalAEMXN + subtotalANMXN + subtotalIEMXN + subtotalINMXN).toFixed(2));

    setSubtotalAEMXN(subtotalAEMXN);
    setSubtotalANMXN(subtotalANMXN);
    setSubtotalIEMXN(subtotalIEMXN);
    setSubtotalINMXN(subtotalINMXN);
    setTotalMXN(totalMXN);
  }, [adultoNac, adultoEx, infanteNac, infanteEx, subtotalAEMXN, subtotalANMXN, subtotalIEMXN, subtotalINMXN, i18n.language]);



  // manejo de cantidad de viajeros

  const decrementAdultoNac = () => {
    setAdultoNac((prevValue) => Math.max(prevValue - 1, 0));
  };

  const incrementAdultoNac = () => {
    setAdultoNac((prevValue) => prevValue + 1);
  };

  const decrementAdultoEx = () => {
    setAdultoEx((prevValue) => Math.max(prevValue - 1, 0));
  };

  const incrementAdultoEx = () => {
    setAdultoEx((prevValue) => prevValue + 1);
  };

  const decrementInfanteNac = () => {
    setInfanteNac((prevValue) => Math.max(prevValue - 1, 0));
  };

  const incrementInfanteNac = () => {
    setInfanteNac((prevValue) => prevValue + 1);
  };

  const decrementInfanteEx = () => {
    setInfanteEx((prevValue) => Math.max(prevValue - 1, 0));
  };

  const incrementInfanteEx = () => {
    setInfanteEx((prevValue) => prevValue + 1);
  };


  //agrear al carrito
  const handleAgregarCarrito = () => {

    TagManager.dataLayer({
      dataLayer: {
        event: 'button_click',
        category: 'Interactions',
        action: 'click',
        label: 'Boton Agregar al carrito'
      }
    });
    const nuevoCarrito = {
      index: carrito.length + 1,
      Viaje: parseInt(viajeID),
      Titulo: titulo,
      Foto: foto,
      Fecha: fecha,
      CantidadAdultos: adultoNac,
      CantidadInfantes: infanteNac,
      CantidadAdultosExtranjeros: adultoEx,
      CantidadInfantesExtranjeros: infanteEx,
      TotalCompra: total

    }
    if (adultoNac < 1 && adultoEx < 1 && infanteNac < 1 && infanteEx < 1) {
      window.alert("Agrega al menos a una persona");
    } else {
      // agregarAlCarrito(nuevoCarrito);

      // mostrarAlert();
      // navigate("/Carrito")
      // onClose();
      window.alert("AGREGADO")
    }


  };

  const mostrarAlert = () => {
    window.alert('El artículo se ha agregado al carrito');
  };

  useEffect(() => {
    console.log("Carrito: ", carrito)
  }, [carrito])


  const formatearFecha = () => {
    let fechaFormato = format(startDate, 'dd/MM/yyyy');
    setFecha(fechaFormato)
  };

  useEffect(() => {
    console.log("FECHA : ", startDate)
    formatearFecha();
    console.log("Fecha con formato: ", fecha)
  }, [startDate, fecha]);

  useEffect(() => {
    console.log("adulto E:", adultoEx);
    console.log("adulto N:", adultoNac);
    console.log("niño E:", infanteEx);
    console.log("niño N:", infanteNac);
  }, [adultoEx, adultoNac, infanteEx, infanteNac]);



  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} style={{ xIndex: 9999 }} >
        <Modal.Content maxWidth="900px" maxHeight="2000px" p={4} >
          <Modal.CloseButton />
          <Modal.Header>
            <Text alignSelf={"center"} fontSize={"lg"} bold>
              {t(`modalCarrito.titulo`)} {titulo}
            </Text>
          </Modal.Header>

          <Stack direction={"column"} alignContent={"center"} justifyContent={"center"} alignSelf={"center"}>
            <Stack direction={["column", "column", "row", "row"]} flex={1} mt={3}>

              <VStack>
                <Text bold p={1} m={1} > {t(`modalCarrito.fecha`)} {fecha}</Text>
                <DatePicker selected={startDate}
                  onChange={(date) => setStartDate(date)} inline />

              </VStack>

              <VStack space={4} justifyContent={"center"}>
                <Text bold p={1} m={1} textAlign={"center"}>
                  {t(`modalCarrito.seleccion`)}
                </Text>

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                  <HStack alignSelf={"center"}>
                    <Text bold>{t(`modalCarrito.adultoN`)} </Text>
                    <Text mx={2} fontSize={"xs"}> ${PrAdultoNac} {moneda} / {t(`modalCarrito.persona`)}</Text>
                  </HStack>

                  <HStack alignSelf={"center"}>
                    <Button onPress={decrementAdultoNac}>-</Button>
                    <Input w={10} placeholder="" isReadOnly={true} value={adultoNac.toString()} />
                    <Button onPress={incrementAdultoNac}>+</Button>
                  </HStack>

                </Stack>

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                  <HStack alignSelf={"center"}>
                    <Text bold>{t(`modalCarrito.infanteN`)} </Text>
                    <Text mx={2} fontSize={"xs"}> ${PrInfanteNac} {moneda} / {t(`modalCarrito.persona`)}</Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                    <Button onPress={decrementInfanteNac}>-</Button>
                    <Input w={10} placeholder="" isReadOnly={true} value={infanteNac.toString()} />
                    <Button onPress={incrementInfanteNac}>+</Button>
                  </HStack>
                </Stack>

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                  <HStack alignSelf={"center"}>
                    <Text bold>{t(`modalCarrito.adultoE`)} </Text>
                    <Text mx={2} fontSize={"xs"}> ${PrAdultoEx} {moneda} / {t(`modalCarrito.persona`)}</Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                    <Button onPress={decrementAdultoEx}>-</Button>
                    <Input w={10} placeholder="" isReadOnly={true} value={adultoEx.toString()} />
                    <Button onPress={incrementAdultoEx}>+</Button>
                  </HStack>
                </Stack>

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                  <HStack alignSelf={"center"}>
                    <Text bold>{t(`modalCarrito.infanteE`)}</Text>
                    <Text mx={2} fontSize={"xs"}> ${PrInfanteEx} {moneda} / {t(`modalCarrito.persona`)}</Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                    <Button onPress={decrementInfanteEx}>-</Button>
                    <Input w={10} placeholder="" isReadOnly={true} value={infanteEx.toString()} />
                    <Button onPress={incrementInfanteEx}>+</Button>
                  </HStack>
                </Stack>

              </VStack>

            </Stack>


            <>
              <Text bold fontSize={"md"}>{t(`modalCarrito.viajeros`)} </Text>
              <Stack space={2} direction={["column", "column", "column", "column"]}>

                {adultoNac > 0 ? <HStack>
                  <Text fontSize={"xs"}>🔹 {adultoNac} {t(`modalCarrito.adultoN`)} {'\n'} (${PrAdultoNac} USD/persona )</Text>
                  <Text bold>
                    ${i18n.language === "es" ? subtotalANMXN : subtotalAN} {t(`modalCarrito.moneda`)}
                  </Text>
                </HStack> : null}

                {adultoEx > 0 ? <HStack>
                  <Text fontSize={"xs"}> 🔹{adultoEx} {t(`modalCarrito.adultoE`)} {'\n'} (${PrAdultoEx} USD/persona )</Text>
                  <Text bold>
                    ${i18n.language === "es" ? subtotalAEMXN : subtotalAE} {t(`modalCarrito.moneda`)}
                  </Text>
                </HStack> : null}

                {infanteNac > 0 ? <HStack>
                  <Text fontSize={"xs"}> 🔹{infanteNac} {t(`modalCarrito.infanteN`)} {'\n'} (${PrInfanteNac} USD/persona )</Text>
                  <Text bold>
                    ${i18n.language === "es" ? subtotalINMXN : subtotalIN} {t(`modalCarrito.moneda`)}
                  </Text>
                </HStack> : null}

                {infanteEx > 0 ? <HStack>
                  <Text fontSize={"xs"}> 🔹{infanteEx} {t(`modalCarrito.infanteE`)} {'\n'} (${PrInfanteEx} USD/persona )</Text>
                  <Text bold>
                    ${i18n.language === "es" ? subtotalIEMXN : subtotalIE} {t(`modalCarrito.moneda`)}
                  </Text>
                </HStack> : null}


              </Stack>
              <Text bold p={3} alignSelf={"center"} fontSize={"2xl"}>
                Total: $ {i18n.language === "es" ? (totalMXN || 0) : (total || 0)} {t(`modalCarrito.moneda`)}
              </Text>
            </>

            <Button colorScheme={"amber"} onPress={() => { handleAgregarCarrito() }}>
              {t(`modalCarrito.botonAgregar`)}
            </Button>



          </Stack>

        </Modal.Content>

      </Modal>



    </>


  );
}

export default ModalAgregarCarrito;

