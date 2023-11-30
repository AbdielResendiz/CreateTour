import React, { useState, useEffect } from 'react';
import { VStack, Input, FormControl, TextArea, Button, View, Center, Text } from 'native-base';
import URL from '../helper/baseURL';
import fetchPost from '../helper/fetchPost';


const Contacto = () => {


  const [ nombre, setNombre ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ mensaje, setMensaje ] = useState("");
  const handleSubmit = async () => {
    console.log("Inicia funcion enviar correo")
    const BASE_URL= URL.BASE_URL;
            
     const dataContacto = new FormData();
    //para enviar datos por POST
     dataContacto.append("nombre", nombre);
     dataContacto.append("email", email);
     dataContacto.append("telefono", telefono);
     dataContacto.append("mensaje", mensaje);
    const url = `${BASE_URL}enviarcorreo`
    const options = {
      method:'POST',
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
    <View w={"100%"}>

      <Center>
        <Text  bold fontSize={"2xl"}>
          ¡CONTÁCTANOS!
        </Text>
      </Center>

      <Center mb={10} mt={10}>
        <Text   fontSize={"xl"} textAlign={"center"} >
        ¿Tienes preguntas, comentarios o estás listo para reservar tu próxima aventura? 
        ¡Nos encantaría {`\n`} saber de ti! En Create Tours, estamos comprometidos a brindarte experiencias de viaje {`\n`} inolvidables.
         Nuestro equipo está aquí para ayudarte en cada paso del camino.
        </Text>
      </Center>

      <Center>
        <Text   fontSize={"lg"} textAlign={"center"} w={"80%"}>
        Completa nuestro sencillo formulario de contacto a continuación y nos pondremos en contacto contigo lo antes posible. Tu satisfacción y comodidad son nuestra máxima prioridad.
        </Text>
      </Center>

      <Center pb={10}>
        
      {/* FORMULARIO CONTACTO */}
      <VStack width="80%" mx="3" maxW="80%">
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Nombre</FormControl.Label>
          <Input
            value={nombre}
            placeholder="Nombre"
            onChangeText={(e) => setNombre(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Correo</FormControl.Label>
          <Input
            value={email}
            type="email"
            placeholder="Email"
            onChangeText={(e) => setEmail(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Teléfono</FormControl.Label>
          <Input
            value={telefono}
            placeholder="Teléfono"
            onChangeText={(e) => setTelefono(e)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Mensaje</FormControl.Label>
          <TextArea
            value={mensaje}
            placeholder="Escribe tu mensaje aquí"
            onChangeText={(e) => setMensaje(e)}
          />
        </FormControl>

        <Button colorScheme="amber" onPress={()=>handleSubmit()} my={4} size={"lg"} py={3} >
          Enviar
        </Button>
      </VStack>


      </Center>


    </View>
  );
};

export default Contacto;
