import React from 'react'

const Shopnavbar = () => {
  return (
   
  <div className="site-navbar py-2">
  <div className="search-wrap">
    <div className="container">
      <a href="#" className="search-close js-search-close">
        <span className="icon-close2" />
      </a>
      <form action="#" method="post">
        <input
          type="text"
          className="form-control"
          placeholder="Search keyword and hit enter..."
        />
      </form>
    </div>
  </div>
  <div className="container">
    <div className="d-flex align-items-center justify-content-between">
      <div className="logo">
        <div className="site-logo">
          <a href="index.html" className="js-logo-clone">
          Nostrum Pharma
          </a>
        </div>
      </div>
    
   <div className="icons">
<a href="#" className="icons-btn d-inline-block js-search-open">
  <span className="fa fa-search" />
</a>
<a href="cart.html" className="icons-btn d-inline-block bag">
  <span className="icon-shopping-bag" />
  <span className="number">2</span>
</a>
<a
  href="#"
  className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
>
  <span className="icon-menu" />
</a>
</div>

    </div>
  </div>
</div>
  )
}

export default Shopnavbar