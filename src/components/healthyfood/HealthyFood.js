import React from 'react'
import "./healthyfood.css"
export default function HealthyFood() {
  return (
    <div className='content-inner-1 bg-light border-bottom'>
        <div className='container'>
            <div className='row align-items-end'>
            <div class="col-md-9">
						<div class="section-head m-b20 wow fadeInUp" >
							<h2 class="title max-w600 wow pulse">Reliable Healthy Food For Your Pet</h2>
						</div>	
						<div class="site-filters clearfix d-flex align-items-center wow fadeInUp hea1" data-wow-delay="0.1s">
							<ul class="filters" data-bs-toggle="buttons">
									<li class="active">
										<input type="radio"/>
										<a href="javascript:void(0);">Dogs Food</a> 
									</li>
									<li data-filter=".CatsFood" class="">
										<input type="radio/"/>
										<a href="javascript:void(0);">Cats Food</a> 
									</li>
									<li data-filter=".RabbitsFood">
										<input type="radio"/>
										<a href="javascript:void(0);">Rabbits Food</a> 
									</li>
									<li data-filter=".ParrotFood">
										<input type="radio"/>
										<a href="javascript:void(0);">Parrot Food</a> 
									</li>
									<li data-filter=".HamsterFood">
										<input type="radio"/>
										<a href="javascript:void(0);">Hamster Food</a> 
									</li>
								</ul>
						</div>
					</div>
            </div>
        </div>
    </div>
  )
}
