import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Community.css';
const PROGRAMS = [
  {
    img: '/images/program-1.jpg',
    title: 'Skills Development Training',
    desc: 'Practical, hands-on training for local farmers covering modern cultivation techniques, post-harvest handling, storage, and basic business management.',
  },
  {
    img: '/images/program-2.jpg',
    title: 'Agribusiness Mentorship',
    desc: 'We guide smallholder farmers to transform subsistence farming into viable, market-oriented enterprises covering business planning and market access.',
  },
  {
    img: '/images/program-3.jpg',
    title: 'Youth Employment & Training',
    desc: 'Ayach Smart Farm actively employs and trains young people from Lira District. We believe the future of Ugandan agriculture lies in empowered, skilled youth.',
  },
  {
    img: '/images/program-4.jpg',
    title: 'Farmer Empowerment Sessions',
    desc: 'Open community sessions held regularly at the farm, welcoming farmers from surrounding villages combining knowledge sharing and live demonstrations.',
  },
  {
    img: '/images/program-5.jpg',
    title: 'Learning & Demonstration Centre',
    desc: 'The farm serves as a fully operational demonstration centre where students, NGOs, government agencies and partners observe smart farming in action.',
  },
  {
    img: '/images/program-6.jpg',
    title: 'Community Partnerships',
    desc: 'We actively partner with local government, NGOs and development organisations to amplify community impact and link farmers to finance and markets.',
  },
];
export default function Community() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <h1>Community <span>Empowerment</span></h1>
          <p>The farm's true harvest is measured not just in produce, but in the lives it transforms.</p>
        </div>
      </div>

      
      {/* Programs */}
      <section className="section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Our Programs</p>
          <h2 className="section-title reveal">How we <span>empower</span> communities</h2>

          <div className="community-programs-grid">
            {PROGRAMS.map((prog, i) => (
              <div key={prog.title} className={`community-program-card reveal reveal-delay-${i % 3}`}>
                <div className="program-header">
                  <div className="program-icon">{prog.icon}</div>
                  <h3 className="program-title">{prog.title}</h3>
                </div>
                <p className="program-desc">{prog.desc}</p>
                <div className="program-outcomes">
                  <div className="outcomes-label">Key outcomes</div>
                  <ul>
                    {prog.outcomes.map(o => <li key={o}>{o}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
        <section className="section bg-cream">
  <div className="section-inner">
    <p className="section-eyebrow reveal">Community in Action</p>
    <h2 className="section-title reveal">Photo <span>gallery</span></h2>
    <p className="section-lead reveal">
      Life at Ayach Smart Farm — farming, community, and growth.
    </p>
    <div className="gallery-grid">
      {[
        { img: '/images/gallery-1.jpg', caption: 'Community members testing banana juice' },
        { img: '/images/gallery-2.jpg', caption: 'Farmer empowerment session at the farm' },
        { img: '/images/gallery-3.jpg', caption: 'Inspection of the banana garden' },
        { img: '/images/gallery-4.jpg', caption: 'Youth training at Ayach Smart Farm' },
        { img: '/images/gallery-5.jpg', caption: 'Demonstration centre visit' },
        { img: '/images/gallery-6.jpg', caption: 'Community partnership event' },
      ].map((item, i) => (
        <div key={i} className={`gallery-item reveal reveal-delay-${i % 3}`}>
          <img src={item.img} alt={item.caption} className="gallery-img" />
          <p className="gallery-caption">{item.caption}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Video placeholder */}
      <section className="section bg-dark">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow reveal" style={{ color: 'var(--green-light)' }}>See It Yourself</p>
          <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
            Watch our <span>story</span>
          </h2>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem' }}>
            Add your farm video here. Embed a YouTube or upload a direct video file.
          </p>
          <div className="video-placeholder reveal">
            {/*
              VIDEO EMBED — replace with your YouTube embed:
              <iframe
                title="Ayach Smart Farm video"
                width="100%" height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                frameBorder="0" allowFullScreen
              />

              OR a direct video file:
              <video controls width="100%" poster="/images/video-poster.jpg">
                <source src="/videos/farm-story.mp4" type="video/mp4" />
              </video>
            */}
            <span>▶️</span>
            <p>Your farm video goes here</p>
            <small>Paste a YouTube embed or drop your video file in /public/videos/</small>
          </div>
        </div>
      </section>

      {/* Partner / join CTA */}
      <section className="section bg-cream" style={{ textAlign: 'center' }}>
        <div className="section-inner reveal">
          <h2 className="section-title">Partner with us to <span>scale the impact</span></h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
            Are you an NGO, government agency, donor, or organisation that shares our vision?
            We welcome partnerships that amplify community benefit.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
