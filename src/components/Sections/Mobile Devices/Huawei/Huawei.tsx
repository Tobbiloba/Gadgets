import './Huawei.css'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//import images
import mate50Pro from './images/mate50-pro.png'

// import required modules
import { Pagination } from 'swiper'
export const Huawei = () => {
  return (
    <div className="huawei__brand-container">
      <h1 className="huawei__brand-header-text">HUAWEI</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3>
            MATE 50 <span>PRO</span>
          </h3>
          <div className="huawei__container-detail">
            <img src={mate50Pro} alt="mate-50-pro" className="mate50-pro" />
            <div className="huawei__container-details">
              <h4>OS:</h4>
              <p>EMUI 13 (International); HarmonyOS 3.0 (China)</p>
              <h4>Chipset:</h4>
              <p>Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)</p>
              <h4>Internal:</h4>
              <p>256GB 8GB RAM, 512GB 8GB RAM</p>
              <h4>Main Camera:</h4>
              <p>
                50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS 64 MP,
                f/3.5, 90mm
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        {/* <SwiperSlide>Slide 5</SwiperSlide> */}
        {/* <SwiperSlide>Slide 6</SwiperSlide> */}
        {/* <SwiperSlide>Slide 7</SwiperSlide> */}
        {/* <SwiperSlide>Slide 8</SwiperSlide> */}
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      {/* </div> */}
    </div>
  )
}
