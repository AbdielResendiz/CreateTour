import React from 'react';
import { Box } from 'native-base';
import { useTranslation } from 'react-i18next';
import TituloBlog from './blogComponents/TituloBlog';
import ContenidoBlog from './blogComponents/ContenidoBlog';
import SubtituloBlog from './blogComponents/SubtituloBlog';
import ImagenBlog from './blogComponents/ImagenBlog';

const Blog01 = () => {
    const { t } = useTranslation("blog");

    return (
        <Box px={8} >
             
            <TituloBlog text={t("blog01.titulo")} />
            <ContenidoBlog text={t("blog01.contenido00")} />
            <ImagenBlog imageUrl="https://createtours.com.mx/pictures/galeria/4x1-plus-08.jpg" alt="blog1"/>
            {[...Array(10).keys()].map((index) => {
                const num = index + 1;
                const subtituloKey = `blog01.subtitulo${num < 10 ? `0${num}` : num}`;
                const contenidoKey = `blog01.contenido${num < 10 ? `0${num}` : num}`;
                return (
                    <Box key={index}>
                        <SubtituloBlog text={t(subtituloKey)} />
                        <ContenidoBlog text={t(contenidoKey)} />
                    </Box>
                );
            })}
              <ImagenBlog imageUrl="https://createtours.com.mx/pictures/galeria/chichen-deluxe06.jpg" alt="blog2"/>
            <ContenidoBlog text={t("blog01.conclusion")}/>
        </Box>
    );
}

export default Blog01;