import {useEffect, useState} from 'react'
import Data from "../../data/standards";


export function DataFetcher(props){
    const [data, setData] = useState ({ });
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        setData (Data);
        setLoading(false)
    }, []);

    return (
        props.children ({
            "data": data,
            "loading": loading
        })
    )
}
