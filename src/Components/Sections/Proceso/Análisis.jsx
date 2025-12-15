import { Row, Col } from 'react-bootstrap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import './Análisis.css'
import BtnVerMás from '../../Buttons/BtnVerMás/BtnVerMás'

function Análisis() {
  return (
    <section className="Analisis-Section">
      <Row className="analisis-row w-100">

        {/* CONTENEDOR LOTTIE */}
        <Col md={6} className="analisis-lottie">
          <div className="lottie-analisis-wrapper">
            <DotLottieReact
              className="lottie-analisis"
              src="https://lottie.host/067270ec-dc43-4672-a87b-8d3180e5fee8/CPDGbcRch3.lottie"
              loop
              autoplay
            />
          </div>
        </Col>

        {/* CONTENIDO */}
        <Col md={6} className="analisis-content">
          <h3 className="analisis-title text-white fw-bolder">
            ANÁLISIS
          </h3>

          <p className="analisis-text text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam nam quasi beatae. Magnam molestias voluptatibus nemo,
            cumque magni et commodi earum eligendi accusamus.
          </p>

          <BtnVerMás />
        </Col>

      </Row>
    </section>
  )
}

export default Análisis
