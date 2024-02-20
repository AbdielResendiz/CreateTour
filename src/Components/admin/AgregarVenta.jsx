import React, { useEffect, useState } from "react"
import { useUser } from "../../helper/UserContext";
import Login from "../../pages/Login";
import { Box, Button, Flex, HStack, Heading, Image, Input, Select, Text, VStack, View } from "native-base";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import fetchPost from "../../helper/fetchPost";
import AsyncStorage from "@react-native-async-storage/async-storage";



const AgregarVenta = (props) => {


    const navigate = useNavigate();

    const [tipo, setTipo] = useState(null);
    const [userId, setUserId] = useState(null);
    const [viajeSeleccionado, setViajeSeleccionado] = useState(null);

    const handleSelectChange = (idViajeSeleccionado) => {
        console.log("ID: ", idViajeSeleccionado)
        const viaje = viajes.find(v => v.ID === idViajeSeleccionado);
        setViajeSeleccionado(viaje);
    };


    useEffect(() => {
        console.log("Viaje Seleccionado: ", viajeSeleccionado)
    }, [viajeSeleccionado])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedUserId = await AsyncStorage.getItem('userId');
                const savedTipo = await AsyncStorage.getItem('tipo');

                setUserId(savedUserId);
                setTipo(savedTipo);
            } catch (error) {
                console.error('Error fetching data from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);



    const [viajes, setViajes] = useState([]);
    const [loading, setLoading] = useState(false);

    const verViajes = async () => {
        setLoading(true);



        const url = 'https://createtours.com.mx/backend/public/admin/agregarVenta/viajes'
        const options = {
            method: 'POST',

        };
        const res = await fetchPost(url, options);

        console.log("Viajes:", res);
        setViajes(res);
        if (res) {
            setLoading(false);
        } else {
            window.alert("Error al cargar Tours, verifica tu conexión e intenta más tarde")
        }



    }
    useEffect(() => {
        verViajes();
    }, [])






    const SelectTour = () => {

        return (
            <VStack w="100%">
                <Text bold>
                    Selecciona el Tour:
                </Text>
                <Select
                    placeholder=" Selecciona el Tour"
                    minWidth={64}
                    onValueChange={(e) => handleSelectChange(e)}

                >
                    {viajes.map(viaje => (
                        <Select.Item key={viaje.ID} label={viaje.Titulo} value={viaje.ID} />
                    ))}
                </Select>

                {viajeSeleccionado && (
                    <HStack alignItems="center" justifyContent="center" space={5} w="100%">

                        <Image
                            source={{
                                uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${viajeSeleccionado.Foto}`
                            }}
                            alt="Alternate Text"
                            size="xl"

                        />
                        <h2>{viajeSeleccionado.Titulo}</h2>
                    </HStack>
                )}

            </VStack>
        )
    }

    const Precios = () => {

        return (
            <VStack mt={5} space={5} display={viajeSeleccionado ? "flex" : "none"}>
                <Text bold fontSize="md">
                    Precios:
                </Text>
                <HStack justifyContent="center" alignItems="center" space={10}>

                    <Text fontSize="xs">Precio Adulto Nacional: $</Text>



                    <Text fontSize="xs">Precio Adulto Extranjero: $ </Text>

                </HStack>

                <HStack justifyContent="center" alignItems="center" space={10}>

                    <Text fontSize="xs">Precio Adulto Nacional</Text>



                    <Text fontSize="xs">Precio Adulto Extranjero</Text>

                </HStack>
            </VStack>
        )
    }

    const FechaPick = () => {

        return (
            <>
                <HStack >
                    <VStack>
                        <Text fontSize="md">Fecha: </Text>

                        <Input placeholder="Ej: 2024-02-19" />
                    </VStack>
                </HStack>
            </>
        )
    }

    const Viajeros = () => {

        return (
            <VStack mt={5} space={5}>
                <Text bold fontSize="md">
                    Numero de Viajeros:
                </Text>
                <HStack justifyContent="center" alignItems="center" space={10}>
                    <VStack>
                        <Text fontSize="xs"># Adulto Nacional</Text>
                        <Input placeholder="Adulto Nacional" />
                    </VStack>

                    <VStack>
                        <Text fontSize="xs">Precio Adulto Extranjero</Text>
                        <Input placeholder="Adulto Extranjeros" />
                    </VStack>
                </HStack>

                <HStack justifyContent="center" alignItems="center" space={10}>
                    <VStack>
                        <Text fontSize="xs">Precio Adulto Nacional</Text>
                        <Input placeholder="Adulto Nacional" />
                    </VStack>

                    <VStack>
                        <Text fontSize="xs">Precio Adulto Extranjero</Text>
                        <Input placeholder="Adulto Extranjeros" />
                    </VStack>
                </HStack>
            </VStack>
        )
    }

    const CuentaTotal = () => {

        return (
            <VStack >
                <Text>
                    $ Total:
                </Text>

            </VStack>
        )
    }


    if (tipo !== "1" && userId === null) {
        return (
            <Login />
        );
    }

    return (
        <View w="100%" mt={24} mb={10}>
            <Heading my={5} >
                Agregar nueva venta
            </Heading>
            <Flex display={loading ? "flex" : "none"}>
                <Loader texto="Cargando. . ." />
            </Flex>


            <VStack display={loading ? "none" : "flex"}>
                <SelectTour />
                <Precios />
                <FechaPick />
                <Viajeros />
                <CuentaTotal />


                <Button
                    colorScheme="primary"
                    onPress={() => {
                        console.log('hello')
                    }}
                >
                    Agregar Venta
                </Button>
            </VStack>

        </View>
    );

}
export default AgregarVenta;