import React from 'react'
import '../styles/client.css'
import amba from '../assets/clients/amba.png'
import ducab from '../assets/clients/ducab.png'
import atc from '../assets/clients/atc.png'
import murray from '../assets/clients/murray.png'
import outotec from '../assets/clients/outotec.png'
import seaweld from '../assets/clients/seaweld.png'


const Client = () => {
  return (
    <section class="clients-section">
      <div class="clients-container">
        <h2>OUR CLIENTS</h2>
        <p>Driving innovation and sustainability across industries</p>
        <div class="clients-logos">
          <img src={amba} alt="Client 1" />
          <img src={ducab} alt="Client 2" />
          <img src={murray} alt="Client 3" />

          <img src={outotec} alt="Client 5" />
          <img src={seaweld} alt="Client 6" />
          <img src={atc} alt="Client 4" />
        </div>
      </div>
    </section>
  )
}

export default Client