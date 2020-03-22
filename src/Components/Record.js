import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { ReactMic } from "react-mic";
import fire from "../Config/Fire";
import MicIcon from "@material-ui/icons/Mic";
import StopIcon from "@material-ui/icons/Stop";
import { Button } from "@material-ui/core";

export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  onStop(recordedBlob) {
    fire
      .storage()
      .ref()
      .child("something1.wav")
      .put(recordedBlob.blob)
      .then(function(snapshot) {
        console.log("uploaded file");
      });
    console.log("recordedBlob is: ", recordedBlob);
  }

  render() {
    return (
      <div align="center ">
        <ReactMic
          record={this.state.record}
          visualSetting="sinewave"
          onStop={this.onStop}
          strokeColor="white"
          mimeType="audio/wav"
          backgroundColor="#240043"
        />
        <br></br>
        <Button variant="contained" onClick={this.startRecording} type="button">
          <MicIcon></MicIcon>
        </Button>
        <Button variant="contained" onClick={this.stopRecording} type="button">
          <StopIcon></StopIcon>
        </Button>
        {/* <AudioPlayer
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/wirvsvirus-931e0.appspot.com/o/something1.wav?alt=media&token=074a1513-ffc5-448e-8d3c-1d1a37b793c0"
          // src="https://firebasestorage.googleapis.com/v0/b/wirvsvirus-931e0.appspot.com/o/04%20-%20Fe%20Albi%20Makan.mp3?alt=media&token=f9af2284-f5d5-4713-87ef-2161f5048974"
          // src="https://firebasestorage.googleapis.com/v0/b/wirvsvirus-931e0.appspot.com/o/something.mp3?alt=media&token=fc4a4e5f-5e4a-4fbf-9e8a-3fed668296f8"
          onPlay={e => console.log("onPlay")}
          // other props here
        /> */}
      </div>
    );
  }
}

export default Example;
