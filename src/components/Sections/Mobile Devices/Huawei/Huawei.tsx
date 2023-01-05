import './Huawei.css'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//import images
import mate50Pro from './images/mate50-pro.png'
import mate50 from './images/mate50.png'
import mate40Pro from './images/mate40-pro.png'
import mate40 from './images/mate40.png'
import matexs from './images/matexs.png'
import matexs2 from './images/mate-xs2-.png'
// import required modules
import { Pagination } from 'swiper'
export const Huawei = () => {
  return (
    <div className="huawei__brand-container">
      <div className="huawei__brand-header">
        <h1 className="huawei__brand-header-text">HUAWEI</h1>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="huawei__mySwiper"
      >
        <SwiperSlide className="huawei__swiper-slide">
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
        <SwiperSlide className="huawei__swiper-slide">
          <h3>MATE 50</h3>
          <div className="huawei__container-detail">
            <img src={mate50} alt="mate-50" className="mate50" />
            <div className="huawei__mate50-container-details">
              <h4>OS:</h4>
              <p>EMUI 13 (International); HarmonyOS 3.0 (China)</p>
              <h4>Chipset:</h4>
              <p>Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)</p>
              <h4>Internal:</h4>
              <p>256GB 8GB RAM, 512GB 8GB RAM</p>
              <h4>Main Camera:</h4>
              <p>
                50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS 12 MP,
                f/3.4 125nm
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="huawei__swiper-slide">
          <h3>
            MATE 40 <span>PRO</span>
          </h3>
          <div className="huawei__mate40-pro-container-detail">
            <img src={mate40Pro} alt="mate40-pro" className="mate40-pro" />
            <div className="huawei__container-details">
              <h4>OS:</h4>
              <p>EMUI 13 (International); HarmonyOS 3.0 (China)</p>
              <h4>Chipset:</h4>
              <p>Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)</p>
              <h4>Internal:</h4>
              <p>256GB 8GB RAM, 512GB 8GB RAM</p>
              <h4>Main Camera:</h4>
              <p>
                50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS 12 MP,
                f/3.4 125nm
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="huawei__swiper-slide">
          <h3>MATE 40</h3>
          <div className="huawei__mate40-pro-container-detail">
            <img src={mate40} alt="mate40-pro" className="mate40-pro" />
            <div className="huawei__container-details">
              <h4>OS:</h4>
              <p>EMUI 13 (International); HarmonyOS 3.0 (China)</p>
              <h4>Chipset:</h4>
              <p>Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)</p>
              <h4>Internal:</h4>
              <p>256GB 8GB RAM, 512GB 8GB RAM</p>
              <h4>Main Camera:</h4>
              <p>
                50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS 12 MP,
                f/3.4 125nm
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="huawei__swiper-slide">
          <h3>
            MATE <span>XS</span>
          </h3>
          <div className="huawei__matexs-container-detail">
            <img src={matexs} alt="mate40-pro" className="mate40xs" />
            <div className="huawei__matexs-container-details">
              <h4>OS:</h4>
              <p>EMUI 13 (International); HarmonyOS 3.0 (China)</p>
              <h4>Chipset:</h4>
              <p>Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)</p>
              <h4>Internal:</h4>
              <p>256GB 8GB RAM, 512GB 8GB RAM</p>
              <h4>Main Camera:</h4>
              <p>
                50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS 12 MP,
                f/3.4 125nm
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="huawei__swiper-slide">
          <h3>
            MATE XS <span className="num">2</span>
          </h3>
          <div className="huawei__mate-xs2-container-detail">
            <img src={matexs2} alt="mate40-pro" className="mate-xs2" />

            <div className="huawei__mate-xs2-container-details">
              <h4>OS:</h4>
              <p>EMUI 13 (International); HarmonyOS 3.0 (China)</p>
              <h4>Chipset:</h4>
              <p>Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)</p>
              <h4>Internal:</h4>
              <p>256GB 8GB RAM, 512GB 8GB RAM</p>
              <h4>Main Camera:</h4>
              <p>
                50 MP, f/1.4-f/4.0, 24mm (wide), PDAF, Laser AF, OIS 12 MP,
                f/3.4 125nm
              </p>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 7</SwiperSlide> */}
        {/* <SwiperSlide>Slide 8</SwiperSlide> */}
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      {/* </div> */}
    </div>
  )
}
