import React from 'react'

const FooterHome = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-around  py-2 my-4 border-top">
    <div className="d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <i className="bi bi-instagram"></i>
      </a>
      <span className="mb-3 mb-md-0 text-muted">2023 Parroquias App</span>
    </div>

    <div className="d-flex  justify-content-around col-3">
          <a href="https://www.facebook.com/profile.php?id=100091532724492&mibextid=ZbWKwL" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#footer" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#footer" className="google-plus"><i className="bi bi-skype"></i></a>
          <a href="#footer" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
  </footer>
  )
}

export default FooterHome