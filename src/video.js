import React from 'react'
import VideoFile from './AfraaVideo.mp4';

const App = () => {
  return (
    <div>
      <center>
        <video width="350" height="240" controls>
          <source src = {VideoFile} type="video/mp4" />
        </video>
      </center>
    </div>
  )
}

export default App;