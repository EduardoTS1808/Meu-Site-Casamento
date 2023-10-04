import React from 'react'
import './style.css'
import ImageHome from './principal.jpg'





export default function Home(){



    return(
        <div className='home'>
            <div className='title'>
                <h2>Eduardo e Graziela</h2>
                <p>21/12/24</p>
            </div>
            <img src={ImageHome} className='imageHome'/>

            <div className='contagem'>
                <h5>Contagem Regressiva</h5>
                <div className='numbers'>
                    <div className='rectangle'>01</div>              
                    <div className='rectangle'>09</div>
                    <div className='rectangle'>03</div>
                    <div className='rectangle'>14</div>

                </div>
            </div>

        </div>
    )
}