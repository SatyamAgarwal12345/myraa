import React from "react";
import "../styles/transforming.css";
import para from "../assets/images/para.png";
import infra from "../assets/images/infra.png";
import metals from "../assets/images/metals.png";
import food from "../assets/images/food.png";
import energy from "../assets/images/energy.png";

const Transforming = () => {
  return (
    <div class="container bottom-section">
      <div class="header">
        <h1>TRANSFORMING INDUSTRIES</h1>
        <p>How Myraa shapes the various sectors</p>
      </div>
      <div class="industries">
        <button class="nav-btn" id="prev-btn">
          &#8249;
        </button>
        <div class="industry">
          <div class="logo">
            <img src={energy} alt="Energy and Power Icon" />
          </div>
          <p>Energy and Power</p>
        </div>
        <div class="industry">
          <div class="logo">
            <img
              src={infra}
              alt="Infrastructure & Utilities Icon"
            />
          </div>
          <p>Infrastructure & Utilities</p>
        </div>
        <div class="industry">
          <div class="logo">
            <img src={metals} alt="Metals and Mining Icon" />
          </div>
          <p>Metals and Mining</p>
        </div>
        <div class="industry">
          <div class="logo">
            <img src={food} alt="Food and Beverages Icon" />
          </div>
          <p>Food and Beverages</p>
        </div>
        <div class="industry">
          <div class="logo">
            <img src={para} alt="Pharmaceutical Icon" />
          </div>
          <p>Pharmaceutical</p>
        </div>
        <button class="nav-btn" id="next-btn">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Transforming;
