import React from 'react'
import '../styles/footer.css'
import logo from '../assets/footer/footer_logo.png'
import ig from '../assets/footer/instagram.png'
import fb from '../assets/footer/fb.png'

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-column">
          <div class="footer-logo">
            <img src={logo} />
          </div>
          <div class="footer-social">
            <span>Follow Us on</span>
            <img src={fb} alt="Facebook" />
            <img src={ig} alt="Instagram" />
          </div>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Inside Myraa</a></li>
            <li><a href="#">Myraa Solutions</a></li>
            <li><a href="#">Our Presence</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Our Foot Print</a></li>
            <li><a href="#">Connect with Myraa</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Other Links</h4>
          <ul>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Words of Trust</a></li>
            <li><a href="#">CSR</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Careers at Myraa</a></li>
          </ul>
        </div>
        <div class="footer-column footer-contact">
          <h4>Contacts</h4>
          <p>📞 +91 22 2352 0081 / +91 22 2352 0082</p>
          <p>
            📧
            <a href="mailto:info@myra-consultancy.com"
              >info@myra-consultancy.com</a
            >
          </p>
          <p>
            📍 3610/3611, Marathon Futurex, Mafatlal Mills Compound, NM Joshi
            Marg, Lower Parel, Mumbai – 400 013, India.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="divider"></div>
        <div class="info">
          @ Myraa Group, 2024. All Rights Reserved | Digital Partner
          <a class="footer-gap" href="#">Indus Net Technologies</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
      <button
        class="back-to-top"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
      >
        ↑
      </button>
    </footer>
  )
}

export default Footer