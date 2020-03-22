import React from "react";
import Profile from "../images/Profile.png";
import Chip from "@material-ui/core/Chip";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    body: {
      backgroundColor: "#240043"
      // height: "720px"
    },
    image: {
      marginTop: "5%",
      width: "20%",
      marginLeft: "34%",
      borderRadius: "150px"
    },
    userName: {
      marginTop: "2%",
      borderRadius: "40px",
      marginLeft: "42%",
      width: "15%",
      height: "50px"
    }
  };
});

export default function ProfilePic() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/009/723/852/large/metin-seven-metin-seven-3d-print-modeler-toy-character-designer-garfield-cartoon-comic-cat.jpg?1520528841"
          // src={Profile}
          className={classes.image}
        ></img>

        <Chip className={classes.userName} label="User Name" />
      </div>
    </div>
  );
}
