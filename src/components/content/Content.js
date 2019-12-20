import React, {useState, useEffect} from 'react'
import Data from '../../data/standards.json'

import CardGrid from './CardGrid'

export default function Content (props){

    const [data, setData] = useState ({ });

    useEffect(() => {
        setData (Data)
    }, [])

    return (
        <>
            <h1> Water Standardization LandScape</h1>
            <h2>Map</h2>
            <h2>Standards</h2>
            <CardGrid data= {data}/>
            <h2>SDOs</h2>
        </>
    )
}