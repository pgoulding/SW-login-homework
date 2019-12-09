import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import { makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: red,
    third:orange
  },
  status: {
    danger: 'orange',
  },
});


export const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '10px',
    borderColor: "#98012e",
    backgroundColor: "#98012e",
    color: '#fff',
    '&:hover': {
      borderColor: '#f7931d',
      backgroundColor: '#f7931d'
    }
  }
}));


