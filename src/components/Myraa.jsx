import React from 'react'
import '../styles/myraa.css'
import group from '../assets/myraa/group.png'


const Myraa = () => {
  return (
    <div> <section class="myraa-section">
    <div class="content">
      <h2>THE MYRAA WAY</h2>
      <p class="subtitle">
        We are the Masters of SMEIP Construction and Maintenance
      </p>
      <p class="description">
        Myraa Construction SARL excels as a leader in SMEIP (Structural,
        Mechanical, Electrical, Instrumentation, and Piping) contracting.
        Anchored by a solid foundation in construction and maintenance, we
        empower project owners by constructing advanced processing plants. Our
        facilities go beyond mere construction; they are expertly maintained
        and managed to optimise business operations and contribute positively
        to community welfare, consistently delivered on schedule and within
        budget.
      </p>
      <a href="#" class="btn">Know More →</a>
    </div>
    <div class="circles">
      <img src={group}/>
    </div>
  </section></div>
  )
}

export default Myraa