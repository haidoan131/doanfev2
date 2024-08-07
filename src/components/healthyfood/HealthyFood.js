import React, { useEffect } from 'react';
import './healthyfood.css';
import ProductCard from './ProductCard';
import { fetchUserData1, setCategory } from './../../redux/productapiSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function HealthyFood() {
  const { filteredProducts, status, error, selectedCategory } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData1());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="content-inner-1 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="section-head m-b20 wow fadeInUp">
              <h2 className="title max-w600 wow pulse" data-aos="fade-up" data-aos-duration="1000">
                Reliable Healthy Food For Your Pet
              </h2>
            </div>
            <div
              className="site-filters clearfix d-flex align-items-center wow fadeInUp hea1"
              data-wow-delay="0.1s"
            >
              <ul className="filters" data-bs-toggle="buttons">
                <li className={selectedCategory === 'dogfood' ? 'active' : ''} onClick={() => handleCategoryChange('dogfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Dogs Food</a>
                </li>
                <li className={selectedCategory === 'catfood' ? 'active' : ''} onClick={() => handleCategoryChange('catfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Cats Food</a>
                </li>
                <li className={selectedCategory === 'hamsterfood' ? 'active' : ''} onClick={() => handleCategoryChange('hamsterfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Hamster Food</a>
                </li>
                <li className={selectedCategory === 'parrotfood' ? 'active' : ''} onClick={() => handleCategoryChange('parrotfood')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">Parrot Food</a>
                </li>
                <li className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryChange('all')}>
                  <input type="radio" />
                  <a href="javascript:void(0);">All</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-3">
            {/* Your button code here */}
          </div>

          <div className="clearfix">
            <ul id="masonry" className="row g-xl-4 g-3">
              {status === 'loading' && <p>Loading...</p>}
              {status === 'failed' && <p>{error}</p>}
              {filteredProducts && filteredProducts.map(item => (
                <ProductCard key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
