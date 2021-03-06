import React from "react";
import "./SigninForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from '../muiTheme'

export const SigninForm = props => {
  const classes = useStyles();

  const continueForm = e => {
    e.preventDefault();
    if(props.values.username && props.values.password) {
      props.nextStep();
    } else {
      // Here I would add some form validation to prompt 
      // the user to continue filling out their signin
      console.log('Missing values')
    }
  };

  return (
    <div>
      <TextField
        onChange={props.handleChange}
        fullWidth="true"
        name="username"
        label="UserName"
        type="text"
        required
      />
      <TextField
        onChange={props.handleChange}
        fullWidth="true"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <Button
        fullWidth="true"
        className={classes.button}
        onClick={continueForm}
      >
        Submit
      </Button>
    </div>
  );
};

export default SigninForm;
