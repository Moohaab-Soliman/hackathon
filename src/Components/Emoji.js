import React from "react";
import Emotion1 from "../images/emo1.png";
import Emotion2 from "../images/emo2.png";
import Emotion3 from "../images/emo3.png";
import Emotion4 from "../images/emo4.png";
import Emotion5 from "../images/emo5.png";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Record from "./Record";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    body: {
      backgroundColor: "#240043",
      height: "710px"
    },
    feelText: {
      fontFamily: "Arboria-LightItalic",
      color: "#FFFFFF",
      fontSize: "40px",
      //   float: "left",
      marginRight: "1000px",
      opacity: "24%"
    },

    image: {
      marginRight: "2%",
      width: "15%",
      borderRadius: "150px"
    },
    btnSpecs: {
      width: "20%",
      height: "60px",
      color: "white",
      marginTop: "60px",
      textTransform: "none"
    }
  };
});

export default function ProfilePic() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <br></br>
      <br></br>
      <div>
        <h3 className={classes.feelText}>I feel....</h3>
      </div>
      <Button className={classes.image}>
        <img src={Emotion1}></img>
      </Button>
      <Button className={classes.image}>
        <img src={Emotion2}></img>
      </Button>
      <Button className={classes.image}>
        <img src={Emotion3}></img>
      </Button>
      <Button className={classes.image}>
        <img src={Emotion4}></img>
      </Button>
      <Button className={classes.image}>
        <img src={Emotion5}></img>
      </Button>
      <div className={classes.textSpecs}></div>

      <div>
        <Button
          style={{ backgroundColor: "#D66046" }}
          className={classes.btnSpecs}
        >
          Continue
        </Button>
        {/* <Record></Record> */}
      </div>
    </div>
  );
}
