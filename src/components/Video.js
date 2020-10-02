import React, {Component} from 'react';
import Flag from "./Flag";
import CustomMarquee from './Marquee.js'
import ReactPlayer from "react-player";
import data from "../data/data.json"; 

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.reactPlayer = React.createRef();
    this.state = {
      playing: true,
      goal: false,
      card: false,
      halftime: false,
    }

    this.flag = {
      message: [],
      type: [],
    }
  }

  handleProgress = () => {
    let currentTime = this.reactPlayer.current.getCurrentTime();
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
                return this.handleCardFlag(events.player, events.cardType, events.time);  
              }
              break;
            case "endHalf":
              if(currentTime === events.time) {
                return this.handleHalfTime(events.time);  
              }
              break;            
            default:
              break;
        }
    })
  }

  handleGoalFlag = (player, time) => {
    this.flag.message = "Goal by " + player + " at " + time + " seconds";
    this.flag.type = "goal";
    this.setState({ goal: true });
    setTimeout(() => {
      this.setState({ goal: false });
    }, 5000);
  }

  handleCardFlag = (player, cardType, time) => {
    this.flag.message = "Card for " + player + " at " + time + " seconds";
    this.flag.type = "card " + cardType;
    this.setState({ card: true });
    setTimeout(() => {
      this.setState({ card: false });
    }, 5000);
  }

  handleHalfTime = (time) => {
    this.setState({ playing: false });
    this.setState({ halfTime: true });
    setTimeout(() => {
      this.setState({ halftime: false });
      this.setState({ playing: true });
    }, 5000);
  }

  render() {
    let flag;
    if (this.state.goal === true) {
      flag = <Flag message={this.flag.message} type={this.flag.type}/>
    }
    else if (this.state.card === true) {
      flag = <Flag message={this.flag.message} type={this.flag.type}/>
    }
    return (
    <div className='video-wrapper'>
      <ReactPlayer 
        ref={this.reactPlayer}
        url='http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4'
        className='react-player'
        playing={this.state.playing}
        onPlay={() => this.setState({ playing: true })}
        onPause={() => this.setState({ playing: false })}
        controls
        muted
        onProgress={this.handleProgress}
        />
      <CustomMarquee />
      {flag}
    </div>
    )
  }
}