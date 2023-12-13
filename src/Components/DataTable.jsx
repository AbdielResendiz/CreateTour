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
    Backdrop,
    Fade,
    Button,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
} from '@mui/material';
import DetalleVentaComponent from './DetalleVentaComponent';
import URL from '../helper/baseURL';
import fetchPost from '../helper/fetchPost';
import { FlatList } from 'native-base';

const DataTable = () => {
    const [selectedItem, setSelectedItem] = useState([{ "index": 0, "Viaje": 0, "Titulo": "", "Foto": "xploradventurepark.jpg", "Fecha": "", "CantidadAdultos": 0, "CantidadInfantes": 0, "CantidadAdultosExtranjeros": 0, "CantidadInfantesExtranjeros": 0, "TotalCompra": 0 }]);
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
            // console.log("ventas admin: ", res)
            setViajes(res);
        } catch (error) {
            console.error('Error al obtener datos de viajes:', error);
        }
    };

    useEffect(() => {
        // Llama a la función para obtener los datos de viajes cuando el componente se monta
        verVentas();
        console.log("Tipo selected item 1:", typeof (selectedItem))
    }, []);

    const handleRowClick = (item) => {
        const parsedItem = JSON.parse([item]);
        setSelectedItem(parsedItem);
        setOpenModal(true);
    };


    const handleCloseModal = () => {
        setSelectedItem(null);
        setOpenModal(false);
    };

    useEffect(() => {
        console.log("selectedItem actualizado:", selectedItem);
        console.log("selectedItem actualizado tipo:", typeof (selectedItem));
        if (selectedItem && selectedItem.length > 0) {
            console.log("selectedItem ID:", selectedItem[0].Titulo);
        }
    }, [selectedItem]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Teléfono</TableCell>
                            <TableCell>Tours Info</TableCell>
                            <TableCell>Fecha de pago</TableCell>
                            {/* <TableCell>Estatus</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viajes.map((row) => (
                            <TableRow key={row.id} >
                                <TableCell>{row.ID}</TableCell>
                                <TableCell>{row.Email}</TableCell>
                                <TableCell>{row.Telefono}</TableCell>

                                <TableCell style={{ maxWidth: 100 }}>

                                    <Button variant="outlined" onClick={() => handleRowClick(row.Viaje)}>
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
                    }}>


                        <p> {selectedItem ? selectedItem : ''}</p>


                        {/* <FlatList
                            style={{ width: '100%', marginTop: 5, paddingHorizontal: '2vw' }}
                            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                            data={selectedItem ? [selectedItem[0]] : []}
                            keyExtractor={(item, index) => index.toString()} // Usar index como clave
                            renderItem={({ item, index }) => (
                                <DetalleVentaComponent
                                    key={index}
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
                        /> */}

                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default DataTable;
