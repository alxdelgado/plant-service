import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/Form/useForm';
import Input from '../../components/Elements/Input';
// import * as employeeService from '../../services/employeeService';

// give default values for signUp form; 
const defaultValues = {
    firstName: "",
    lastName: "", 
    email: "", 
    password: "", 
    city: "", 
    state: "", 
    zipCode: "",
}


export default function SignUpPage() {

    // validate userForm submission; 
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "First name is required."
        if("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "Last name is required."
        if("email" in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid"
        setErrors({
            ...temp
        })
        
        if(fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    // import values from component form; 
    const {
        values, 
        setValues,
        errors,
        setErrors, 
        handleInputChange, 
        resetForm
    } = useForm(defaultValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()) {
            // employeeService.insertEmployee(values)
            resetForm();
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Input 
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                    <Input 
                        label="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                    <Input
                        label="Email" 
                        name="email"
                        value={values.email}
                        error={errors.email}
                        onChange={handleInputChange}
                    />
                    <Input 
                        label="Password"
                        name="password"
                        value={values.password}
                        error={errors.password}
                        onChange={handleInputChange}
                    />
                    <Input 
                        label="City"
                        name="city"
                        value={values.city}
                        error={errors.city}
                        onChange={handleInputChange}
                    />
                    <Input 
                        label="State"
                        name="state"
                        value={values.state}
                        error={errors.state}
                        onChange={handleInputChange}
                    />
                    <Input 
                        label="Zipcode"
                        name="zipCode"
                        value={values.zipCode}
                        error={errors.zipCode}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}