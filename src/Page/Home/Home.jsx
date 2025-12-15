import { useEffect } from 'react'
import { Análisis, Banner, Desarrollo, Evolución, Hero, Service } from '../../Components'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out',
      once: false,
      offset: 0,
    })
    AOS.refresh();
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