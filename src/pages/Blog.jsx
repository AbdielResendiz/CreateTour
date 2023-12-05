import React from 'react';
import { Center, Heading, Text, View } from 'native-base';

const Blog = () => {
  return (
    <Center flex={1} mt={10}>
      <View alignItems="center">
        <Heading mb="4" textAlign="center" >
          Bienvenido a Nuestro Blog
        </Heading>
        <Text mb="4" textAlign="center">
          Explora artículos interesantes sobre diversos temas. ¡Esperamos que disfrutes de tu lectura!
        </Text>
      </View>
    </Center>
  );
};

export default Blog;
