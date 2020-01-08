import React, {useEffect, useState} from "react";
import L from "leaflet";

const MapContext = React.createContext("");

function MapProvider (props){

    const updateMarkers = (layer, markersData) => {
        layer.clearLayers();
        markersData.forEach(marker => {
            L.marker(
                marker.latLng,
                { title: marker.title }
            ).addTo(layer);
        });
    };

    const addMarkers = (data) => {
        if (Object.entries(data).length > 0 && data.constructor !== Object){
            return data.map(item => {
                return {
                    title: item.title,
                    latLng:{
                        lat: item.geo.latitude,
                        lng: item.geo.longitude
                    }
                }
            });
        }
        return []
    };

    return (
        <MapContext.Provider value={{
            addMarkers,
            updateMarkers
        }}>
            {props.children}
        </MapContext.Provider>
    )
}

export {MapProvider,MapContext}
