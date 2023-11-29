import React from 'react';
import { Box, VStack, Stack, Text, Modal, Flex , HStack, Input, Button} from 'native-base';
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from '../helper/UserContext';
import { format } from 'date-fns';

const AgregarCarritoComponent = (props) => {
  const { viajeID, foto ,titulo, PrAdultoNac,  PrAdultoEx, PrInfanteNac, PrInfanteEx} = props;
  const [startDate, setStartDate] = useState(new Date());
  const [ fecha, setFecha ] =useState("")

  
  const { carrito,  agregarAlCarrito, editarCarrito, eliminarCarrito , borrarTodoCarrito } = useUser();

  
  const [ adultoNac, setAdultoNac ] = useState(0);
  const [ adultoEx, setAdultoEx ] = useState(0);
  const [ infanteNac, setInfanteNac ] = useState(0);
  const [ infanteEx, setInfanteEx ] = useState(0);

  const [total, setTotal] =useState(0);
  // subtotal AdultoNacional(AN), Infante Nacional (IN), 
  const [subtotalAN, setSubtotalAN ] = useState(0)
  const [subtotalAE, setSubtotalAE ] = useState(0)
  const [subtotalIN, setSubtotalIN ] = useState(0)
  const [subtotalIE, setSubtotalIE ] = useState(0)
  
// Calculos de subtotal
  useEffect(() => {
   setSubtotalAE(adultoEx*PrAdultoEx);
   setSubtotalAN(adultoNac*PrAdultoNac);
   setSubtotalIE(infanteEx*PrInfanteEx);
   setSubtotalIN(infanteNac*PrInfanteNac);
   setTotal(subtotalAE + subtotalAN + subtotalIE + subtotalIN);
  }, [adultoNac, adultoEx, infanteNac, infanteEx, subtotalAE, subtotalAN, subtotalIE, subtotalIN])
  

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
    const handleAgregarCarrito=()=>{
      const nuevoCarrito = {
        index: carrito.length + 1,
        Viaje: parseInt(viajeID),
        Titulo: titulo, 
        Foto: foto , 
        Fecha: fecha,
        CantidadAdultos: adultoNac,
        CantidadInfantes: infanteNac,
        CantidadAdultosExtranjeros: adultoEx,
        CantidadInfantesExtranjeros: infanteEx,
        TotalCompra: total,
      }
      agregarAlCarrito(nuevoCarrito);
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


    <Box flex={1} shadow={6} borderRadius={10} borderColor={"muted.200"} borderWidth={2} p={2} my={3} mx={4} justifyContent={"center"} w={"98%"}>
        <Text bold fontSize={"xl"} alignSelf={"center"}>Aparta tu lugar para {titulo}</Text>
        <Stack direction={"column"}>
            <HStack flex={1} mt={3}>
              <Text bold p={1} m={1} > Escoje la fecha :</Text>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              <Stack direction={{ base: "column", md:"row"}} ml={10} bgColor={"#ededed"} p={3} borderRadius={10} shadow={6}>
              
                {/* Calculos de subtotal */}
                <VStack>
                  <Text bold fontSize={"md"}>Viajeros:</Text>
                  {adultoNac > 0 ? <HStack>
                      <Text fontSize={"xs"}> {adultoNac} Adulto Nacional {'\n'} (${PrAdultoNac} USD/persona )</Text>
                      <Text> ${subtotalAN}USD </Text>
                  </HStack> : null}

                  {adultoEx > 0 ? <HStack>
                      <Text fontSize={"xs"}> {adultoEx} Adulto Extranjero {'\n'} (${PrAdultoEx} USD/persona )</Text>
                      <Text> ${subtotalAE}USD </Text>
                  </HStack> : null}

                  {infanteNac > 0 ? <HStack>
                      <Text fontSize={"xs"}> {infanteNac} Niño Nacional {'\n'} (${PrInfanteNac} USD/persona )</Text>
                      <Text> ${subtotalIN}USD </Text>
                  </HStack> : null}

                  {infanteEx > 0 ? <HStack>
                      <Text fontSize={"xs"}> {infanteEx} Niño Extranjero {'\n'} (${PrInfanteEx} USD/persona )</Text>
                      <Text> ${subtotalIE}USD </Text>
                  </HStack> : null}

                  <Text bold> Total: $ {total} USD</Text>
                </VStack>
              </Stack>
            </HStack>
            
     

          <Flex direction='column' >
            <Text bold p={1} m={1}> Selecciona el número de Viajeros: </Text>
            
                          {/* Formulario de numero de  viajeros nacionales */}
            <Stack direction={{ base: "column", md:"row"}} p={1} m={1} space={8} justifyContent={"space-between"}>
              <HStack>
                <Text bold>Adulto Nacional: </Text>
                <Text mx={2} fontSize={"xs"}> ${PrAdultoNac}USD / por persona</Text>
                <Button onPress={decrementAdultoNac}>-</Button>
                <Input w={10} placeholder="" isReadOnly={true} value={adultoNac.toString()} />
                <Button onPress={incrementAdultoNac}>+</Button>
              </HStack>

              <HStack>
                <Text bold>Niño Nacional: </Text>
                <Text mx={2} fontSize={"xs"}> ${PrInfanteNac}USD / por persona</Text>
                <Button onPress={decrementInfanteNac}>-</Button>
                <Input w={10} placeholder="" isReadOnly={true} value={infanteNac.toString()} />
                <Button onPress={incrementInfanteNac}>+</Button>
              </HStack>

            </Stack>
              {/* Formulario de numero de  viajeros EX*/}
            <Stack direction={{ base: "column", md:"row"}} p={1} m={1} space={8} justifyContent={"space-between"}>
              <HStack>
                <Text bold>Adulto Extranjero: </Text>
                <Text mx={2} fontSize={"xs"}> ${PrAdultoEx}USD / por persona</Text>
                <Button onPress={decrementAdultoEx}>-</Button>
                <Input w={10} placeholder="" isReadOnly={true} value={adultoEx.toString()} />
                <Button onPress={incrementAdultoEx}>+</Button>
              </HStack>

              <HStack>
                <Text bold>Niño Extranjero: </Text>
                <Text mx={2} fontSize={"xs"}> ${PrInfanteEx}USD / por persona</Text>
                <Button onPress={decrementInfanteEx}>-</Button>
                <Input w={10} placeholder="" isReadOnly={true} value={infanteEx.toString()} />
                <Button onPress={incrementInfanteEx}>+</Button>
              </HStack>

            </Stack>



          </Flex>

          <Button colorScheme={"amber"} onPress={()=>{handleAgregarCarrito()}}>
            Agregar al carrito
          </Button>

          {/* <Button colorScheme={"danger"} onPress={()=>{borrarTodoCarrito()}}>
            Borrar TODO el carrito
          </Button> */}

        </Stack>
    </Box>


  );
}

export default AgregarCarritoComponent;

