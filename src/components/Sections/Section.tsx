import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper'

// import mobile devices
import {
  Huawei,
  Infinix,
  Iphone,
  Nokia,
  Samsung,
  Tecno,
  Xiaomi,
} from './Mobile Devices/index'
export const Section = () => {
  return (
    <div>
      <Swiper
        direction={'horizontal'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="section__sllider">
          <Huawei />
        </SwiperSlide>
        <SwiperSlide className="section__sllider">
          <Infinix />
        </SwiperSlide>
        <SwiperSlide className="section__sllider">
          <Iphone />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
