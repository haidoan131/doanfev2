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
        <h1 data-aos="fade-up" data-aos-duration="1500">Find Product Category</h1>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // Khi màn hình nhỏ hơn 576px (di động), hiển thị 2 slides
            576: {
              slidesPerView: 2,
            },
            // Khi màn hình lớn hơn 576px và nhỏ hơn 768px (tablet), hiển thị 4 slides
            768: {
              slidesPerView: 4,
            },
            // Khi màn hình lớn hơn 768px (desktop), hiển thị 6 slides
            1024: {
              slidesPerView: 6,
            },
          }}
        
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
