import React from 'react';
import { Center, Heading, Text, View, Button } from 'native-base';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <Center flex={1}>
      <View alignItems="center" py={10}>
        <Heading mb="4" textAlign="center">
          404 - Página no encontrada
        </Heading>
        <Text mb="4" textAlign="center">
          Lo sentimos, la página que estás buscando no existe.
        </Text>
        <Link to="/">
          <Button variant="outline" colorScheme="blue">
            Ir a la página principal
          </Button>
        </Link>
      </View>
    </Center>
  );
};

export default NoPage;
