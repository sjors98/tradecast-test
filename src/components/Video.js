import React, {Component} from 'react';
import ReactPlayer from "react-player";
import data from "../data/data.json"; 

export default class Video extends Component {

  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
    	playing: false
    }

    this.goalState = false;
    this.cardState = false;
    this.halfTimeState = false;
  }

  handleProgress = () => {
    let currentTime = this.player.current.getCurrentTime();
    currentTime = Math.floor(currentTime);

    data.events.map((events) => { 
        switch(events.type) {
            case "goal":
              if(currentTime === events.time) {
                return this.handleGoalFlag(events.player, events.time);  
              }
              break;
            case "card":
              if(currentTime === events.time) {
                return this.handleCardFlag(events.player, events.time);  
              }
              break;
            case "endHalf":
              if(currentTime === events.time) {
                return this.handleHalfTime(events.player, events.time);  
              }
              break;            
            default:
              break;
        }
    })
  }

  handleGoalFlag = (player, time) => {
    this.goalState = true;
    console.log("Goal by " + player);  
    console.log("Time = " + time);
    this.goalState = false;
  }

  handleCardFlag = (player, time) => {
    this.cardState = true;
    console.log("Card for " + player);  
    console.log("Time = " + time);
    this.cardState = false;
  }

  handleHalfTime = (player, time) => {
    this.halfTimeState = true;
    console.log("Halftime " + player);  
    console.log("Time = " + time);
    this.halfTimeState = false;
  }

  render() {
    // Detailed options (props) omitted for readability.    
    return (
    <div className='wrapper'>
      <ReactPlayer 
        ref={this.player}
        url='http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4'
        className='react-player'
        playing={this.state.playing}
        controls
        muted
        // progressInterval= {500}
        onProgress={this.handleProgress}
        onPlay={this.handlePlay}
        />
      </div>
    )
  }
}