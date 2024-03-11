import React, { useEffect } from "react";
import { Image, Flex, VStack, Button, Text, Stack } from "native-base";
import FlatListViajesComponent from "../Components/FlatListViajesComponent";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { animateScroll as scroll } from 'react-scroll';





const Tours = () => {

    const { t } = useTranslation("global");
    //para navegar a otras vistas
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/trip/3/Xplor%20Adventure%20Park`);
    };

    useEffect(() => {
        scroll.scrollToTop();
    }, [])


    return (
        <Flex w="100%" mt={{ base: -5, md: 12 }}>
            <Stack direction={["column", "column", "row", "row"]} w={["90%", "90%", "90%", "100%", "100%"]} alignSelf="center" >
                <Image source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/bg-tours.webp"
                }} alt="Alternate Text" width={["100%", "100%", "60%", "70%", "75%"]} height={96} resizeMode="cover" />

                <VStack justifyContent={"center"} alignSelf={"center"} width={["100%", "100%", "40%", "30%", "30%"]} px={5}>
                    <Text fontFamily="Avenir" fontSize={["md", "lg", "md", "lg"]}  >
                        {t("tours.titulo")}
                    </Text>
                    <Text bold fontFamily="ElMessiri"
                        fontSize={["lg", "xl", "xl", "2xl", "4xl"]} px={4}>
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