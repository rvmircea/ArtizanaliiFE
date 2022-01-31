import React, { useState, useEffect } from "react";
import { json } from "stream/consumers";
import services from "../services/Log-handler";

const Acasa = () =>{
    
    const [user, setUser] = useState(''); 

    useEffect( () => {(
        async () => {
            const res = await services.Log();
            setUser(res.data)
            }
            )();
    },[])
    
    return (
        <div>
            {user? <h3>Bine ai venit {JSON.stringify(user)}</h3> : <></>}
            {/* <h3>Bine ai venit {JSON.stringify(user)}</h3> */}
        </div>
    )
}

export default Acasa