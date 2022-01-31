import React, { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { servicesVersion } from "typescript";
import { serialize } from "v8";
import services from "../services/Log-handler";

const Inregistrare = () =>{

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (event:SyntheticEvent) =>{
        event.preventDefault();

        await services.CreareUser(nume, prenume, email, password)

        navigate('/Logare');
    }   

    return (
        <div>
            
                <p id='form-inregistrare'>Formular de înregistrare</p>
                <form id='inregistrare-form' onSubmit={submitHandler}>
                <label>
                    Nume
                    <input name="nume" type='text' value={nume} onChange={(event) => {setNume(event.target.value)}}/>
                </label>
                <label>
                    Prenume
                    <input name="prenume" type='text' value={prenume} onChange={(event) => {setPrenume(event.target.value)}}/>
                </label>
                <label>
                    Email
                    <input name="email" type='email' value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                </label>
                <label>
                    Parola
                    <input name="parola" type='password' value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                </label>

                <button id='buttonInregistrare' type="submit">Înregistrare</button>
                </form>
            
            <h4>Ai deja cont ? Logheaza-te <Link to='/logare'> <span id="link-logare"> aici</span> </Link></h4>
        </div>
    )
}

export default Inregistrare;