import { View } from "native-base";
import React from "react";
import { useParams } from "react-router-dom";

const DetalleHotel = () => {

    const { id } = useParams();

    return (
        <View mt={20}>
            <h1>
                Detalle Hoteles  <br />
                id: {id}
            </h1>

        </View>
    )
}
export default DetalleHotel;