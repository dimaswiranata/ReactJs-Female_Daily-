import React from 'react'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

import image1 from "assets/images/popular-groups-1.png";
import image2 from "assets/images/popular-groups-2.png";
import image3 from "assets/images/popular-groups-3.png";
import image5 from "assets/images/popular-groups-5.png";

function Popular() {

  const popular_groups = [
    {
      id: 1,
      image: image1,
      caption : 'Embrace the Curl',
      comment : 'May our curls, pop and never stop'
    },
    {
      id: 2,
      image: image2,
      caption : 'Embrace the Curl',
      comment : 'May our curls, pop and never stop'
    },
    {
      id: 3,
      image: image3,
      caption : 'Embrace the Curl',
      comment : 'May our curls, pop and never stop'
    },
    {
      id: 4,
      image: image5,
      caption : 'Embrace the Curl',
      comment : 'May our curls, pop and never stop'
    },
  ]

  return (
    <div className="px-40 py-6">
      <div className="text-xl font-extrabold">Popular Groups</div>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-gray-600">
          Where the beauty TALK are
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2 text-red-400 font-semibold">
            See more
          </div>
          <ArrowForwardIosIcon style={{ fontSize: 15, marginTop: 2, color: '#fc8181' }}/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
          popular_groups.map((item, index) => {
            return(
              <div
                key={`popular-${index}`}
                className="flex flex-col mt-3 mr-1 justify-center items-center border-t border-gray-400 shadow-custom rounded-xl pt-3 pb-12"
              >
                <img
                  src={item.image}
                  className="w-32 h-32 rounded-full object-cover"
                  alt={`image-${index}`}
                />
                <div className="mt-2 mb-4 font-bold">{item.caption}</div>
                <div className="flex flex-row justify-between items-center w-1/2">
                  <div className="flex flex-row justify-center items-center">
                    <PersonSharpIcon style={{ fontSize: 17 }}/>
                    <div>
                      -
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <ListSharpIcon style={{ fontSize: 17 }}/>
                    <div>
                      -
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <ChatOutlinedIcon style={{ fontSize: 17, marginTop: 1 }}/>
                    <div>
                      -
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs font-medium w-40">{item.comment}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Popular
