import React, { useState } from "react";
import { FlatList } from "react-native";
import CertificadoComponent from "../Components/CertificadoComponent";
import { View, Text, Center, Pressable, Heading, VStack } from "native-base";
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation("global");

    const data = [
        { pregunta: t("FAQ.p1"), respuesta: t("FAQ.r1") },
        { pregunta: t("FAQ.p2"), respuesta: t("FAQ.r2") },
        { pregunta: t("FAQ.p3"), respuesta: t("FAQ.r3") },
        { pregunta: t("FAQ.p4"), respuesta: t("FAQ.r4") },
    ];

    const Pregunta = ({ pregunta, respuesta }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <Center mt={4}>
                <Pressable onPress={() => setIsOpen(!isOpen)} borderRadius={10} borderWidth={1}
                    borderColor={"muted.400"} bg={isOpen ? "#ffffff" : "muted.300"} shadow={7} p={3}>
                    {pregunta}
                </Pressable>
                {isOpen && (
                    <Center rounded="md" my={3} >
                        <Text textAlign={"center"} alignSelf={"center"} w={"70%"}>{respuesta}</Text>
                    </Center>
                )}
            </Center>
        );
    };

    return (
        <>
            <Center>
                <Heading alignSelf={"center"} justifyContent={"center"}>{t("FAQ.title")}</Heading>
            </Center>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Pregunta pregunta={item.pregunta} respuesta={item.respuesta} />}
            />
            <CertificadoComponent />
        </>
    );
};

export default FAQ;