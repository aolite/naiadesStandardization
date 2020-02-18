import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Data from "../data/standards";
import StandardizationDetail from "../components/StandardizationDetail";

function StandardDetails () {

    const params = useParams();
    const [standard, setStandard] = useState({});


    const findDataById = (id) => {
        let el = Data.find(standard => standard._id === parseInt(id));
        setStandard(el)
    };

    useEffect(() => {
        findDataById(params.standardId);
    }, []);

    return (
        <>
            <StandardizationDetail standard={standard}/>
        </>
    );
}

export default StandardDetails;
