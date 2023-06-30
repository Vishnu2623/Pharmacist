import React from 'react'

const PharmaContent = () => {
  return (
    <div
  className="site-section bg-secondary bg-image"
  style={{ backgroundImage: 'url("images2/bg_2.jpg")' }}
>
  <div className="container">
    <div className="row align-items-stretch">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a
          href="#"
          className="banner-1 h-100 d-flex"
          style={{ backgroundImage: 'url("images2/bg_1.jpg")' }}
        >
          <div className="banner-1-inner align-self-center">
          <h2 style={{padding: "20px", margin: "10px 0"}}>Products</h2>
            <p style={{color:"black"}}>
              Pharmaceutical products are medications and therapeutic substances
              that are developed and produced by Pharmaceutical companies for
              the prevention, diagnosis, treatment and management of various
              medical condition and diseases
            </p>
          </div>
        </a>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a
          href="#"
          className="banner-1 h-100 d-flex"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/high-angle-pill-foils-plastic-containers_23-2148533456.jpg")',
            width: "100%"
          }}
        >
          <div className="banner-1-inner ml-auto  align-self-center">
            <h2 style={{marginTop:"-160px"}}>Medical Store</h2>
            <p style={{color:"black"}}>The nearest medical store are available and buy medicines</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default PharmaContent