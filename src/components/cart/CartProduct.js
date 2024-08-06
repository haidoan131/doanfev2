import React from 'react'
import pic5 from "./../../images/shop/shop-cart/pic4.jpg"
export default function CartProduct() {
  return (
  
       <tr>
                      <td class="product-item-img">
                        <img src={pic5} alt="/" />
                      </td>
                      <td class="product-item-name">Brush for Dogs and Cats</td>
                      <td class="product-item-price">$40.00</td>
                      <td class="product-item-quantity">
                        <div class="quantity btn-quantity-2 style-1 me-3">
                          <div class="input-group  bootstrap-touchspin bootstrap-touchspin-injected">
                            <input
                              type="text"
                              value="1"
                              class="quantity-input form-control"
                            />

                            <span class="input-group-addon bootstrap-touchspin-vertical-button-wrapper">
                              <span class="input-group-btn-vertical">
                                <button
                                  tabindex="-1"
                                  class="btn btn-primary bootstrap-touchspin-up "
                                  type="button"
                                >
                                  +
                                </button>
                                <button
                                  tabindex="-1"
                                  class="btn btn-primary bootstrap-touchspin-down "
                                  type="button"
                                >
                                  −
                                </button>
                              </span>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="product-item-totle">$160.00</td>
                      <td class="product-item-close-2 ">
                      <button tabindex="-1" class="closecart btn btn-primary bootstrap-touchspin-down " type="button"><i class="fa-solid fa-xmark"></i></button>
                      </td>
                    </tr>

  )
}
