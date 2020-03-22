import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Logo from "../images/logo.png";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SignIn from "../Components/SignIn";
const useStyles = makeStyles(theme => {
  return {
    body: {
      backgroundColor: "#240043",
      minHeight: "720px"
    },
    signIn: {
      backgroundColor: "white"
    },
    form: {
      margin: "20%",
      backgroundColor: "white",
      width: "50%"
    },
    text: {
      fontWeight: "lighter",
      fontSize: 32,
      alignItems: "left",
      marginLeft: "7%",
      color: "#ff7043"
    }
  };
});

export function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.body}>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <div className={classes.form}>
              <br></br>
              <Typography
                component="h4"
                variant="1"
                align={"left"}
                className={classes.text}
              >
                Login
              </Typography>
              <SignIn className={classes.signIn}></SignIn>
            </div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
