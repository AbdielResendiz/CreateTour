import React from 'react';
import { useUser } from '../helper/UserContext';


const EjemploUseContext = () => {
// ejemplo de como usar useContext para guardar datos globales
  const { userId, login, logout } = useUser();

  
  const handleLogin = () => {
    // Lógica para el inicio de sesión
    login('id_TEST_CUENTA');
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    logout();
  };


    return (<>
     <h1>Blog Articles</h1>
    <div>
      <p>User ID: {userId}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* Otro contenido de la aplicación */}
    </div>
    
    
    </>
   
    );
  };
  
  export default EjemploUseContext;