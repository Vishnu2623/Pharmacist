import React from 'react';
import Shopnavbar from './Shopnavbar';


const ShopProduct = () => {
  return (
    <>
   <Shopnavbar/>
    <div className="site-wrap">
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Store</strong>
            </div>
          </div>
        </div>
      </div>
      <div
  className="Search"
  style={{ maxWidth: "100%", backgroundColor: "antiquewhite", height: 100 }}
>
  <div className="container" style={{ maxWidth: "100%", color: "#D9230F",marginTop:"40px" }}>
    <div className="row">
     
      <div className="col-12">
        <div id="custom-search-input">
          <div className="input-group">
            <input
              type="text"
              className="search-query form-control"
              placeholder="Search Medicines"
            />
            <span className="input-group-btn">
              <button type="button" disabled="">
                <span className="fa fa-search" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
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
  <a href="pay" class="btn btn-primary">Buy Now</a>
          </div>
          <>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
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
          <a href="pay" class="btn btn-primary">Buy Now</a>
        </div>
      
</>

        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="site-block-27">
              <ul>
                <li>
                  <a href="#">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">&gt;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ShopProduct;
