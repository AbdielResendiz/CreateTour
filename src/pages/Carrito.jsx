import React from 'react';
import CarritoComponent from '../Components/CarritoComponent';



const Carrito = () => {




    return (<>
    
     <h1>Carrito</h1>

     <CarritoComponent
     id={1} 
     titulo={"Viaje prueba"} 
     foto={"chichen-clasico.jpg"} 
     fecha={"13/12/2023"} 
     adultoN={2} 
     adultoE={1} 
     kidN={0}
     kidE={1} />

    
    
    </>
   
    );
  };
  
  export default Carrito;