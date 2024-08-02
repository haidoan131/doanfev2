import React from "react";
import "./findproduct.css";
import { Container } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cate3 from "./../../images/category/cate-3.jpg";
export default function FindProduct() {
  return (
    <div>
      <Container className="mt-5">
        <h1>Find Product Category</h1>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="category-product">
              <a href="shop-list.html">
                <h5 class="title">Rabbits</h5>
                <img src={cate3} alt="/" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
