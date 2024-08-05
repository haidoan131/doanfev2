import React from "react";
import "./healthyfood.css";
import ProductCard from "./ProductCard ";

export default function HealthyFood() {
  // Style object for custom rotation
  const style = {
    "--char-rotate": "0deg", // Setting the custom property value
    transform: "rotate(var(--char-rotate))", // Applying the custom property
  };

  return (
    <div className="content-inner-1 bg-light">
      <div className="container">
        <div className="row ">
          <div className="col-md-9">
            <div className="section-head m-b20 wow fadeInUp">
              <h2 className="title max-w600 wow pulse">
                Reliable Healthy Food For Your Pet
              </h2>
            </div>
            <div
              className="site-filters clearfix d-flex align-items-center wow fadeInUp hea1"
              data-wow-delay="0.1s"
            >
              <ul className="filters" data-bs-toggle="buttons">
                <li className="active">
                  <input type="radio" />
                  <a href="javascript:void(0);">Dogs Food</a>
                </li>
                <li data-filter=".CatsFood">
                  <input type="radio" />
                  <a href="javascript:void(0);">Cats Food</a>
                </li>
                <li data-filter=".RabbitsFood">
                  <input type="radio" />
                  <a href="javascript:void(0);">Rabbits Food</a>
                </li>
                <li data-filter=".ParrotFood">
                  <input type="radio" />
                  <a href="javascript:void(0);">Parrot Food</a>
                </li>
                <li data-filter=".HamsterFood">
                  <input type="radio" />
                  <a href="javascript:void(0);">Hamster Food</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-3">
            <a
              className="animation-btn style-1 m-b50"
              href="shop-standard.html"
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 0L34.9296 21.0704L56 28L34.9296 34.9296L28 56L21.0704 34.9296L0 28L21.0704 21.0704L28 0Z"
                  fill="black"
                ></path>
              </svg>
              <div className="text-row word-rotate-box c-black border-white">
                {[
                  " ",
                  "A",
                  "L",
                  "L",
                  " ",
                  "P",
                  "R",
                  "O",
                  "D",
                  "U",
                  "C",
                  "T",
                  "S",
                  " ",
                  ".",
                  " ",
                  "A",
                  "l",
                  "l",
                  " ",
                  "P",
                  "R",
                  "O",
                  "D",
                  "U",
                  "C",
                  "T",
                  "S",
                  " ",
                  ".",
                ].map((char, index) => (
                  <span
                    key={index}
                    className="text__char"
                    style={{
                      "--char-rotate": `${index * 11.612903225806452}deg`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </a>
          </div>
          <div className="clearfix">
            <ul
              id="masonry"
              className="row g-xl-4 g-3"
          
            >
              <ProductCard />
			  <ProductCard />
			  <ProductCard />
			  <ProductCard />
			  <ProductCard />
			  <ProductCard />
			  <ProductCard />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
