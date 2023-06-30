import React from 'react'
import Publicuserfooter from '../Footer/Publicuserfooter'
import Shopnavbar from './Shopnavbar'

const OrdersHistory = () => {
  return (
    <>
    <Shopnavbar/>
    <div className="ordersbody">
  <div className="container-fluid my-5  d-flex  justify-content-center">
    <div className="card card-1">
      <div className="orderscard-header bg-white">
        <div className="media flex-sm-row flex-column-reverse justify-content-between  ">
          <div className="col my-auto">
            {" "}
            <h4 style={{ textAlign: "center" }}>My Medicine Orders</h4>{" "}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row justify-content-between mb-3">
          <div className="col-auto">
            {" "}
            <h6 className="color-1 mb-0 change-color">Orders</h6>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card card-2">
              <div className="card-body">
                <div className="media">
                  <div className="sq align-self-center ">
                    {" "}
                    <img
                      className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                      src="./images2/ba.jpg"
                      width={135}
                      height={135}
                    />{" "}
                  </div>
                  <div className="media-body my-auto text-right">
                    <div className="row  my-auto flex-column flex-md-row">
                      <div className="col my-auto">
                        {" "}
                        <h6 className="mb-0"> Jack Jacs</h6>
                      </div>
                      <div className="col my-auto">
                        {" "}
                        <small>Qty : 1</small>
                      </div>
                      <div className="col my-auto">
                        <h6 className="mb-0">₹3,600.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-3 " />
                <div className="row">
                  <div className="col-md-3 mb-3">
                    {" "}
                    <small>
                      {" "}
                      Track Order{" "}
                      <span>
                        <i className=" ml-2 fa fa-refresh" aria-hidden="true" />
                      </span>
                    </small>{" "}
                  </div>
                  <div className="col mt-auto">
                    <div className="progress my-auto">
                      {" "}
                      <div
                        className="progress-bar progress-bar  rounded"
                        style={{ width: "100%" }}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />{" "}
                    </div>
                    <div className="media row justify-content-between ">
                      <div className="col-auto text-right">
                        <span>
                          {" "}
                          <small className="text-right mr-sm-2" />{" "}
                          <i className="fa fa-circle active" />{" "}
                        </span>
                      </div>
                      <div className="flex-col">
                        {" "}
                        <span>
                          {" "}
                          <small className="text-right mr-sm-2">
                            Out for delivary
                          </small>
                          <i className="fa fa-circle active" />
                        </span>
                      </div>
                      <div className="col-auto flex-col-auto">
                        <small className="text-right mr-sm-2">Delivered</small>
                        <span>
                          {" "}
                          <i className="fa fa-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="card card-2">
              <div className="card-body">
                <div className="media">
                  <div className="sq align-self-center ">
                    {" "}
                    <img
                      className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                      src="./images2/bg_2.jpg"
                      width={135}
                      height={135}
                    />{" "}
                  </div>
                  <div className="media-body my-auto text-right">
                    <div className="row  my-auto flex-column flex-md-row">
                      <div className="col-auto my-auto ">
                        {" "}
                        <h6 className="mb-0"> Michel Mark</h6>{" "}
                      </div>
                      <div className="col my-auto  ">
                        {" "}
                        <small>Qty : 1</small>
                      </div>
                      <div className="col my-auto ">
                        {" "}
                        <h6 className="mb-0">₹1,235.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-3 " />
                <div className="row ">
                  <div className="col-md-3 mb-3">
                    {" "}
                    <small>
                      {" "}
                      Track Order{" "}
                      <span>
                        <i className=" ml-2 fa fa-refresh" aria-hidden="true" />
                      </span>
                    </small>{" "}
                  </div>
                  <div className="col mt-auto">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar  rounded"
                        style={{ width: "100%" }}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />{" "}
                    </div>
                    <div className="media row justify-content-between ">
                      <div className="col-auto text-right">
                        <span>
                          {" "}
                          <small className="text-right mr-sm-2" />{" "}
                          <i className="fa fa-circle active" />{" "}
                        </span>
                      </div>
                      <div className="flex-col">
                        {" "}
                        <span>
                          {" "}
                          <small className="text-right mr-sm-2">
                            Out for delivary
                          </small>
                          <i className="fa fa-circle" />
                        </span>
                      </div>
                      <div className="col-auto flex-col-auto">
                        <small className="text-right mr-sm-2">Delivered</small>
                        <span>
                          {" "}
                          <i className="fa fa-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Publicuserfooter/>
</>
  )
}

export default OrdersHistory