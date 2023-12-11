import React from "react";
import { View, Text, Button, Center } from "native-base";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import email from "../Lotties/email.json"
import { useUser } from "../helper/UserContext";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


const AgradecimientoView = () => {
    const { t } = useTranslation("global");
    const { borrarTodoCarrito } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const handleMessage = (event) => {
            // Verifica si el mensaje indica que la operación se ha completado
            if (event.data && event.data.operacionCompletada) {
                // Operación de pago completada, ahora puedes borrar el carrito
                borrarTodoCarrito();
                // Redirige a la página de agradecimiento
                navigate("/Gracias");
            }
        };

        // Agrega el event listener al montar el componente
        window.addEventListener("message", handleMessage);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [borrarTodoCarrito, navigate]);

    useEffect(() => {
    
                // Operación de pago completada, ahora puedes borrar el carrito
                borrarTodoCarrito();

    }, []);




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
            <Text fontSize="4xl" fontWeight="bold" mt={4}>
                {t("gracias.gracias")}
            </Text>

            {/* Mensaje adicional o detalles de la compra si es necesario */}
            <Text textAlign="center" fontSize={"lg"} mt={2}>
                {t("gracias.mensaje")} 
            </Text>

            {/* Botón para ir al inicio */}
            <Button onPress={() => { borrarTodoCarrito() }} mt={10} mb={20}>
                {t("gracias.cerrar")} 
            </Button>
        </View>
    );
};

export default AgradecimientoView;
