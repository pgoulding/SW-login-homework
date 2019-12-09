import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useStyles } from "../muiTheme";
import './UserProfile.scss'
export const UserProfile = (props) => {
    const classes = useStyles();

    const handleTextChange = e => {
      e.preventDefault()
      props.handleChange(e)
    }
    
    const continueForm = e => {
      e.preventDefault();
      props.nextStep();
    };

    const previousForm = e => {
        e.preventDefault();
        props.previousStep();
    }

  return (
    <div>
      <TextField
        label="UserName"
        defaultValue={props.values.username}
        InputProps={{
          readOnly: true
        }}
        fullWidth="true"
        type="text"
      />
      <TextField
        label="First Name"
        name="firstName"
        fullWidth="true"
        type="text"
        onChange={handleTextChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        fullWidth="true"
        type="text"
        onChange={handleTextChange}
      />
      <TextField
        label="Street"
        name="street"
        fullWidth="true"
        type="text"
        onChange={handleTextChange}
      />
      <TextField
        label="State"
        name="addressState"
        fullWidth="true"
        type="text"
        onChange={handleTextChange}
      />
      <TextField
        label="Zip Code"
        name="zipCode"
        fullWidth="true"
        type="text"
        onChange={handleTextChange}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        fullWidth="true"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={handleTextChange}
      />
      <div className="form_nav-buttons">
        <Button onClick={previousForm} className={classes.button}>
          Previous
        </Button>
        <Button onClick={continueForm} className={classes.button}>
          NEXT
        </Button>
      </div>
    </div>
  );
}

export default UserProfile