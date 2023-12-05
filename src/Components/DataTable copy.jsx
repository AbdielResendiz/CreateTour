import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Backdrop, Fade, Button } from '@mui/material';

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
                                <TableCell>{row.toursInfo}</TableCell>
                                <TableCell>{row.fechaPago}</TableCell>
                                <TableCell>{row.estatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Detalles en Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition

            >
                <Fade in={openModal}>
                    <div>
                        {/* Puedes renderizar detalles aquí */}
                        <h2>Detalles del elemento seleccionado</h2>
                        <p>ID: {selectedItem?.id}</p>
                        <p>Email: {selectedItem?.email}</p>
                        <p>Teléfono: {selectedItem?.telefono}</p>
                        {/* Agrega más detalles según tus datos */}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default DataTable;
