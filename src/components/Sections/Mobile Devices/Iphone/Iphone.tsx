import './Iphone.css'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

//import images
import design1 from './design/design1.webp'
import design4 from './design/design2.jpg'
import design3 from './design/design3.webp'
import design2 from './design/design2.png'

export const Iphone = () => {
  return (
    <div className="iphone__container">
      <div className="iphone__header-text">
        <h1>Iphone</h1>
      </div>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="iphone__mySwiper"
      >
        <SwiperSlide className="iphone__container-slider container1">
          <img src={design1} />
        </SwiperSlide>
        <SwiperSlide className="iphone__container-slider container2">
          <img src={design2} />
        </SwiperSlide>
        <SwiperSlide className="iphone__container-slider container3">
          <img src={design3} alt="iphone" />
          <div className="iphone__container3-details">
            <div className="iphone__selfie-camera">
              <h2>Selfie Camera</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
            <div className="iphone__main-camera">
              <h2>Main Camera</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="iphone__container-slider container4">
          <img src={design4} />
        </SwiperSlide>
        {/* <SwiperSlide className="iphone__container-slider"></SwiperSlide> */}
        {/* <SwiperSlide className="iphone__container-slider"></SwiperSlide> */}
        {/* <SwiperSlide className="iphone__container-slider"></SwiperSlide> */}
        {/* <SwiperSlide className="iphone__container-slider"></SwiperSlide> */}
        {/* <SwiperSlide className="iphone__container-slider"></SwiperSlide> */}
      </Swiper>
    </div>
  )
}
