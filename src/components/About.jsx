import React from 'react'
import '../styles/about.css'
import img1 from '../assets/about/construction.png'
import img2 from '../assets/about/worker.png'


const About = () => {
  return (
    <section class="about-us-section">
      <div class="about-container">
        <div class="about-images">
          <div class="image image-main">
            <img src={img1} alt="Main Image" />
          </div>
          <div class="image image-overlap">
            <img src={img2} alt="Overlay Image" />
          </div>
        </div>

      
        <div class="about-content">
          <h2>INSIDE MYRAA</h2>
          <p class="about-description">
            Step into the future with Myraa and experience mastery in global
            SMEIP Contracting, Manpower Consultation, and Vocational Training.
            Our headquarters in Madagascar anchor key operations spanning from
            the UAE to India and Australia, complemented by a strong presence in
            South Africa, Mozambique, and the Philippines. Our teams, sourced
            from the Indian subcontinent, Thailand, and local regions, excel in
            mining, petrochemicals, and refinery projects in Africa and beyond.
          </p>
          <a href="#" class="btn">Dive Deeper <span>→</span></a>
        </div>
      </div>
    </section>
  )
}

export default About