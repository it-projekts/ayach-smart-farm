import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/products',  label: 'Our Products' },
  { to: '/community', label: 'Community Programs' },
  { to: '/contact',   label: 'Contact Us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ' navbar--transparent'}`}>
      {/* Top contact bar */}
      <div className="navbar-topbar">
        <div className="navbar-topbar-inner">
          <span>📞 (+256) 794 848 888</span>
          <span>✉️ ayachsmartfarm@gmail.com</span>
          <div className="navbar-socials">
            <a href="https://facebook.com"  target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://x.com"         target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            <a href="https://linkedin.com"  target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="navbar-main">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          {/*
            LOGO: Replace the icon below with your real logo.
            Example: <img src="/logo.png" alt="Ayach Smart Farm" className="navbar-logo-img" />
            Drop logo.png into the /public folder.
          */}
        <img src="/logo.png" alt="Ayach Smart Farm" className="navbar-logo-img" />         
        <span className="navbar-logo-name">AYACH<br />SMART FARM</span>
        </Link>

        {/* Desktop links */}
        <nav className="navbar-links hide-mobile">
  {NAV_LINKS.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      end={to === '/'}
      className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
    >
      {label}
    </NavLink>
  ))}
</nav>

{/* Search bar */}
<div className="navbar-search">
  <input
    type="text"
    placeholder="Search..."
    className="navbar-search-input"
  />
  <button className="navbar-search-btn" aria-label="Search">🔍</button>
</div>

        {/* Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="navbar-mobile-drawer">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'mobile-link mobile-link--active' : 'mobile-link'}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mobile-cta" onClick={closeMenu}>
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
