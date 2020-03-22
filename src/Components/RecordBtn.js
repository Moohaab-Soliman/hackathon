import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { orange } from "@material-ui/core/colors";
import RecordPage from "../Pages/RecordPage";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  button: {
    borderRadius: 20,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(1, 1),
    color: "#ffffff",
    backgroundColor: "#120027",
    fontSize: theme.typography.pxToRem(14),
    boxShadow: "none",
    "&:active, &:focus": {
      boxShadow: "none"
    },
    iconSize: "large"
  }
});

class RecordBtn extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          type="submit"
          onClick={() => this.nextPath({ RecordPage })}
          size="large"
          startIcon={
            <RadioButtonCheckedIcon
              style={{ color: orange[900], fontSize: 40 }}
            />
          }
          className={classes.button}
        >
          Record
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(RecordBtn);
