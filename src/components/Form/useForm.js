import React, { useState } from 'react'; 
import styled from 'styled-components';

export function useForm(defaultValues, validateOnChange = false, validate) {

    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target.value;
        setValues({
            ...values, 
            [name]: value
        })
        if (validateOnChange)
        validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(defaultValues);
        setErrors({});
    }

    return {
        values, 
        setValues, 
        errors, 
        setErrors, 
        handleInputChange, 
        resetForm
    }
}

const FormGroup = styled.div`
    margin: 50px auto;
`;


export function Form(props) {
    const { children, ...other } = props;
    return (
        <FormGroup autoComplete="off" {...other}>
            {props.children}
        </FormGroup>
    )
}; 
