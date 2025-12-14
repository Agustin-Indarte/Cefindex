import React from 'react'
import './Banner.css'
import ButtonCA from '../../Buttons/ButtonCA/ButtonCA'

function Banner() {
  return (
    <section className='Service-Section d-flex flex-column align-items-center'>
      <div className='BannerContact' >
        <video
          className="banner-video"
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="banner-content">

          <h3 className='floating mb-3'>NUESTRO PROCESO DE TRABAJO</h3>
          <ButtonCA />
        </div>
      </div>
    </section>

  )
}

export default Banner