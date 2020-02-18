import React, {useContext, useEffect, useState} from "react";
import Map from "../components/Map";
import {MapProvider} from "../context/MapProvider";
import {Context} from "../context/ContextProvider";
import WordCloud from "../components/WordCloud";
import LinearVizChart from "../components/LinearVizChart";
import PieVizChart from "../components/PieVizChart";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    linear: {
        display:"inline-block",
        marginRight:"20%"
    },
    pie: {
        display:"inline-block",
    },
    word: {
        textAlign: "center"
    }
});

function Landscape(){
    const {data, wordCloudData, nexusData, domainData} = useContext(Context);
    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => 0;
    const classes = useStyles();

    console.log(nexusData)

    return (
        <>
            <h1>Water Standardization Landscape</h1>
            <main>
                <div>

                    <p className={'paragraph'}>
                        <span className={'capitalLetter'}><b>"</b></span> The Water Standardization Landscape is a data observatory of current water standards and initiatives
                        related to current interoperability & standardization framework. The Water Standardization Landscape
                        currently stores information about ICT standards, data exchange formats and semantic models. <span className={'capitalLetter'}><b>"</b></span>
                    </p>
                </div>

                <MapProvider>
                    <Map
                        data = {data}
                        center={[50.8503, 4.3517]}
                        zoom={2}
                    />
                </MapProvider>

                <h2 className={classes.word}>Key Figures for Water Standardization</h2>
                <div className={classes.linear}>
                    <PieVizChart
                        data={nexusData}
                        title={'Nexus'}
                        widthSize={480}
                        heighSize={300}
                    />
                </div>

                <div className={classes.pie}>
                    <PieVizChart
                        data={domainData}
                        title={'Domain'}
                        widthSize={480}
                        heighSize={300}
                    />
                </div>

                <div className={classes.word}>
                    <h2>Standards Landscape Cloud</h2>
                    <WordCloud
                        data={wordCloudData}
                        fontSizeMapper={fontSizeMapper}
                        rotate={rotate}
                        onWordClick={(word)=> window.location.assign(word.url) }
                    />
                </div>

            </main>
        </>

    )
}

export default Landscape
