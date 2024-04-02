import React, { useEffect, useState } from 'react';
import CarritoComponent from '../Components/CarritoComponent';
import { useUser } from '../helper/UserContext';
import { Button, Center, Divider, FlatList, Heading, Text, VStack, Flex, FormControl, Input, View } from 'native-base';
import { IconContext } from "react-icons";
import ViajesAleatoreosComponent from '../Components/ViajesAleatoreosComponent';
import { TbShoppingCartSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import CheckoutForm from '../CheckoutForm';
import { animateScroll as scroll } from 'react-scroll';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../App2.css"

const stripePromise = loadStripe("pk_live_51OHTHqGhUhhWDkJzHmE6js4a1VmAj8HUAjjh53ggaFX1lgmM7YUnxxxlpnauR7ZSfj8lnirDKvR7MmFhdoEZDpcX00LdJDeUE6");


export default function Carrito() {
  const { t, i18n } = useTranslation("global");

  //para navegar a otras vistas
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Tours`);
  };

  const { carrito, precioUSD, totalStripe } = useUser();
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
    scroll.scrollToTop();
  }, [])






  useEffect(() => {
    // console.log("carrito: ", carrito);
    // console.log("carrito type: ", typeof (carrito));
    setCarritoString(JSON.stringify(carrito))
    console.log("carrito string: ", carritoSting)
    // console.log("carritoSting type: ", typeof (carritoSting));
    // console.log("precio usd carrito", precioUSD)
  }, [carrito, carritoSting]);


  const [totalUSD, setTotalUSD] = useState();
  const [totalMXN, setTotalMXN] = useState();
  const [totalMXNstripe, setTotalMXNstripe] = useState();


  useEffect(() => {
    let granTotalUSD = carrito.reduce((total, producto) => total + producto.TotalCompra, 0);

    if (descuentoAplicado) {
      granTotalUSD *= 1; // Ajustar según la lógica de descuento, 1 significa no descuento
    }

    // Calcular el total en MXN
    let granTotalMXN = granTotalUSD * precioUSD;
    granTotalMXN = granTotalMXN.toFixed(2); // Redondear a 2 decimales

    // Convertir a centavos y actualizar el estado
    setTotalMXNstripe(parseFloat(granTotalMXN) * 100);
    setTotalMXN(parseFloat(granTotalMXN));
    // Actualizar estado del total en USD
    setTotalUSD(parseFloat(granTotalUSD.toFixed(2)));

    // Suponiendo que tienes una función totalStripe para manejar el total
    totalStripe(granTotalUSD);
  }, [carrito, descuentoAplicado, precioUSD]);

  useEffect(() => {
    console.log("totalMXN:", totalMXN); // Puedes quitar este console.log si ya no lo necesitas
  }, [totalMXN]);



  // useEffect(() => {
  //   let granTotalUSD = carrito.reduce((total, producto) => total + producto.TotalCompra, 0);

  //   if (descuentoAplicado) {
  //     granTotalUSD *= 1; // Ajustar según la lógica de descuento, 1 significa no descuento
  //   }

  //   // Calcular el total en MXN
  //   const granTotalMXN = granTotalUSD * precioUSD;

  //   // Actualizar estados
  //   setTotalUSD(parseFloat(granTotalUSD.toFixed(2)));
  //   setTotalMXN(parseFloat(granTotalMXN.toFixed(2)));

  //   // Suponiendo que tienes una función totalStripe para manejar el total
  //   totalStripe(granTotalUSD);
  // }, [carrito, descuentoAplicado, precioUSD]);

  // useEffect(() => {
  //   console.log("totalMXN:", totalMXN); // Puedes quitar este console.log si ya no lo necesitas
  // }, [totalMXN]);
  // Función para calcular el GranTotal
  // Función para manejar el total en Stripe





  //funciones pasarela

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {

    if (totalMXNstripe !== undefined) {
      // Create PaymentIntent as soon as the page loads

      console.log("json :", JSON.stringify({ items: totalMXNstripe }))
      console.log("total stripe: ", totalMXNstripe)

      fetch("https://createtours.com.mx/stripe/public/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalStripe: totalMXNstripe })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Response from PHP:", data);
          setClientSecret(data.clientSecret);
        })
    }
  }, [totalMXNstripe]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


  return (
    <View mt={96} >
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


          <Text my={12} alignSelf={"center"} w={"70%"} textAlign={"center"} fontSize={["lg", "lg", "xl", "xl"]}>
            {t("carritoVista.carritoVacio.icono")}
          </Text>

          <Divider />
          <Text my={5} alignSelf={"center"} fontSize={"2xl"} bold textAlign={"center"} >
            {t("carritoVista.carritoVacio.texto")}
          </Text>
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
            titulo={t(`viajes.viaje${item.Viaje}.titulo`)}
            foto={item.Foto}
            subtotal={item.TotalCompra}
            subtotalMXN={item.TotalCompra * precioUSD}
            fecha={item.Fecha}
            adultoN={item.CantidadAdultos}
            adultoE={item.CantidadAdultosExtranjeros}
            kidN={item.CantidadInfantes}
            kidE={item.CantidadInfantesExtranjeros} />
        )}
      />
      {carrito.length > 0 ?
        <>
          <Center px={10} mb={4}>
            <FormControl w={80}>
              <FormControl.Label>{t("carritoVista.codigoDescuento")}</FormControl.Label>
              <Input
                p={2}
                placeholder={t("carritoVista.codigoDescuento")}
                value={codigoDescuento}
                onChangeText={handleCodigoDescuentoChange} // Usando onChangeText
              />

              <Button onPress={aplicarDescuento} m={2} mx="auto" >
                {t("carritoVista.aplicaCodigo")}
              </Button>
              <FormControl.ErrorMessage>
                {descuentoAplicado ? 'Descuento aplicado' : 'Código inválido o ya aplicado'}
              </FormControl.ErrorMessage>
            </FormControl>
          </Center>

          <Center borderWidth={1} borderColor="muted.200" borderRadius={10} shadow={6} flex={1} alignSelf="center">
            <Text bold fontSize={"xl"} textAlign={"center"} mt={10} mb={-5}>
              {t("carritoVista.procedePago")}: {" "}
              ${i18n.language === "es" ? totalMXN : totalUSD}
              {t("modalCarrito.moneda")}
            </Text>



            {/* carrito original */}
            {/* <Checkout total={totalMXN} carrito={carritoSting} /> */}

            {/* inicia nueva pasarela compras */}

            <div className="App2">
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              )}
            </div>

          </Center>
        </>
        :
        null
      }
    </View >

  );
};

