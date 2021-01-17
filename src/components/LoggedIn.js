
import React, { useState, useEffect } from "react";
import facade from "../loginFacade";

function LoggedIn(props) {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
  
    useEffect(() => {
      facade.fetchData().then(data => setDataFromServer(data.msg));
    }, []);
  
    return (
      <div>
        <h2>Data Received from server</h2>
        <h3>{dataFromServer}</h3>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  
  }

  export default LoggedIn;