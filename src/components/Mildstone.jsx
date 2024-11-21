import React from 'react'
import '../styles/mildstone.css'
import one from  '../assets/milestones/one.png'
import two from  '../assets/milestones/two.png'
import three from  '../assets/milestones/three.png'
import arrow from "../assets/milestones/rightarrow.png"

const Mildstone = () => {
  return (
    <section class="milestones top-section">
    <div class="banner-content">
      <h1>Mildstone YOUR TOMORROW</h1>
      <p>Engineering excellence across continents</p>
      <div class="cards">
        <img src={one} />
        <img  class="second-image"  src={two}/>
        <img  src={three} />
      </div>
      <button><a href="#">View All Projects</a></button>
    </div>
  </section>
  )
}

export default Mildstone