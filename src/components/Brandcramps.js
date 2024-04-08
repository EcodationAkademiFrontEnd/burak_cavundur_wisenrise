import React from 'react'
import nail from '../img/indir.png'


const Brandcramps = () => {
  return (
    <section className='sec-bg-black brandcramps'>
            <div>
                <img src={nail}/>
            </div>
            <div className='text-center brandcramps-text'>
                <p>“Herkes kendi talihinin mimarıdır; <i>faber est suae <br/>quisque fortunae. </i>”</p>
            </div>
            <div class="mt-3"><p class="brandcrams-text-s">Appius Claudius Caecus</p></div>
    </section>
  )
}

export default Brandcramps