import {createContext, useEffect, useState} from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("");

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista] = useState([]);
    const [katLista, setKatLista] = useState([]);
    const [kategoriaLista, setKategoraLista] = useState([]);

    const getAdat = async (vegpont, callbackfv)=>{
        try {
            const response = await myAxios.get(vegpont);
            console.log(response);
            callbackfv(response.data);
            
        }catch(err){
            console.log("Hiba történt az adatok lekéréskor");
        } finally {

        }
    }

    useEffect(()=> {
        getAdat("/receptek",setTermekLista);
        getAdat("/kategoriak",setKategoraLista);
    },[]);

    return(
        <ApiContext.Provider value= {{ termekLista,setTermekLista, katLista, setKatLista, kategoriaLista, setKategoraLista }}>
                {children}
        </ApiContext.Provider>
    )
};
    
