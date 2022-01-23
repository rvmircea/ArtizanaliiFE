import axios from "axios";

// let axios = require('axios');

const urlAll: string = 'http://localhost:51002/api/produs/all';
const url: string = 'http://localhost:51002/api/produs';


interface Produs {
    id:number,
    denumire: string,
    rating: number,
    pret: number,
    an: number,
    descriere: string,
    producatorId: number
}

// const getAll = async () => {
//     try{
//         const res = await axios.get(url);
//         console.log(res.data);
        
//     }catch(err){
//         console.error(err)
//     }
// }

// interface Produs {
//     nume: string,
//     pret: number,
//     produsID: number,
//     rating: number,
//     descriere: string,
// }

const getAll = () => {
    const req = axios.get(urlAll);
    return req.then(res => res.data)
}

const createProdus = (obj: Produs) => {
    const req = axios.post(url, obj);
    return req.then(res => res.data)
}

const updateProdus = (id: number, obj: Produs) => {
    const req = axios.put(`${url}/${id}`, obj);
    return req.then(res => res.data)
}

const deleteProdus = (id: number) => {
    const req = axios.delete(`${url}/${id}`);
    return req.then(res => res.data);
}

export default {
    getAll,
    createProdus,
    updateProdus,
    deleteProdus
}

