import React from "react";
import "./SigninForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from '../muiTheme'

export const SigninForm = props => {
  const classes = useStyles();

  const continueForm = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <TextField 
        onChange={props.handleChange} 
        fullWidth="true" 
        label="UserName" 
        type="text" 
      />
      <TextField
        fullWidth="true"
        label="Password"
        type="password"
        autoComplete="current-password"
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
