import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Modal,
    Fade,
    Button,
} from '@mui/material';
import DetalleVentaComponent from './DetalleVentaComponent';
import URL from '../helper/baseURL';
import fetchPost from '../helper/fetchPost';
import { FlatList, View } from 'native-base';

const DataTable = () => {
    const [selectedItem, setSelectedItem] = useState([{ "index": 1, "Viaje": 1, "Titulo": "", "Foto": "xploradventurepark.jpg", "Fecha": "", "CantidadAdultos": 0, "CantidadInfantes": 0, "CantidadAdultosExtranjeros": 0, "CantidadInfantesExtranjeros": 0, "TotalCompra": 0 }]);

    const [openModal, setOpenModal] = useState(false);
    const [viajes, setViajes] = useState([]);

    const verVentas = async () => {
        try {
            const BASE_URL = URL.BASE_URL;
            const url = `${BASE_URL}ventas/ver`;
            const options = {
                method: 'POST',
            };
            const res = await fetchPost(url, options);
            setViajes(res);
        } catch (error) {
            console.error('Error al obtener datos de viajes:', error);
        }
    };

    useEffect(() => {
        // Llama a la función para obtener los datos de viajes cuando el componente se monta
        verVentas();
    }, []);

    const handleRowClick = (item) => {
        try {

            setSelectedItem(JSON.parse(item));
            setOpenModal(true);
        } catch (error) {
            console.error('Error al parsear el objeto JSON:', error);
        }
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setOpenModal(false);
    };



    const headerText = {
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#eeeeee',
        borderStyle: 'solid',
    };



    return (
        <View w={"100%"} mb={10} >
            <TableContainer component={Paper}>
                <Table>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#11003a' }}>
                            <TableCell style={headerText} >ID</TableCell>
                            <TableCell style={headerText} >Código</TableCell>
                            <TableCell style={headerText} >Email</TableCell>
                            <TableCell style={headerText} >Teléfono</TableCell>
                            <TableCell style={headerText} >Tours Info</TableCell>
                            <TableCell style={headerText} >Fecha de pago</TableCell>
                            {/* <TableCell>Estatus</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viajes.map((row) => (
                            <TableRow key={row.id} >
                                <TableCell>{row.ID}</TableCell>
                                <TableCell>{row.codigo}</TableCell>
                                <TableCell>{row.Email}</TableCell>
                                <TableCell>{row.Telefono}</TableCell>
                                <TableCell style={{ maxWidth: 100 }}>

                                    <Button variant="outlined" onClick={() => { handleRowClick(row.Viaje); }}>
                                        Detalles
                                    </Button>
                                </TableCell>
                                <TableCell>{row.FechaPago}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Detalles en Modal */}
            <Modal open={openModal} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} onClose={handleCloseModal} closeAfterTransition>
                <Fade in={openModal}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 8,
                        width: "auto"
                    }}>

                        <FlatList
                            style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
                            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                            data={selectedItem ? selectedItem : []}
                            keyExtractor={item => item.index}// Usar index como clave
                            renderItem={({ item }) => (
                                <DetalleVentaComponent
                                    key={item.index}
                                    index={item.index}
                                    id={item.Viaje}
                                    titulo={item.Titulo}
                                    foto={item.Foto}
                                    subtotal={item.TotalCompra}
                                    fecha={item.Fecha}
                                    adultoN={item.CantidadAdultos}
                                    adultoE={item.CantidadAdultosExtranjeros}
                                    kidN={item.CantidadInfantes}
                                    kidE={item.CantidadInfantesExtranjeros}
                                />
                            )}
                        />

                    </div>
                </Fade>
            </Modal>
        </View >
    );
};

export default DataTable;
