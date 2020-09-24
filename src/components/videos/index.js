import React from 'react'

import ReactPlayer from 'react-player'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function index() {
  return (
    <div className="px-40 py-6">
      <div className="text-xl font-extrabold">Latest Videos</div>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-gray-600">
          Watch and learn, ladies
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2 text-red-400 font-semibold">
            See more
          </div>
          <ArrowForwardIosIcon style={{ fontSize: 15, marginTop: 2, color: '#DB284E' }}/>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <ReactPlayer url='https://www.youtube.com/watch?v=Zgr_sr3L4QI'  width="660px" height="417px"/>
        <div className="ml-40">
          <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=m4nNmhjmW_M'  width="355px" height="200px" />
          </div>
          <div className="mt-3">
            <ReactPlayer url='https://www.youtube.com/watch?v=2ARHyyjY7jc'  width="355px" height="200px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
