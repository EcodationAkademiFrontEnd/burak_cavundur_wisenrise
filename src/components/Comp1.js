import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import ilberAd from '../img/ilber-ortayli.png'

const Comp1 = () => {
  return (
    <div>
        <section className='sec1'>
            <div className='container'>
            <div className='border-red'></div>
                <div>
                    <h3>Herkesin Bir Potansiyeli Vardır! </h3>
                    <p> Yeni Olasılıkların Kilidini Aç ve Becerilerini Geliştir.</p>
                </div>
                <div className='comp1-bg'>
                    <div className='comp1-cont'>
                        <div className='play-button'>
                            <a href='#'>
                                {/* <span icon={faPlay}></span> */}
                                <FontAwesomeIcon icon={faPlay} size="4x"/>
                            </a>
                        </div>
                        <div className='comp-explanation'>
                            <div>
                                <div className='new-text'><span>Yeni</span></div>
                                <div><img src={ilberAd} height="110" width="auto"/></div>
                                <div className='name-border'></div>
                                <div><p>Hayata Yön Vermek</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='back-black'></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Comp1;