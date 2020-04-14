import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from '../Hook/useForm';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const validateModal = {
    name: {
      requiredMessage: 'name is required*'
    },
    age: {
      regExp: /^([1-9]+(\.[1-9]+)?)/,
      requiredMessage: 'age is required*',
      warningMessage: 'Must start from 1'
    },
    password: {
      requiredMessage: 'name is required*',
      regExp: /^(?=.*[a-z]).+$/,
      warningMessage: 'Lowercase character pattern'
    },
    lastName: {
      requiredMessage: 'last Name is required*',
    }
}
    
const Form = () => {
    const { values, errors, onFocus, isEnable, handleChange, handleOutsideClick } = useForm(
        {
          name: '',
          lastName: null,
          age: null,
          password: null,
        },
        validateModal
    )
    const handleSave = () => {
        console.log(values, 'values');
    }
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-required"
            label="First Name"
            variant="outlined"
            name="name"
            onChange={handleChange}
            onBlur={handleOutsideClick}
            onFocus={onFocus}
            helperText={errors.name}
            error={errors.name}
          />
          <TextField
            id="outlined-disabled"
            label="Last Name"
            variant="outlined"
            name="lastName"
            onChange={handleChange}
            onBlur={handleOutsideClick}
            onFocus={onFocus}
            helperText={errors.lastName}
            error={errors.lastName}
          />
          <TextField
            id="outlined-disabled"
            label="Age"
            type="number"
            variant="outlined"
            name="age"
            onChange={handleChange}
            onBlur={handleOutsideClick}
            onFocus={onFocus}
            helperText={errors.age}
            error={errors.age}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            onChange={handleChange}
            onBlur={handleOutsideClick}
            onFocus={onFocus}
            helperText={errors.password}
            error={errors.password}
          />
        </div>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSave}
        disabled={isEnable}
      >
        Save
      </Button>
      </form>
    )
};
export default Form;
