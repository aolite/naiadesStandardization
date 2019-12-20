import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from './Card'

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

export default function CardGrid(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          { 
            Object.entries(props.data).length === 0 && props.data.constructor === Object? null:
                props.data.map((dataItem, index) => (
                    <Grid key={index} item>
                        <Card
                            title= {dataItem.title}
                            description = {dataItem.description}
                            nexus = {dataItem.nexus}
                            domain = {dataItem.domain}
                            url = {dataItem.url}
                        />
                    </Grid>
                ))
          } 
        </Grid>
      </Grid>
    </Grid>
  );
}
