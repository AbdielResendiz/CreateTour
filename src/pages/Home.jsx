import { HStack, NativeBaseProvider, Text,Box, Center, Image, Pressable, FlatList} from "native-base";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { FiPhone, FiMail  } from "react-icons/fi";
import { IconContext } from "react-icons";
import URL from "../helper/baseURL";
import fetchPost from "../helper/fetchPost";
import { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";





const Home = () => {

    const [viajes, setViajes] = useState([])

    const verViajes = async()=>{
        const BASE_URL= URL.BASE_URL;
            
        // const dataViajes = new FormData();
        //para enviar datos por POST
        // dataViajes.append("idU", idU);
        // dataViajes.append("idAS", idAS);
        const url = `${BASE_URL}viajesportada`
        const options = {
          method:'POST',
          // body: dataFav
        };
        const res = await fetchPost(url, options);
       
        console.log("Viajes:", res);
        setViajes(res);
       // 
        
        
      }

      useEffect(() => {
       verViajes()
       console.log("Viajes 2 : ", viajes)
      }, [])
      


    return (
        <NativeBaseProvider>

            <Center>
                <Image source={{
                uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
                }} alt="Alternate Text" width={"100%"} height={"580px"} />
            </Center>
            <>
            <FlatList data={viajes} renderItem={({
      item
    }) =>
    <Box>
        <Text fontSize={"xl"}>{item.Titulo}</Text>
        <Text fontSize={"xl"}>{item.ID}</Text>
    </Box>
    } keyExtractor={item => item.ID} />
            </>

            {/* {viajes.map( (viaje, index) => {
                return(
                    <CardComponent
                    imageUri={viaje.Foto}
                    title={viaje.Titulo}
                    subtitle={viaje.PrecioAdultNacional}
                    description={viaje.Titulo}
                    timestamp={viaje.Duracion}
                  />
                )
            }

            ) } */}

    	<CardComponent
          imageUri="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
          title="The Garden City"
          subtitle="The Silicon Valley of India."
          description="Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife."
          timestamp="6 mins ago"
        />


        </NativeBaseProvider>
    )
  };
  
  export default Home;