import {  Image,  FlatList, AspectRatio, Flex } from "native-base";
import URL from "../helper/baseURL";
import fetchPost from "../helper/fetchPost";
import { useEffect, useState } from "react";
import ViajeComponent from "../Components/ViajeComponent";





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
        <Flex w="100%">

            <AspectRatio w={"100%"} ratio={16 / 9} >
                <Image source={{
                uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
                }} alt="Alternate Text" width={"100%"} height={"auto"} />
            </AspectRatio>
            
            <FlatList w={"100%"} alignSelf={"center"} data={viajes} numColumns={4} mt={5}  px={"2vw"} renderItem={({
                item
                }) =>
               
                <ViajeComponent
                imageUri={item.Foto}
                titulo={item.Titulo}
                lugar={item.Ubicacion}
                duracion={item.Duracion}
                precio={item.PrecioAdultoNacional}
                id={item.ID}
                />

               
                } keyExtractor={item => item.ID} />
            




        </Flex>
    )
  };
  
  export default Home;