


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
import slide_image_6 from '../../assets/imagens/image_6.jpg';
import slide_image_7 from '../../assets/imagens/image_7.jpg';
import slide_image_8 from '../../assets/imagens/image_8.jpg';
import slide_image_9 from '../../assets/imagens/image_9.jpg';
import slide_image_10 from '../../assets/imagens/image_10.jpg';
import slide_image_11 from '../../assets/imagens/image_11.jpg';
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
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_6} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_7} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_8} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_9} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_10} alt="slide_image" />
    </SwiperSlide>
    <SwiperSlide
    className="swiper-slide">
    <img  src={slide_image_11} alt="slide_image" />
    </SwiperSlide>
    
    
   
    </Swiper>
    <div className='content'>
    
    <img src={planta} alt='planta'/> 
    <p> Em 2013 nos conhecemos, estudamos por quatro anos juntos e com isso acabamos ficando amigos, mas, nos afastamos. Durante todos esses anos, nós estávamos presentes na vida um do outro, porém, distantes. Sabe quando você tem aquele amigo que você conversa raramente, mas, a amizade continua a mesma?! Assim éramos nós, cada um seguindo a sua vida, não imaginando no que Deus projetou. Em 2019 tudo mudou, nos reaproximamos e começamos a virar grandes amigos, sendo uma caminhada em que cada um com as suas particularidades começava a completar o outro, nos fazendo perceber que não conseguíamos ficar longe novamente. </p>
    <p>Com isso, começamos a conversar sobre namoro e como nós poderíamos ser como casal, e isso foi concretizado no dia 18 de agosto de 2019 com o pedido de namoro, vindo junto dele o primeiro “eu te amo” e a maturidade ao longo dos anos, deixando claro que a nossa escolha de deixar o Senhor trabalhar foi a melhor. Em 3 de janeiro de 2021 ocorreu o nosso noivado, e Deus fez-se presente, abençoando esse novo passo, estando conosco a cada dia e provando-nos que Ele sempre tem o melhor para nós! Graças a Deus estamos aqui para concretizar o que Ele determinou. Com a tão esperada data, O NOSSO CASAMENTO!</p>
    
    
    </div>
    </div>
    </>
    );
  }
  
  export default App; //TROCAR ESSE NOME