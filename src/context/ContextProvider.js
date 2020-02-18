import React, {useEffect, useState} from "react";
import Data from "../data/standards";

const Context = React.createContext("");

function ContextProvider (props){
    const [data, setData] = useState([]);
    const [wordCloudData, setWordCloudData] = useState([]);
    const [nexusData, setNexusData] = useState([]);
    const [domainData, setDomainData] = useState([]);
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

    const transformPieDataFormat = (data) => {
        return Object.keys(data).map((keyItem) => {
            return {
                'name': keyItem,
                'value': data[keyItem]
            }
        })
    };

    const getJSONfromArrayObject = (data, itemData) =>{
        let jsonData = {};
        data.forEach( (value) => {
            value[itemData].forEach((keyItem) => {
                if (jsonData.hasOwnProperty(keyItem)){
                    jsonData[keyItem] ++;
                } else {
                    jsonData[keyItem] = 1;
                }
            });
        });
        return jsonData;
    };

    const createPieData = (data, itemData) => {
        let domain = getJSONfromArrayObject(data, itemData);
        return transformPieDataFormat(domain);
    };

    const loadData = () => {
        setIsLoading(true);
        setData (Data);
        const updateData = createWordCloud(Data);
        const updateNexusData = createPieData(Data, 'nexus');
        const updateDomainData = createPieData(Data, 'domain');
        setWordCloudData(updateData);
        setNexusData(updateNexusData);
        setDomainData(updateDomainData);
        setIsLoading(false)
    };

    useEffect(()=>{
        loadData();
    }, []);

    return (
        <Context.Provider value={{data,wordCloudData, nexusData, domainData, isLoading}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
