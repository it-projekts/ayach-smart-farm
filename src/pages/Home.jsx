import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Footer.css';
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">
            {/*
              LOGO: logo.png is already in /public folder.
              If your file has a different name, update src below.
            */}
            <img src="/logo.png" alt="Ayach Smart Farm" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">
            Transforming Lives Through Smart Agriculture in Northern Uganda.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com"  target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://x.com"         target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            <a href="https://linkedin.com"  target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/community">Community Programs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Operations */}
        <div className="footer-col">
          <h4>Our Operations</h4>
          <ul>
            <li>Banana Cultivation</li>
            <li>Coffee Farming</li>
            <li>Banana Juice &amp; Wine</li>
            <li>Piggery</li>
            <li>Poultry Keeping</li>
            <li>Demo &amp; Learning Centre</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+256794848888">📞 (+256) 794 848 888</a>
            </li>
            <li>
              <a href="mailto:ayachsmartfarm@gmail.com">✉️ ayachsmartfarm@gmail.com</a>
            </li>
            <li>
              <a href="https://ayachsmartfarm.online" target="_blank" rel="noreferrer">
                🌐 ayachsmartfarm.online
              </a>
            </li>
            <li className="footer-address">
              📍 Ayach Cell, Ayach Ward<br />
              Amach Town Council<br />
              Lira District, Northern Uganda
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© {year} Ayach Smart Farm. All rights reserved.</span>
      </div>
    </footer>
  );
}
