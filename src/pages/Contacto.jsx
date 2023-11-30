import React, { useState } from 'react';
import { VStack, Input, FormControl, TextArea, Button, View, Center, Text } from 'native-base';


const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async () => {

  };

  return (
    <View>

      <Center>
        <Text  bold fontSize={"2xl"}>
          ¡CONTÁCTANOS!
        </Text>
      </Center>

      <Center>
        <Text   fontSize={"xl"} textAlign={"center"} >
        ¿Tienes preguntas, comentarios o estás listo para reservar tu próxima aventura? {`\n`}
        ¡Nos encantaría saber de ti! {`\n`}En Create Tours, estamos comprometidos a brindarte experiencias de viaje inolvidables.{`\n`}
         Nuestro equipo está aquí para ayudarte en cada paso del camino.
        </Text>
      </Center>

      <Center>
        <Text   fontSize={"lg"} textAlign={"center"} >
        Completa nuestro sencillo formulario de contacto a continuación y nos pondremos en contacto contigo lo antes posible. Tu satisfacción y comodidad son nuestra máxima prioridad.
        </Text>
      </Center>

      
      {/* FORMULARIO CONTACTO */}
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Nombre</FormControl.Label>
          <Input
            placeholder="John"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Correo</FormControl.Label>
          <Input
            type="email"
            placeholder="john@example.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label _text={{ bold: true }}>Teléfono</FormControl.Label>
          <Input
            placeholder="123-456-7890"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label _text={{ bold: true }}>Mensaje</FormControl.Label>
          <TextArea
            placeholder="Escribe tu mensaje aquí"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </FormControl>

        <Button colorScheme="teal" onClick={handleSubmit}>
          Enviar
        </Button>
      </VStack>
    </View>
  );
};

export default Contacto;
