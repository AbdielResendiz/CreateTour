import React, { useState, useEffect } from 'react';
import { VStack, Input, FormControl, TextArea, Button, View, Image, Text, Spinner, HStack, Stack, useToast, Box } from 'native-base';
import URL from '../../helper/baseURL';
import fetchPost from '../../helper/fetchPost';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useTranslation } from 'react-i18next';

const FormularioHotel = () => {
    const toast = useToast();
    const { t } = useTranslation("global");
    const mostrarToast = (mensaje) => {
        toast.show({
            description: mensaje,
            placement: "top", // Puedes cambiar la ubicación según sea necesario
            render: () => {
                return <Box bg={"#50adb0"} px="6" py="4" rounded="sm" mb={5} borderWidth={3} borderColor={'#0d9aa1'} shadow={7}>
                    <Text fontFamily="Circular" color="white">
                        {mensaje}
                    </Text>
                </Box>;
            }
        });
    };

    useEffect(() => {
        loadCaptchaEnginge(4, 'white', '#0d9aa1', 'upper');
        // Aquí, 6 es el número de caracteres en el captcha
    }, []);


    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [huespedes, setHuespedes] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const validarFormulario = () => {
        let userCaptchaValue = document.getElementById('user_captcha_input').value;
        // Validar nombre
        if (nombre.length <= 3) {
            mostrarToast('El nombre debe tener más de 3 letras.');
            return false;
        }

        // Validar correo electrónico
        const regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(email)) {
            mostrarToast('Por favor, introduce un correo electrónico válido.');
            return false;
        }

        // Validar teléfono
        if (!telefono.match(/^\d{10,16}$/)) {
            mostrarToast('El teléfono debe tener al menos 10 dígitos');
            return false;
        }

        // Validar mensaje
        if (mensaje.trim() === '') {
            mostrarToast('Por favor, escribe un mensaje.');
            return false;
        }
        if (huespedes.trim() === '') {
            mostrarToast('Por favor, escribe un mensaje.');
            return false;
        }

        if (!validateCaptcha(userCaptchaValue)) {
            mostrarToast('Captcha Incorrecto');
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        validarFormulario();
        if (!validarFormulario()) {
            return; // Detiene la función si la validación falla
        } else {
            const BASE_URL = URL.BASE_URL;

            const dataContacto = new FormData();
            dataContacto.append("nombre", nombre);
            dataContacto.append("email", email);
            dataContacto.append("telefono", telefono);
            dataContacto.append("mensaje", mensaje);
            dataContacto.append("huespedes", huespedes);
            const url = `${BASE_URL}enviarcorreoConsulta`;
            const options = {
                method: 'POST',
                body: dataContacto
            };
            setIsLoading(true);
            console.log("url: ", url);
            try {
                const response = await fetchPost(url, options);
                console.log("respuesta: ", response);
                if (response.status) {
                    mostrarToast('Mensaje enviado');
                    setIsLoading(false);
                } else {
                    mostrarToast('Error al enviar el mensaje');
                    setIsLoading(false);
                }
            } catch (error) {
                mostrarToast('Error al procesar la solicitud');
                setIsLoading(false);
            }
        }
    };


    const ImagenDeFondo = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url("https://mareaproperties.com.mx/imagenes/img188.jpg")`,
        backgroundSize: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };


    return (
        <View w="100%"  >

            <Stack style={ImagenDeFondo}
                direction={["column", "column", "row", "row"]} shadow={6} py={8} w="100%" alignSelf={"center"} >
                <Stack direction={"column"} w={["100%", "100%", "50%", "50%", "50%"]} alignItems="center" justifyContent="center">
                    <Image
                        source={{
                            uri: "https://createtours.com.mx/pictures/logo-c04.png"
                        }}
                        alt="Alternate Text"
                        w={[48, 48, 64, 64, 64]} h={[20, 20, 32, 32, 32]} mt={4}
                        resizeMode='cover'
                    />

                    <Text style={{ fontFamily: 'Circular' }} textAlign="center" w="100%" fontSize={["xl", "2xl", "3xl", "4xl"]} color="#fff">
                        Cotiza tu hospedaje
                    </Text>
                </Stack>
                {/* FORMULARIO CONTACTO */}
                <VStack w={["90%", "90%", "45%", "45%", "40%"]} space={3} alignSelf="center" bg="#fff" px={4} py={4} mt={1} borderRadius={5} my={"auto"} >
                    <Text style={{ fontFamily: 'Circular' }}
                        textAlign="center" fontSize={["md", "lg", "xl", "2xl", "2xl"]}>
                        Llena el formulario y te enviaremos cotizacion de tu hospedaje
                    </Text>
                    <Text style={{ fontFamily: 'Avenir' }}
                        textAlign="center" fontSize={["xs", "sm", "md", "md", "md"]} >

                    </Text>

                    <FormControl isRequired>
                        {/* <FormControl.Label _text={{ bold: true }}>Nombre: </FormControl.Label> */}
                        <Input shadow={7} value={nombre} placeholder={t("contacto.form.nombre.placeholder")} onChangeText={(e) => setNombre(e)} />

                    </FormControl>

                    <HStack w="100%" space={4}>
                        <FormControl isRequired w="48%">
                            {/* <FormControl.Label _text={{ bold: true }}>Correo: </FormControl.Label> */}
                            <Input shadow={6} value={email} type="email" placeholder="Email" onChangeText={(e) => setEmail(e.toUpperCase())} />
                        </FormControl>

                        <FormControl isRequired w="47%">
                            {/* <FormControl.Label _text={{ bold: true }}>Teléfono: </FormControl.Label> */}
                            <Input shadow={6} value={telefono} placeholder={t("contacto.form.telefono.placeholder")} onChangeText={(e) => {
                                // Filtra el texto para permitir solo números, guiones (-) y el signo más (+)
                                const textoFiltrado = e.replace(/[^0-9\-+]/g, '');
                                setTelefono(textoFiltrado);
                            }} />
                        </FormControl>

                    </HStack>



                    <FormControl isRequired>
                        {/* <FormControl.Label _text={{ bold: true }}>Dirección de la propiedad: </FormControl.Label> */}
                        <Input shadow={6} value={huespedes} placeholder="Personas a hospedarse" onChangeText={(e) => setHuespedes(e)} />
                    </FormControl>

                    <FormControl isRequired>
                        {/* <FormControl.Label _text={{ bold: true }}>Mensaje: </FormControl.Label> */}
                        <TextArea totalLines={2} shadow={6} value={mensaje} placeholder={t("contacto.form.mensaje.placeholder")} onChangeText={(e) => setMensaje(e)} />
                    </FormControl>
                    <Stack direction={["column", "row", "row", "row", "row"]} space={4} mt={3} alignSelf="center" >
                        <LoadCanvasTemplate reloadText={t("contacto.captcha")} reloadColor={'#0d9aa1'} />
                        <input style={{ borderRadius: 5 }}
                            type="text" id="user_captcha_input" placeholder={t("contacto.valorCaptcha")} />

                    </Stack>
                    {isLoading ? <Spinner mt={4} size={56} color={'#0d9aa1'} /> :
                        <Button shadow={6} colorScheme="amber" onPress={() => handleSubmit()} mt={2} size="lg" py={1} w={32} alignSelf="center">
                            {t("contacto.enviar")}
                        </Button>
                    }

                </VStack>
            </Stack>
        </View >
    );
};

export default FormularioHotel;
