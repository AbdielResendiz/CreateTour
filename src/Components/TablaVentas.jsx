import React from 'react';
import { useTable } from 'react-table';

const TablaVentas = () => {
  // Datos de ejemplo
  const data = React.useMemo(
    () => [
      { id: 1, email: 'usuario1@example.com', telefono: '123456789', toursInfo: 'Tour A', fechaPago: '2022-01-01', estatus: 'Pagado' },
      { id: 2, email: 'usuario2@example.com', telefono: '987654321', toursInfo: 'Tour B', fechaPago: '2022-02-01', estatus: 'Pendiente' },
      // Agrega más datos según sea necesario
    ],
    []
  );

  // Configuración de columnas
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Teléfono', accessor: 'telefono' },
      { Header: 'Tours Info', accessor: 'toursInfo' },
      { Header: 'Fecha de pago', accessor: 'fechaPago' },
      { Header: 'Estatus', accessor: 'estatus' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaVentas;
