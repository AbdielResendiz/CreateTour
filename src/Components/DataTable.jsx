import React, { useState } from 'react';
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

const DataTable = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const data = React.useMemo(
        () => [
            { id: 1, email: 'cabdielr94@gmail.com', telefono: '123456789', toursInfo: 'Tour A', fechaPago: '2022-01-01', estatus: 'Pagado' },
            { id: 2, email: 'usuario2@gmail.com', telefono: '987654321', toursInfo: 'Tour B', fechaPago: '2022-02-01', estatus: 'Pendiente' },
            // Agrega más datos según sea necesario
        ],
        []
    );

    const handleRowClick = (item) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

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
                            <TableCell>Estatus</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id} onClick={() => handleRowClick(row)}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.telefono}</TableCell>
                                <TableCell>
                                    {row.toursInfo}{' '}
                                    <Button variant="outlined" onClick={() => handleRowClick(row)}>
                                        Detalles
                                    </Button>
                                </TableCell>
                                <TableCell>{row.fechaPago}</TableCell>
                                <TableCell>
                                    <FormControl>
                                        <InputLabel>Estatus</InputLabel>
                                        <Select value={row.estatus} label="Estatus">
                                            <MenuItem value="Pagado">Pagado</MenuItem>
                                            <MenuItem value="Pendiente">Pendiente</MenuItem>
                                            {/* Agrega más opciones según tus necesidades */}
                                        </Select>
                                    </FormControl>
                                </TableCell>
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
                        backgroundColor: 'white', // Color de fondo del modal
                        padding: 20, // Ajusta el espaciado según tus necesidades
                        borderRadius: 8, // Ajusta el radio de borde según tus necesidades
                    }}>
                        <DetalleVentaComponent
                            index={1}
                            id={1}
                            titulo={"Chichén Itzá Clásico"}
                            foto={"chichen-clasico.jpg"}
                            subtotal={289.00}
                            fecha={"04/12/2023"}
                            adultoN={2}
                            adultoE={0}
                            kidN={1}
                            kidE={0} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default DataTable;
