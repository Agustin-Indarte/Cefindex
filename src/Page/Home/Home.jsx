import { useEffect } from 'react'
import { Análisis, Banner, Desarrollo, Evolución, Hero, Service } from '../../Components'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out',
      once: true,
      offset: 0,
    })
  }, [])
  return (
    <div>
      <Hero />
      <Service />
      <Banner />

      <Análisis />
      <Desarrollo />
      <Evolución />

    </div>
  )
}

export default Home