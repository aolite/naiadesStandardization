import React from "react";
import Map from "../components/Map";

function Landscape(){

    return (
        <main>
            <h2>Landscape Page</h2>
            <Map
                center={[50.8503, 4.3517]}
                zoom={5}
            />
        </main>
    )
}

export default Landscape
