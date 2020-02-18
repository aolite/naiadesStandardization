import React from 'react';
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import {MapProvider} from "../context/MapProvider";
import Map from "./Map";

// https://medium.com/@tsubasakondo_36683/4-ways-to-center-a-component-in-material-ui-a4bcafe6688e
const paperStyle = {
    width: '75%',
    display: 'block',
    margin: "2% auto",
    alignItems: 'center',
    padding: '2% 2% 2% 2%',
};

const descriptionStyle = {
    textAlign: "center",
};

const divStyle = {
  paddingTop: "2%"
};

const aStyle = {
    color:'inherit',
    textDecoration: 'none'
};

function StandardizationDetail (props){

    const chipNexusElements = typeof props.standard.nexus !== 'object' ?
        <Chip  key={0} color= "primary" label={props.standard.nexus} />  :
        props.standard.nexus.map((item, index) =>(
            <Chip  key={index} color= "primary" label={item} />
        ));

    const chipDomainElements = typeof props.standard.domain !== 'object' ?
        <Chip  key={0} color= "secondary" label={props.standard.domain} />  :
        props.standard.domain.map((item, index) =>(
            <Chip  key={index} color= "secondary" label={item} />
        ));


    return (
        <>
            <Paper style={paperStyle} elevation={3}>
                <div>
                    <h1><a style={aStyle} href={props.standard.url} target={'_blank'}>{props.standard.title}</a></h1>
                    <Divider />
                    <p style={descriptionStyle}>{props.standard.description}</p>
                    <Divider />
                </div>

                <div style={divStyle}>
                    <span> <b> SDO: </b> {props.standard.sdo}</span>
                </div>
                <div>
                    <p><b>Nexus</b></p>
                    <div>
                    {
                        chipNexusElements
                    }
                    </div>
                </div>
                <div>
                    <p><b>Domain</b></p>
                    <div>
                        {
                            chipDomainElements
                        }
                    </div>
                </div>

                <div style={divStyle}>
                    <MapProvider>
                        <Map
                            data = {props.standard}
                            center={[50.8503, 4.3517]}
                            zoom={2}
                        />
                    </MapProvider>
                </div>

            </Paper>
        </>
    )
}

export default StandardizationDetail;
