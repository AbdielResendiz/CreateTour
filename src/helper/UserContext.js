// UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [carritoId, setCarritoId] = useState(null);
    // Obtener el estado del carrito desde el almacenamiento local al cargar la página
    const carritosLocalStorage = JSON.parse(localStorage.getItem('carritos')) || [];
    const [carrito, setCarrito] = useState(carritosLocalStorage);
  


  const agregarAlCarrito = (nuevoCarrito) => {
    setCarrito([...carrito, nuevoCarrito]);
  };
  //  Ejemplo del objeto carrito{
  // index:1
  // IdCarrito: 1,
  // Viaje: 'Nombre del viaje',
  // CantidadAdultos: 2,
  // CantidadInfantes: 1,
  // CantidadAdultosExtranjeros: 0,
  // CantidadInfantesExtranjeros: 0,
  // }

    // Función para editar un carrito en específico
    const editarCarrito = (indice, nuevaInformacion) => {
      setCarrito((prevCarritos) => {
        const nuevosCarritos = [...prevCarritos];
        nuevosCarritos[indice] = { ...nuevosCarritos[indice], ...nuevaInformacion };
        return nuevosCarritos;
      });
    };

      // Función para eliminar un elemento del carrito según un identificador único
      const eliminarCarrito = async (identificador) => {
        try {
          // Obtén los carritos actuales de AsyncStorage
          const carritosActuales = await AsyncStorage.getItem('carrito');
          let carritos = JSON.parse(carritosActuales) || [];
          console.log("let carritos: ", carritos)
          // Encuentra el índice del elemento a eliminar
          const indiceAEliminar = carritos.findIndex((elemento) => elemento.index === identificador);
          console.log('Índice a eliminar:', indiceAEliminar);
          // Si el elemento se encontró, elimínalo
          if (indiceAEliminar !== -1) {
            carritos.splice(indiceAEliminar, 1);

            // Actualiza AsyncStorage con los nuevos carritos
            await AsyncStorage.setItem('carrito', JSON.stringify(carritos));

            // Actualiza el estado local
            setCarrito(carritos);

            console.log('Elemento del carrito eliminado exitosamente.');
          } else {
            console.log('Elemento no encontrado en el carrito.');
          }
        } catch (error) {
          console.error('Error al intentar eliminar un elemento del carrito:', error);
        }
      };

  const login = (id) => {
    setUserId(id);
  };

  const logout = () => { 
    setUserId(null);
  };
 
  useEffect(() => {
    localStorage.setItem('carritos', JSON.stringify(carrito));
  }, [carrito]);

  // Función para borrar todos los datos del carrito
const borrarTodoCarrito = async () => {
  try {
    await AsyncStorage.removeItem('carritos');
    console.log('Carrito borrado exitosamente.');
    setCarrito([])
  } catch (error) {
    console.error('Error al intentar borrar el carrito:', error);
  }
};

  return (
    <UserContext.Provider value={{ userId, carrito, carritoId, login, logout, agregarAlCarrito, editarCarrito, eliminarCarrito, borrarTodoCarrito }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
