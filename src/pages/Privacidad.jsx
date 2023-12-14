import React from "react";
import { Text, View, Box } from "native-base";

const Privacidad = () => {
  return (
    <View mt={[12, 12, 24, 24]}>
      <Box w={"75%"} alignSelf={"center"} my={5}>
        <Text fontWeight="bold" fontSize={"lg"}>Aviso de Privacidad de Create Tours Cancun S.A. de C.V.</Text>
        {"\n\n"}
        <Text fontWeight="bold">Fecha de entrada en vigencia:</Text> 01 Diciembre 2023
        {"\n\n"}
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
        {"\n\n"}
        Para cualquier consulta, solicitud de acceso, rectificación, cancelación u oposición de sus datos personales, así como para ejercer los derechos mencionados, puede ponerse en contacto con nosotros a través de los medios proporcionados.
        {"\n\n"}
        Agradecemos su confianza en Create Tours para planificar sus experiencias turísticas.
        {"\n\n"}
        Atentamente,
        {"\n\n"}
        Create Tours Cancun S.A. de C.V.
      </Box>
    </View>
  );
};

export default Privacidad;
