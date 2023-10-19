


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './style.css'
import  EffectCoverflow  from 'swiper';

import slide_image_1 from '../../assets/imagens/image_1.jpg';
import slide_image_2 from '../../assets/imagens/image_2.jpg';
import slide_image_3 from '../../assets/imagens/image_3.jpg';
import slide_image_4 from '../../assets/imagens/image_4.jpg';
import slide_image_5 from '../../assets/imagens/image_5.jpg';
import planta from './planta.svg';

function App() {
  return (
    <>
    <div className='title-About'>   <h1 className="heading">Nossa História</h1>  </div>
    <div className="container">
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    }}
    modules={EffectCoverflow}
    className="swiper_container"
    >
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_1} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_2} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_3} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_4} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_5} alt="slide_image" />
    </SwiperSlide>
    
    
   
    </Swiper>
    <div className='content'>
    <h5>Minha amada Graziela</h5>
    <img src={planta}/> 
    <p>
    
    Hoje, neste dia especial, quero expressar todo o amor e gratidão que sinto por você. Em meio a esse turbilhão de emoções, não poderia deixar de reconhecer o quão abençoado sou por tê-la ao meu lado nesta jornada chamada vida.
    </p>
    <p>Desde o momento em que nossos olhares se encontraram pela primeira vez, soube que você era a pessoa que preencheria meu coração de forma única e eterna. Cada sorriso compartilhado, cada abraço apertado e cada conversa sincera reafirmaram o quão especial é o nosso amor.</p>
    
    
    </div>
    </div>
    </>
    );
  }
  
  export default App; //TROCAR ESSE NOME