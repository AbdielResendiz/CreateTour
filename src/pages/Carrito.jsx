import React, { useEffect, useState } from 'react';
import CarritoComponent from '../Components/CarritoComponent';
import { useUser } from '../helper/UserContext';
import { Button, Center, Divider, FlatList, Heading, Text, VStack, Modal, Flex } from 'native-base';
import { IconContext } from "react-icons";
import ViajesAleatoreosComponent from '../Components/ViajesAleatoreosComponent';
import { TbShoppingCartSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";



const Carrito = () => {

  //para navegar a otras vistas
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Tours`);
  };

  const { carrito } = useUser();
  const [carritoSting, setCarritoString] = useState(JSON.stringify(carrito));



  // Función para calcular el GranTotal
  const calcularGranTotal = () => {
    // Usamos el método reduce para sumar la propiedad TotalCompra de cada objeto en el carrito
    const granTotal = carrito.reduce((total, producto) => total + producto.TotalCompra, 0);

    // Devolvemos el resultado
    return granTotal;
  };

  // Llama a la función para obtener el GranTotal
  const granTotal = calcularGranTotal();

  useEffect(() => {
    console.log("carrito: ", carrito);
    console.log("carrito type: ", typeof (carrito));
    setCarritoString(JSON.stringify(carrito))
    console.log("carrito string: ", carritoSting)

  }, [carrito, carritoSting])



  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Flex mt={10}>
      <Center>
        <Heading alignContent={"center"}>Bienvenido a tu carrito de compras</Heading>

      </Center>


      {carrito.length > 0 ?
        null :
        <VStack py={10}>
          <Center>
            <IconContext.Provider value={{ color: "#449bab", size: "10rem" }}>
              <TbShoppingCartSearch />
            </IconContext.Provider>

          </Center>


          <Text mb={12} alignSelf={"center"} fontSize={"2xl"}>Tu carrito está vacío, te invitamos a explorar los distintos tours que tenemos.</Text>
          <Divider />
          <Text my={5} alignSelf={"center"} fontSize={"2xl"} bold >Nuestros Tours:</Text>
          <ViajesAleatoreosComponent />
          <Button size={"lg"} w={40} h={10} alignSelf={"center"} colorScheme={"amber"}
            onPress={() => { handleClick() }}> Ver todos los Tours</Button>
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
          <Center>
            <Button onPress={() => setModalVisible(true)} w={64} mb={10} alignSelf={"center"} justifyContent={"center"}>
              Pagar
            </Button>
          </Center>



        </>
        :
        null
      }

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} size={"xl"} >
        <Modal.Content>
          <iframe
            title="CodeIgniter View"
            src={`https://createtours.com.mx/backend/public/stripe?precio=${granTotal}&description=${carritoSting}`}
            width="100%"
            height="400px"
          />

        </Modal.Content>


      </Modal>






    </Flex>

  );
};

export default Carrito;