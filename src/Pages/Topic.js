import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Logo from "../images/logo.png";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Menu from "../Components/Menu";
import TopicField from "../Components/TopicField";
import RecordBtn from "../Components/RecordBtn";
import ProfileBtn from "../Components/ProfileBtn";

const useStyles = makeStyles(theme => {
  return {
    body: {
      backgroundColor: "#240043",
      minHeight: "710px"
    },

    form: {
      margin: "20%",
      // backgroundColor: "white",
      width: "65%",
      height: "450px",
      alignItems: "center",
      marginTop: "15px"
    },
    recordBtn: {
      float: "right",
      display: "flex",

      marginRight: "30px",
      marginTop: "10px"
      // marginBottom: "-60px"
    }
  };
});

export function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.body}>
        <div className={classes.recordBtn}>
          <RecordBtn></RecordBtn>
          <ProfileBtn></ProfileBtn>
        </div>
        <div>
          <Menu></Menu>
        </div>

        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <div className={classes.form}>
              <TopicField></TopicField>
            </div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
