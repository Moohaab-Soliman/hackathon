import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Logo from "../images/logo.png";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Menu from "../Components/Menu";
import Record from "../Components/Record";
import RecordBtn from "../Components/RecordBtn";
import ProfileBtn from "../Components/ProfileBtn";
import RecordBar from "../Components/RecordBar";

const useStyles = makeStyles(theme => {
  return {
    body: {
      backgroundColor: "#240043",
      minHeight: "710px"
    },
    recordBtn: {
      float: "right",
      display: "flex",

      marginRight: "30px",
      marginTop: "10px"
    },
    recordBar: {},
    record: {
      float: "center",
      marginTop: "19%"
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
        <br></br>
        <div>
          <Menu></Menu>
        </div>
        <div className={classes.record}>
          <Record></Record>
        </div>
        <div className={classes.recordBar}></div>
      </header>
    </div>
  );
}

export default App;
