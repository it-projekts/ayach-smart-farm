import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Home.css';

const OPERATIONS = [
  { img: '/images/banana.jpg',  title: 'Banana Cultivation',     desc: 'Large-scale banana farming feeding our juice and wine production lines.' },
  { img: '/images/coffee.jpg',  title: 'Coffee Farming',         desc: 'High-quality Robusta and Arabica coffee using climate-smart techniques.' },
  { img: '/images/piggery.jpg', title: 'Piggery',                desc: 'Integrated pig rearing contributing income and organic fertiliser.' },
  { img: '/images/poultry.jpg', title: 'Poultry',                desc: 'Free-range and commercial poultry for eggs and meat.' },
  { img: '/images/juice.jpg',   title: 'Banana Juice & Wine',    desc: 'Premium value-added products from our yellow banana harvest.' },
  { img: '/images/demo.jpg',    title: 'Demo & Learning Centre', desc: 'Hands-on smart farming training for farmers and students.' },
];

const STATS = [
  { num: '5+',   label: 'Core Operations' },
  { num: '100%', label: 'Sustainable Practices' },
  { num: '2+',   label: 'Value-Added Products' },
  { num: '∞',    label: 'Community Impact' },
];

export default function Home() {
  useReveal();
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.hero-animate');
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('hero-animate--in'), 80 + i * 140);
    });
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="home-hero">
        {/*
          HERO BACKGROUND PHOTO:
          Drop your best farm photo as /public/images/hero-bg.jpg
          then uncomment the line below in Home.css inside .home-hero:
          background-image: url('/images/hero-bg.jpg');
        */}
        <div className="home-hero-overlay" />

        {/* Left — text */}
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

          {/* Stats strip */}
          <div className="home-hero-stats hero-animate">
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="stat-divider" />}
                <div className="hero-stat">
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right — video widget */}
        <div className="home-hero-video-wrap hero-animate">
          <div className="home-hero-video-thumb" onClick={() => setVideoOpen(true)}>
            {/*
              VIDEO THUMBNAIL:
              Replace placeholder with your thumbnail image:
              <img src="/images/video-thumb.jpg" alt="Farm video" className="video-thumb-img" />
            */}
            <div className="video-thumb-placeholder">
              <span>🌾</span>
              <p>Farm Video</p>
              <small>Add /images/video-thumb.jpg</small>
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

      {/* ── Video modal ── */}
      {videoOpen && (
        <div className="video-modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>✕</button>
            {/*
              PASTE YOUR VIDEO HERE — choose one:

              YouTube:
              <iframe
                title="Ayach Smart Farm"
                width="100%" height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                frameBorder="0" allowFullScreen allow="autoplay"
              />

              Local MP4:
              <video controls autoPlay width="100%" height="100%">
                <source src="/videos/farm-story.mp4" type="video/mp4" />
              </video>
            */}
            <div className="video-modal-placeholder">
              <span>▶️</span>
              <p>Paste your YouTube embed or video file here</p>
              <small>/public/videos/farm-story.mp4</small>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          ABOUT SNAPSHOT
      ══════════════════════════════════════ */}
      <section className="section">
        <div className="section-inner home-about-grid">
          <div className="home-about-visual reveal">
            {/*
              FARM OVERVIEW PHOTO:
              <img src="/images/about-farm.jpg" alt="Ayach Smart Farm" className="home-about-img" />
            */}
            <div className="img-placeholder">
              <span>📸</span>
              <p>Add farm photo<br /><small>/images/about-farm.jpg</small></p>
            </div>
            <div className="home-about-badge">
              <strong>Located in</strong><br />Amach Town Council<br />Lira District, Uganda
            </div>
          </div>

          <div className="home-about-text">
            <p className="section-eyebrow reveal">Who We Are</p>
            <h2 className="section-title reveal">
              Built on the soil of <span>innovation</span> and purpose
            </h2>
            <p className="reveal" style={{ color: 'var(--text-mid)', marginBottom: '1rem' }}>
              Ayach Smart Farm is an innovative, integrated agribusiness dedicated to sustainable
              food production, value addition, and community empowerment. We combine modern
              agriculture and technologies to optimise productivity and promote environmental conservation.
            </p>
            <p className="reveal" style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
              The farm also serves as a learning and demonstration centre supporting local farmers
              through skills development, agribusiness training, and job creation.
            </p>
            <div className="home-vm-row reveal">
              <div className="home-vm-card">
                <div className="home-vm-label">Vision</div>
                <div className="home-vm-text">To become a leading model of sustainable and technology-driven integrated farming in Uganda and beyond.</div>
              </div>
              <div className="home-vm-card">
                <div className="home-vm-label">Mission</div>
                <div className="home-vm-text">To produce high-quality agricultural products through smart farming, value addition and community empowerment.</div>
              </div>
            </div>
            <Link to="/about" className="btn-primary reveal" style={{ display: 'inline-block', marginTop: '1.8rem' }}>
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OPERATIONS — with real images
      ══════════════════════════════════════ */}
      <section className="section home-ops-section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">What We Grow & Produce</p>
          <h2 className="section-title reveal">Core <span>Operations</span></h2>
          <p className="section-lead reveal">
            An integrated model where every operation strengthens the others — from farm to market, every step adds value.
          </p>
          <div className="ops-grid">
            {OPERATIONS.map((op, i) => (
              <div key={op.title} className={`ops-card reveal reveal-delay-${i % 4}`}>
                <img src={op.img} alt={op.title} className="ops-card-img" />
                <div className="ops-card-body">
                  <h3 className="op-title">{op.title}</h3>
                  <p className="op-desc">{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <Link to="/products" className="btn-outline">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMMUNITY SNAPSHOT
      ══════════════════════════════════════ */}
      <section className="section home-community">
        <div className="section-inner">
          <p className="section-eyebrow reveal" style={{ color: 'var(--green-light)' }}>Beyond the Farm</p>
          <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
            Empowering the <span>community</span>
          </h2>
          <p className="section-lead reveal" style={{ color: 'rgba(255,255,255,0.65)' }}>
            A farm's true yield is measured not just in harvests, but in the lives it lifts.
          </p>
          <div className="community-snippets">
            {[
              { icon: '🎓', title: 'Skills Training',        desc: 'Practical training for local farmers in modern techniques and post-harvest handling.' },
              { icon: '💼', title: 'Agribusiness Mentorship', desc: 'Transforming subsistence farming into viable, market-oriented enterprises.' },
              { icon: '👷', title: 'Youth Employment',        desc: 'Actively employing and training young people from Lira District.' },
              { icon: '🌾', title: 'Farmer Empowerment',      desc: 'Regular open sessions for surrounding farming communities.' },
            ].map((item, i) => (
              <div key={item.title} className={`community-snippet reveal reveal-delay-${i % 4}`}>
                <div className="community-snippet-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <Link to="/community" className="btn-outline-white">Explore Community Programs →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════ */}
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
