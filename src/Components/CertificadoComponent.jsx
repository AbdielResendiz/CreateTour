import { Text, Pressable, Stack, Center } from "native-base";
import React from "react";
import Lottie from "lottie-react";
import certificado from '../Lotties/certificado.json';





const CertificadoComponent = () => {



    const openPdf = () => {
        window.open("https://createtours.com.mx/documentos/REGISTRO_ESTATAL_DE_TURISMO.pdf", "_blank");
    };

    return (
        <Stack direction={["column", "column", "row", "row"]} m={2} justifyContent={"center"}>
            <Center>
                <Text bold p={10} fontSize={"xl"} textAlign={"center"}>Contamos con certificado por parte del {'\n'}Registro Estatal de Turismo de Quintana Roo</Text>

            </Center>
            <Pressable alignContent={"center"} w={64} alignSelf={"center"} borderWidth={2} borderColor={"muted.300"} shadow={7} borderRadius={10}
                onPress={() => { openPdf() }}>

                <Lottie animationData={certificado} loop={true} />
                <Text alignSelf={"center"} bold>Click para ver</Text>
            </Pressable>

        </Stack>
    );





}
export default CertificadoComponent;