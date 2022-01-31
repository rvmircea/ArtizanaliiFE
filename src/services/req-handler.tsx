import axios, {AxiosResponse} from "axios";

// const axios = require('axios').default;

const urlAll: string = 'http://localhost:51002/api/produs/all';
const url: string = 'http://localhost:51002/api/produs';


interface Produs {
    id:number;
    denumire: string;
    rating: number;
    price: number;
    an: number;
    descriere: string;
    producatorId: number; 
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

const getAll = async () => {
    const req:AxiosResponse<Produs[]> = await axios.get<Produs[]>(urlAll);
    return req.data
}

const createProdus = async (obj: Produs) => {
    const req: AxiosResponse<Produs> = await axios.post<Produs>(url, obj);
    return req
}

const updateProdus = async (id: number, obj: Produs) => {
    const req: AxiosResponse<Produs> = await axios.put<Produs>(`${url}/${id}`, obj);
    return req
}

const deleteProdus = async (id: number) => {
    const req = await axios.delete(`${url}/${id}`);
    return req
}

export default {
    getAll,
    createProdus,
    updateProdus,
    deleteProdus
}

