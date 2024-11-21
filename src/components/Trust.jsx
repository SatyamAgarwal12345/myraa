import React from 'react'
import '../styles/trust.css'
import left from '../assets/icons/Vector_left.png'
import right from '../assets/icons/Vector.png'

const Trust = () => {
  return (
    <section class="trust-section">
      <div class="trust-container">
        <div class="trust-header">
          <h2>WORDS OF TRUST</h2>
        </div>

        <div class="trust-content">
          <button class="arrow-button left-arrow">
            <img src={left} alt="Left Arrow" />
          </button>

          <div class="testimonial">
            <p class="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus velit ac nulla suscipit luctus.
            </p>
            <p class="testimonial-author">
              <span class="author-name">_______   John Williams   _______</span>
            </p>
          </div>

          <button class="arrow-button right-arrow">
            <img src={right} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Trust