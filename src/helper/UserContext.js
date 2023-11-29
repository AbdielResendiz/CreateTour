import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [carrito, setCarrito] = useState([]);

  // Obtener el estado del carrito desde AsyncStorage al cargar la página
  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const carritosActuales = await AsyncStorage.getItem('carrito');
        const carritosParseados = JSON.parse(carritosActuales) || [];
        setCarrito(carritosParseados);
      } catch (error) {
        console.error('Error al obtener carritos desde AsyncStorage:', error);
      }
    };

    obtenerCarritos();
  }, []);

  const agregarAlCarrito = (nuevoCarrito) => {
    setCarrito([...carrito, nuevoCarrito]);
  };

  const editarCarrito = (indice, nuevaInformacion) => {
    setCarrito((prevCarritos) => {
      const nuevosCarritos = [...prevCarritos];
      nuevosCarritos[indice] = { ...nuevosCarritos[indice], ...nuevaInformacion };
      return nuevosCarritos;
    });
  };

  const eliminarCarrito = async (identificador) => {
    try {
      const nuevosCarritos = carrito.filter((elemento) => elemento.index !== identificador);

      // Actualiza AsyncStorage con los nuevos carritos
      await AsyncStorage.setItem('carrito', JSON.stringify(nuevosCarritos));

      // Actualiza el estado local
      setCarrito(nuevosCarritos);

      console.log('Elemento del carrito eliminado exitosamente.');
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

  // Función para borrar todos los datos del carrito
  const borrarTodoCarrito = async () => {
    try {
      await AsyncStorage.removeItem('carrito');
      console.log('Carrito borrado exitosamente.');
      setCarrito([]);
    } catch (error) {
      console.error('Error al intentar borrar el carrito:', error);
    }
  };

  useEffect(() => {
    AsyncStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <UserContext.Provider
      value={{ userId, carrito, login, logout, agregarAlCarrito, editarCarrito, eliminarCarrito, borrarTodoCarrito }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
