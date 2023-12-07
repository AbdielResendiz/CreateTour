import { Image, Flex, VStack, Button, Text, Stack } from "native-base";
import FlatListViajesComponent from "../Components/FlatListViajesComponent";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'





const Tours = () => {

    const { t } = useTranslation("global");
    //para navegar a otras vistas
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/trip/3`);
    };



    return (
        <Flex w="100%">
            <Stack direction={["column", "column", "row", "row"]} w={"100%"}>
                <Image source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/bg-tours.webp"
                }} alt="Alternate Text" width={["100%", "100%", "60%", "70%"]} height={96} resizeMode="cover" />

                <VStack justifyContent={"center"} alignSelf={"center"} width={["100%", "100%", "40%", "30%"]} p={10}>
                    <Text mt={4} fontSize={["md", "lg", "md", "lg"]}  >{t("tours.titulo")}</Text>
                    <Text bold fontSize={["2xl", "4xl", "2xl", "4xl"]} px={4}>
                        XPLOR
                        ADVENTURE
                        PARK</Text>
                    <Text fontSize={"md"}>
                        {t("tours.descripcion")} {"\n"}
                        {t("tours.costo")}  {"\n"}
                        {t("tours.hora")}  {"\n"}
                        {t("tours.duracion")}  {"\n"}
                        {t("tours.incluye")} {"\n"}

                    </Text>
                    <Button m={5} colorScheme={"amber"} size={"lg"}
                        onPress={() => { handleClick() }}>{t("tours.verTour")} </Button>
                </VStack>
            </Stack>





            <FlatListViajesComponent />
        </Flex>
    );
};

export default Tours;