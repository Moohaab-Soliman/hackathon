import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => {
  return {
    backGround: {
      right: "30%",
      height: "40px",
      width: "40%",
      backgroundColor: "#120027",
      //   padding: "10px ",

      //   alignItems: "center",
      //   border: "2px solid ",
      borderRadius: "30px",
      position: "absolute"
    },
    playBtn: {
      color: "white",
      margin: theme.spacing(0.3)
    },
    groupLeft: {
      width: "1px",
      float: "left",
      marginLeft: "20px",
      display: "flex"
      //   flexDirection: "row"
    },
    groupRight: {
      width: "1px",
      float: "right",
      marginRight: "100px",
      display: "flex"
    }
  };
});

function RecordBar() {
  const classes = useStyles();
  return (
    <div className={classes.backGround}>
      <ButtonGroup className={classes.groupLeft}>
        <Button className={classes.playBtn}>
          <SkipPreviousIcon></SkipPreviousIcon>
        </Button>
        <Button className={classes.playBtn}>
          <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
        </Button>
        <Button className={classes.playBtn}>
          <SkipNextIcon></SkipNextIcon>
        </Button>
      </ButtonGroup>

      <ButtonGroup className={classes.groupRight}>
        <Button className={classes.playBtn}>
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </Button>
        <Button className={classes.playBtn}>
          <BookmarkBorderIcon></BookmarkBorderIcon>
        </Button>
      </ButtonGroup>
    </div>
  );
}
export default RecordBar;
