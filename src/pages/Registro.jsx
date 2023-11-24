import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center } from "native-base";
import { useState } from "react";
import fetchPost from "../helper/fetchPost";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";

const Registro = () => {


  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

      //mostrar /ocultar password
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
  const [show2, setShow2] = useState(false);
	const handleClick2 = () => setShow2(!show2);




  const NuevoUsuario = async() => {

    const dataLogin = new FormData();
      dataLogin.append("correo", correo.trim());
      dataLogin.append("password", password);
      const url ="https://createtours.com.mx/backend/public/nuevousuario"
      const options ={
        method:'POST',
        body: dataLogin
      };
      const res = await fetchPost(url, options);
      console.log("res", res);
      
      window.alert(res.mensaje);
     
     

    }


    const validarRegistro = ()=> {
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

          case password.trim() !==password2.trim() :
            errores.push("Las contraseñas debe ser iguales");
            break;

        // Aquí puedes agregar más validaciones para el teléfono si lo deseas
    
        default:
          // Si no hay errores, el registro es válido
          console.log("Login válido");
          NuevoUsuario()
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
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
         ¡Bienvenido!
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
         ¡Registrate para continuar!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Correo electrónico: </FormControl.Label>
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
          </FormControl>

          <FormControl>
            <FormControl.Label>Confirmar contraseña</FormControl.Label>
            <Input type={ show2 ? 'text' : 'password'}
                  placeholder='Confirmar Contraseña'
                  onChangeText={(val) => setPassword2(val)}
                  value={password2}
                  InputRightElement={
                    <Button
                        ml={1}
                        variant='link'
                        roundedLeft={0}
                        roundedRight='md'
                        onPress={handleClick2}
                       >
                        {show2 ? (
                           <FaRegEyeSlash />

                        ) : (
                            <FaRegEye />
                        )}
                    </Button>}/>
          </FormControl>
          <Button mt="2" colorScheme="indigo"
          onPress={()=>validarRegistro()}>
            Registrarse
          </Button>
        </VStack>
      </Box>
    </Center>
    );
  };
  
  export default Registro;