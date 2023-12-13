import { FlatList, Flex } from "native-base";
import URL from "../helper/baseURL";
import fetchPost from "../helper/fetchPost";
import { useEffect, useState } from "react";
import ViajeComponent from "../Components/ViajeComponent";


const FlatListViajesComponent = () => {
  const [viajes, setViajes] = useState([])

  const verViajes = async () => {
    const BASE_URL = URL.BASE_URL;

    // const dataViajes = new FormData();
    //para enviar datos por POST
    // dataViajes.append("idU", idU);
    // dataViajes.append("idAS", idAS);
    const url = `${BASE_URL}viajesportada`
    const options = {
      method: 'POST',
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


      <FlatList
        style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        data={viajes}
        numColumns={numColumns}
        key={numColumns.toString()} // Usa el número de columnas como clave
        renderItem={({ item, index }) => (
          <ViajeComponent
            key={index}
            imageUri={item.Foto}
            titulo={item.Titulo}
            lugar={item.Ubicacion}
            duracion={item.Duracion}
            precio={item.PrecioAdultoNacional}
            id={item.ID}
          />
        )}
      />





    </Flex>
  );


}

export default FlatListViajesComponent;