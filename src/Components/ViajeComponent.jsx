import React from "react";
import { Box, Pressable, Image } from "native-base";

const ViajeComponent = ({ imageUri, titulo, lugar, duracion, precio }) => {
    return (
   <Box>
    <Pressable>
    <Image size={150}  source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" />
    </Pressable>
   </Box>
    );
  };
  
  export default ViajeComponent;
  