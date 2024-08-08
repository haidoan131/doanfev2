import React, { useEffect, useState } from "react";
import "./shoplist.css";
import FilterPanel from "./FilterPanel";
import ProductCard from "./../healthyfood/ProductCard";
import { fetchUserData1, setCategory } from "./../../redux/productapiSlice";
import { useSelector, useDispatch } from "react-redux";
export default function ShopList() {
  const { products, status, error, selectedCategory } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5); // Số lượng sản phẩm trên mỗi trang
  useEffect(() => {
    dispatch(fetchUserData1());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };
  // Tính toán số sản phẩm cần hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Tính toán số trang
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
            <h1>Shop Standard</h1>
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

      <div className="content-inner-1 pt-3 z-index-unset bg-light">
        <div className="container-fluid">
          <div className="row ">
            <FilterPanel />
            <div className="col-80 col-xl-9 ">
              <div className="filter-wrapper">
                <div className="filter-left-area">
               
                  <span>Showing 1–5 Of 50 Results</span>
                </div>
                <div className="filter-right-area">
                  <a href="javascript:void(0);" className="panel-btn me-2">
                    <svg
                      className="me-2 mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      width="20"
                      height="20"
                    >
                      <g id="Layer_28" data-name="Layer 28">
                        <path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"></path>
                        <path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z"></path>
                        <path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"></path>
                      </g>
                    </svg>
                    Filter
                  </a>
                  <div className="form-group border-start-0">
                    <div className="dropdown bootstrap-select default-select">
                      <select className="default-select">
                        <option>Default sorting</option>
                        <option>1 Day</option>
                        <option>1 Week</option>
                        <option>3 Weeks</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                      </select>

                      <div className="dropdown-menu">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-2"
                          tabIndex="-1"
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group Category">
                    <div className="dropdown bootstrap-select default-select">
                      <select className="default-select">
                        <option>Categories</option>
                        <option>1 Day</option>
                        <option>1 Week</option>
                        <option>3 Weeks</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                      </select>

                      <div className="dropdown-menu">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-3"
                          tabIndex="-1"
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shop-tab">
                    <ul className="nav" role="tablist" id="dz-shop-tab">
                      <li className="nav-item" role="presentation">
                        <a
                          href="#tab-list-list"
                          className="nav-link"
                          id="tab-list-list-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-list-list"
                          role="tab"
                          aria-controls="tab-list-list"
                          aria-selected="false"
                          tabIndex="-1"
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="1">
                              <path
                                d="M0 7.99996H5V13H0V7.99996ZM20 7.99996H6.66667V13H20V7.99996ZM6.66667 6.33329H20V4.66663C20 3.28829 18.8783 2.16663 17.5 2.16663H6.66667V6.33329ZM5 6.33329V2.16663H2.5C1.12167 2.16663 0 3.28829 0 4.66663V6.33329H5ZM6.66667 14.6666V18.8333H20V14.6666H6.66667ZM5 14.6666H0V18.8333H5V14.6666Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="#tab-list-column"
                          className="nav-link"
                          id="tab-list-column-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-list-column"
                          role="tab"
                          aria-controls="tab-list-column"
                          aria-selected="false"
                          tabIndex="-1"
                        >
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="1">
                              <path
                                d="M0 7.99996H5V13H0V7.99996ZM20 7.99996H6.66667V13H20V7.99996ZM6.66667 6.33329H20V4.66663C20 3.28829 18.8783 2.16663 17.5 2.16663H6.66667V6.33329ZM5 6.33329V2.16663H2.5C1.12167 2.16663 0 3.28829 0 4.66663V6.33329H5ZM6.66667 14.6666V18.8333H20V14.6666H6.66667ZM5 14.6666H0V18.8333H5V14.6666Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="#tab-list-grid"
                          className="nav-link active"
                          id="tab-list-grid-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-list-grid"
                          role="tab"
                          aria-controls="tab-list-grid"
                          aria-selected="true"
                          tabIndex="-1"
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="1">
                              <path
                                d="M0 7.99996H5V13H0V7.99996ZM20 7.99996H6.66667V13H20V7.99996ZM6.66667 6.33329H20V4.66663C20 3.28829 18.8783 2.16663 17.5 2.16663H6.66667V6.33329ZM5 6.33329V2.16663H2.5C1.12167 2.16663 0 3.28829 0 4.66663V6.33329H5ZM6.66667 14.6666V18.8333H20V14.6666H6.66667ZM5 14.6666H0V18.8333H5V14.6666Z"
                                fill="black"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 tab-content shop-">
                  <ul id="masonry" className="row g-xl-4 g-3">
                    {currentProducts.map((item) => (
                      <ProductCard key={item.id} item={item} />
                    ))}
                  </ul>
                  <div className="pagination">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => handlePageChange(index + 1)}
                          className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
