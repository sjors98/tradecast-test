import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <video className="App-video" width="800" controls>
        <source src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" type="video/mp4"/>
        We're sory, but your browser does not support HTML video.
      </video>
      <div className="App-sidebar">
        <h1>Timestamps</h1>
        <ul className="App-timestamps">
          <li>
            <span className="Font-light">20 seconds </span>
            Goal
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
