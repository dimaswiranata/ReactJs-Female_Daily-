import React from 'react'

import FMLogo from "assets/icons/female_daily_icon.png";
import GooglePlay from "assets/icons/google-play-button.png";
import AppStore from "assets/icons/app-store-button.png";
import Twitter from "assets/icons/twitter.png";
import Facebook from "assets/icons/facebook.png";
import Instagram from "assets/icons/instagram.png";
import Youtube from "assets/icons/youtube.png";

function footer() {

  const footer_content = [
    {
      id: 1,
      content: 'About Us'
    },
    {
      id: 2,
      content: 'Feedback'
    },
    {
      id: 3,
      content: 'Contact'
    },
    {
      id: 4,
      content: 'Terms & Conditions'
    },
    {
      id: 5,
      content: 'Privacy Policy'
    },
    {
      id: 6,
      content: 'Help'
    },
    {
      id: 7,
      content: 'Awards'
    },
    {
      id: 8,
      content: 'Newsletter'
    },
  ];

  return (
    <div className="flex flex-row px-40 py-4 border-t border-gray-400">
      <div className="w-3/4 mt-3">
        <div class="grid grid-rows-3 grid-flow-col">
          {
            footer_content.map((item, index) => {
              return(
                <div 
                  key={`footer content-${index}`}
                  className="text-xs font-bold mb-3"
                >
                  {item.content}
                </div>
              )
            })
          }
        </div>
        <div className="mt-4">
          <img 
            src={FMLogo}
            className="h-8"
          />
          <div className="text-gray-600">Copyright © 215-2017 Female Daily Network • All rights reserved</div>
        </div>
      </div>
      <div className="w-1/4  mt-3">
        <div className="text-xs font-bold">Download Our Mobile App</div>
        <div className="flex flex-row mt-3">
          <img
            src={AppStore}
            className="h-8"
          />
          <img
            src={GooglePlay}
            className="h-8 ml-3"
          />
        </div>
        <div className="flex flex-row mt-16">
          <img
            src={Facebook}
            className="h-8"
          />
          <img
            src={Twitter}
            className="h-8 ml-3"
          />
          <img
            src={Instagram}
            className="h-8 ml-3"
          />
          <img
            src={Youtube}
            className="h-8 ml-3"
          />
        </div>
      </div>
    </div>
  )
}

export default footer
