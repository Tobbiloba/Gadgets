import huawei from './logo/huawei.png'
import iphone from './logo/iphone.png'
import samsung from './logo/samsung.png'
import nokia from './logo/nokia.png'
import xiaomi from './logo/xiaomi.png'
import Marquee from 'react-fast-marquee'
import './MarqueeIcons.css'
export const MarqueeIcons = () => {
  return (
    <div className="Marquee__container">
      <Marquee>
        <img src={iphone} className="Marquee__icons iphone" />
        <img src={samsung} className="Marquee__icons samsung" />
        <img src={huawei} className="Marquee__icons huawei" />
        <img src={xiaomi} className="Marquee__icons xiaomi" />
        <img src={nokia} className="Marquee__icons nokia" />
      </Marquee>
    </div>
  )
}
