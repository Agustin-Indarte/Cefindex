import { Row,Col, Container } from 'react-bootstrap'
import './Service.css'

function Service() {
  return (
     <section className='Service-Section d-flex flex-column align-items-center'>
     
        <article className='Text-Section d-flex flex-column justify-content-center align-items-center text-center'>
          <h2 className='Title-Section text-white floating'>NUESTROS SERVICIOS</h2>
          <p className='Description-Section my-3'>
            Desarrollamos herramientas digitales a medida, creadas según las necesidades y objetivos de cada cliente, orientadas a optimizar procesos, mejorar la experiencia de uso y potenciar los resultados de cualquier proyecto o empresa.
          </p>
        </article>

        {/* Espacio reservado para el carrusel */}
        <div className='Service-Carousel-Wrapper'>
          {/* Aquí irá tu carrusel */}
        </div>
   
    </section>
  )
}

export default Service