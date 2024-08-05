import React from 'react';
import './shoplist.css';
import FilterPanel from './FilterPanel';

export default function ShopList() {
    return (
        <div>
            <div 
                className="dz-bnr-inr style-1" 
                style={{ backgroundImage: 'url(https://petperks.dexignzone.com/xhtml/images/background/bg-shape.jpg)' }}
            >
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Shop Standard</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row ">
                            <ul className="breadcrumb text-center">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Shop Standard</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='content-inner-1 pt-3 z-index-unset bg-light'>
                <div className='container-fluid'>
                    <div className='row'>
                        <FilterPanel/>
                        <div className='col-80 col-xl-9'>
                            a
                        </div>
                    </div>
                </div>
            </div>




            
        </div>
    );
}
