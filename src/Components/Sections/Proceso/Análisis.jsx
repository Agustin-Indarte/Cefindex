import { Row, Col } from 'react-bootstrap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Análisis.css'

function Análisis() {
  return (

  <section className='Análisis-Section d-flex flex-column align-items-center'>
      <Row className='w-100 align-items-stretch justify-content-center vh-100'>
        <Col md={6} className='d-flex justify-content-center align-items-center h-100 '>
          <DotLottieReact
            className='lottie-analisis'
            src="https://lottie.host/067270ec-dc43-4672-a87b-8d3180e5fee8/CPDGbcRch3.lottie"
            loop
            autoplay
          />
        </Col>

        <Col md={6} className='d-flex flex-column justify-content-center align-items-start text-start h-100'>
          <h3 className='analisis-title text-white fw-bolder'>ANÁLISIS</h3>
          <p className='analisis-text text-white'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nam quasi beatae. Magnam molestias voluptatibus nemo, cumque magni et commodi earum eligendi accusamus.
          </p>
        </Col>
      </Row>
    </section>



  )
}

export default Análisis