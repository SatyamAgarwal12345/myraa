import React from "react";
import "../styles/banner.css";
import rightArr from "../assets/Banner/image.png";

const Banner = () => {
  return (
    <section class="banner">
      <div class="banner-content">
        <h1>ENGINEERING YOUR TOMORROW</h1>
        <p>Engineering excellence across continents</p>
        <button class="bannner-button">
          <a href="#">
            View Projects
            <span class="arrow-box">
              <span class="arrow"></span>
            </span>
          </a>
        </button>
      </div>
    </section>
  );
};

export default Banner;
