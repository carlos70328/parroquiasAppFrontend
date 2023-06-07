import React from 'react'
import Perpetuo from '../assets/Perpetuo1.jpg'
import Perpetuo2 from '../assets/Perpetuo2.jpg'

const Location = () => {
  return (
    <section id="contact" className="contact section-bg mx-2">
      <div className="container">

        <div className="section-title">
          <h2>Nuestra Ubicación</h2>
         </div>
      </div>

      <div className=''>
        <iframe style={{ border: 0, width: "100%", height: "250px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1073466181183!2d-75.91751998476886!3d4.751378942537865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38701c6bfa4267%3A0x27632fa43299f4f3!2sCra.%203%20%2313-60%2C%20Cartago%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1681139402371!5m2!1ses!2sco" allowFullScreen></iframe>
      </div>

      <div className="card my-3" style={{  width: "100%" }} >
            <div id="carouselExample" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active  center-img-card" style={{  width: "100%", height: "200px" }}>
                        <img src={Perpetuo} className="d-block w-75" alt="..."/>
                    </div>
                    <div className="carousel-item  center-img-card" style={{ border: 0, width: "100%", height: "200px" }}>
                        <img src={Perpetuo2} className="d-block w-75" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        <div className="card-body">
            <h5 className="card-title">Parroquia Nuestra Señora del Perpetuo Socorro</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/horarios" className="btn btn-primary">Ver los Horarios</a>
        </div>
    </div>

    </section >
  )
}

export default Location
