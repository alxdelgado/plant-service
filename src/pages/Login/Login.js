import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Paper,  
    Grid, 
    TextField, 
    Button, 
    FormControlLabel,
    Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Face, Fingerprint } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(2),
    }, 
    padding: {
        padding: theme.spacing(2),
        marginTop: "50px",
        width: "100%"
    }
})); 


function Login() {
    const history = useHistory();
    const classes = useStyles();

    // TO DO: 
        // redirect login to be successful or fail; 

    return (
        <Paper className={classes.padding}>
            <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField is="username" label="Username" type="email" fullWidth autoFocus required />
                    </Grid> 
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Fingerprint />
                    </Grid>
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField is="password" label="Password" type="password" fullWidth required />
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                        <FormControlLabel control={
                            <Checkbox 
                                color="primary"
                            />
                        } label="Remember me" />
                    </Grid> 
                    <Grid item>
                        <Button style={{ textTransform: "none"}} variant="text" color="primary">Forgot Password ?</Button> 
                    </Grid> 
                </Grid>
                <Grid>
                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                </Grid>
            </div>
        </Paper>
    )
};

export default Login;