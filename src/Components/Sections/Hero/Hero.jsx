import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import './Hero.css'
import Particles from '../../Particles/Particles'
import SubtitleAnimated from '../../Texts/SubtitleAnimated'


function Hero() {

   return (
    <section className='Hero-Section d-flex flex-column justify-content-center align-items-center '>
      
      <Particles />
      
      {/* Contenido original del Hero */}
      <div className='d-flex flex-column justify-content-center align-items-center position-relative' style={{ zIndex: 1 }}>
        <h1 className='Title-Page floating fw-bolder text-white'>Cefindex</h1>
        <SubtitleAnimated />
        <button>Desarrollamos tu software</button>
      </div>
    </section>
  )
}

export default Hero