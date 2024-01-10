import React, { useEffect, useState } from 'react';
import CarritoComponent from '../Components/CarritoComponent';
import { useUser } from '../helper/UserContext';
import { Button, Center, Divider, FlatList, Heading, Text, VStack, Flex, FormControl, Input } from 'native-base';
import { IconContext } from "react-icons";
import ViajesAleatoreosComponent from '../Components/ViajesAleatoreosComponent';
import { TbShoppingCartSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Checkout from './Checkout';



const Carrito = () => {
  const { t } = useTranslation("global");
  const { totalStripe } = useUser();
  //para navegar a otras vistas
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Tours`);
  };

  const { carrito } = useUser();
  const [carritoSting, setCarritoString] = useState(JSON.stringify(carrito));

  const [codigoDescuento, setCodigoDescuento] = useState('');
  const [descuentoAplicado, setDescuentoAplicado] = useState(false);

  const handleCodigoDescuentoChange = (texto) => {
    setCodigoDescuento(texto);
  };


  const aplicarDescuento = () => {
    if (codigoDescuento === 'Marea30' && !descuentoAplicado) {
      setDescuentoAplicado(true);
    } else {
      // Manejar código de descuento inválido o ya aplicado
    }
  };






  useEffect(() => {
    console.log("carrito: ", carrito);
    console.log("carrito type: ", typeof (carrito));
    setCarritoString(JSON.stringify(carrito))
    console.log("carrito string: ", carritoSting)
    console.log("carritoSting type: ", typeof (carritoSting));

  }, [carrito, carritoSting]);

  // Función para calcular el GranTotal
  const calcularGranTotal = () => {
    let granTotal = carrito.reduce((total, producto) => total + producto.TotalCompra, 0);
    if (descuentoAplicado) {
      granTotal *= 1; // 0.7 para el 30%, pongo 1 para que cobre el 100
    }
    totalStripe(granTotal);
    // Redondear a dos decimales y convertir a número
    return parseFloat(granTotal.toFixed(2));
  };



  // Llama a la función para obtener el GranTotal
  const granTotal = calcularGranTotal();





  return (
    <Flex mt={[20, 20, 10, 10]} >
      <Center >
        <Heading w={"70%"} textAlign={"center"} alignContent="center">{t("carritoVista.bienvenida")}</Heading>
      </Center>


      {carrito.length > 0 ?
        null :
        <VStack py={10}>
          <Center>
            <IconContext.Provider value={{ color: "#449bab", size: "10rem" }}>
              <TbShoppingCartSearch />
            </IconContext.Provider>

          </Center>


          <Text mb={12} alignSelf={"center"} w={"70%"} textAlign={"justify"} fontSize={["lg", "lg", "xl", "xl"]}> {t("carritoVista.carritoVacio.icono")}</Text>
          <Divider />
          <Text my={5} alignSelf={"center"} fontSize={"2xl"} bold >{t("carritoVista.carritoVacio.texto")}</Text>
          <ViajesAleatoreosComponent />
          <Button size={"lg"} alignSelf={"center"} textAlign={"center"} colorScheme={"amber"}
            onPress={() => { handleClick() }}>
            <Center>
              <Text bold color={"#ffffff"}>
                {t("mainSection.verTodos")}
              </Text>
            </Center></Button>
        </VStack>
      }


      <FlatList
        style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        data={carrito}
        numColumns={1}

        renderItem={({ item }) => (
          <CarritoComponent
            index={item.index}
            id={item.Viaje}
            titulo={item.Titulo}
            foto={item.Foto}
            subtotal={item.TotalCompra}
            fecha={item.Fecha}
            adultoN={item.CantidadAdultos}
            adultoE={item.CantidadAdultosExtranjeros}
            kidN={item.CantidadInfantes}
            kidE={item.CantidadInfantes} />
        )}
      />



      {carrito.length > 0 ?

        <>
          <Center px={10} mb={4}>
            <FormControl>
              <FormControl.Label>Código de descuento</FormControl.Label>
              <Input
                p={2}
                placeholder="Código de descuento"
                value={codigoDescuento}
                onChangeText={handleCodigoDescuentoChange} // Usando onChangeText
              />

              <Button onPress={aplicarDescuento} m={2} mx="auto" >Aplicar Descuento</Button>
              <FormControl.ErrorMessage>
                {descuentoAplicado ? 'Descuento aplicado' : 'Código inválido o ya aplicado'}
              </FormControl.ErrorMessage>
            </FormControl>
          </Center>

          <Center>
            <Text bold fontSize={"xl"} textAlign={"center"}> Proceder con el pago: ${granTotal} USD</Text>

            <Checkout total={granTotal} carrito={carritoSting} />

          </Center>
        </>
        :
        null
      }








    </Flex >

  );
};

export default Carrito;