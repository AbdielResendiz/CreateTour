import React from "react";
import { useParams } from "react-router-dom";

const DetalleViaje = () => {
  const { id } = useParams();

  // Aquí puedes usar el ID para obtener la información del viaje específico
  // y mostrar los detalles del viaje en este componente

  return (
    <div>
      <h2>Detalles del Viaje</h2>
      <p>ID del Viaje: {id}</p>
      {/* Mostrar otros detalles del viaje aquí */}
    </div>
  );
};

export default DetalleViaje;
