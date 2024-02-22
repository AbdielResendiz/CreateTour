
import React, { useState } from 'react';
import { View, Center, Text, ZStack, Image, Box } from 'native-base';
import URL from '../helper/baseURL';
import fetchPost from '../helper/fetchPost';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';

const Contacto = () => {
  const { t } = useTranslation("global");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    ReactGA.event({
      category: 'Form',
      action: 'Envío de formulario de contacto',
      label: 'Form'
    });

    const BASE_URL = URL.BASE_URL;

    const dataContacto = new FormData();
    //para enviar datos por POST
    dataContacto.append("nombre", nombre);
    dataContacto.append("email", email);
    dataContacto.append("telefono", telefono);
    dataContacto.append("mensaje", mensaje);
    const url = `${BASE_URL}enviarcorreo`;
    const options = {
      method: 'POST',
      body: dataContacto,
    };
    const response = await fetchPost(url, options);


    if (response && response.status) {
      window.alert("Mensaje enviado")
    } else {
      window.alert("Error al enviar mensaje")
    }
  };



  return (
    <View w="100%" mt={{ base: -5, md: 12 }}>
      {/* El resto de tu componente permanece igual */}
      <ZStack h={40} mb={[0, 0, 40, 40]}>



        <Image opacity={0.6} source={{
          uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
        }} alt="Alternate Text" width={"100vw"} height={[40, 40, 72, 80]} resizeMode="stretch" />





        <Text fontFamily="ElMessiri" mt={12} alignSelf={"center"} bold fontSize={["2xl", "4xl", "4xl", "6xl"]} >
          {t("contacto.titulo")}
        </Text>



      </ZStack>




      <Center mb={10} >
        <Text fontFamily="Avenir" fontSize="lg" textAlign="justify" w="70%">
          {t("contacto.parrafo1.text")}
        </Text>
      </Center>


      <Center mb={10} w="80%" alignSelf={"center"} shadow={7} borderRadius={10} >
        <Center bg="#2e2352" py={2} borderTopRadius={10}>
          <Text fontFamily="Avenir" color="#fff" fontSize="lg" textAlign="justify" w="90%">
            {t("contacto.parrafo2.text")}
          </Text>
        </Center>
        {/* FORMULARIO CONTACTO */}
        <Box bg={"#77b2bd"} w="100%" borderBottomRadius={10}>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginLeft: '3%', marginRight: '3%', maxWidth: '90%' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 'bold', fontFamily: 'Avenir' }}>{t("contacto.form.nombre.label")}</label>
              <input
                type="text"
                value={nombre}
                placeholder={t("contacto.form.nombre.placeholder")}
                onChange={(e) => setNombre(e.target.value)}
                style={{ width: '100%' }}
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 'bold', fontFamily: 'Avenir' }}>{t("contacto.form.correo.label")}</label>
              <input
                type="email"
                value={email}
                placeholder={t("contacto.form.correo.placeholder")}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%' }}
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 'bold', fontFamily: 'Avenir' }}>{t("contacto.form.telefono.label")}</label>
              <input
                type="text"
                value={telefono}
                placeholder={t("contacto.form.telefono.placeholder")}
                onChange={(e) => setTelefono(e.target.value)}
                style={{ width: '100%' }}
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontWeight: 'bold', fontFamily: 'Avenir' }}>{t("contacto.form.mensaje.label")}</label>
              <textarea
                value={mensaje}
                placeholder={t("contacto.form.mensaje.placeholder")}
                onChange={(e) => setMensaje(e.target.value)}
                style={{ width: '100%', height: '100px' }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: 'amber',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '20px',
                fontSize: '16px',
              }}
            >
              {t("contacto.form.enviar")}
            </button>
          </form>
        </Box>

      </Center>
    </View>
  );
};

export default Contacto;