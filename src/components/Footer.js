import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🌿</span>
            <span className="footer-logo-name">AYACH SMART FARM</span>
          </div>
          <p className="footer-tagline">Transforming Lives Through Smart Agriculture in Northern Uganda.</p>
          <div className="footer-socials">
            <a href="https://facebook.com"  target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://x.com"         target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            <a href="https://linkedin.com"  target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>

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

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📞 (+256) 794 848 888</li>
            <li>✉️ ayachsmartfarm@gmail.com</li>
            <li>🌐 ayachsmartfarm.online</li>
            <li style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>
              📍 Ayach Cell, Ayach Ward<br />Amach Town Council<br />Lira District, Northern Uganda
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Ayach Smart Farm. All rights reserved.</span>
        <span>Designed with 💚 for sustainable agriculture</span>
      </div>
    </footer>
  );
}
