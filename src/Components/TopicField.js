import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { blueGrey, deepOrange } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    // backgroundColor: " #212121",
    margin: 20,
    flexGrow: 1,
    height: 64,
    [theme.breakpoints.down("sm")]: {
      height: 70
    },
    boxSizing: "border-box"
  },

  button: {
    //borderRadius: 2,
    padding: theme.spacing(2, 6),
    color: "ffffff",
    backgroundColor: "#ff7043",
    marginTop: "15%",
    "&:hover": {
      backgroundColor: deepOrange[400]
    }
  },
  input: {
    color: "white"
  },
  textField: {
    "& label.Mui-focused": {
      color: "white"
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },

    // : "white",
    marginTop: "50%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      },
      width: "400px"
    }
  }
});

class TopicField extends Component {
  // const { classes } = props;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField
            //id="outlined-secondary"
            label="Write/Choose a Topic"
            variant="outlined"
            input-color="white"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
          />
          <Button
            type="submit"
            //onClick={this.record}
            //fullWidth
            size="large"
            //variant="contained"
            className={classes.button}
          >
            Continue
          </Button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(TopicField);
