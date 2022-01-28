import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../services/Log-handler";


const Logare = () => {

    const [email, setEmail] = useState<string>('');
    const [passwrod, setPassword] = useState<string>('');
    
    const navigate = useNavigate()

    const submitHandler = async (event:SyntheticEvent) =>{
        event.preventDefault();

        const res = await services.LogInUser(email, passwrod);
        console.log(res);
        localStorage.setItem('jwt', res.data.jwt)

        console.log(document.cookie);
        
        // setRedirect(true)
        
        navigate('/Acasa', {replace: true})
        
        
        
        
    }

    return (
        
        <div className="LogInForm">
            <h3>Log In</h3>
            <form onSubmit={submitHandler}>
                <label>
                    Email:
                    <input name="email" type='email' value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                </label>
                <label>
                    Parola:
                    <input name="parola" type='password' value={passwrod} onChange={(event) => {setPassword(event.target.value)}}/>
                </label>

                <button type="submit">Logare</button>
                </form>
            
        </div>
    )
}

export default Logare