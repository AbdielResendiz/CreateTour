import React, { useEffect, useState } from "react"
import { useUser } from "../../helper/UserContext";
import Login from "../../pages/Login";
import { Box, Button, Flex, HStack, Heading, Image, Input, Select, Text, VStack, View } from "native-base";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import fetchPost from "../../helper/fetchPost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';


const AgregarVenta = (props) => {

    const navigate = useNavigate();
    const [tipo, setTipo] = useState(null);
    const [userId, setUserId] = useState(null);
    const [viajeSeleccionado, setViajeSeleccionado] = useState(null);
    const [viajes, setViajes] = useState([]);
    const [loading, setLoading] = useState(false);
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const [startDate, setStartDate] = useState(new Date());
    const [fecha, setFecha] = useState("");
    const { precioUSD } = useUser();

    const formatearFecha = () => {
        let fechaFormato = format(startDate, 'dd/MM/yyyy');
        setFecha(fechaFormato)
    };

    useEffect(() => {
        formatearFecha()
    }, [startDate])




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
            <>
                {
                    viajeSeleccionado !== null ?
                        <VStack mt={5} space={5} >
                            <Text bold fontSize="md">
                                Precios:
                            </Text>
                            <HStack justifyContent="center" alignItems="center" space={10}>

                                <Text fontSize="xs">
                                    Precio Adulto Nacional: ${viajeSeleccionado.PrecioAdultoNacional}
                                </Text>

                                <Text fontSize="xs">
                                    Precio Adulto Extranjero: ${viajeSeleccionado.PrecioAdultoExtranjero}
                                </Text>

                            </HStack>

                            <HStack justifyContent="center" alignItems="center" space={10}>
                                <Text fontSize="xs">
                                    Precio Niño Nacional: ${viajeSeleccionado.PrecioInfantilNacional}
                                </Text>
                                <Text fontSize="xs">
                                    Precio Niño Extranjero: ${viajeSeleccionado.PrecioInfantilExtranjero}
                                </Text>

                            </HStack>
                        </VStack>
                        : null
                }
            </>

        )
    }

    const FechaPick = () => {

        return (
            <>
                <HStack alignSelf="center" >
                    <VStack>
                        <VStack>
                            <Text bold p={1} m={1} fontSize="lg" > Fecha del tour: {fecha}</Text>
                            <DatePicker selected={startDate}
                                onChange={(date) => setStartDate(date)} inline />

                        </VStack>
                    </VStack>
                </HStack>
            </>
        )
    }


    //viajeros

    const onlyNumbersRegex = /^[0-9]+$/;
    const [AdultoN, setAdultoN] = useState(0);
    const [AdultoE, setAdultoE] = useState(0);
    const [ninoN, setNinoN] = useState(0);
    const [ninoE, setNinoE] = useState(0);

    const Viajeros = () => {

        const validateInput = (value) => {
            return onlyNumbersRegex.test(value);
        };

        return (
            <VStack mt={5} space={5}>
                <Text bold fontSize="md">
                    Numero de Viajeros:
                </Text>
                <HStack justifyContent="center" alignItems="center" space={10}>
                    <VStack>
                        <Text fontSize="xs"># Adulto Nacional: </Text>
                        <Input
                            placeholder="Adulto Nacional"
                            onChangeText={(text) => validateInput(text) && setAdultoN(text)}
                            keyboardType="numeric"
                            value={AdultoN}
                        />
                    </VStack>

                    <VStack>
                        <Text fontSize="xs"># Adulto Extranjero</Text>
                        <Input
                            placeholder="Adulto Extranjero"
                            onChangeText={(text) => validateInput(text) && setAdultoE(text)}
                            keyboardType="numeric"
                            value={AdultoE}
                        />
                    </VStack>
                </HStack>

                <HStack justifyContent="center" alignItems="center" space={10}>
                    <VStack>
                        <Text fontSize="xs"># Niño Nacional</Text>
                        <Input
                            placeholder="Niño Nacional"
                            onChangeText={(text) => validateInput(text) && setNinoN(text)}
                            keyboardType="numeric"
                            value={ninoN}
                        />
                    </VStack>

                    <VStack>
                        <Text fontSize="xs">Precio Adulto Extranjero</Text>
                        <Input
                            placeholder="Niño Extranjero"
                            onChangeText={(text) => validateInput(text) && setNinoE(text)}
                            keyboardType="numeric"
                            value={ninoE}
                        />
                    </VStack>
                </HStack>
            </VStack>
        )
    }


    const [total, setTotal] = useState(0);
    const [totalMxn, setTotalMxn] = useState(0);

    //calcular total
    useEffect(() => {
        if (viajeSeleccionado !== null) {
            const subtotalAE = parseFloat((AdultoE * viajeSeleccionado.PrecioAdultoExtranjero).toFixed(2));
            const subtotalAN = parseFloat((AdultoN * viajeSeleccionado.PrecioAdultoNacional).toFixed(2));
            const subtotalIE = parseFloat((ninoE * viajeSeleccionado.PrecioInfantilExtranjero).toFixed(2));
            const subtotalIN = parseFloat((ninoN * viajeSeleccionado.PrecioInfantilNacional).toFixed(2));
            const total = parseFloat((subtotalAE + subtotalAN + subtotalIE + subtotalIN).toFixed(2));
            const totalmxn = parseFloat((total * precioUSD).toFixed(2));
            setTotal(total);
            setTotalMxn(totalmxn);

        }

    }, [viajeSeleccionado, AdultoE, AdultoN, ninoE, ninoN])


    const CuentaTotal = () => {

        return (
            <VStack alignSelf="center" space={3} my={4} justifyContent="center" alignItems="center">
                <Text fontSize="lg">
                    Total: ${total} USD
                </Text>

                <Text fontSize="lg">
                    Total: ${totalMxn} MXN
                </Text>

                <Text italic fontSize="md">
                    NOTA: Se guardara el total en Pesos Mexicanos (MXN)
                </Text>

            </VStack>
        )
    }
    const [json, setJson] = useState(null);

    const handleAgregar = () => {
        setJson(
            [
                {
                    "index": 1,
                    "Viaje": viajeSeleccionado.ID,
                    "Titulo": viajeSeleccionado.Titulo,
                    "Foto": viajeSeleccionado.Foto,
                    "Fecha": fecha,
                    "CantidadAdultos": AdultoN,
                    "CantidadInfantes": ninoN,
                    "CantidadAdultosExtranjeros": AdultoE,
                    "CantidadInfantesExtranjeros": ninoE,
                    "TotalCompra": totalMxn
                }]
        )

    }

    useEffect(() => {
        console.log("json: ", json)
    }, [json]);



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
                <FechaPick />
                <Precios />
                <Viajeros />
                <CuentaTotal />


                <Button
                    colorScheme="primary"
                    onPress={() => {
                        handleAgregar()
                    }}
                >
                    Agregar Venta
                </Button>

            </VStack>

        </View>
    );

}
export default AgregarVenta;