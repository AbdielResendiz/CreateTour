import { HStack, NativeBaseProvider, Text,Box, Center, Image } from "native-base";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FiPhone, FiMail  } from "react-icons/fi";
import { IconContext } from "react-icons";




const Home = () => {
    return (
        <NativeBaseProvider>

            <Center>
                <Image source={{
                uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
                }} alt="Alternate Text" width={"100%"} height={"580px"} />
            </Center>
        </NativeBaseProvider>
    )
  };
  
  export default Home;