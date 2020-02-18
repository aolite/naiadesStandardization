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

    const createNexusData = (data) => {
        return [
            {name:'Water', value : 100},
            {name:'Energy', value : 4000},
            {name:'Food', value : 300}
        ]
    };

    const transformPieDataFormat = (data) => {
      return Object.keys(data).map((keyItem) => {
          return {
              'name': keyItem,
              'value': data[keyItem]
          }
      })
    };

    const createIctDomainData = (data) => {
        let domain = {};
        data.forEach( (value) => {
            value.domain.forEach((keyItem) => {
                if (domain.hasOwnProperty(keyItem)){
                    domain[keyItem] ++;
                } else {
                    domain[keyItem] = 1;
                }
            });
        });

        return transformPieDataFormat(domain);
        /*return [
            {name: 'High Level Arch.', value: 200},
            {name: 'APIs', value : 100},
            {name: 'Monitoring', value: 50},
            {name: 'Physical systems', value: 25},
            {name: 'Nexus', value: 30},
            {name: 'Customer relationship', value:350}
        ]*/
    };

    const loadData = () => {
        setIsLoading(true);
        setData (Data);
        const updateData = createWordCloud(Data);
        const updateNexusData = createNexusData(Data);
        const updateDomainData = createIctDomainData(Data);
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
