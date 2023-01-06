import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

import {
  MenuBar,
  HomePage,
  MarqueeIcons,
  Comments,
  Section,
} from './components/index'
import './App.css'

function App() {
  return (
    <div>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MenuBar />
          <HomePage />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Comments />
        </SwiperSlide>
        <SwiperSlide>
          <MarqueeIcons />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
