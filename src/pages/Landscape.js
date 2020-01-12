import React, {useContext, useEffect, useState} from "react";
import Map from "../components/Map";
import {MapProvider} from "../context/MapProvider";
import {Context} from "../context/ContextProvider";
import WordCloud from "../components/WordCloud";

function Landscape(){
    const {data, wordCloudData} = useContext(Context);
    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => 0;

    return (
        <main>
            <div>

                <p className={'paragraph'}>
                    <span className={'capitalLetter'}><b>"</b></span> The Water Standardization Landscape is a data observatory of current water standards and initiatives
                    related to current interoperability & standardization framework. The Water Standardization Landscape
                    currently stores information about ICT standards, data exchange formats and semantic models. <span className={'capitalLetter'}><b>"</b></span>
                </p>
            </div>

            <WordCloud
                data={wordCloudData}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
                onWordClick={(word)=> window.location.assign(word.url) }
            />

            <MapProvider>
                <Map
                    data = {data}
                    center={[50.8503, 4.3517]}
                    zoom={2}
                />
            </MapProvider>
        </main>
    )
}

export default Landscape
