import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import './Video.css'

function Video() {

  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className='video' >
        <video 
          className='video__player' 
          loop
          onClick={onVideoPress}
          ref={videoRef}
          src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/7c7e782b840340a4852d64401e68b2e6/?a=1988&br=2508&bt=1254&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610592720&l=202101132051310101890740211C2238AA&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M2czO2Q4NHF5eTMzOzczM0ApZjo5OzU5ZWQ3Nzs0Mzo0OGdxY3JvZ18vZnJfLS1jMTZzcy8tLTEyYjRiXzVgYV41Li86Yw%3D%3D&signature=3ddd7ca8bd132b959458993a9e042486&tk=tt_webid_v2&vl=&vr=" >
        </video>
        <VideoFooter 
          channel='carlyc'
          description='video of carly tik tok'
          song='Summertime - Marc X'
        />
        <VideoSidebar />
    </div>
  )
}

export default Video
