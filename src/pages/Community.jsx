import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Community.css';

const PROGRAMS = [
  {
    img: '/images/program-1.jpg',
    title: 'Skills Development Training',
    desc: 'Practical, hands-on training for local farmers covering modern cultivation techniques, post-harvest handling, storage, and basic business management. Sessions are held regularly at our on-farm demonstration centre.',
  },
  {
    img: '/images/program-2.jpg',
    title: 'Agribusiness Mentorship',
    desc: 'We guide smallholder farmers to transform subsistence farming into viable, market-oriented enterprises. Mentorship covers business planning, market access, pricing strategies, and record keeping.',
  },
  {
    img: '/images/program-3.jpg',
    title: 'Youth Employment & Training',
    desc: 'Ayach Smart Farm actively employs and trains young people from Lira District and surrounding communities. We believe the future of Ugandan agriculture lies in empowered, skilled youth.',
  },
  {
    img: '/images/program-4.jpg',
    title: 'Farmer Empowerment Sessions',
    desc: 'Open community sessions held regularly at the farm, welcoming farmers from surrounding villages. These sessions combine knowledge sharing, demonstrations, and networking between farmers.',
  },
  {
    img: '/images/program-5.jpg',
    title: 'Learning & Demonstration Centre',
    desc: 'The farm serves as a fully operational demonstration centre where students, NGOs, government agencies, and development partners can observe smart farming practices in action.',
  },
  {
    img: '/images/program-6.jpg',
    title: 'Community Partnerships',
    desc: 'We actively partner with local government, NGOs, and development organisations to amplify community impact — co-hosting events, supporting agricultural extension, and linking farmers to finance and markets.',
  },
];

const IMPACT_STATS = [
  { num: '100+', label: 'Farmers Trained' },
  { num: '20+',  label: 'Youth Employed' },
  { num: '5+',   label: 'Partner Organisations' },
  { num: '∞',    label: 'Community Sessions' },
];

const GALLERY = [
  { img: '/images/gallery-1.jpg', caption: 'Community members testing banana juice' },
  { img: '/images/gallery-2.jpg', caption: 'Farmer empowerment session at the farm' },
  { img: '/images/gallery-3.jpg', caption: 'Inspection of the banana garden' },
  { img: '/images/gallery-4.jpg', caption: 'Youth training at Ayach Smart Farm' },
  { img: '/images/gallery-5.jpg', caption: 'Demonstration centre visit' },
  { img: '/images/gallery-7.jpg', caption: 'Community partnership event' },
];

export default function Community() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>Community <span>Empowerment</span></h1>
          <p>A farm's true harvest is measured not just in produce, but in the lives it transforms.</p>
        </div>
      </div>

      {/* IMPACT STATS */}
      <section className="section bg-cream community-impact-strip">
        <div className="section-inner">
          <div className="impact-stats-grid">
            {IMPACT_STATS.map((stat, i) => (
              <div key={stat.label} className={`impact-stat reveal reveal-delay-${i}`}>
                <div className="impact-stat-num">{stat.num}</div>
                <div className="impact-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Our Programs</p>
          <h2 className="section-title reveal">How we <span>empower</span> communities</h2>
          <p className="section-lead reveal">
            Six active programs designed to build skills, create jobs, and strengthen
            the agricultural economy of Northern Uganda.
          </p>
          <div className="community-programs-grid">
            {PROGRAMS.map((prog, i) => (
              <div key={prog.title} className={`community-program-card reveal reveal-delay-${i % 3}`}>
                <img src={prog.img} alt={prog.title} className="program-img" />
                <div className="program-body">
                  <h3 className="program-title">{prog.title}</h3>
                  <p className="program-desc">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section bg-cream">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Community in Action</p>
          <h2 className="section-title reveal">Photo <span>gallery</span></h2>
          <p className="section-lead reveal">
            Life at Ayach Smart Farm — farming, community, and growth.
          </p>
          <div className="gallery-grid">
            {GALLERY.map((item, i) => (
              <div key={i} className={`gallery-item reveal reveal-delay-${i % 3}`}>
                <img src={item.img} alt={item.caption} className="gallery-img" />
                <p className="gallery-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream" style={{ textAlign: 'center' }}>
        <div className="section-inner reveal">
          <h2 className="section-title">Partner with us to <span>scale the impact</span></h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 520, margin: '0 auto 2rem' }}>
            Are you an NGO, government agency, donor, or organisation that shares our vision?
            We welcome partnerships that amplify community benefit.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
