import React from 'react';
import { useUser } from '../helper/UserContext';
import Login from './Login';
import Registro from './Registro';


const Cuenta = () => {
// ejemplo de como usar useContext para guardar datos globales
  const { userId,} = useUser();

    




  



    return (<>
     <h1>Blog Articles</h1>
    <div>
      <p>User ID: {userId}</p>
      
      {/* Otro contenido de la aplicación */}
    </div>
    
    
    </>
   
    );
  };
  
  export default Cuenta;