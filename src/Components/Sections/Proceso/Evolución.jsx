import { Row, Col } from 'react-bootstrap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import './Evolución.css'
import BtnVerMás from '../../Buttons/BtnVerMás/BtnVerMás'
function Evolución() {
 return (
    <section className="Evolución-Section">
      <Row className="evolución-row w-100">

        {/* CONTENEDOR LOTTIE */}
        <Col md={6} className="evolución-lottie">
          <div className="lottie-evolución-wrapper">
            <DotLottieReact
              className="lottie-evolución"
         src="https://lottie.host/861f0347-6f7b-4245-b97f-57d665032da9/TFGMthgQvR.lottie"
              loop
              autoplay
            />
          </div>
        </Col>

        {/* CONTENIDO */}
        <Col md={6} className="evolución-content">
          <h3 className="evolución-title text-white  fw-bolder">
            EVOLUCIÓN
          </h3>

          <p className="evolución-text text-white">
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

export default Evolución