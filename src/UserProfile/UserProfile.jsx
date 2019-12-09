import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useStyles } from "../muiTheme";

export const UserProfile = (props) => {
    const classes = useStyles();

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
        defaultValue={props.values.userName}
        InputProps={{
          readOnly: true
        }}
        fullWidth="true"
        type="text"
      />
      <Button onClick={previousForm} className={classes.button}>
        Previous
      </Button>
      <Button onClick={continueForm} className={classes.button}>
        NEXT
      </Button>
    </div>
  );
}

export default UserProfile