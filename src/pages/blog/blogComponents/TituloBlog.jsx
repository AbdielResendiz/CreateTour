import React from 'react';
import { Heading } from 'native-base';

const TituloBlog = ({ text }) => {
  return <Heading size="lg" mb="4">
           {text}
         </Heading>;
};

export default TituloBlog;
