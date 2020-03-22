import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import InputAdornment from "@material-ui/core/InputAdornment";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import fire from "../Config/Fire";
import PersonIcon from "@material-ui/icons/Person";
import deepOrange from "@material-ui/core/colors/deepOrange";

const styles = theme => ({
  root: {
    // backgroundColor: '#36486b'
    //backgroundRepeat: 'no-repeat',
    //backgroundColor: '#36486b', // Average color of the background image.
    backgroundPosition: "align-right"
  },

  textfield: {
    //backgroundColor: theme.palette.common.white,
    borderRadius: 5,
    width: 300,
    margin: theme.spacing(1, 0, 2),
    //borderColor: '#ff7043',
    borderColor: "yellow !important"
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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      //username: '',
      email: "",
      password: ""
    };
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)

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
        <Container component="main" maxWidth="xs">
          <div>
            <form className={classes.form} noValidate>
              <TextField
                label="Username"
                id="filled-size-small"
                variant="outlined"
                value={this.state.username}
                onChange={this.handleChange}
                type={"username"}
                name={"username"}
                size="normal"
                className={classes.textfield}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon style={{ color: deepOrange[500] }} />
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />

              <TextField
                label="Email"
                id="filled-size-small"
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange}
                type={"email"}
                name={"email"}
                size="normal"
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

              {/*<TextField
                                label="Password"
                                id="filled-size-small"
                                variant="filled"
                                value={this.state.password}
                                onChange={this.handleChange}
                                type={'password'}
                                name={'password'}
                                size="normal"
                                className={classes.textfield}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />*/}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={this.signup}
              >
                Register
              </Button>
            </form>
          </div>
          <Box mt={1}>
            <Typography variant="body2" color="primary" align="center">
              Already have an account?
              <Link color="inherit" href="/signin">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(SignUp);
