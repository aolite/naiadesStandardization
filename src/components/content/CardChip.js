import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    p: {
        "padding-bottom": "5%"
    }
});

export function CardChip (props){
    const classes = useStyles();

    return (
        !props.data? null: (
            <>
                <Typography variant="body2" color="textSecondary" component="p">
                    <b>{props.title}</b>
                </Typography>
                <div className={classes.p}>
                    {
                        props.data.map((item, index) =>(
                            <Chip  key={index} color= "primary" label={item} />
                        ))
                    }
                </div>
            </>
        )
    )
}
