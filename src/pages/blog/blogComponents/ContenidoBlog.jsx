import React from 'react';
import { Text } from 'native-base';

const ContenidoBlog = ({ text }) => {
  return <Text fontSize={["md", "lg"]} mt="3" textAlign={"justify"}>
           {text}
         </Text>;
};

export default ContenidoBlog;
