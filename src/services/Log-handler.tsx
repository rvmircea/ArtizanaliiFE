import axios,{AxiosResponse} from "axios";

const url:string = 'http://localhost:51002/api/users/login';
const log:string = 'http://localhost:51002/api/users/log';

interface User {
    email:string;
    passwrod:string;
}

const LogInUser = async (email:string, password:string) =>{
    const res: AxiosResponse<{jwt:string;}> = await axios.post(url,  {email: email, password: password, withCredentials: true});
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
}