import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function swiper() {
  const slides = [];

  for (let i=0; i<5; i+=1){
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <div className="flex mr-2 h-16 w-16 rounded-full bg-gray-500 items-center justify-center">
          <img
            src={`https://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg`}
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div>title</div>
      </SwiperSlide>
    )
  }

  return (
    <div>
      <Swiper slidesPerView={3} pagination>
        {slides}
      </Swiper>
    </div>
  )
}

export default swiper
