import React from 'react';
import { VStack, Stack, Text, Modal, HStack, Input, Button } from 'native-base';
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from '../helper/UserContext';
import { format } from 'date-fns';


const ModalAgregarCarrito = (props) => {
  const { viajeID, foto, titulo, PrAdultoNac, PrAdultoEx, PrInfanteNac, PrInfanteEx, isOpen, onClose } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [fecha, setFecha] = useState("")

  const { carrito, agregarAlCarrito } = useUser();

  const [adultoNac, setAdultoNac] = useState(0);
  const [adultoEx, setAdultoEx] = useState(0);
  const [infanteNac, setInfanteNac] = useState(0);
  const [infanteEx, setInfanteEx] = useState(0);

  const [total, setTotal] = useState(0);
  // subtotal AdultoNacional(AN), Infante Nacional (IN), 
  const [subtotalAN, setSubtotalAN] = useState(0)
  const [subtotalAE, setSubtotalAE] = useState(0)
  const [subtotalIN, setSubtotalIN] = useState(0)
  const [subtotalIE, setSubtotalIE] = useState(0)

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
  }, [adultoNac, adultoEx, infanteNac, infanteEx, subtotalAE, subtotalAN, subtotalIE, subtotalIN]);
  

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
      TotalCompra: total,
    }
    agregarAlCarrito(nuevoCarrito);

    mostrarAlert();
    onClose();

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





  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} style={{ xIndex: 9999 }} >
        <Modal.Content maxWidth="900px" maxHeight="2000px" p={4} >
          <Modal.CloseButton />
          <Modal.Header><Text alignSelf={"center"} fontSize={"lg"} bold>Aparta tu lugar para {titulo} </Text></Modal.Header>

          <Stack direction={"column"} alignContent={"center"} justifyContent={"center"} alignSelf={"center"}>
            <Stack direction={["column", "column", "row", "row"]} flex={1} mt={3}>
              {/* DATEPICKER */}
              <VStack>
                <Text bold p={1} m={1} > Escoje la fecha : {fecha}</Text>
                <DatePicker selected={startDate}
                  onChange={(date) => setStartDate(date)} inline />

              </VStack>

              {/* Cantidad viajeros */}
              <VStack space={4} justifyContent={"center"}>
                <Text bold p={1} m={1} textAlign={"center"}> Selecciona el número de Viajeros: </Text>

                {/* Formulario de numero de  viajeros nacionales */}

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                  <HStack alignSelf={"center"}>
                    <Text bold>Adulto Nacional: </Text>
                    <Text mx={2} fontSize={"xs"}> ${PrAdultoNac}USD / por persona</Text>
                  </HStack>

                  <HStack alignSelf={"center"}>
                  <Button onPress={decrementAdultoNac}>-</Button>
                          <Input w={10} placeholder="" isReadOnly={true} value={adultoNac.toString()} />
                          <Button onPress={incrementAdultoNac}>+</Button>
                  </HStack>
                 
                </Stack>

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                <HStack alignSelf={"center"}>
                  <Text bold>Niño Nacional: </Text>
                  <Text mx={2} fontSize={"xs"}> ${PrInfanteNac}USD / por persona</Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                  <Button onPress={decrementInfanteNac}>-</Button>
                  <Input w={10} placeholder="" isReadOnly={true} value={infanteNac.toString()} />
                  <Button onPress={incrementInfanteNac}>+</Button>
                  </HStack>
                </Stack>


                {/* Formulario de numero de  viajeros EX*/}
                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                <HStack alignSelf={"center"}>
                  <Text bold>Adulto Extranjero: </Text>
                  <Text mx={2} fontSize={"xs"}> ${PrAdultoEx}USD / por persona</Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                  <Button onPress={decrementAdultoEx}>-</Button>
                  <Input w={10} placeholder="" isReadOnly={true} value={adultoEx.toString()} />
                  <Button onPress={incrementAdultoEx}>+</Button>
                  </HStack>
                </Stack>

                <Stack direction={["column", "column", "row", "row"]} justifyContent={"center"}>
                <HStack alignSelf={"center"}>
                  <Text bold>Niño Extranjero: </Text>
                  <Text mx={2} fontSize={"xs"}> ${PrInfanteEx}USD / por persona</Text>
                  </HStack>
                  <HStack alignSelf={"center"}>
                  <Button onPress={decrementInfanteEx}>-</Button>
                  <Input w={10} placeholder="" isReadOnly={true} value={infanteEx.toString()} />
                  <Button onPress={incrementInfanteEx}>+</Button>
                  </HStack>
                </Stack>


              </VStack>


            </Stack>




            {/* Calculos de subtotal */}
            <>
              <Text bold fontSize={"md"}>Viajeros:</Text>
              <Stack space={2} direction={["column", "column", "column", "column"]}>

                {adultoNac > 0 ? <HStack>
                  <Text fontSize={"xs"}>🔹 {adultoNac} Adulto Nacional {'\n'} (${PrAdultoNac} USD/persona )</Text>
                  <Text bold> ${subtotalAN}USD </Text>
                </HStack> : null}

                {adultoEx > 0 ? <HStack>
                  <Text fontSize={"xs"}> 🔹{adultoEx} Adulto Extranjero {'\n'} (${PrAdultoEx} USD/persona )</Text>
                  <Text bold> ${subtotalAE}USD </Text>
                </HStack> : null}

                {infanteNac > 0 ? <HStack>
                  <Text fontSize={"xs"}> 🔹{infanteNac} Niño Nacional {'\n'} (${PrInfanteNac} USD/persona )</Text>
                  <Text bold> ${subtotalIN}USD </Text>
                </HStack> : null}

                {infanteEx > 0 ? <HStack>
                  <Text fontSize={"xs"}> 🔹{infanteEx} Niño Extranjero {'\n'} (${PrInfanteEx} USD/persona )</Text>
                  <Text bold> ${subtotalIE}USD </Text>
                </HStack> : null}


              </Stack>
              <Text bold p={3} alignSelf={"center"} fontSize={"2xl"}> Total: $ {total ? total : 0} USD</Text>
            </>

            <Button colorScheme={"amber"} onPress={() => { handleAgregarCarrito() }}>
              Agregar al carrito
            </Button>

            {/* <Button colorScheme={"danger"} onPress={()=>{borrarTodoCarrito()}}>
                  Borrar TODO el carrito
              </Button> */}

          </Stack>

        </Modal.Content>

      </Modal>



    </>


  );
}

export default ModalAgregarCarrito;

