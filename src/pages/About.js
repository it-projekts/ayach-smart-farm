import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './About.css';

const VALUES = [
  { icon: '💡', title: 'Innovation',            desc: 'Embracing modern technology and smart farming methods to continuously improve productivity and efficiency.' },
  { icon: '♻️', title: 'Sustainability',         desc: 'Farming in harmony with nature — conserving soil, water, and biodiversity for future generations.' },
  { icon: '🤝', title: 'Integrity',              desc: 'Honest, transparent dealings with our customers, partners, community, and the environment.' },
  { icon: '⭐', title: 'Excellence',             desc: 'Committed to the highest quality in every product, process, and service we deliver.' },
  { icon: '👥', title: 'Community Empowerment', desc: 'Placing people at the centre — training farmers, creating jobs, and growing together.' },
];

const TEAM_PLACEHOLDER = [
  { initials: 'AF', role: 'Farm Director & Founder' },
  { initials: 'FM', role: 'Agronomy Lead' },
  { initials: 'CO', role: 'Community Programs Coordinator' },
  { initials: 'PM', role: 'Value Addition Manager' },
];

export default function About() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-hero-eyebrow">Our Story</span>
          <h1>About <span>Ayach Smart Farm</span></h1>
          <p>An integrated agribusiness rooted in the soil of Lira District, growing with purpose and passion.</p>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="section">
        <div className="section-inner about-overview-grid">
          <div className="reveal">
            {/*
              FARM PHOTO — replace placeholder with real image:
              <img src="/images/about-farm.jpg" alt="Ayach Smart Farm overview" className="about-img" />
            */}
            <div className="img-placeholder">
              <span>📸</span>
              <p>Farm overview photo<br /><small>/images/about-farm.jpg</small></p>
            </div>
          </div>
          <div>
            <p className="section-eyebrow reveal">Who We Are</p>
            <h2 className="section-title reveal">Integrated farming, <span>purposeful impact</span></h2>
            <p className="reveal" style={{ color: 'var(--text-mid)', marginBottom: '1rem' }}>
              Ayach Smart Farm is an innovative, integrated agribusiness dedicated to sustainable food
              production, value addition, and community empowerment. Located at Ayach Cell, Ayach Ward,
              Amach Town Council in Lira District — the heart of Northern Uganda.
            </p>
            <p className="reveal" style={{ color: 'var(--text-mid)', marginBottom: '1rem' }}>
              The farm combines modern agriculture and cutting-edge technologies to optimise
              productivity and promote environmental conservation. Our core operations include banana
              and coffee cultivation alongside livestock — piggery and poultry — and banana wine and juice production.
            </p>
            <p className="reveal" style={{ color: 'var(--text-mid)' }}>
              Through value addition and market-oriented production, we transform agricultural produce
              into high-quality products that increase income and reduce post-harvest losses. Ayach
              Smart Farm also serves as a learning and demonstration centre supporting local farmers
              through skills development, agribusiness training, and job creation.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section bg-dark about-vm-section">
        <div className="section-inner">
          <p className="section-eyebrow reveal" style={{ color: 'var(--green-light)' }}>What Drives Us</p>
          <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
            Our <span>vision</span> and mission
          </h2>
          <div className="about-vm-grid">
            <div className="about-vm-card reveal">
              <div className="about-vm-icon">👁️</div>
              <h3>Vision</h3>
              <p>
                To become a leading model of sustainable and technology-driven integrated farming
                in Uganda and beyond.
              </p>
            </div>
            <div className="about-vm-card reveal reveal-delay-1">
              <div className="about-vm-icon">🎯</div>
              <h3>Mission</h3>
              <p>
                To produce high-quality agricultural products through smart farming, value addition,
                and community empowerment while promoting sustainability and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section bg-cream">
        <div className="section-inner">
          <p className="section-eyebrow reveal">What We Stand For</p>
          <h2 className="section-title reveal">Our core <span>values</span></h2>
          <p className="section-lead reveal">Everything we do is rooted in these five principles.</p>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`values-card reveal reveal-delay-${i % 4}`}>
                <div className="values-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section">
        <div className="section-inner about-location-grid">
          <div>
            <p className="section-eyebrow reveal">Find Us</p>
            <h2 className="section-title reveal">Where we <span>are</span></h2>
            <div className="location-detail reveal">
              <div className="location-row"><span>📍</span><div><strong>Ayach Cell, Ayach Ward</strong><br />Amach Town Council<br />Lira District, Northern Uganda</div></div>
              <div className="location-row"><span>📞</span><div><a href="tel:+256794848888">(+256) 794 848 888</a></div></div>
              <div className="location-row"><span>✉️</span><div><a href="mailto:ayachsmartfarm@gmail.com">ayachsmartfarm@gmail.com</a></div></div>
              <div className="location-row"><span>🌐</span><div><a href="https://ayachsmartfarm.online" target="_blank" rel="noreferrer">ayachsmartfarm.online</a></div></div>
            </div>
            <Link to="/contact" className="btn-primary reveal" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
              Plan a Visit →
            </Link>
          </div>
          <div className="reveal">
            {/*
              MAP EMBED — paste a Google Maps embed iframe here.
              Example (replace src with your actual embed URL from Google Maps → Share → Embed):
              <iframe
                title="Ayach Smart Farm location"
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
                width="100%" height="340" style={{ border: 0, borderRadius: 8 }}
                allowFullScreen loading="lazy"
              />
            */}
            <div className="map-placeholder">
              <span>🗺️</span>
              <p>Google Maps embed goes here</p>
              <small>Get embed code from Google Maps → Share → Embed a map</small>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-cream">
        <div className="section-inner">
          <p className="section-eyebrow reveal">The People Behind the Farm</p>
          <h2 className="section-title reveal">Meet the <span>team</span></h2>
          <p className="section-lead reveal">
            Replace these placeholder cards with real photos and names of your team members.
          </p>
          <div className="team-grid">
            {TEAM_PLACEHOLDER.map((member, i) => (
              <div key={i} className={`team-card reveal reveal-delay-${i % 4}`}>
                {/*
                  TEAM PHOTO — replace avatar div with:
                  <img src="/images/team-name.jpg" alt="Name" className="team-photo" />
                */}
                <div className="team-avatar">{member.initials}</div>
                <div className="team-name">Team Member Name</div>
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
