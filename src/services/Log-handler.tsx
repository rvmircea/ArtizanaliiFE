import axios,{AxiosResponse} from "axios";

const url:string = 'http://localhost:51002/api/users/login';
const log:string = 'http://localhost:51002/api/users/log';
const urlCreate = 'http://localhost:51002/api/users/create';

interface User {
    email:string;
    passwrod:string;
}

const LogInUser = async (email:string, password:string) =>{
    const res: AxiosResponse<{jwt:string;}> = await axios.post(url,  {email: email, password: password, withCredentials: true});
    return res
}

const CreareUser = async(nume:string, prenume:string, email:string, password:string) =>{
    const res = await axios.post(urlCreate, {firstName: nume, lastName: prenume, email: email, password: password})
    return res
}

const Log = async () =>{
    const res = await axios.get(log, {headers: {
        authorization: localStorage.getItem('jwt') || ''
    }})
    console.log(res.headers);
    return res;
    
}

export default {
    LogInUser,
    Log,
    CreareUser
}