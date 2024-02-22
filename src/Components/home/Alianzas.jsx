import { Image, Pressable } from "native-base";
import React from "react";
import { useTranslation } from 'react-i18next';

const Alianzas = () => {
    const { t } = useTranslation("global");
    const stackContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        alingItems: "center"
    };
    const BaseUrl = "https://createtours.com.mx/pictures/aliados/";

    const Aliado = ({ imagen, url }) => {
        const abrirLink = () => {

            // Abre la URL en una nueva pestaña
            window.open(url, '_blank');
        }

        return (
            <Pressable onPress={() => abrirLink()} m={3}>
                <Image
                    source={{
                        uri: BaseUrl + imagen
                    }}
                    alt="Alternate Text"
                    h={{ base: 20, md: 32 }}
                    w={{ base: 32, md: 56 }}
                    resizeMode="contain"
                />
            </Pressable>
        )



    }

    return (
        <>
            <h1 style={{ fontFamily: "ElMessiri" }}>
                {t("mainSection.aliados")}
            </h1>

            <div style={stackContainerStyle}>

                <Aliado
                    url="https://www.xcaret.com"
                    imagen="xcaret.png"
                />

                <Aliado
                    url="https://www.xelha.com/es/"
                    imagen="xelha.png"
                />

                <Aliado
                    url="https://www.xplor.travel/es/"
                    imagen="xplor.png"
                />

                <Aliado
                    url="https://www.xcaretexpeditions.com/es/"
                    imagen="expeditions.png"
                />

                <Aliado
                    url="https://www.xoximilco.com/es/"
                    imagen="xoximilco.png"
                />

                <Aliado
                    url="https://www.xenotes.com/es/"
                    imagen="xenotes.png"
                />

                <Aliado
                    url="https://site2.xcaret.com/#/home"
                    imagen="xenses.png"
                />

                <Aliado
                    url="https://site2.xcaret.com/#/home"
                    imagen="xavage.png"
                />


            </div>
        </>

    );
};

export default Alianzas;