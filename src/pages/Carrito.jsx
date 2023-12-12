import React, { useEffect, useState } from 'react';
import CarritoComponent from '../Components/CarritoComponent';
import { useUser } from '../helper/UserContext';
import { Button, Center, Divider, FlatList, Heading, Text, VStack, Flex } from 'native-base';
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





  useEffect(() => {
    console.log("carrito: ", carrito);
    console.log("carrito type: ", typeof (carrito));
    setCarritoString(JSON.stringify(carrito))
    console.log("carrito string: ", carritoSting)
    console.log("carritoSting type: ", typeof (carritoSting));

  }, [carrito, carritoSting]);

  // Función para calcular el GranTotal
  const calcularGranTotal = () => {
    // Usamos el método reduce para sumar la propiedad TotalCompra de cada objeto en el carrito
    const granTotal = carrito.reduce((total, producto) => total + producto.TotalCompra, 0);
    totalStripe(granTotal);
    // Devolvemos el resultado
    return granTotal;
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


        <Center>
          <Text bold fontSize={"xl"} textAlign={"center"}> Proceder con el pago: ${granTotal} USD</Text>

          <Checkout total={granTotal} carrito={carritoSting} />

        </Center>
        :
        null
      }








    </Flex>

  );
};

export default Carrito;