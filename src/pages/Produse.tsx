import React, { useEffect, useState } from "react";
import services from "../services/req-handler";

interface Produs {
        id:number;
        denumire: string;
        rating: number;
        price: number;
        an: number;
        descriere: string;
        producatorId: number;
}



const Produse = () => {

    // let [produse, setProduse] = useState([] as Produs[]);
    let [produse, setProduse] = useState<Produs[]>([]);

    useEffect( () =>  {
        const fetchData = async () => {
            let res = await services.getAll()
            setProduse(res);
        }
        fetchData();
    }, [])

    const deleteHandler = (id:number) => {
        const deleteData = async () =>{
           await services.deleteProdus(id);
           let temp = produse
           let result = temp.filter(obj => obj.id !== id)
           setProduse(result)
        }
        deleteData();
    }

    return (
        <div className="ListaProduse">
            <h3>Listă produse:</h3>
            <ul>
                    {produse.map( (item:Produs) => 
                    <li key={item.id}>
                        {item.id} id--
                        {item.denumire} - {item.price} lei
                        <button className={'buttonDelete'}onClick={() => deleteHandler(item.id)}> DELETE </button>
                    </li>)}
            </ul>   
        </div>
        
    )
}


export default Produse