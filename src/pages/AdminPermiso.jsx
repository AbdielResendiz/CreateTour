import React, { useEffect } from "react";
import { useUser } from "../helper/UserContext";
import AdminPanel from "./AdminPanel";
import Login from "./Login";


const AdminPermiso = () => {

  const { tipo, userId } = useUser();




  useEffect(() => {
    // You can add additional logic here if needed
    console.log("tipo user: ", typeof (tipo))
    console.log("ID USER: ", typeof (userId))
  }, [tipo, userId]);

  


  return (
    <>
      {tipo === "1" && userId !== null ? (
        <AdminPanel />
      ) : (
        < Login />
      )}
    </>
  );
}

export default AdminPermiso; 