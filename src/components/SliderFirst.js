import React from 'react'
import { Button } from 'react-bootstrap'

export const SliderFirst = () => {
  return (
    <div className='mt-5'>
        <div className='slider-first-anim'>
            <div className='slider-inner'>
                <div className='container'>
                <div className='slider-inner-text'>
                <div className='border-red ml-0'></div>
                <h2 className='slider-title'>En İyilerden Yüzlerce Eğitim <br/> Videosunu İstediğin Yerde İzle!</h2>
                <p className='slider-title lead'>Wise&Rise ile Olduğun Yerde Durma, İlerle! </p>
                </div>
                <div className='slider-inner-forward'>
                    <div><Button variant="btn-danger">Şimdi İlerle</Button></div>
                    <div className='price-cont'><Button variant="" className='price-btn'>
                    <span class="price"> 59.9 ₺ / Bireysel </span>
                    <span class="price"> 99 ₺ / Aile</span>
                        </Button></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
