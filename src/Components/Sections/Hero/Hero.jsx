import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import './Hero.css'
import Particles from '../../Particles/Particles'


function Hero() {

    const [particles, setParticles] = useState([])
    const [hexagons, setHexagons] = useState([])

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
        }))
        setParticles(newParticles)

        const newHexagons = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 60 + 40,
            opacity: Math.random() * 0.3 + 0.1,
            rotation: Math.random() * 360,
        }))
        setHexagons(newHexagons)
    }, [])


   return (
    <section className='Hero-Section d-flex flex-column justify-content-center align-items-center '>
      
      <Particles />
      

      {/* Contenido original del Hero */}
      <div className='d-flex flex-column justify-content-center align-items-center position-relative' style={{ zIndex: 1 }}>
        <h1 className='Title-Page floating fw-bolder text-white'>Cefindex</h1>
        <h2>ECOSISTEMAS DE GESTIÓN EMPRESARIAL</h2>
        <button>Desarrollamos tu software</button>
      </div>
    </section>
  )
}

export default Hero