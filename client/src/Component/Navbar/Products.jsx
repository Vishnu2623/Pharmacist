import React from 'react'

const Products = () => {
  return (
    <>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="title-section text-center col-12">
          <h2 className="text-uppercase"> New Products</h2>
        </div>
      </div>
      <div className="row">
      
      <div class="col-sm-6 col-lg-4 text-center item mb-4">
  <span class="tag">Sale</span>
  <div class="product-image">
    <a href="addcart">
      <img src="images2/product_01.png" alt="Image" />
    </a>
    <a href="#" class="wishlist-icon"><i class="fas fa-heart"></i></a>
  </div>
  <h3 class="text-dark">
    <a href="addcart">Bioderma</a>
  </h3>
  <p class="price">
    <del>95.00</del> — $55.00
  </p>
  <a href="Ecart" class="btn btn-primary">ADD TO CART</a>
</div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="addcart">
            {" "}
            <img src="images2/product_02.png" alt="Image" />
          </a>
          <a href="" class="wishlist-icon"><i class="fas fa-heart"></i></a>

          <h3 className="text-dark">
            <a href="addcart">Chanca Piedra</a>
          </h3>
          <p className="price">$70.00</p>
          <a href="Ecart" class="btn btn-primary">ADD TO CART</a>
        </div>

        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="addcart">
            {" "}
            <img src="images2/product_03.png" alt="Image" />
          </a>
          <a href="#" class="wishlist-icon"><i class="fas fa-heart"></i></a>

          <h3 className="text-dark">
            <a href="addcart">Umcka Cold Care</a>
          </h3>
          <p className="price">$120.00</p>
          <a href="Ecart" class="btn btn-primary">ADD TO CART</a>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="addcart">
            {" "}
            <img src="images2/product_04.png" alt="Image" />
          </a>
          <a href="#" class="wishlist-icon"><i class="fas fa-heart"></i></a>

          <h3 className="text-dark">
            <a href="addcart">Cetyl Pure</a>
          </h3>
          <p className="price">
            <del>45.00</del> — $20.00
          </p>
          <a href="Ecart" class="btn btn-primary">ADD TO CART</a>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="addcart">
            {" "}
            <img src="images2/product_05.png" alt="Image" />
          </a>
          <a href="#" class="wishlist-icon"><i class="fas fa-heart"></i></a>

          <h3 className="text-dark">
            <a href="addcart">CLA Core</a>
          </h3>
          <p className="price">$38.00</p>
          <a href="Ecart" class="btn btn-primary">ADD TO CART</a>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <span className="tag">Sale</span>
          <a href="addcart">
            {" "}
            <img src="images2/product_06.png" alt="Image" />
          </a>
                    <a href="#" class="wishlist-icon"><i class="fas fa-heart"></i></a>

          <h3 className="text-dark">
            <a href="addcart">Poo Pourri</a>
          </h3>
          <p className="price">
            <del>$89</del> — $38.00
          </p>
          <a href="Ecart" class="btn btn-primary">ADD TO CART</a>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <a href="shop" className="btn btn-primary px-4 py-3">
            View All Products
          </a>
        </div>
      </div>
    </div>
  </div>
 
</>

  )
}

export default Products