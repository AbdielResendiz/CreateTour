import { Image, Flex, VStack, Button, Text, Stack } from "native-base";
import FlatListViajesComponent from "../Components/FlatListViajesComponent";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'





const Tours = () => {

    const { t } = useTranslation("global");
    //para navegar a otras vistas
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/trip/3/Xplor%20Adventure%20Park`);
    };



    return (
        <Flex w="100%" mt={[12, 12, 24, 24]}>
            <Stack direction={["column", "column", "row", "row"]} w={"100%"}>
                <Image source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/bg-tours.webp"
                }} alt="Alternate Text" width={["100%", "100%", "60%", "70%"]} height={96} mt={[0, 0, 10, 10]} resizeMode="cover" />

                <VStack justifyContent={"center"} alignSelf={"center"} width={["100%", "100%", "40%", "30%"]} p={10}>
                    <Text fontFamily="Avenir" mt={4} fontSize={["md", "lg", "md", "lg"]}  >{t("tours.titulo")}</Text>
                    <Text bold fontFamily="ElMessiri" fontSize={["lg", "xl", "2xl", "4xl"]} px={4}>
                        XPLOR
                        ADVENTURE
                        PARK
                    </Text>
                    <Text fontFamily="Avenir" fontSize={"md"}>
                        {t("tours.descripcion")} {"\n"}
                        {t("tours.hora")}  {"\n"}
                        {t("tours.duracion")}  {"\n"}
                        {t("tours.incluye")} {"\n"}

                    </Text>
                    <Button colorScheme={"amber"} textAlign={"center"}
                        onPress={() => { handleClick() }}>{t("tours.verTour")}
                    </Button>
                </VStack>
            </Stack>





            <FlatListViajesComponent />
        </Flex>
    );
};

export default Tours;