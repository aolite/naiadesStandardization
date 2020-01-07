import React, {useEffect, useState} from "react";
import L from "leaflet";
import PropTypes from 'prop-types';

function Map(props){
    const [map, setMap] = useState({});
    useEffect( ()=> {
        // create map
        const updatedMap= L.map('mapId', {
            center: props.center,
            zoom: props.zoom,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
        setMap(updatedMap);
    },[props.center, props.zoom]);

    return (
        <div id="mapId" />
    )
}

Map.propTypes = {
    center: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired
};

export default Map
