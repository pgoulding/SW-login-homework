import React from 'react'
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "../muiTheme";

export const ConfirmDetails = (props) => {
  const classes = useStyles();

  const submitUser = e => {
    e.preventDefault();
    props.toggleLogin(true);
  };

  const previousForm = e => {
    e.preventDefault();
    props.previousStep();
  };

  return (
    <div>
      <h3>Are these details correct?</h3>
      <TextField
        defaultValue={props.values.username}
        InputProps={{
          readOnly: true
        }}
        label="UserName"
        fullWidth="true"
        type="text"
      />
      <TextField
        defaultValue={props.values.firstName}
        InputProps={{
          readOnly: true
        }}
        label="First Name"
        name="firstName"
        fullWidth="true"
        type="text"
      />
      <TextField
        defaultValue={props.values.lastName}
        InputProps={{
          readOnly: true
        }}
        label="Last Name"
        name="lastName"
        fullWidth="true"
        type="text"
      />
      <TextField
        defaultValue={props.values.street}
        InputProps={{
          readOnly: true
        }}
        label="Street"
        name="street"
        fullWidth="true"
        type="text"
      />
      <TextField
        defaultValue={props.values.addressState}
        InputProps={{
          readOnly: true
        }}
        label="State"
        name="addressState"
        fullWidth="true"
        type="text"
      />
      <TextField
        defaultValue={props.values.zipCode}
        InputProps={{
          readOnly: true
        }}
        label="Zip Code"
        name="zipCode"
        fullWidth="true"
        type="text"
      />
      <TextField
        defaultValue={props.values.phoneNumber}
        InputProps={{
          readOnly: true
        }}
        label="Phone Number"
        name="phoneNumber"
        fullWidth="true"
        type="tel"
      />
      <Button
        fullWidth="true"
        className={classes.button}
        onClick={submitUser}
      >
        Confirm Details
      </Button>
      <Button fullWidth="true" onClick={previousForm}>
        🔙Change Details
      </Button>
    </div>
  );
}

export default ConfirmDetails;