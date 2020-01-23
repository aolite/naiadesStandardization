import React, {useEffect, useState} from "react";
import Data from "../data/standards";

const Context = React.createContext("");

function ContextProvider (props){
    const [data, setData] = useState([]);
    const [wordCloudData, setWordCloudData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const createWordCloud = (data) => {
        return data.map(item => {
            return {
                text: item.title,
                url: item.url,
                value: item.title.length
            }
        });
    };


    const loadData = () => {
        setIsLoading(true);
        setData (Data);
        const updateData = createWordCloud(Data);
        setWordCloudData(updateData);
        setIsLoading(false)
    };

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <Context.Provider value={{data,wordCloudData,isLoading}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
