import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Context} from "../context/ContextProvider";
import Card from "../components/Card";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

function Standards () {
    const {data} = useContext(Context);
    const [spacing] = React.useState(2);
    const classes = useStyles();

    const standardElement = Object.entries(data).length === 0 && data.constructor === Object? null:
        data.map((dataItem, index) => {
        return (
            <Grid key={index} item>
                <Card item={dataItem}/>
            </Grid>
        )
    });

    return (
        <>
            <h1>Water Standards</h1>
            <main>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={spacing}>
                            {standardElement}
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        </>

    )
}

export default Standards;
