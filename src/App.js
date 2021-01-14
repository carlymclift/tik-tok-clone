import React from 'react'
import './App.css';
import Video from './Video'

function App() {
  return (
    //BEM - lowercase classnames I believe
    <div className="app">
      <div className='app__videos '>
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
