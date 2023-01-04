import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '@mui/material'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper'

import './HomePage.css'

// importing images
import iphone from './image/iphone/iphone14.jpg'
import samsung from './image/samsung/sam3.webp'
import xiaomi from './image/xiaomi/xiaomi1.webp'
import huawei from './image/huawei/huawei4.png'
import nokia from './image/nokia/nokia1.avif'

export const HomePage = () => {
  return (
    <div className="HomePage__container">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
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
            <Button variant="outlined">Order</Button>
            <h5>
              The display has rounded corners that follow a beautiful curved
              design, and these corners are within a standard rectangle. When
              measured as a standard rectangular shape, the screen is
              5.42 inches (iPhone 13 mini, iPhone 12 mini), 5.85 inches
              (iPhone 11 Pro, iPhone XS, iPhone X), 6.06 inches (iPhone 14,
              iPhone 13 Pro, iPhone 13, iPhone 12 Pro, iPhone 12, iPhone 11,
              iPhone XR), 6.12 inches (iPhone 14 Pro).
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper sam">
          <div className="homePage__samsung-text">
            <h2>Samsung for Business</h2>
            <h4>
              Get exclusive deals, volume pricing, free shipping and flexible
              financing on a wide range of Samsung technology for your
              satisfaction.
            </h4>
            <Button variant="contained">Learn more</Button>
          </div>

          <img src={samsung} alt="samsung" className="samsung-img" />
        </SwiperSlide>
        <SwiperSlide className="swiper xiaomi__container">
          <div className="xiaomi__container-text">
            <h1>
              Explore <span>Xiaomi Best</span> Offers
            </h1>
            <p>
              Get up to $200 enhanced trade-in credit when you buy the new
              Xiaomi 12 Ultra
            </p>
            <Button variant="contained">Explore</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="huawei__container-text">
            <h1>
              MATE 40 <span>PRO</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src={huawei} alt="huawei" className="huawei-img" />
        </SwiperSlide>
        <SwiperSlide className="swiper nok">
          <img src={nokia} className="nokia__img" />
          <div className="nokia__container-text">
            <h1>Lorem ipsum</h1>
            <h4>consectetur adipiscing elit.</h4>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
