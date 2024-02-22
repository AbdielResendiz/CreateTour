import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center } from "native-base";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchPost from "../helper/fetchPost";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useUser } from "../helper/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const { login } = useUser();

  const handleLogin = (id_user, tipoUser) => {
    // Lógica para el inicio de sesión
    login(id_user, tipoUser);
  };

  // const [correo, setCorreo] = useState("contacto@createtours.com.mx");
  // const [password, setPassword] = useState("Cr34t3T0urs/*2023");

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  //show/hide pass
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //para navegar a otras vistas
  const navigate = useNavigate();

  const Login = async () => {

    const dataLogin = new FormData();
    dataLogin.append("correo", correo.trim());
    dataLogin.append("password", password);
    const url = "https://createtours.com.mx/backend/public/login"
    const options = {
      method: 'POST',
      body: dataLogin
    };
    const res = await fetchPost(url, options);
    console.log("respuesta login", res);

    if (res.resultado === false) {
      window.alert(res.mensaje)
      return;

    } else {
      handleLogin(res.id_usuario, res.TipoUsuario)
      window.alert(res.mensaje);

      try {
        await AsyncStorage.setItem('userId', res.id_usuario);
        await AsyncStorage.setItem('tipo', res.TipoUsuario);
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
      res.TipoUsuario === "1" ? navigate("/Administrador") :
        window.alert("No tienes permisos necesarios para acceder a esta sección");
      return;
    }
  }


  const validarLogin = () => {
    let errores = [];
    //validaciones expresiones regulares
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    switch (true) {
      case correo.trim() === "":
        errores.push("El campo correo es requerido");
        break;
      // Aquí puedes agregar más validaciones para el correo si lo deseas
      case !correoRegex.test(correo.trim()):
        errores.push("El campo correo no es válido");
        break;

      case password.trim() === "":
        errores.push("El campo contraseña es requerido");
        break;
      case password.trim().length < 5:
        errores.push("La contraseña debe tener al menos 5 caracteres");
        break;

      // Aquí puedes agregar más validaciones para el teléfono si lo deseas

      default:
        // Si no hay errores, el registro es válido

        Login()
        break;
    }

    if (errores.length > 0) {
      // Si hay errores, puedes manejarlos de la manera que prefieras,
      // como mostrarlos en la interfaz de usuario o hacer otras acciones
      console.log("Errores al iniciar sesion:");
      errores.forEach((error) => console.log(error));
      errores.forEach((error) => window.alert(error));
    }
  }


  return (
    <Center w="100%" mt={{ base: -5, md: 12 }}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
          Bienvenido
        </Heading>
        <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
          Inicia sesión para continuar
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo electrónico:</FormControl.Label>
            <Input
              placeholder='Email'
              onChangeText={(val) => setCorreo(val.toUpperCase())}
              value={correo} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type={show ? 'text' : 'password'}
              placeholder='Contraseña'
              onChangeText={(val) => setPassword(val)}
              value={password}
              InputRightElement={
                <Button
                  ml={1}
                  variant='link'
                  roundedLeft={0}
                  roundedRight='md'
                  onPress={handleClick}
                >
                  {show ? (
                    <FaRegEyeSlash />
                  ) : (
                    <FaRegEye />
                  )}
                </Button>} />

          </FormControl>
          <Button mt="2" colorScheme="indigo"
            onPress={() => validarLogin()}>
            Iniciar sesion
          </Button>

        </VStack>
      </Box>
    </Center>
  );
};

export default Login;