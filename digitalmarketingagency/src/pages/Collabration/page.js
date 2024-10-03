'use client'
import React from 'react';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
//import 'swiper/css/autoplay'
export const Collabration = () => {
  return (
    <>
    <div className='flex flex-col gap-4 justify-center text-center py-7'>
      <h1>Our Clients</h1>
      <div className='py-5'>
      <Swiper
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={3}
    autoplay= {{
      delay: 2000,
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>


    ...
  </Swiper>
  </div>
    </div>
  
  </>
  )
}
