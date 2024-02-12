import React, { useState } from "react";
import { Text, View, Box, Pressable, Center, Image, ZStack, HStack } from "native-base";
import { useTranslation } from 'react-i18next'
const Privacidad = () => {
    const { t } = useTranslation("global");


    const PrivacidadSES = () => {

        return (
            <Box w={"70%"} alignSelf={"center"} my={5}>
                <Text fontWeight="bold" fontSize={"lg"}>Aviso de Privacidad de Create Tours Cancun S.A. de C.V.</Text>
                {"\n"}
                <Text fontWeight="bold">Fecha de entrada en vigencia:</Text> 01 Diciembre 2023
                {"\n"}
                En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP) y su reglamento, Create Tours Cancun S.A. de C.V., en adelante "Create Tours," establece el presente Aviso de Privacidad para informar a nuestros clientes y usuarios acerca del tratamiento que se dará a los datos personales recopilados.
                {"\n\n"}
                <Text fontWeight="bold">1. Datos Personales Recopilados:</Text>
                {"\n"}- Nombre
                {"\n"}- Apellidos
                {"\n"}- Correo electrónico
                {"\n"}- Número telefónico
                {"\n"}- Ciudad de residencia
                {"\n\n"}
                <Text fontWeight="bold">2. Propósito de la Recopilación y Uso de la Información:</Text>
                {"\n"}- Venta de tours y envío de reservaciones.
                {"\n"}- Envío de promociones especiales.
                {"\n\n"}
                <Text fontWeight="bold">3. Compartir Información:</Text>
                {"\n"}- Con Meta Inc.
                {"\n"}- Con proveedores de tours.
                {"\n\n"}
                <Text fontWeight="bold">4. Medidas de Seguridad de Datos:</Text>
                {"\n"}- Bases de datos cifradas.
                {"\n"}- Certificado SSL del sitio web.
                {"\n\n"}
                <Text fontWeight="bold">5. Cookies y Otras Tecnologías:</Text>
                {"\n"}- Píxel de Meta, Píxel de TikTok y etiquetas de Google.
                {"\n"}- Objetivo: Publicidad y promociones especiales.
                {"\n\n"}
                <Text fontWeight="bold">6. Derechos del Usuario:</Text>
                {"\n"}- Derecho a conocer qué información específica recabamos.
                {"\n"}- Derecho a solicitar la eliminación de la información.
                {"\n\n"}
                <Text fontWeight="bold">7. Menores de Edad:</Text>
                {"\n"}- No estamos dirigidos a menores de edad.
                {"\n"}- La información de menores se recopila solo para registrar a los participantes en el servicio (nombre y apellidos).
                {"\n\n"}
                <Text fontWeight="bold">8. Cambios en la Política de Privacidad:</Text>
                {"\n"}- Los cambios se notificarán en nuestro sitio web.
                {"\n\n"}
                <Text fontWeight="bold">9. Contacto:</Text>
                {"\n"}- Correo electrónico: contacto@createtours.com.mx
                {"\n"}- Teléfono: 998 230 4219.
                {"\n\n"}
                Create Tours Cancun S.A. de C.V. se compromete a resguardar la confidencialidad y seguridad de la información proporcionada. Al proporcionar sus datos, usted acepta los términos y condiciones de este Aviso de Privacidad.
                {"\n"}
                Para cualquier consulta, solicitud de acceso, rectificación, cancelación u oposición de sus datos personales, así como para ejercer los derechos mencionados, puede ponerse en contacto con nosotros a través de los medios proporcionados.
                {"\n"}
                Agradecemos su confianza en Create Tours para planificar sus experiencias turísticas.
                {"\n"}
                Atentamente,
                {"\n"}
                <Text bold>Create Tours Cancun S.A. de C.V. </Text>
            </Box>
        );

    }

    const Privacy = () => {
        return (
            <Box w={"70%"} alignSelf={"center"} my={5}>
                <Text fontWeight="bold" fontSize={"lg"}>Privacy Notice of Create Tours Cancun S.A. de C.V.</Text>
                {"\n\n"}
                <Text fontWeight="bold">Effective Date:</Text> December 1, 2023
                {"\n\n"}
                In compliance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its regulations, Create Tours Cancun S.A. de C.V., hereinafter referred to as "Create Tours," establishes this Privacy Notice to inform our clients and users about the processing of the collected personal data.
                {"\n\n"}
                <Text fontWeight="bold">1. Collected Personal Data:</Text>
                {"\n"}- Name
                {"\n"}- Last Name
                {"\n"}- Email
                {"\n"}- Phone Number
                {"\n"}- City of Residence
                {"\n\n"}
                <Text fontWeight="bold">2. Purpose of Collection and Use of Information:</Text>
                {"\n"}- Sale of tours and sending of reservations.
                {"\n"}- Sending of special promotions.
                {"\n\n"}
                <Text fontWeight="bold">3. Sharing Information:</Text>
                {"\n"}- With Meta Inc.
                {"\n"}- With tour providers.
                {"\n\n"}
                <Text fontWeight="bold">4. Data Security Measures:</Text>
                {"\n"}- Encrypted databases.
                {"\n"}- SSL certificate for the website.
                {"\n\n"}
                <Text fontWeight="bold">5. Cookies and Other Technologies:</Text>
                {"\n"}- Meta Pixel, TikTok Pixel, and Google tags.
                {"\n"}- Purpose: Advertising and special promotions.
                {"\n\n"}
                <Text fontWeight="bold">6. User Rights:</Text>
                {"\n"}- Right to know what specific information we collect.
                {"\n"}- Right to request the deletion of information.
                {"\n\n"}
                <Text fontWeight="bold">7. Minors:</Text>
                {"\n"}- We are not directed at minors.
                {"\n"}- Information about minors is collected only to register participants in the service (name and last name).
                {"\n\n"}
                <Text fontWeight="bold">8. Changes in Privacy Policy:</Text>
                {"\n"}- Changes will be notified on our website.
                {"\n\n"}
                <Text fontWeight="bold">9. Contact:</Text>
                {"\n"}- Email: contacto@createtours.com.mx
                {"\n"}- Phone: 998 230 4219.
                {"\n\n"}
                Create Tours Cancun S.A. de C.V. is committed to safeguarding the confidentiality and security of the provided information. By providing your data, you agree to the terms and conditions of this Privacy Notice.
                {"\n\n"}
                For any inquiries, requests for access, rectification, cancellation, or opposition to your personal data, as well as to exercise the mentioned rights, you can contact us through the provided means.
                {"\n\n"}
                We appreciate your trust in Create Tours for planning your tourist experiences.
                {"\n\n"}
                Sincerely,
                {"\n\n"}
                Create Tours Cancun S.A. de C.V.
            </Box>

        );
    }

    const [isOpen, setIsOpen] = useState(false);
    const [abierto, setAbierto] = useState(false);




    return (
        <View mt={[12, 12, 16, 24]} mb={20} w={"100%"}>

            {/* Imagen con texto */}
            <ZStack h={[32, 32, 64, 64]} w={"100%"}>
                <Image alignSelf={"center"} opacity={0.6} source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
                }} alt="Alternate Text" width={"100%"} height={[32, 32, 64, 64]} resizeMode="contain" />
                <Text fontFamily={"ElMessiri"} mt={[5, 5, 16, 16]} textAlign={"center"} alignSelf={"center"} bold fontSize={["2xl", "2xl", "4xl", "6xl"]} >
                    {t("header.privacidad")}
                </Text>
            </ZStack>

            <Box mt={4}>
                <HStack alignContent="center" justifyContent="flex-start" space={4}>
                    <HStack justifyContent={"center"}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/mexico.png"
                            }}
                            alt="English"
                            w={[5, 5, 8, 10]}
                            h={[5, 5, 8, 10]}
                            alignSelf={"center"}
                        />
                        <Center>
                            <Text textAlign={"center"} justifyContent={"center"} fontSize={["xs", "xs", "md", "md"]} bold p={[1, 1, 2, 2]}>ES</Text>
                        </Center>
                    </HStack>
                    <Pressable
                        w={"80%"}
                        onPress={() => setAbierto(!abierto)}
                        borderRadius={10}
                        borderWidth={1}
                        borderColor={"muted.400"}
                        bg={abierto ? "#449bab" : "muted.300"}
                        shadow={7}
                        p={3}
                    >
                        ‣ Políticas de privacidad
                    </Pressable>
                </HStack>

                {abierto && (
                    <PrivacidadSES />
                )}
            </Box>


            <Box mt={4}>
                <HStack alignContent="center" justifyContent="flex-start" space={4}>
                    <HStack justifyContent={"center"}>
                        <Image
                            source={{
                                uri: "https://createtours.com.mx/pictures/usa.png"
                            }}
                            alt="English"
                            w={[5, 5, 8, 10]}
                            h={[5, 5, 8, 10]}
                            alignSelf={"center"}
                        />
                        <Center>
                            <Text textAlign={"center"} justifyContent={"center"} fontSize={["xs", "xs", "md", "md"]} bold p={[1, 1, 2, 2]}>ES</Text>
                        </Center>
                    </HStack>


                    <Pressable
                        w={"80%"}
                        onPress={() => setIsOpen(!isOpen)}
                        borderRadius={10}
                        borderWidth={1}
                        borderColor={"muted.400"}
                        bg={isOpen ? "#449bab" : "muted.300"}
                        shadow={7}
                        p={3}
                    >

                        ‣ Privacy policy
                    </Pressable>
                </HStack>

                {isOpen && (
                    <Privacy />
                )}
            </Box>
        </View>
    );
};

export default Privacidad;