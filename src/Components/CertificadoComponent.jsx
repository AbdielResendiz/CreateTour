import { Text, Pressable, HStack, Center } from "native-base";
import React from "react";
import Lottie from "lottie-react";
import certificado from '../Lotties/certificado.json';





const CertificadoComponent = () => {



    const openPdf = () => {
        window.open("https://createtours.com.mx/documentos/REGISTRO_ESTATAL_DE_TURISMO.pdf", "_blank");
    };

    return (
        <HStack m={2} justifyContent={"center"}>
            <Center>
                <Text bold p={10} fontSize={"xl"}> Contamos con certificado por parte del {'\n'}Registro Estatal de Turismo de Quintana Roo</Text>

            </Center>
            <Pressable justifyContent={"flex-start"} w={64}
                onPress={() => { openPdf() }}>
                <Lottie animationData={certificado} loop={true} />
            </Pressable>

        </HStack>
    );





}
export default CertificadoComponent;