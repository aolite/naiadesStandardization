import React from "react";
import MediaCard from "../components/MediaCard";


function About(){
    return (
        <>
            <MediaCard
                img={'banner.png'}
                title={'About NAIADES'}
                description={' NAIADES’s vision is to support the modernization and digitization of water sector by providing a\n' +
                '    holistic solution for the control and management of water ecosystems. NAIADES aims to address the\n' +
                '    increased need for sustainable and eco-friendly water methodologies by defining a new ICT framework,\n' +
                '    with a wider scope than a sole technical proposition. Driven by the need to yield an end-to-end,\n' +
                '    uniform approach, NAIADES redefines water management by taking into consideration issues pertaining\n' +
                '    to cost, safety, complexity, vulnerability, societal acceptance, user behaviour and ethics'}
            />
        </>
    )
}

export default About;
