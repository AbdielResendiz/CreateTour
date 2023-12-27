import React, { useState, useEffect } from 'react';
import { VStack, Input, FormControl, TextArea, Button, View, Center, Text, ZStack, Image } from 'native-base';
import URL from '../helper/baseURL';
import fetchPost from '../helper/fetchPost';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation("global");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const handleSubmit = async () => {
    console.log("Inicia funcion enviar correo")
    const BASE_URL = URL.BASE_URL;

    const dataContacto = new FormData();
    //para enviar datos por POST
    dataContacto.append("nombre", nombre);
    dataContacto.append("email", email);
    dataContacto.append("telefono", telefono);
    dataContacto.append("mensaje", mensaje);
    const url = `${BASE_URL}enviarcorreo`
    const options = {
      method: 'POST',
      body: dataContacto
    };
    const response = await fetchPost(url, options);

    console.log("respuesta formulario contacto :", response);
    console.log("Boton enviar")

  };
  useEffect(() => {
    console.log("nombre", nombre)
  }, [nombre])


  return (
    <View w="100%" mt={[12, 12, 32, 32]}>


      <ZStack h={40} mb={[0, 0, 40, 40]}>



        <Image source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
        }} alt="Alternate Text" width={"100vw"} height={[40, 40, 72, 80]} resizeMode="stretch" />





        <Text mt={12} alignSelf={"center"} bold fontSize={["xl", "4xl", "4xl", "6xl"]} >
          {t("contacto.titulo")}
        </Text>



      </ZStack>




      <Center mb={10} >
        <Text fontSize="xl" textAlign="justify" w="70%">
          {t("contacto.parrafo1.text")}
        </Text>
      </Center>

      <Center>
        <Text fontSize="lg" textAlign="justify" w="70%">
          {t("contacto.parrafo2.text")}
        </Text>
      </Center>

      <Center pb={10}>
        {/* FORMULARIO CONTACTO */}
        <VStack width="50%" mx="3" maxW="70%">
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>{t("contacto.form.nombre.label")}</FormControl.Label>
            <Input value={nombre} placeholder={t("contacto.form.nombre.placeholder")} onChangeText={(e) => setNombre(e)} />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>{t("contacto.form.correo.label")}</FormControl.Label>
            <Input value={email} type="email" placeholder={t("contacto.form.correo.placeholder")} onChangeText={(e) => setEmail(e)} />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>{t("contacto.form.telefono.label")}</FormControl.Label>
            <Input value={telefono} placeholder={t("contacto.form.telefono.placeholder")} onChangeText={(e) => setTelefono(e)} />
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>{t("contacto.form.mensaje.label")}</FormControl.Label>
            <TextArea value={mensaje} placeholder={t("contacto.form.mensaje.placeholder")} onChangeText={(e) => setMensaje(e)} />
          </FormControl>

          <Button colorScheme="amber" onPress={() => handleSubmit()} my={4} size="lg" py={3} w="60%" alignSelf="center">
            {t("contacto.form.enviar")}
          </Button>
        </VStack>
      </Center>
    </View >
  );
};

export default Contacto;
