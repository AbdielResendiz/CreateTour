import React from 'react';
import { Heading } from 'native-base';

const SubtituloBlog = ({ text }) => {
  return <Heading size="md" mt="5" mb="2">
           {text}
         </Heading>;
};

export default SubtituloBlog;
