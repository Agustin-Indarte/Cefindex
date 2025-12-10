import './Hero.css'

import { Particles, SubtitleAnimated, BtnDesarrollo } from '../..'


function Hero() {

    return (
        <section className='Hero-Section d-flex flex-column justify-content-center align-items-center '>
            <Particles />

            <article className='Container-Text-HeroSection d-flex flex-column justify-content-center align-items-center'>
                <div data-aos="zoom-in" /* data-aos-delay="0" */ data-aos-duration="600">
                    <h1 className='Title-Page floating fw-bolder text-white mb-0'>Cefindex</h1>
                </div>

                <div  data-aos="zoom-in"  /* data-aos-delay="200" */ data-aos-duration="600">
                    <SubtitleAnimated />
                </div>

                <div data-aos="zoom-in-up" /* data-aos-delay="400" */ data-aos-duration="600">
                    <BtnDesarrollo />
                </div>
            </article>
        </section>
    )
}

export default Hero