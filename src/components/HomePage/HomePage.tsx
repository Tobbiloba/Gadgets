import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '@mui/material'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper'

import './HomePage.css'

// importing images
import iphone from './image/iphone/iphone14.jpg'
export const HomePage = () => {
  return (
    <div className="HomePage__container">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 52500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper">
          <img src={iphone} alt="iphone-img" className="iphone-img" />
          <div className="homePage__iphone-text">
            <p>New</p>
            <h3>iPhone 14</h3>
            <h1>Big and bigger</h1>
            <Button>Order</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  )
}
