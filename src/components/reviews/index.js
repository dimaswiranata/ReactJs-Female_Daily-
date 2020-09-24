import React from 'react'

import MR from "components/banner/mr";

import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

const StyledRating = withStyles({
  iconFilled: {
    color: '#DB284E',
  },
  iconHover: {
    color: '#DB284E',
  },
})(Rating);

function review({ data }) {

  const slides = [];

  for (let i=0; i<data.length; i+=1){
    slides.push(
      <SwiperSlide key={`review-${i}`}>
        <div className="p-1 mb-5 rounded-xl mt-1">
          <div className='p-2 border border-gray-500 rounded-xl'>
            {/* row */}
            <div className="flex flex-row border-b border-gray-400 pb-2 mb-1">
              {/* product image */}
              <img
                src={data[i].product.image}
                className="h-16"
                alt={`product -${i}`}
              />
              {/* col */}
              <div>
                {/* product name */}
                <div className="text-sm font-semibold">{data[i].product.name}</div>
                {/* product desc */}
                <div className="text-sm">{data[i].product.desc}</div>
              </div>
            </div>

            {/* star */}
            <div className="flex flex-row justify-between mr-3 items-center">
              <StyledRating
                name="customized-color"
                defaultValue={data[i].star}
                precision={0.1}
                icon={<StarIcon style={{ fontSize: 17 }} />}
                readOnly 
              />
              <div className="text-sm text-gray-400">2 hours ago</div>
            </div>
            {/* comment */}
            <div className="mb-10 text-sm">{data[i].comment}</div>
          </div>
                  
          <div className="flex flex-col justify-center items-center mt-30-">
            {/* user image */}
            <div className="flex mr-2 h-16 w-16 rounded-full bg-gray-500 items-center justify-center">
              <img
                src={`https://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg`}
                className="h-16 w-16 rounded-full"
                alt={`female profile-${i}`}
              />
            </div>
            {/* user name */}
            <div>{data[i].user}</div>
            {/* array profile */}
            <div className="flex flex-row">
              {
                data[i].profile.map((profiles, index) => {
                  var lastIndex = data[i].profile.length -1;
                  return(
                    <div key={`product-${index}`}>
                      <div className='mr-1 text-xs text-gray-600'>{profiles}{index === lastIndex ? ' ' : ','}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  }

  return (
    <div className="px-40 py-3 flex flex-row">
      <div className="w-3/5">
        <div className="text-xl font-extrabold">Latest Reviews</div>
        <div className="flex flex-row justify-between mb-4">
          <div className="text-gray-600">
            So you can make better purchase decision
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="mr-2 text-red-400 font-semibold">
              See more
            </div>
            <ArrowForwardIosIcon style={{ fontSize: 15, marginTop: 2, color: '#fc8181' }}/>
          </div>
        </div>
        <Swiper slidesPerView={2} pagination spaceBetween={5}>
          {slides}
        </Swiper>
      </div>
      <div className="w-2/5">
        <MR/>
      </div>
    </div>
  )
}

export default review