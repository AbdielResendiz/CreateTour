import { Text, Pressable, Stack, Center } from "native-base";
import React from "react";
import Lottie from "lottie-react";
import certificado from '../Lotties/certificado.json';
import { useTranslation } from 'react-i18next';





const CertificadoComponent = () => {
    const { t } = useTranslation("global");



    const openPdf = () => {
        window.open("https://createtours.com.mx/documentos/REGISTRO_ESTATAL_DE_TURISMO.pdf", "_blank");
    };

    return (
        <Stack direction={["column", "column", "row", "row"]} m={2} justifyContent={"center"} w="100%" py={6}>
            <Center w={["100%", "100%", "45%", "45%"]}>
                <Text bold p={10} fontSize={"xl"} textAlign={"center"} >
                    {t('FAQ.texto1')}
                </Text>

            </Center>
            <Pressable
                alignContent={"center"} w={64} alignSelf={"center"}
                borderWidth={2} borderColor={"muted.300"} shadow={7} borderRadius={10}
                onPress={() => { openPdf() }}>

                <Lottie animationData={certificado} loop={true} />
                <Text pb={4} alignSelf={"center"} bold>Click para ver</Text>
            </Pressable>

        </Stack>
    );





}
export default CertificadoComponent;