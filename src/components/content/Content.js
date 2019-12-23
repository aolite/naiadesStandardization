import React from 'react'


import CardGrid from './CardGrid'
import {DataFetcher} from "./DataFetcher";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Content (){

    return (
        <DataFetcher>
            {
                (obj) => {
                    return (
                        obj.loading ? <CircularProgress color="secondary" /> :
                        <>
                            <h1> Water Standardization LandScape</h1>
                            <h2>Map</h2>
                            <h2>Standards</h2>
                            <CardGrid data= {obj.data}/>
                            <h2>SDOs</h2>
                        </>
                    )
                }
            }
        </DataFetcher>
    )
}
