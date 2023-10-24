import React from 'react'
import './style.css'
import ImageHome from '../../assets/imagens/principal.jpg'
import Countdown from '../../components/Contador/CountDown';





export default function Home(){


    return(
        <div className='home'>
            <div className='title'>
                <h2>Graziela e Eduardo</h2>
                <p>06/07/24</p>
            </div>
            <img src={ImageHome} alt='background' className='imageHome'/>

            <div className='contagem'>
               
                <Countdown/>
            </div>

            

        </div>
    )
}