import React, { useEffect, useState } from "react"
import { useUser } from "../../helper/UserContext";
import Login from "../../pages/Login";
import { FormControl, Button, Flex, HStack, Heading, Image, Input, Select, Text, VStack, View, Box, Divider } from "native-base";
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

    //viajeros se usa para el json
    const onlyNumbersRegex = /^[0-9]+$/;
    const [AdultoN, setAdultoN] = useState(0);
    const [AdultoE, setAdultoE] = useState(0);
    const [ninoN, setNinoN] = useState(0);
    const [ninoE, setNinoE] = useState(0);
    const [fecha, setFecha] = useState("");
    const [totalMxn, setTotalMxn] = useState(0);

    const { precioUSD } = useUser();
    const [total, setTotal] = useState(0);


    //datos cliente
    const [nombre, setNombre] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [codigo, setCodigo] = useState("");


    //info del viaje
    const [json, setJson] = useState(null);

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
    }, []);



    const Precios = () => {

        return (
            <>

                <VStack space={2} >
                    <Text bold fontSize="lg">
                        Precios:
                    </Text>

                    <Text fontSize="md">
                        Adulto Nacional:<Text bold> ${viajeSeleccionado.PrecioAdultoNacional}</Text>
                    </Text>

                    <Text fontSize="md">
                        Adulto Extranjero: <Text bold>
                            ${viajeSeleccionado.PrecioAdultoExtranjero}
                        </Text>
                    </Text>


                    <Text fontSize="md">
                        Niño Nacional: <Text bold>${viajeSeleccionado.PrecioInfantilNacional} </Text>
                    </Text>
                    <Text fontSize="md">
                        Niño Extranjero: <Text bold>
                            ${viajeSeleccionado.PrecioInfantilExtranjero}
                        </Text>
                    </Text>


                </VStack>

            </>

        )
    }

    const SelectTour = () => {

        return (
            <VStack w="100%">
                <Text bold>
                    Selecciona el Tour:
                </Text>
                <Select
                    placeholder=" Selecciona el Tour"
                    minWidth={64}
                    selectedValue={viajeSeleccionado}
                    onValueChange={(e) => handleSelectChange(e)}

                >
                    {viajes.map(viaje => (
                        <Select.Item key={viaje.ID} label={viaje.Titulo} value={viaje.ID} />
                    ))}
                </Select>

                {viajeSeleccionado ?
                    <HStack justifyContent="center" space={5} w="100%" my={5}>

                        <Image
                            source={{
                                uri: `https://createtours.com.mx/backend/public/Imagenes/viajesportada/${viajeSeleccionado.Foto}`
                            }}
                            alt="Alternate Text"
                            size="2xl"

                        />
                        <VStack>
                            <h3>{viajeSeleccionado.Titulo}</h3>
                            <Precios />
                        </VStack>
                    </HStack>
                    :
                    <Text bold textAlign="center" color="muted.600" my={5} bg="muted.200"
                        fontSize="xl" py={5} borderWidth={1} borderRadius={10}>
                        Ningún tour seleccionado
                    </Text>
                }

            </VStack>
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
    const validateInput = (value) => {
        return onlyNumbersRegex.test(value);
    };




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
    /////////////////////////////////////
    //Falta editar esta funcion!!!!
    const subirVenta = async () => {

        const data = new FormData();
        data.append("codigo", codigo);
        data.append("nombre", nombre);
        data.append("telefono", phone);
        data.append("email", email);
        data.append("viaje", JSON.stringify(json));
        data.append("pagado", true);
        data.append("total", totalMxn);

        const url = "https://createtours.com.mx/backend/public/ventas/guardar"
        const options = {
            method: 'POST',
            body: data
        };
        const res = await fetchPost(url, options);
        console.log("respuesta login", res);

    }

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

        //console.log(json);
        subirVenta();

    }

    const validarVenta = () => {
        let errores = [];
        //validaciones expresiones regulares
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        switch (true) {
            case email.trim() === "":
                errores.push("El campo correo es requerido");
                break;
            // Aquí puedes agregar más validaciones para el correo si lo deseas
            case !correoRegex.test(email.trim()):
                errores.push("El campo correo no es válido");
                break;

            case nombre.trim() === "":
                errores.push("El campo contraseña es requerido");
                break;
            case phone.trim().length < 10:
                errores.push("El teléfono debe tener al menos 10 caracteres");
                break;

            case viajeSeleccionado === null:
                errores.push("Debes seleccionar un viaje");
                break;

            case fecha === "":
                errores.push("Debes seleccionar una fecha");
                break;

            case codigo.trim().length < 6:
                errores.push("El código debe tener al menos 6 caracteres");
                break;
            // Aquí puedes agregar más validaciones para el teléfono si lo deseas

            default:
                // Si no hay errores, el registro es válido

                handleAgregar()

                break;
        }

        if (errores.length > 0) {
            // Si hay errores, puedes manejarlos de la manera que prefieras,
            // como mostrarlos en la interfaz de usuario o hacer otras acciones
            console.log("Errores al iniciar sesion:");
            errores.forEach((error) => console.log(error));
            errores.forEach((error) => window.alert(error));
        }


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
        <View w="100%" mt={{ base: -5, md: 12 }} mb={10}>
            <Heading my={5} fontSize="2xl" >
                Agregar nueva venta
            </Heading>



            <Flex display={loading ? "flex" : "none"}>
                <Loader texto="Cargando. . ." />
            </Flex>


            <VStack display={loading ? "none" : "flex"} mt={3}>
                <VStack space={1} bg="muted.100" p={2} borderRadius={10} shadow={5} mb={5}>
                    <Text bold fontSize="xl">Datos del cliente: </Text>
                    {/* DAtos del cliente */}
                    <FormControl>
                        <VStack>
                            <FormControl.Label>Nombre</FormControl.Label>
                            <Input
                                placeholder="Nombre"
                                value={nombre}
                                onChangeText={(text) => setNombre(text)}
                            />
                        </VStack>

                        <VStack>
                            <FormControl.Label>Teléfono</FormControl.Label>
                            <Input
                                placeholder="Teléfono"
                                value={phone}
                                onChangeText={(text) => setPhone(text)}
                                keyboardType="phone-pad"
                            />
                        </VStack>
                        <VStack>
                            <FormControl.Label>Correo electrónico</FormControl.Label>
                            <Input
                                placeholder="Correo electrónico"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                keyboardType="email-address"
                            />
                        </VStack>
                        <VStack>
                            <FormControl.Label>Código</FormControl.Label>
                            <Input
                                placeholder="Código"
                                value={codigo}
                                onChangeText={(text) => setCodigo(text)}
                            />
                        </VStack>

                    </FormControl>
                </VStack>

                <SelectTour />
                {/* datos del tour  */}
                <>
                    {
                        viajeSeleccionado
                            ?
                            <>


                                <HStack space={5}>
                                    <FechaPick />


                                    {/* Cantidad de viajeros */}
                                    <VStack mt={5} space={5} borderRadius={10} shadow={10} borderWidth={1} p={2} borderColor={"muted.300"}>
                                        <Text bold fontSize="md">
                                            Numero de Viajeros:
                                        </Text>
                                        <HStack justifyContent="center" alignItems="center" space={5}>
                                            <VStack>
                                                <Text fontSize="sm"># Adulto Nacional: </Text>
                                                <Input
                                                    placeholder="Adulto Nacional"
                                                    onChangeText={(text) => validateInput(text) && setAdultoN(text)}
                                                    keyboardType="numeric"
                                                    value={AdultoN}
                                                />
                                            </VStack>

                                            <VStack>
                                                <Text fontSize="sm"># Adulto Extranjero</Text>
                                                <Input
                                                    placeholder="Adulto Extranjero"
                                                    onChangeText={(text) => validateInput(text) && setAdultoE(text)}
                                                    keyboardType="numeric"
                                                    value={AdultoE}
                                                />
                                            </VStack>
                                        </HStack>

                                        <HStack justifyContent="center" alignItems="center" space={5}>
                                            <VStack>
                                                <Text fontSize="sm"># Niño Nacional</Text>
                                                <Input
                                                    placeholder="Niño Nacional"
                                                    onChangeText={(text) => validateInput(text) && setNinoN(text)}
                                                    keyboardType="numeric"
                                                    value={ninoN}
                                                />
                                            </VStack>

                                            <VStack>
                                                <Text fontSize="sm"># Niño Extranjero</Text>
                                                <Input
                                                    placeholder="Niño Extranjero"
                                                    onChangeText={(text) => validateInput(text) && setNinoE(text)}
                                                    keyboardType="numeric"
                                                    value={ninoE}
                                                />
                                            </VStack>

                                        </HStack>
                                    </VStack>
                                </HStack>

                                <Divider mt={6} />
                                <CuentaTotal />


                                <Button shadow={6} w="60%" alignSelf="center"
                                    colorScheme="primary"
                                    onPress={() => {
                                        validarVenta()
                                    }}
                                >
                                    Agregar Venta
                                </Button>

                            </>
                            :
                            null

                    }

                </>


            </VStack>

        </View>
    );

}
export default AgregarVenta;