import React from 'react'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import logo1 from "assets/icons/logo1.png";
import logo2 from "assets/icons/logo2.jpg";
import logo3 from "assets/icons/logo3.jpg";
import logo4 from "assets/icons/logo4.jpg";
import logo5 from "assets/icons/logo5.jpg";

function index() {

  const brands = [
    {
      id: 1,
      image: logo1,
    },
    {
      id: 2,
      image: logo2,
    },
    {
      id: 3,
      image: logo3,
    },
    {
      id: 4,
      image: logo4,
    },
    {
      id: 5,
      image: logo5,
    }
  ]

  return (
    <div className="px-40 py-6">
      <div className="text-xl font-extrabold">Top Brands</div>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-gray-600">
          We all know and love
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2 text-red-400 font-semibold">
            See more
          </div>
          <ArrowForwardIosIcon style={{ fontSize: 15, marginTop: 2, color: '#fc8181' }}/>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {
          brands.map((item, index) => {
            return(
              <div 
                key={`brand-${index}`}
                className="flex justify-center items-center"
              >
                <img
                  src={item.image}
                  className="h-16"
                />
              </div>
            )
          })
        }
      </div>
      <div className="text-xl font-bold mt-8">Female Daily -  Find everything you want to know about beauty on Female Daily</div>
      <div className="">
          Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything!
        </div>
        <div className="">
          We are here to be your friendly solution to all things beauty, inside and out!
        </div>
    </div>
  )
}

export default index
