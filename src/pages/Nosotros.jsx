import React from 'react';
import { Center, Image, Text, View, Stack, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';

const Nosotros = () => {
  const { t } = useTranslation("global");

  const NosotrosComponent = ({ subtitle, description, imageUrl, mr }) => {
    return (
      <Stack direction={"row"} w={"100%"}>
        <VStack w={"35%"} p={5} mx={5} >
          <Text fontSize={["md", "lg", "xl", "2xl"]} color={"#494d41"}  >CREATE TOURS</Text>
          <Text bold fontSize={["xl", "2xl", "4xl", "5xl"]}  >{subtitle}</Text>
          <Text fontSize={["md", "md", "lg", "lg"]} color={"#494d41"} textAlign={"justify"}>{description}</Text>
        </VStack>
        <Image
          source={{ uri: imageUrl }}
          alt="Alternate Text"
          width={"60%"}
          height={80}
          resizeMode={"stretch"}
          justifyContent={"flex-end"}
        />
      </Stack>
    );
  };


  const Valores = ({ valor }) => {
    return (
      <Center bg={"#0e0337"} borderRadius={5} p={[1, 2, 3, 4]}>
        <Text color={"white"} bold fontSize={["sm", "sm", "md", "lg"]}>
          {valor}
        </Text>
      </Center>
    );
  }


  return (

    <View direction="column" alignItems="center" py={10} w="100%" flex={1}>
      <NosotrosComponent
        subtitle={t("menu.Nosotros")}
        description={t("nosotros.nosotrosDes")}
        imageUrl={"https://createtours.com.mx/backend/public/Imagenes/logo-create.svg"}
        resize={"cover"}
        mr={3}
      />

      <Stack direction="row" w="100%">
        <Image
          source={{ uri: "https://createtours.com.mx/backend/public/Imagenes/Mision.png" }}
          alt="Alternate Text"
          width="60%"
          height={96}
          resizeMode="cover"
        />

        <VStack w="35%" p={10}>
          <Text fontSize={["md", "lg", "xl", "2xl"]} color={"#494d41"}>
            CREATE TOURS
          </Text>
          <Text bold fontSize={["xl", "2xl", "4xl", "5xl"]}>
            {t("nosotros.mision")}
          </Text>
          <Text fontSize={["md", "md", "lg", "lg"]} color={"#494d41"} textAlign={"justify"}>
            {t("nosotros.misionDes")}
          </Text>
        </VStack>
      </Stack>

      <NosotrosComponent
        subtitle={t("nosotros.vision")}
        description={t("nosotros.visionDes")}
        imageUrl={"https://createtours.com.mx/backend/public/Imagenes/Vision.png"}
        mr={"1rem"}
      />

      <VStack flex={1} space={5} mb={5}>
        <Text bold fontSize={"6xl"} textAlign={"center"}>
          {t("nosotros.valores")}
        </Text>
        <Stack direction={["column", "column", "row", "row"]} space={[3, 3, 4, 5]}>
          <Valores valor={t("nosotros.valor1")} />
          <Valores valor={t("nosotros.valor2")} />
          <Valores valor={t("nosotros.valor3")} />
          <Valores valor={t("nosotros.valor4")} />
        </Stack>

        <Stack direction={["column", "column", "row", "row"]} space={5}>
          <Valores valor={t("nosotros.valor5")} />
          <Valores valor={t("nosotros.valor6")} />
          <Valores valor={t("nosotros.valor7")} />
          <Valores valor={t("nosotros.valor8")} />
        </Stack>
      </VStack>
    </View>

  );
};

export default Nosotros;