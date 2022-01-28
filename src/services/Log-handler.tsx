import axios,{AxiosResponse} from "axios";

const url:string = 'http://localhost:51002/api/users/login';
const log:string = 'http://localhost:51002/api/users/log';

interface User {
    email:string,
    passwrod:string
}

const LogInUser = async (email:string, password:string) =>{
    const res = await axios.post<User>(url,  {email: email, password: password, withCredentials: true});
    console.log(res);
}

const Log = async () =>{
    const res = await axios.get(log, {withCredentials: true})
    console.log(res);
    return res;
    
}

export default {
    LogInUser,
    Log,
}