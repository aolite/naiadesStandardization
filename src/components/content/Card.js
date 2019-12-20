import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
              <b>Nexus</b>
          </Typography>
          <div className={classes.p}>
          {
              !props.nexus? null:
                    props.nexus.map((item, index) =>(
                        <Chip  key={index} color="primary" label={item} />
                    ))
          }
          </div>

          {
              !props.domain? null: (
                <>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <b>Domain</b>
                  </Typography> 
                  <div className={classes.p}>
                    {
                      props.domain.map((item, index) =>(
                        <Chip  key={index} color= "default" label={item} />
                      ))
                    }
                  </div>
                </>
              )
          }
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
