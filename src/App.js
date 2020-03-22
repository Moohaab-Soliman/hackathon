import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import RecordBar from "./Components/RecordBar";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile";
import Emoji from "./Components/Emoji";
import Record from "./Components/Record";
import RecordBtn from "./Components/RecordBtn";
import ProfileBtn from "./Components/ProfileBtn";
import TopicField from "./Components/TopicField";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Fire from "./Config/Fire";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Welcome from "./Pages/Welcome";
import Topic from "./Pages/Topic";
import Mood from "./Pages/Mood";
import RecordPage from "./Pages/RecordPage";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged(user => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <header>
          <div>
            <Switch>
              <Route exact path={"/"} component={Welcome} />
              <Route exact path={"/register"} component={Register} />
              <Route exact path={"/profile"} component={Profile} />
              <Route exact path={"/record"} component={RecordPage} />
              <Route exact path={"/topic"} component={Topic} />
              <Route exact path={"/mood"} component={Mood} />
            </Switch>

            {/* <Login></Login>
            <Register></Register>
            <Welcome></Welcome> */}
            {/*  <Profile></Profile> */}
            {/* <TopicField></TopicField> */}
            {/* <RecordPage></RecordPage> */}
            {/* <Menu></Menu> */}
            {/* <Topic></Topic> */}
            {/* <Register></Register> */}
            {/* <Login></Login> //Done */}
            {/* <Mood></Mood> */}
            {/* <RecordBtn></RecordBtn> */}
          </div>
        </header>
      </BrowserRouter>
    );
  }
}

export default App;
