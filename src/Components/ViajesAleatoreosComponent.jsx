import { FlatList, Flex } from "native-base";
import { useEffect, useState } from "react";
import ViajeComponent from "../Components/ViajeComponent";
import URL from "../helper/baseURL";
import fetchPost from "../helper/fetchPost";

const breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};

const ViajesAleatoreosComponent = () => {
  const [viajes, setViajes] = useState([]);
  const [numColumns, setNumColumns] = useState(getNumColumns(window.innerWidth));
  const [resizeCounter, setResizeCounter] = useState(0); // Contador para forzar re-render

  // Función para determinar el número de columnas
  function getNumColumns(width) {
    if (width < breakpoints.sm) return 1;
    if (width < breakpoints.md) return 2;
    if (width < breakpoints.lg) return 3;
    return 3; // Asume 3 para 'lg' y mayores
  }

  // Carga inicial de viajes
  useEffect(() => {
    const verViajes = async () => {
      const BASE_URL = URL.BASE_URL;
      const url = `${BASE_URL}viajes/random`;
      const options = { method: 'POST' };
      const res = await fetchPost(url, options);
      setViajes(res);
    };

    verViajes();
  }, []);

  // Manejo del cambio de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setNumColumns(getNumColumns(window.innerWidth));
      setResizeCounter(prev => prev + 1); // Incrementa el contador para forzar re-render
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Quitamos numColumns de las dependencias

  return (
    <Flex w="100%">
      <FlatList
        style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        data={viajes}
        numColumns={numColumns}
        key={numColumns + '-' + resizeCounter} // Clave compuesta para forzar re-render
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <ViajeComponent
            index={item.ID}
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
};

export default ViajesAleatoreosComponent;
