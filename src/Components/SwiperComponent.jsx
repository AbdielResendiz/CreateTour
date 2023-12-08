import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AspectRatio, Image } from 'native-base';
import fetchPost from '../helper/fetchPost';
import URL from '../helper/baseURL';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const SwiperComponent = (props) => {

    const { id } = props;
    //manejar y obtener datos del viaje
    const [galeria, setGaleria] = useState([])

    const verGaleria = async (viaje) => {
        const BASE_URL = URL.BASE_URL;

        const dataGaleria = new FormData();
        //para enviar datos por POST
        dataGaleria.append("id_viaje", parseInt(viaje));
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
        verGaleria(id);
    }, [id]);





    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {galeria.map((foto, index) => (
                    <SwiperSlide key={index}>

                        <Image
                            source={{ uri: `https://createtours.com.mx/pictures/galeria/${foto.foto}` }}
                            alt={`Slide ${index + 1}`}
                            width={"100%"}
                            height={96}
                        />

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperComponent;
