import React from "react";
import "./SigninForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { useStyles } from '../muiTheme'

export const SigninForm = props => {
  const classes = useStyles();

  const continueForm = e => {
    e.preventDefault();
    if(props.values.username && props.values.password) {
      props.nextStep();
    } else {
      console.log('Missing values')
    }
  };

  return (
    <div>
      <FormControl>
      <TextField
        onChange={props.handleChange}
        fullWidth="true"
        name="username"
        label="UserName"
        type="text"
        required
      />
      </FormControl>
      <FormControl>
      <TextField
        onChange={props.handleChange}
        fullWidth="true"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      </FormControl>
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
