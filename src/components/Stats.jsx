import React from 'react'
import '../styles/stats.css'
import projects from '../assets/stats/projects.png'
import ontime from '../assets/stats/ontime.png'
import skilled from '../assets/stats/skilled.png'
import industry from '../assets/stats/industry.png'
const Stats = () => {
  return (
    <section class="stats">
    <div class="stat-item">
      <div class="stat-content">
        <img src={projects} alt="Projects Icon" />
        <h3>3,694</h3>
      </div>
      <p>Successful Projects</p>
    </div>
    <div class="stat-item">
      <div class="stat-content">
        <img src={ontime} alt="Delivery Icon" />
        <h3>98%</h3>
      </div>
      <p>On-Time Delivery</p>
    </div>
    <div class="stat-item">
      <div class="stat-content">
        <img src={skilled} alt="Professionals Icon" />
        <h3>6,000+</h3>
      </div>
      <p>Skilled Professionals</p>
    </div>
    <div class="stat-item">
      <div class="stat-content">
        <img src={industry} alt="Years Icon" />
        <h3>40+</h3>
      </div>
      <p>Years in the Industry</p>
    </div>
  </section>
  )
}

export default Stats