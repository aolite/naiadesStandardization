import React, {useContext} from "react";
import Map from "../components/Map";
import {MapProvider} from "../context/MapProvider";
import {Context} from "../context/ContextProvider";

function Landscape(){
    const {data} = useContext(Context);

    return (
        <main>
            <h2>Landscape Page</h2>
            <MapProvider>
                <Map
                    data = {data}
                    center={[50.8503, 4.3517]}
                    zoom={5}
                />
            </MapProvider>
        </main>
    )
}

export default Landscape
