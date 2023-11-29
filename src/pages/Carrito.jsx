import React, { useEffect } from 'react';
import CarritoComponent from '../Components/CarritoComponent';
import { useUser } from '../helper/UserContext';
import { Center, FlatList, Heading, Text } from 'native-base';


const Carrito = () => {
  
  const { carrito,  agregarAlCarrito, editarCarrito, eliminarCarrito  } = useUser();

  useEffect(() => {
    console.log("Carrito en vista carrito : ", carrito)
  }, [])
  


    return (<>
    <Center>
      <Heading alignContent={"center"}>Bienvenido a tu carrito de compras</Heading>

    </Center>

    <Text>{carrito.length}</Text>
    {carrito.length > 0 ? 
      <Text>Tienes items en el carrito</Text> :
      <Text>carrito VACIO</Text> 
     }
    

     <FlatList
              style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
              contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
              data={carrito}
              numColumns={1}
             
              renderItem={({ item }) => (
                <CarritoComponent
                  index={item.index}
                  id={item.Viaje} 
                  titulo={item.Titulo} 
                  foto={item.Foto} 
                  subtotal={item.TotalCompra}
                  fecha={item.Fecha} 
                  adultoN={item.CantidadAdultos} 
                  adultoE={item.CantidadAdultosExtranjeros} 
                  kidN={item.CantidadInfantes}
                  kidE={item.CantidadInfantes} />
              )}
            />



    
    
    </>
   
    );
  };
  
  export default Carrito;