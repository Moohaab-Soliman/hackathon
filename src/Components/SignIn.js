import React, { Component } from "react";
import fire from "../Config/Fire";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Image from '../Images/shape2.png';
import InputBase from "@material-ui/core/InputBase";
import PersonIcon from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import deepOrange from "@material-ui/core/colors/deepOrange";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    backgroundRepeat: "no-repeat"
  },
  textfield: {
    "& label.Mui-focused": {
      color: "orange"
    },

    inputColor: "white",

    borderRadius: 5,
    width: 300,
    margin: theme.spacing(1, 0, 2)
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
    color: "#ffffff",
    backgroundColor: "#ff7043",
    "&:hover": {
      backgroundColor: "#bf360c"
    }
  },
  text: {
    fontWeight: "lighter",
    fontSize: 32,
    alignItems: "left",
    color: "#ff7043"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "orange !important"
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.signin = this.signin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  signin(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/*<Grid container component="main"  alignItems={'flex-start'} justify={'flex-start'} lg={3}>*/}

        <Container component="main" maxWidth="xs">
          <Grid item xs={9} lg={9} alignItems={"left"}>
            <br></br>
            <form noValidate>
              <TextField
                label="Email"
                id="filled-size-small"
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange}
                type={"email"}
                name={"email"}
                size="normal"
                textColor="white"
                className={classes.textfield}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon style={{ color: deepOrange[500] }} />
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />

              <TextField
                label="Password"
                id="filled-size-small"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleChange}
                type={"password"}
                name={"password"}
                size="normal"
                backgroundColor="white"
                className={classes.textfield}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon style={{ color: deepOrange[500] }} />
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />

              <Button
                type="submit"
                onClick={this.signin}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Container>

        {/* <Grid item xs={5} lg={8}>
                <img src={Image}/>
            </Grid>
*/}
      </div>
    );
  }
}
export default withStyles(styles)(SignIn);
