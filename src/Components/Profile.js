import React from "react";
import Profile from "../images/Profile.png";
import Chip from "@material-ui/core/Chip";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    body: {
      backgroundColor: "#240043",
      height: "720px"
    },
    image: {
      marginTop: "10%",
      width: "20%"
    },
    userName: {
      marginTop: "1%",
      borderRadius: "40px",

      width: "13%",
      height: "50px"
    }
  };
});

export default function ProfilePic() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <img src={Profile} className={classes.image}></img>
      <div>
        <Chip className={classes.userName} label="" />
      </div>
    </div>
  );
}
