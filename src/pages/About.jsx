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
    img: '/images/value-sustainability.png',
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
  { img: '/images/team-1.jpg', name: 'OLOBO PATRICK', role: 'Farm Director & Founder' },
 
];

export default function About() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>About <span>Ayach Smart Farm</span></h1>
          <p>An integrated agribusiness rooted in the soil of Lira District, growing with purpose and passion.</p>
        </div>
      </div>

     

      {/* VISION & MISSION */}
      <section className="section bg-dark about-vm-section">
        <div className="section-inner">
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
          <p className="section-eyebrow reveal">The Person Behind the Farm</p>
          <p className="section-lead reveal">
            The passionate person driving smart agriculture in Northern Uganda.
          </p>
          <div className="team-grid">
            {TEAM_PLACEHOLDER.map((member, i) => (
  <div key={i} className={`team-card reveal reveal-delay-${i % 4}`}>
    <img src={member.img} alt={member.name} className="team-photo" />
    <div className="team-name">{member.name}</div>
    <div className="team-role">{member.role}</div>
  </div>
))}
          </div>
        </div>
      </section>
    </>
  );
}
