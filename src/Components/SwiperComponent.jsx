import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import fetchPost from '../helper/fetchPost';
import URL from '../helper/baseURL';
import { Box, Image, Center } from 'native-base';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcPrevious, FcNext } from "react-icons/fc";
import Loader from './Loader';


const SwiperComponent = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }} // Personaliza este estilo si es necesario
                onClick={onClick}
            >
                <Box bg="#fff" mt={-8}>
                    <FcNext size={"2rem"} />
                </Box>

            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }} // Personaliza este estilo si es necesario
                onClick={onClick}
            >
                <Center bg="#fff" mt={-8} >
                    <FcPrevious size={"2rem"} /> {/* Puedes cambiar el tamaño aquí */}

                </Center>
            </div>
        );
    }

    const { id } = props;
    //manejar y obtener datos del viaje
    const [galeria, setGaleria] = useState([]);
    const [loading, setLoaing] = useState(false);

    const verGaleria = async () => {
        setLoaing(true);
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
        if (resGaleria) {
            setGaleria(resGaleria);
            setLoaing(false);
        } else {
            window.alert("Error, revisa tu conexión e intenta más tarde")

        }


    }
    useEffect(() => {
        verGaleria();
    }, []);






    return (
        <>
            {
                loading ? <Loader />
                    :
                    <Slider {...settings}>
                        {galeria.map((foto, index) => (
                            <div key={foto.foto}>

                                <Image
                                    source={{
                                        uri: `https://createtours.com.mx/pictures/galeria/${foto.foto}`
                                    }}
                                    alt={foto.foto}
                                    h={96}
                                    w="100%"
                                    resizeMode='cover'

                                />

                            </div>
                        ))}

                    </Slider>
            }



        </>
    );
};

export default SwiperComponent;
