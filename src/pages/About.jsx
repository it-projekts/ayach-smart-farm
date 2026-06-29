import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './About.css';

const VALUES = [
  {
    img: '/images/value-innovation.jpg',
    title: 'Innovation',
    desc: 'Embracing modern technology and smart farming methods to continuously improve productivity and efficiency.',
  },
  {
    img: '/images/value-sustainability.jpg',
    title: 'Sustainability',
    desc: 'Farming in harmony with nature — conserving soil, water, and biodiversity for future generations.',
  },
  {
    img: '/images/value-integrity.jpg',
    title: 'Integrity',
    desc: 'Honest, transparent dealings with our customers, partners, community, and the environment.',
  },
  {
    img: '/images/value-excellence.jpg',
    title: 'Excellence',
    desc: 'Committed to the highest quality in every product, process, and service we deliver.',
  },
  {
    img: '/images/value-community.jpg',
    title: 'Community Empowerment',
    desc: 'Placing people at the centre — training farmers, creating jobs, and growing together.',
  },
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
              FARM PHOTO — replace placeholder with:
              <img src="/images/about-farm.jpg" alt="Ayach Smart Farm" className="about-img" />
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
              <h3>Vision</h3>
              <p>
                To become a leading model of sustainable and technology-driven integrated farming
                in Uganda and beyond.
              </p>
            </div>
            <div className="about-vm-card reveal reveal-delay-1">
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
                <img src={v.img} alt={v.title} className="values-img" />
                <div className="values-body">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">The People Behind the Farm</p>
          <h2 className="section-title reveal">Meet the <span>team</span></h2>
          <p className="section-lead reveal">
            The passionate people driving smart agriculture in Northern Uganda.
          </p>
          <div className="team-grid">
            {TEAM_PLACEHOLDER.map((member, i) => (
              <div key={i} className={`team-card reveal reveal-delay-${i % 4}`}>
                {/*
                  TEAM PHOTO — replace avatar with real photo:
                  <img src="/images/team-1.jpg" alt="Name" className="team-photo" />
                */}
                <div className="team-avatar">{member.initials}</div>
                <div className="team-name">Team Member Name</div>
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream" style={{ textAlign: 'center' }}>
        <div className="section-inner reveal">
          <h2 className="section-title">Want to visit or <span>work with us?</span></h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 500, margin: '0 auto 2rem' }}>
            We welcome farm visits, partnerships, and collaborations that advance smart agriculture.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
