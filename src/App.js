import React from 'react'
import './App.css';
import Video from './Video'

function App() {
  return (
    //BEM - lowercase classnames I believe
    <div className="app">
      <div className='app__videos '>
        <Video 
          url=''
          channel='ccarlyy'
          description='hi Im carly'
          song='summertime- marc x'
          likes={856}
          comments={240}
          shares={40}
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
