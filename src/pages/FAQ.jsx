import React, { useState } from "react";
import { FlatList } from "react-native";
import CertificadoComponent from "../Components/CertificadoComponent";
import { View, Text, Center, Pressable } from "native-base";
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation("global");

    const data = [
        { pregunta: t("FAQ.p1"), respuesta: t("FAQ.r1") },
        { pregunta: t("FAQ.p2"), respuesta: t("FAQ.r2") },
        { pregunta: t("FAQ.p3"), respuesta: t("FAQ.r3") },
        { pregunta: t("FAQ.p4"), respuesta: t("FAQ.r4") },
    ];

    const Pregunta = ({ pregunta, respuesta, index, openIndex, setOpenIndex }) => {
        const isOpen = index === openIndex;

        return (
            <Center mt={4}>
                <Pressable
                    w={"80%"}
                    onPress={() => setOpenIndex(isOpen ? null : index)}
                    borderRadius={10}
                    borderWidth={1}
                    borderColor={"muted.400"}
                    bg={isOpen ? "#ffffff" : "muted.300"}
                    shadow={7}
                    p={3}
                >
                    {pregunta}
                </Pressable>
                {isOpen && (
                    <Text
                        p={2}
                        bg={"#abe6ff"}
                        borderRadius={10}
                        textAlign={"justify"}
                        fontSize={["sm", "sm", "md", "md"]}
                        alignSelf={"center"}
                        w={"80%"}
                    >
                        {respuesta}
                    </Text>
                )}
            </Center>
        );
    };

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <View w="100%" mt={[12, 12, 24, 24]}>
            <Center>
                <Text
                    alignSelf={"center"}
                    fontSize={["lg", "lg", "xl", "2xl"]}
                    justifyContent={"center"}
                >
                    {t("FAQ.title")}
                </Text>
            </Center>

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pregunta
                        pregunta={item.pregunta}
                        respuesta={item.respuesta}
                        index={index}
                        openIndex={openIndex}
                        setOpenIndex={setOpenIndex}
                    />
                )}
            />

            <CertificadoComponent />
        </View>
    );
};

export default FAQ;