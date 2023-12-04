import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Button, HStack, Center} from "native-base";
import { useState } from "react";
import {  Link, useNavigate} from "react-router-dom";
import fetchPost from "../helper/fetchPost";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";
import { useUser } from "../helper/UserContext";


 

const Login = () => {

  const { userId, login } = useUser();


  const handleLogin = (id_user) => {
    // Lógica para el inicio de sesión
    login(id_user); 
  };


  //Estilos de los Links
  const linkStyle = {
    textDecoration: "underline",
    color: "#4338ca",
    fontWeight: 'bold', 
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    
  };

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

      //show/hide pass
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

  //para navegar a otras vistas
  const navigate = useNavigate();

 

  const Login = async() => {

    const dataLogin = new FormData();
      dataLogin.append("correo", correo.trim());
      dataLogin.append("password", password);
      const url ="https://createtours.com.mx/backend/public/login"
      const options ={
        method:'POST',
        body: dataLogin
      };
      const res = await fetchPost(url, options);
      console.log("res", res);
      window.alert(res.mensaje);
      handleLogin(res.id_usuario)
      //Navega a otra pagina/ruta
      navigate("/Cuenta")
      
   

    }


    const validarLogin = ()=> {
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
        case password.trim().length < 5 :
          errores.push("La contraseña debe tener al menos 5 caracteres");
          break;

        // Aquí puedes agregar más validaciones para el teléfono si lo deseas
    
        default:
          // Si no hay errores, el registro es válido
          console.log("Login válido");
          Login()
          break;
      }

      if (errores.length > 0) {
        // Si hay errores, puedes manejarlos de la manera que prefieras,
        // como mostrarlos en la interfaz de usuario o hacer otras acciones
        console.log("Errores al iniciar sesion:");
        errores.forEach((error) => console.log(error));
        errores.forEach((error) =>  window.alert(error));
      }
    
      
    }


    
    return (
        <Center w="100%">
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
                value={correo}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type={ show ? 'text' : 'password'}
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
                    </Button>}/>
              {/* <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
            ¿Olvidaste tu contraseña?
              </Link> */}
            </FormControl>
            <Button mt="2" colorScheme="indigo"
            onPress={()=>validarLogin()}>
              Iniciar sesion
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                ¿Eres nuevo?{" "}
              </Text>
              <Link style={linkStyle} to="/Registro">
                Registrarse
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    );
  };
  
  export default Login;