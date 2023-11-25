import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AspectRatio, Image } from 'native-base';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const SwiperComponent = (array) =>{


    return(
        <>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <AspectRatio w={"100%"} ratio={4 / 1} >
                    <Image source={{
                    uri: "https://createtours.com.mx/backend/public/Imagenes/portada-001.jpg"
                    }} alt="Alternate Text" width={"100%"} height={"auto"} />
                </AspectRatio>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        </>
    );
};

export default SwiperComponent;
