import {useEffect} from 'react'
import { Hero } from '../../Components'
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
    </div>
  )
}

export default Home