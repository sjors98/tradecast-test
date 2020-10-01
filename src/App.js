import React from 'react';
import Video from './components/Video.js'
import Timestamps from './components/Timestamps.js';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Video />
      <Timestamps />
    </div>
  );
}

export default App;
