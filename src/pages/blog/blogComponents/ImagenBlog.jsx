import React from 'react';
import { Image } from 'native-base';

const ImagenBlog = ({ imageUrl, alt }) => {
  return <Image source={{ uri: imageUrl }} alt={alt} my={2} w={["100%", "90%", "70%"]} h={64} resizeMode='cover' borderRightRadius={100} shadow={7} />;
};

export default ImagenBlog;
