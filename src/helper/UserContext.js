import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [totalContext, setTotalContext] = useState(0);

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




  // Obtener el estado del usuario
  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const usuarioActual = await AsyncStorage.getItem('userId');

        setUserId(usuarioActual);

        const usuarioTipoActual = await AsyncStorage.getItem('tipo');

        setTipo(usuarioTipoActual);
      } catch (error) {
        console.error('Error al obtener carritos desde AsyncStorage:', error);
      }
    };
    obtenerUsuario();
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
      console.log("carrito de borrar: ", nuevosCarritos);
      console.log("carrito de borrar setcarrito: ", carrito);
      console.log('Elemento del carrito eliminado exitosamente.');
    } catch (error) {
      console.error('Error al intentar eliminar un elemento del carrito:', error);
    }
  };

  const login = async (id, tipoUser) => {
    setUserId(id);
    setTipo(tipoUser);
    try {
      await AsyncStorage.setItem('userId', id);
      await AsyncStorage.setItem('tipo', tipoUser);
    } catch (error) {
      console.error('Error saving data to AsyncStorage f. login( ): ', error);
    }

  };

  const logout = async () => {
    setUserId(null);
    setTipo(null);
    try {
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('tipo');
    } catch (error) {
      console.error('Error saving data to AsyncStorage f. login( ): ', error);
    }
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




  // Llama a la función para obtener el GranTotal


  const totalStripe = (usd) => {

    setTotalContext(usd);
    console.log("Total usd:", totalContext);
  };


  //valor del dolar en mxn
  const [precioUSD, setPrecioUSD] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/USD`
        );
        const data = await response.json();

        setPrecioUSD(Number((data.rates.MXN).toFixed(2)));
        //console.log("dolar", Number((data.rates.MXN).toFixed(2)))

      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();

  }, []);



  return (
    <UserContext.Provider
      value={{ precioUSD, userId, tipo, carrito, login, totalContext, totalStripe, logout, agregarAlCarrito, editarCarrito, eliminarCarrito, borrarTodoCarrito }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
