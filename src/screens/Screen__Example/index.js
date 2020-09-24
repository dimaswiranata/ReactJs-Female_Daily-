import React from 'react'

import ReactPlayer from 'react-player'

function index() {
  return (
    <div className="grid grid-cols-2 gap-32">
      <ReactPlayer url='https://www.youtube.com/watch?v=Zgr_sr3L4QI'  width="750px" height="515px"/>
      <div className="ml-3">
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=Zgr_sr3L4QI'  width="450px" height="250px" />
        </div>
        <div className="mt-3">
          <ReactPlayer url='https://www.youtube.com/watch?v=Zgr_sr3L4QI'  width="450px" height="250px" />
        </div>
      </div>
    </div>
  )
}

export default index
