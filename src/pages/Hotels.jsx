import React from "react";
import { Box, Image, View, Text, FlatList } from "native-base";
import HotelComponent from "../Components/HotelComponent";



const Hotels = () => {

    const data = [
        {
            ID: "1",
            img: "https://wallpaperaccess.com/full/317501.jpg",
            titulo: "Hotel A",
            lugar: "Playa del Carmen"
        },
        {
            ID: "2",
            img: "https://wallpaperaccess.com/full/317501.jpg",
            titulo: "Hotel B",
            lugar: "Tulum"
        },
        {
            ID: "3",
            img: "https://wallpaperaccess.com/full/317501.jpg",
            titulo: "Hotel C",
            lugar: "Cancún"
        }
    ];



    //Cambia numero de columnas segun el tamaño de pantalla
    const breakpoints = {
        base: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1280,
    };
    // Determina el número de columnas basado en el ancho de la pantalla
    const numColumns =

        window.innerWidth < breakpoints.sm
            ? 1
            : window.innerWidth < breakpoints.md
                ? 1
                : window.innerWidth < breakpoints.lg
                    ? 2
                    : window.innerWidth < breakpoints.xl
                        ? 3
                        : 4; // Puedes ajustar los valores según tus necesidades


    return (
        <View mt={20} w="100%">
            <h1>
                Hoteles
            </h1>

            {/* flatlist de hoteles */}
            <FlatList flex={1} my={20}
                style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                data={data}
                numColumns={3}
                keyExtractor={(item) => item.ID.toString()} // Asume que `item.ID` es único
                renderItem={({ item }) =>

                (
                    <HotelComponent imageUri={item.img} titulo={item.titulo} lugar={item.lugar} id={item.ID} />
                )}

            />




        </View>
    )
}
export default Hotels;