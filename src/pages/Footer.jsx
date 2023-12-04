import * as React from "react";
import { Box, NativeBaseProvider, Text, Pressable } from "native-base";
import { BiLogIn } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();


    return (
        <NativeBaseProvider>
            <Box width={"100%"} bg="primary.500" h={10}>
                <Pressable onPress={()=>{navigate(`/Login`)}} p={1} alignSelf={"flex-end"} mr={10}>
                    <IconContext.Provider value={{ color: "#edf5f7", size:"2rem" }}>
                        <BiLogIn /> 
                    </IconContext.Provider>
                </Pressable>
                
            </Box> 
        
        </NativeBaseProvider>
    );
  };
  
  export default Footer; 