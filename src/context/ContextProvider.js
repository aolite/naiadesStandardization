import React, {useEffect, useState} from "react";
import Data from "../data/standards";

const Context = React.createContext("");

function ContextProvider (props){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        setData (Data);
        setIsLoading(false)
    }, []);

    return (
        <Context.Provider value={{data,isLoading}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
