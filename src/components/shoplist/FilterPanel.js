import React, { useState, useEffect } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

const FilterPanel = () => {
  let [minPrice,setMinPrice]=useState(0)
  let [maxPrice,setMaxPrice]=useState(0)
  const handleSliderUpdate = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
 

  };
  return (
    <div className="col-20 col-xl-3 myfilter">
      <div className="sticky-xl-top bg-light">
        <a href="javascript:void(0);" className="panel-close-btn">
          <svg width="35" height="35" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.748 12.5L12.748 37.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12.748 12.5L37.748 37.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
        <div className="shop-filter mt-xl-2 mt-0 bg-light">
          <aside>
            <div className="d-flex align-items-center justify-content-between m-b30">
              <h6 className="title mb-0 fw-normal d-flex">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-1">
                  <path d="M5.95894 21.1655L5.95894 18.8858C7.61448 18.4358 8.5918 16.729 8.14185 15.0735C7.85285 14.0102 7.02223 13.1795 5.95894 12.8905L5.95894 2.83405C5.95894 2.37386 5.58589 2.00081 5.1257 2.00081C4.66551 2.00081 4.29247 2.37386 4.29247 2.83405L4.29247 12.8905C2.63689 13.3405 1.65956 15.0473 2.10952 16.7029C2.39851 17.7662 3.22913 18.5968 4.29243 18.8858L4.29243 21.1655C4.29243 21.6257 4.66548 21.9988 5.12566 21.9988C5.58585 21.9988 5.95894 21.6257 5.95894 21.1655Z" fill="black"></path>
                  <path d="M11.3431 2.83429L11.3431 5.11407C9.68775 5.56312 8.70988 7.26901 9.15889 8.92431C9.44758 9.98846 10.2789 10.8198 11.3431 11.1085L11.3431 21.1658C11.3431 21.626 11.7161 21.999 12.1763 21.999C12.6365 21.999 13.0095 21.626 13.0095 21.1658L13.0095 11.1085C14.6648 10.6594 15.6427 8.95353 15.1937 7.29822C14.905 6.23407 14.0737 5.40275 13.0095 5.11406L13.0095 2.83429C13.0095 2.37411 12.6365 2.00105 12.1763 2.00105C11.7161 2.00105 11.3431 2.37411 11.3431 2.83429Z" fill="black"></path>
                  <path d="M18.3959 2.83429L18.3959 12.8908C16.7404 13.3407 15.7631 15.0476 16.213 16.7031C16.502 17.7664 17.3327 18.597 18.3959 18.886L18.3959 21.1658C18.3959 21.626 18.769 21.999 19.2292 21.999C19.6894 21.999 20.0624 21.626 20.0624 21.1658L20.0624 18.886C21.718 18.4361 22.6953 16.7292 22.2453 15.0737C21.9563 14.0104 21.1257 13.1798 20.0624 12.8908L20.0624 2.83429C20.0624 2.37411 19.6894 2.00105 19.2292 2.00105C18.769 2.00105 18.3959 2.37411 18.3959 2.83429Z" fill="black"></path>
                </svg>
                Filter
              </h6>
            </div>
            <div className="widget widget_search">
              <div className="form-group">
                <div className="input-group">
                  <input name="dzSearch" required type="search" className="form-control mysearch" placeholder="Search Product" />
                  <div className="input-group-addon">
                    <button name="submit" value="Submit" type="submit" className="btn">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.49967 15.8333C13.1816 15.8333 16.1663 12.8486 16.1663 9.16667C16.1663 5.48477 13.1816 2.5 9.49967 2.5C5.81778 2.5 2.83301 5.48477 2.83301 9.16667C2.83301 12.8486 5.81778 15.8333 9.49967 15.8333Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M17.833 17.5L14.208 13.875" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget">
              <h6 className="widget-title">Price</h6>
              <div className="price-slide range-slider">
                <div className="price">
                <Nouislider
        range={{ min: 0, max: 100 }}
        start={[20, 80]}
        step={1}
        tooltips={true}
        onUpdate={handleSliderUpdate}
      />
                  <div className="d-flex justify-content-between">
                    <span className="example-val" id="slider-margin-value-min">Min Price: ${minPrice}</span>
                    <span className="example-val" id="slider-margin-value-max">Max Price: ${maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget widget_categories">
              <h6 className="widget-title">Category</h6>
              <ul>
                <li className="cat-item cat-item-26"><a href="javascript:void(0);">Dog Clothes</a> (15)</li>
                <li className="cat-item cat-item-36"><a href="javascript:void(0);">Dog Chew Toys</a> (22)</li>
                <li className="cat-item cat-item-37"><a href="javascript:void(0);">Dog Grooming</a> (20)</li>
                <li className="cat-item cat-item-38"><a href="javascript:void(0);">Dog Food</a> (30)</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
