import React from 'react'; 
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px 0px 0px 0px"
    }
}));

export default function Input(props) {
    const { name, label, value, error, onChange } = props; 
    const classes = useStyles();
    return (
        <TextField
            className={classes.root}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error: true, helperText: value })}
        />
    )
};
