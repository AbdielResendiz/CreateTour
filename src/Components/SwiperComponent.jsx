import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import fetchPost from '../helper/fetchPost';
import { Image } from 'native-base';
import URL from '../helper/baseURL';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const SwiperComponent = (props) => {

    const { id } = props;
    //manejar y obtener datos del viaje
    const [galeria, setGaleria] = useState([])

    const verGaleria = async () => {
        const BASE_URL = URL.BASE_URL;

        const dataGaleria = new FormData();
        //para enviar datos por POST
        dataGaleria.append("id_viaje", id);
        const url = `${BASE_URL}viaje/galeria`
        const options = {
            method: 'POST',
            body: dataGaleria
        };
        const resGaleria = await fetchPost(url, options);

        console.log("Viaje galeria:", resGaleria);
        setGaleria(resGaleria);


    }
    useEffect(() => {
        verGaleria();
    }, []);





    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} >
                {galeria.map((foto, index) => (
                    <SwiperSlide key={foto.foto}> {/* Cambiado de index a foto.foto */}
                        <Image
                            source={{ uri: `https://createtours.com.mx/pictures/galeria/${foto.foto}` }}
                            alt={`Slide ${index + 1}`}
                            width={"100%"}
                            height={"100%"}
                            resizeMode='cover'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
export default SwiperComponent;

