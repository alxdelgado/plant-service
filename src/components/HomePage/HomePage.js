import React from 'react';
import { makeStyles } from '@material-ui/core/';

// styles theme; 
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
})); 

export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Home Page
        </div>
    ) 
}