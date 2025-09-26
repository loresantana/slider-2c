import { useState } from 'react'
import './App.css'
import Carmy from './assets/lily.jpg'
import Cjoa from './assets/liz.jpg'
import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import Slider3 from './assets/slider3.jpg'
import Slider4 from './assets/slider4.jpg'
import Curs from './assets/cof.webp'
import {Swiper, SwiperSlide }from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay:3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={Slider4} alt="" />
          </SwiperSlide>
        </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Perfume liz</h2>
              <p className="desc">Flora desodorante colônia 100ml</p>
              <p className="preco">R$ 169,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Perfume lily</h2>
              <p className="desc">Fragância feminina romântica que traz o encanto dos lírios em uma nova embalagem cheia de sofisticação</p>
              <p className="preco">R$ 274,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Perfume coffe</h2>
              <p className="desc">Addictive oriental frutal desodorante colônia 100ml</p>
              <p className="preco">R$ 209,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/vVpTkJxv9pk?autoplay=1&mute=1&controls=0&loop=1&playlist=vVpTkJxv9pk&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>
         </section>
        <footer>
          <img src="" alt="" className="logo-footer"/>

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram"/>
            </div>
            <div className="icon">
            <img src="" alt="" id="whatsapp"/>
            </div>
            <div className="icon">
            <img src="" alt="" id="tiktok"/>
            </div>
            <div className="icon">
            <img src="" alt="" id="youtube"/>
            </div>
          </div>
          </footer>
      </main>
    </>
  )
}

export default App
