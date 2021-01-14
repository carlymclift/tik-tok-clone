import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
import './VideoFooter.css'

function VideoFooter() {
  return (
    <div className='videoFooter' >
      <div className='videoFooter__text' >
        <h3>@carlyclift</h3>
        <p>this is a video description</p>
        <MusicNoteIcon />
        <Ticker mode='smooth'>
          {({ index }) => (
            <>
              <h1>Song goes here</h1>
            </>
          )}
        </Ticker>
      </div>
      <img className='videoFooter__record' src='https://static.thenounproject.com/png/934821-200.png' alt='' />
    </div>
  )
}

export default VideoFooter
