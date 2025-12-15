import { Row, Col } from 'react-bootstrap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import './Desarrollo.css'
import BtnVerMás from '../../Buttons/BtnVerMás/BtnVerMás'

function Desarrollo() {
  return (
    <section className="Desarrollo-Section">
      <Row className="desarrollo-row w-100">

        {/* CONTENEDOR LOTTIE */}
        <Col md={6} className="desarrollo-lottie">
          <div className="lottie-desarrollo-wrapper">
            <DotLottieReact
              className="lottie-desarrollo"
         src="https://lottie.host/861f0347-6f7b-4245-b97f-57d665032da9/TFGMthgQvR.lottie"
              loop
              autoplay
            />
          </div>
        </Col>

        {/* CONTENIDO */}
        <Col md={6} className="desarrollo-content">
          <h3 className="desarrollo-title  fw-bolder">
            DESARROLLO
          </h3>

          <p className="desarrollo-text ">
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

export default Desarrollo