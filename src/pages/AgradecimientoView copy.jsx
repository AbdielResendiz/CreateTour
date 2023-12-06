import React from "react";
import { View, Text, Button, Center } from "native-base";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import email from "../Lotties/email.json"
import { useUser } from "../helper/UserContext";
import { useEffect } from "react";

const AgradecimientoView = () => {

    const { borrarTodoCarrito } = useUser();
    useEffect(() => {
        borrarTodoCarrito();
    }, [])

    borrarTodoCarrito();

    const navigate = useNavigate();

    const handleInicioClick = () => {
        // Navegar de nuevo al inicio
        navigate("/");
    };




    return (
        <View
            flex={1}
            justifyContent="center"
            alignItems="center"
            backgroundColor="#fff" // Color de fondo ajustable
        >
            {/* Lottie de agradecimiento */}
            <Center w={64} h={64}>
                <Lottie
                    animationData={email}
                    loop={true} // Si quieres que la animación solo se reproduzca una vez
                    style={{ width: 200, height: 200 }}
                />
            </Center>


            {/* Texto de agradecimiento */}
            <Text fontSize="xl" fontWeight="bold" mt={4}>
                ¡Gracias por tu compra!
            </Text>

            {/* Mensaje adicional o detalles de la compra si es necesario */}
            <Text textAlign="center" mt={2}>
                En 24 horas recibirás tu pase por correo electrónico
            </Text>

            {/* Botón para ir al inicio */}
            <Button onPress={() => { borrarTodoCarrito() }} mt={10} mb={20}>
                Ir al Inicio
            </Button>
        </View>
    );
};

export default AgradecimientoView;
