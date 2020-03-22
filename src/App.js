import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import RecordBar from "./Components/RecordBar";
import Menu from "./Components/Menu";
import Profile from "./Components/Profile";
import Mood from "./Components/Mood";
import Record from "./Components/Record";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      {/* <RecordBar></RecordBar> */}
      {/* <Menu></Menu> */}
      {/* <Profile></Profile> */}
      <Mood></Mood>
    </div>
  );
}

export default App;
