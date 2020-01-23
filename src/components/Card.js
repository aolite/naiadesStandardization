import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardChip} from "./CardChip";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  p: {
    "padding-bottom": "5%"
    }
});

/*
0:
  id: "ISO/IEC 30128"
  title: "Generic Sensor networks Application Interfaces"
  description: "International Standard that depicts generic sensor network applications’ operational requirements, description of sensor network capabilities, and mandatory and optional interfaces between the applications."
  sdo: "International Standard Organization"
  domain: (2) ["Monitoring & Measurement System", "Architecture Level"]
  nexus: (3) ["Water", "Energy", "Food"]
  url: "https://www.iso.org/standard/53248.html"
  geo: {latitude: 46.204391, longitude: 6.143158}
*/

export default function MediaCard(props) {
  const classes = useStyles();
  let history = useHistory();

  const onHandleClickUrl = () =>{
    console.log('Click...'+ window.location.assign(props.item.url));
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => history.push(`/standard/${props.item._id}`)}>
          <CardContent>

            <Typography gutterBottom variant="h5" component="h2">
              {props.item.title}
            </Typography>
            <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
              {props.item.description}
            </Typography>

            <CardChip title="Nexus" data={props.item.nexus}/>
            <CardChip title="Domain" data={props.item.domain}/>

          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onHandleClickUrl}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
