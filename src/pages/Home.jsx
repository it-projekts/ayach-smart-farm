import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Home.css';

/* ── Ayach News items — replace with real news as you grow ── */
const NEWS = [
  {
    id: 1,
    img: null,           // replace with: '/images/news-1.jpg'
    emoji: '🍌',
    date: 'June 2026',
    title: 'Community members sample new banana juice product at Ayach Smart Farm',
  },
  {
    id: 2,
    img: null,
    emoji: '🌱',
    date: 'May 2026',
    title: 'Ayach Smart Farm hosts regional farmer empowerment session for Lira District',
  },
  {
    id: 3,
    img: null,
    emoji: '☕',
    date: 'April 2026',
    title: 'Coffee cultivation expansion underway with climate-smart farming techniques',
  },
  {
    id: 4,
    img: null,
    emoji: '🐷',
    date: 'March 2026',
    title: 'New piggery unit opens, creating five jobs for local youth in Amach Town Council',
  },
  {
    id: 5,
    img: null,
    emoji: '🎓',
    date: 'February 2026',
    title: 'Agribusiness training program graduates first cohort of 30 smallholder farmers',
  },
  {
    id: 6,
    img: null,
    emoji: '🏆',
    date: 'January 2026',
    title: 'Ayach Smart Farm recognised as model integrated farm by Lira District officials',
  },
];

export default function Home() {
  useReveal();
  const [videoOpen, setVideoOpen] = useState(false);

  /* Hero text entrance */
  useEffect(() => {
    const els = document.querySelectorAll('.hero-animate');
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('hero-animate--in'), 80 + i * 140);
    });
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO — full-screen background image
          with centred text + video pop-up
      ══════════════════════════════════════ */}
      <section className="home-hero">
        {/*
          BACKGROUND IMAGE:
          Replace the gradient overlay with your real farm photo by adding
          a CSS background-image in Home.css .home-hero, e.g.:
          background-image: url('/images/hero-bg.jpg');

          OR add an <img> tag here:
          <img src="/images/hero-bg.jpg" alt="" className="hero-bg-img" />
        */}
        <div className="home-hero-overlay" />

        {/* Left — text block */}
        <div className="home-hero-content">
          <span className="home-hero-eyebrow hero-animate">
            Lira District · Northern Uganda
          </span>
          <h1 className="home-hero-title hero-animate">
            Transforming Lives<br />
            Through <span>Smart Agriculture</span>
          </h1>
          <p className="home-hero-sub hero-animate">
            An integrated agribusiness combining modern technology,
            sustainable farming, and community empowerment in the
            heart of Acholi land.
          </p>
          <div className="home-hero-btns hero-animate">
            <Link to="/products" className="hero-btn-primary">Explore Our Farm</Link>
            <Link to="/community" className="hero-btn-outline">Community Programs</Link>
          </div>
        </div>

        {/* Right — video thumbnail pop-up (KNPA style) */}
        <div className="home-hero-video-wrap hero-animate">
          <div className="home-hero-video-thumb" onClick={() => setVideoOpen(true)}>
            <video controls autoPlay width="100%" height="100%">
  <source src="/videos/farm-story.mp4" type="video/mp4" />
</video>
            <div className="video-thumb-placeholder">
              <span>🌾</span>
              <p>Farm Video</p>
              <small>Background of Ayach Smart Farm</small>
            </div>
            <button className="video-play-btn" aria-label="Play video">▶</button>
          </div>
          <div className="video-thumb-caption">Watch: Ayach Smart Farm Story</div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <div className="scroll-mouse"><span /></div>
          <span className="scroll-label">Scroll</span>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div className="video-modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>✕</button>
           <video controls autoPlay width="100%" height="100%">
  <source src="/videos/farm-story.mp4" type="video/mp4" />
</video>
            <div className="video-modal-placeholder">
              <span>▶️</span>
              <p>Ayach Smart Farm</p>
              <small>Background of Ayach Smart Farm</small>
            </div>
          </div>
        </div>
      )}

    

      
      {/* ══════════════════════════════════════
          OPERATIONS STRIP
      ══════════════════════════════════════ */}
      <section className="section home-ops-section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">What We Grow & Produce</p>
          <h2 className="section-title reveal">Core <span>Operations</span></h2>
          <p className="section-lead reveal">An integrated model where every operation strengthens the others.</p>
          <div className="ops-grid">
            {[
  { img: '/images/banana.jpg',  title: 'Banana Cultivation',    desc: 'Large-scale banana farming feeding our juice and wine production lines.' },
  { img: '/images/coffee.jpg',  title: 'Coffee Farming',        desc: 'High-quality Robusta and Arabica coffee using climate-smart techniques.' },
  { img: '/images/piggery.jpg', title: 'Piggery',               desc: 'Integrated pig rearing contributing income and organic fertiliser.' },
  { img: '/images/poultry.jpg', title: 'Poultry',               desc: 'Free-range and commercial poultry for eggs and meat.' },
  { img: '/images/juice.jpg',   title: 'Banana Juice & Wine',   desc: 'Premium value-added products from our yellow banana harvest.' },
  { img: '/images/demo.jpg',    title: 'Demo & Learning Centre', desc: 'Hands-on smart farming training for farmers and students.' },
].map((op, i) => (
  <div key={op.title} className={`card reveal reveal-delay-${i % 4}`}>
    <img src={op.img} alt={op.title} className="op-img" />
    <h3 className="op-title">{op.title}</h3>
    <p className="op-desc">{op.desc}</p>
  </div>
))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <Link to="/products" className="btn-outline">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta-band bg-cream">
        <div className="section-inner home-cta-inner reveal">
          <div>
            <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>
              Visit or <span>partner with us</span>
            </h2>
            <p style={{ color: 'var(--text-mid)' }}>
              Products, farm tours, training, partnerships — we're open.
            </p>
          </div>
          <div className="home-cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/products" className="btn-outline">Our Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
