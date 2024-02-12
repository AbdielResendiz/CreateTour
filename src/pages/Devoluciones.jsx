import React, { useState } from "react";
import { Text, View, Box, Pressable, Center, Image, ZStack } from "native-base";
import { useTranslation } from 'react-i18next'

const Devoluciones = () => {

    const { t } = useTranslation("global");

    const [isOpen, setIsOpen] = useState(false);
    const [abierto, setAbierto] = useState(false);

    const DevolucionES = () => {

        return (
            <Box w={"75%"} alignSelf={"center"} my={5}>
                <Text>
                    <Text fontWeight="bold" fontSize={"lg"}>Política de Cancelaciones de Create Tours Cancun S.A. de C.V.</Text>
                    {"\n\n"}
                    <Text fontWeight="bold">Fecha de entrada en vigencia:</Text> 01 de Diciembre del 2023
                    {"\n\n"}
                    <Text fontWeight="bold">1. Reservas y Pagos:</Text>
                    {"\n"}1.1 Las reservas de tours con Create Tours Cancun S.A. de C.V. requieren el pago completo a través de nuestra plataforma web para confirmar la participación.
                    {"\n\n"}
                    <Text fontWeight="bold">2. Cancelaciones por Parte del Cliente:</Text>
                    {"\n"}2.1 El cliente puede cancelar su reserva en cualquier momento antes de la fecha programada para el tour. (Para saber si aplica un reembolso, consulta punto de Reembolsos)
                    {"\n"}2.2 Las cancelaciones deben realizarse notificando a Create Tours por correo electrónico a contacto@createtours.com.mx o por WhatsApp al 998 230 4219.
                    {"\n"}2.3 Las cancelaciones realizadas con 24 horas de antelación no tendrán derecho a reembolso.
                    {"\n"}2.4 En caso de no presentarse a la excursión no tendrá derecho a reembolso.
                    {"\n\n"}
                    <Text fontWeight="bold">3. Cancelaciones por Parte de Create Tours:</Text>
                    {"\n"}3.1 En casos excepcionales, Create Tours se reserva el derecho de cancelar un tour debido a circunstancias imprevistas como condiciones climáticas extremas, problemas logísticos, o cualquier otra situación que ponga en riesgo la seguridad de los participantes.
                    {"\n"}3.2 En caso de cancelación por parte de Create Tours, se ofrecerá al cliente la opción de reprogramar el tour o recibir un reembolso completo.
                    {"\n\n"}
                    <Text fontWeight="bold">4. Cambios en las Reservas:</Text>
                    {"\n"}4.1 Se pueden realizar cambios en las fechas de las reservas sujetos a disponibilidad y previo acuerdo con Create Tours.
                    {"\n"}4.2 Los cambios están sujetos a políticas de precios y tarifas aplicables en el momento de la modificación.
                    {"\n\n"}
                    <Text fontWeight="bold">5. Ausencia del Cliente:</Text>
                    {"\n"}5.1 Si el cliente no se presenta en la fecha y hora programadas para el tour sin previo aviso, no se realizarán reembolsos.
                    {"\n\n"}
                    <Text fontWeight="bold">6. Reembolsos:</Text>
                    {"\n"}6.1 Los reembolsos se solicitarán a través de nuestro correo electrónico [contacto@createtours.com.mx] y se requiere presentar forzosamente el comprobante de pago.
                    {"\n"}6.2 El tiempo de procesamiento puede variar según lo determine nuestro departamento de Finanzas y puede demorar entre 5 y 15 días hábiles.
                    {"\n"}6.3 Para obtener un reembolso del 50%, la cancelación debe realizarse con un mínimo de 48 horas de antelación.
                    {"\n"}6.4 Las cancelaciones realizadas con 24 horas de antelación no tendrán derecho a reembolso.
                    {"\n"}6.5 En caso de no presentarse a la excursión no tendrá derecho a reembolso.
                    {"\n"}6.6 Todos los reembolsos requieren previa autorización del departamento de Dirección y se efectuarán en la misma forma de pago original.
                    {"\n\n"}
                    <Text fontWeight="bold">7. Contacto:</Text>
                    {"\n"}7.1 Para realizar cancelaciones, cambios en las reservas, o cualquier consulta relacionada, el cliente puede ponerse en contacto con Create Tours a través de [contacto@createtours.com.mx] o por WhatsApp al 998 230 4219.
                    {"\n\n"}
                    <Text fontWeight="bold">8. Responsabilidades:</Text>
                    {"\n"}8.1 Create Tours o sus representantes actúan como agentes de los proveedores y otros prestadores de servicios y no son responsables de pérdidas, daños, accidentes o cambios en el horario por causas de fuerza mayor o daños causados por terceras partes.
                    {"\n\n"}
                    <Text fontWeight="bold">9. Requisitos al Momento de Abordar:</Text>
                    {"\n"}9.1 Se requiere presentar una identificación oficial que acredite ser el titular de la reservación (Pasaporte, INE, Licencia de manejo, Cartilla militar, Cédula profesional, Visa).
                    {"\n"}9.2 El horario para abordar será proporcionado verbalmente y estará estipulado en el cupón. No hay tiempo de tolerancia; en caso de NO abordar por retraso NO habrá derecho a reembolso.
                    {"\n\n"}
                    <Text fontWeight="bold">10. Conformidad:</Text>
                    {"\n"}10.1 El acto de inscripción o compra implica la TOTAL conformidad de las condiciones antes mencionadas.
                    {"\n\n"}
                    Agradecemos su comprensión y cooperación.
                    {"\n\n"}
                    Atentamente,
                    {"\n\n"}
                    Create Tours Cancun S.A. de C.V.
                </Text>
            </Box>
        );
    }

    const Returns = () => {

        return (
            <Box w={"75%"} alignSelf={"center"} my={5}>
                <Text>
                    <Text fontWeight="bold" fontSize={"lg"}>Cancellation Policy of Create Tours Cancun S.A. de C.V.</Text>
                    {"\n"}
                    <Text fontWeight="bold">Effective Date:</Text> December 1, 2023
                    {"\n"}
                    <Text fontWeight="bold">1. Reservations and Payments:</Text>
                    {"\n"}1.1 Reservations for tours with Create Tours Cancun S.A. de C.V. require full payment through our web platform to confirm participation.
                    {"\n"}
                    <Text fontWeight="bold">2. Customer Cancellations:</Text>
                    {"\n"}2.1 The customer can cancel their reservation at any time before the scheduled tour date. (To determine if a refund applies, see Refund section)
                    {"\n"}2.2 Cancellations must be made by notifying Create Tours via email at contacto@createtours.com.mx or via WhatsApp at 998 230 4219.
                    {"\n"}2.3 Cancellations made with 24 hours' notice will not be eligible for a refund.
                    {"\n"}2.4 Failure to attend the tour will not be eligible for a refund.
                    {"\n\n"}
                    <Text fontWeight="bold">3. Cancellations by Create Tours:</Text>
                    {"\n"}3.1 In exceptional cases, Create Tours reserves the right to cancel a tour due to unforeseen circumstances such as extreme weather conditions, logistical problems, or any other situation that jeopardizes the safety of participants.
                    {"\n"}3.2 In the event of cancellation by Create Tours, the customer will be offered the option to reschedule the tour or receive a full refund.
                    {"\n\n"}
                    <Text fontWeight="bold">4. Changes to Reservations:</Text>
                    {"\n"}4.1 Changes to reservation dates can be made subject to availability and by prior agreement with Create Tours.
                    {"\n"}4.2 Changes are subject to pricing and applicable fees at the time of modification.
                    {"\n\n"}
                    <Text fontWeight="bold">5. Customer Absence:</Text>
                    {"\n"}5.1 If the customer does not show up on the scheduled tour date and time without prior notice, no refunds will be issued.
                    {"\n\n"}
                    <Text fontWeight="bold">6. Refunds:</Text>
                    {"\n"}6.1 Refund requests should be sent via our email [contacto@createtours.com.mx] and must include the payment receipt.
                    {"\n"}6.2 Processing time may vary as determined by our Finance department and may take between 5 and 15 business days.
                    {"\n"}6.3 To receive a 50% refund, cancellations must be made at least 48 hours in advance.
                    {"\n"}6.4 Cancellations made with 24 hours' notice will not be eligible for a refund.
                    {"\n"}6.5 Failure to attend the tour will not be eligible for a refund.
                    {"\n"}6.6 All refunds require prior authorization from the Management department and will be processed in the original form of payment.
                    {"\n\n"}
                    <Text fontWeight="bold">7. Contact:</Text>
                    {"\n"}7.1 For cancellations, changes to reservations, or any related inquiries, customers can contact Create Tours via [contacto@createtours.com.mx] or WhatsApp at 998 230 4219.
                    {"\n\n"}
                    <Text fontWeight="bold">8. Responsibilities:</Text>
                    {"\n"}8.1 Create Tours or its representatives act as agents for providers and other service providers and are not responsible for losses, damages, accidents, or schedule changes due to force majeure or damages caused by third parties.
                    {"\n\n"}
                    <Text fontWeight="bold">9. Boarding Requirements:</Text>
                    {"\n"}9.1 An official identification proving the reservation holder's identity (Passport, ID, Driver's License, Military ID, Professional Certificate, Visa) is required.
                    {"\n"}9.2 Boarding time will be verbally provided and stated on the voucher. There is no tolerance for lateness; in case of NO boarding due to delay, there will be no right to a refund.
                    {"\n\n"}
                    <Text fontWeight="bold">10. Agreement:</Text>
                    {"\n"}10.1 The act of registration or purchase implies TOTAL agreement with the aforementioned conditions.
                    {"\n"}
                    We appreciate your understanding and cooperation.
                    {"\n"}
                    Sincerely,
                    {"\n"}
                    Create Tours Cancun S.A. de C.V.
                </Text>
            </Box>

        );
    }

    return (
        <View mt={[12, 12, 24, 24]} mb={20}>


            {/* Imagen con texto */}
            <ZStack h={[32, 32, 64, 64]} w={"100%"}>
                <Image alignSelf={"center"} opacity={0.6} source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/olas-chicas.svg"
                }} alt="Alternate Text" width={"100%"} height={[32, 32, 64, 64]} resizeMode="contain" />
                <Text fontFamily={"ElMessiri"} mt={[5, 5, 16, 16]} textAlign={"center"} alignSelf={"center"} bold fontSize={["2xl", "2xl", "4xl", "6xl"]} >
                    {t("header.devolucion")}
                </Text>
            </ZStack>


            <Center mt={4}>
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
                    ‣ Políticas de devolución
                </Pressable>
                {abierto && (
                    <DevolucionES />
                )}
            </Center>


            <Center mt={4}>
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

                    ‣ Return policy
                </Pressable>
                {isOpen && (
                    <Returns />
                )}
            </Center>


        </View>
    );


}
export default Devoluciones;