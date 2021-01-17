import React, { useState, useEffect } from "react";
import dogFacade from "../dogFacade";


const Admin = () => {
    const [adminData, setAdminData] = useState("//TODO")
  
    return (
      <div>
        <h1>Welcome</h1>
        <h2>{adminData}</h2>
      </div>
    );
  };
  
  export default Admin;