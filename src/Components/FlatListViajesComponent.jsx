import { Box, FlatList, Flex, Spinner, Text } from "native-base";
import URL from "../helper/baseURL";
import fetchPost from "../helper/fetchPost";
import { useEffect, useState } from "react";
import ViajeComponent from "../Components/ViajeComponent";
import Loader from "./Loader";


const FlatListViajesComponent = () => {
  const [viajes, setViajes] = useState([]);
  const [loading, setLoading] = useState(false);

  const verViajes = async () => {
    setLoading(true);
    const BASE_URL = URL.BASE_URL;


    const url = `${BASE_URL}viajesportada`
    const options = {
      method: 'POST',

    };
    const res = await fetchPost(url, options);

    console.log("Viajes:", res);
    setViajes(res);
    if (res) {
      setLoading(false);
    } else {
      window.alert("Error al cargar Tours, verifica tu conexión e intenta más tarde")
    }
    // 


  }

  useEffect(() => {
    verViajes()
    console.log("Viajes 2 : ", viajes)
  }, [])


  //Cambia numero de columnas segun el tamaño de pantalla
  const breakpoints = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  };
  // Determina el número de columnas basado en el ancho de la pantalla
  const numColumns =

    window.innerWidth < breakpoints.sm
      ? 1
      : window.innerWidth < breakpoints.md
        ? 1
        : window.innerWidth < breakpoints.lg
          ? 2
          : window.innerWidth < breakpoints.xl
            ? 3
            : 4; // Puedes ajustar los valores según tus necesidades


  return (
    <Flex w="100%">

      {

        loading ?
          <Loader
            texto="Cargando Tours. . ." />
          :
          <FlatList
            style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            data={viajes}
            numColumns={numColumns}
            keyExtractor={(item, index) => item.ID.toString()} // Asume que `item.ID` es único
            renderItem={({ item, index }) => (
              <ViajeComponent
                imageUri={item.Foto}
                titulo={item.Titulo}
                lugar={item.Ubicacion}
                duracion={item.Duracion}
                precio={item.PrecioAdultoNacional}
                id={item.ID}
              />
            )}
          />
      }








    </Flex>
  );


}

export default FlatListViajesComponent;