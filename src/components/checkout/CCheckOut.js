import React from "react";
import "./checkout.css";
import pic1 from "./../../images/shop/shop-cart/pic1.jpg"

export default function CCheckOut() {
  return (
    <div>
      <div
        className="dz-bnr-inr style-1"
        style={{
          backgroundImage:
            "url(https://petperks.dexignzone.com/xhtml/images/background/bg-shape.jpg)",
        }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>Check Out</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row ">
              <ul className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">Shop Standard</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="content-inner-1 bg-light">
        <div className="container">
          <div className="row shop-checkout">
            <div className="col-xl-8">
              <h6 class="title m-b15">Billing details</h6>
              <div
                class="accordion dz-accordion accordion-sm"
                id="accordionFaq"
              >
                <div class="accordion-item bg-transparent">
                  <h2 class="accordion-header" id="headingOne">
                    <a
                      href="#"
                      class="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Returning customer? &nbsp;{" "}
                      <span class="text-primary">Click here to login</span>
                      <span class="toggle-close"></span>
                    </a>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="accordion-body">
                      <p class="m-b0">
                        If your order has not yet shipped, you can contact us to
                        change your shipping address
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent">
                  <h2 class="accordion-header" id="headingTwo">
                    <a
                      href="#"
                      class="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Have a coupon? &nbsp;{" "}
                      <span class="text-primary">
                        Click here to enter your code
                      </span>
                      <span class="toggle-close"></span>
                    </a>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="accordion-body">
                      <p class="m-b0">
                        If your order has not yet shipped, you can contact us to
                        change your shipping address
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="row">
                <div className="col-md-6">
                  <div className="form-group m-b25 m-t10">
                    <label className="label-title">First Name</label>
                    <input
                      name="firstName"
                      required
                      className="form-control form-control-2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group m-b25 m-t10">
                    <label className="label-title">Last Name</label>
                    <input name="lastName" required className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">
                      Company name (optional)
                    </label>
                    <input name="companyName" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="m-b25">
                    <label className="label-title">Country / Region *</label>
                    <div className="form-select">
                      <select className="default-select w-100 d-block">
                        <option selected>India</option>
                        <option value="1">Another option</option>
                        <option value="2">UK</option>
                        <option value="3">Iraq</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Street address *</label>
                    <input
                      name="streetAddress1"
                      required
                      className="form-control m-b15"
                      placeholder="House number and street name"
                    />
                    <input
                      name="streetAddress2"
                      className="form-control"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="m-b25">
                    <label className="label-title">Town / City *</label>
                    <div className="form-select">
                      <select className="default-select w-100">
                        <option selected>Kota</option>
                        <option value="1">Another option</option>
                        <option value="2">Jaipur</option>
                        <option value="3">Udaipur</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="m-b25">
                    <label className="label-title">State *</label>
                    <div className="form-select">
                      <select className="default-select w-100">
                        <option selected>Rajasthan</option>
                        <option value="1">Another option</option>
                        <option value="2">Rajasthan</option>
                        <option value="3">Rajasthan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">ZIP Code *</label>
                    <input
                      name="zipCode"
                      required
                      className="form-control"
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Phone *</label>
                    <input
                      name="phone"
                      required
                      className="form-control"
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group m-b25">
                    <label className="label-title">Email address *</label>
                    <input
                      name="email"
                      required
                      className="form-control"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-md-12 m-b25">
                  <div className="form-group m-b5">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="createAccount"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="createAccount"
                      >
                        Create an account?
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="shipToDifferentAddress"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="shipToDifferentAddress"
                      >
                        Ship to a different address?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 m-b25">
                  <div className="form-group">
                    <label className="label-title">
                      Order notes (optional)
                    </label>
                    <textarea
                      id="orderNotes"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="form-control"
                      name="orderNotes"
                      cols="90"
                      rows="5"
                    />
                  </div>
                </div>
              </form>
              {/* endleft */}
            </div>

            <div className="col-xl-4 side-bar">
              <h4 class="title m-b15">Your Order</h4>
              <div className="order-detail sticky-top">
                <div className="cart-item style-1">
                  <div className="dz-media">
                    <img src={pic1} alt="/" />
                  </div>
                  <div className="dz-content">
                    <h6 className="title mb-0">
                      Pet Bed For
                      <br /> Dog
                    </h6>
                    <span className="price">$40.00</span>
                  </div>
                </div>
                <div className="cart-item style-1 mb-0">
                  <div className="dz-media">
                    <img src={pic1} alt="/" />
                  </div>
                  <div className="dz-content">
                    <h6 className="title mb-0">Dog Chew Toys</h6>
                    <span className="price">$40.00</span>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr className="subtotal">
                      <td>Subtotal</td>
                      <td className="price">$100</td>
                    </tr>
                    <tr className="title">
                      <td>
                        <h6 className="title font-weight-500">Shipping</h6>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="shipping">
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="form-check-input radio"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Free shipping
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            className="form-check-input radio"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Flat Rate:
                          </label>
                        </div>
                      </td>
                      <td className="price">$25.75</td>
                    </tr>
                    <tr className="total">
                      <td>Total</td>
                      <td className="price">$125.75</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  className="accordion dz-accordion accordion-sm"
                  id="accordionFaq1"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading1">
                      <div
                        className="accordion-button custom-control custom-checkbox border-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        role="navigation"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        <input
                          className="form-check-input radio"
                          type="radio"
                          name="flexRadioPay"
                          id="flexRadioDefault3"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Direct bank transfer
                        </label>
                      </div>
                    </div>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionFaq1"
                    >
                      <div className="accordion-body">
                        <p className="m-b0">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading2">
                      <div
                        className="accordion-button custom-control custom-checkbox border-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        role="navigation"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        <input
                          className="form-check-input radio"
                          type="radio"
                          name="flexRadioPay"
                          id="flexRadioDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault5"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionFaq1"
                    >
                      <div className="accordion-body">
                        <p className="m-b0">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading3">
                      <div
                        className="accordion-button custom-control custom-checkbox border-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        role="navigation"
                        aria-expanded="true"
                        aria-controls="collapse3"
                      >
                        <input
                          className="form-check-input radio"
                          type="radio"
                          name="flexRadioPay"
                          id="flexRadioDefault4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault4"
                        >
                          Paypal
                        </label>
                       
                        <a href="javascript:void(0);" className="mypaypal">What is PayPal?</a>
                      </div>
                    </div>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionFaq1"
                    >
                      <div className="accordion-body">
                        <p className="m-b0">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <a href="javascript:void(0);">privacy policy.</a>
                </p>
                <div className="form-group">
                  <div className="custom-control custom-checkbox d-flex m-b15">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="basic_checkbox_2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="basic_checkbox_2"
                    >
                      I have read and agree to the website terms and conditions{" "}
                    </label>
                  </div>
                </div>
                <a
                  href="shop-checkout.html"
                  className="btn btn-secondary w-100"
                >
                  PLACE ORDER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* endcontent */}
    </div>
  );
}
