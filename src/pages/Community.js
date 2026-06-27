import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Community.css';

const PROGRAMS = [
  {
    icon: '🎓',
    title: 'Skills Development Training',
    desc: 'Practical, hands-on training for local farmers covering modern cultivation techniques, post-harvest handling, storage, and basic business management. Sessions are held regularly at our on-farm demonstration centre.',
    outcomes: ['Modern farming techniques', 'Post-harvest loss reduction', 'Storage and preservation', 'Basic bookkeeping for farmers'],
  },
  {
    icon: '💼',
    title: 'Agribusiness Mentorship',
    desc: 'We guide smallholder farmers to transform subsistence farming into viable, market-oriented enterprises. Mentorship covers business planning, market access, pricing strategies, and record keeping.',
    outcomes: ['Business plan development', 'Market linkage support', 'Pricing & costing skills', 'Access to buyers and markets'],
  },
  {
    icon: '👷',
    title: 'Youth Employment & Training',
    desc: 'Ayach Smart Farm actively employs and trains young people from Lira District and surrounding communities. We believe the future of Ugandan agriculture lies in the hands of empowered, skilled youth.',
    outcomes: ['On-farm employment', 'Vocational skills training', 'Entrepreneurship coaching', 'Career pathways in agribusiness'],
  },
  {
    icon: '🌾',
    title: 'Farmer Empowerment Sessions',
    desc: 'Open community sessions held regularly at the farm, welcoming farmers from surrounding villages. These sessions combine knowledge sharing, demonstrations, and networking between farmers.',
    outcomes: ['Open to all local farmers', 'Live farm demonstrations', 'Peer learning networks', 'Access to expert advice'],
  },
  {
    icon: '🏫',
    title: 'Learning & Demonstration Centre',
    desc: 'The farm serves as a fully operational demonstration centre where students, NGOs, government agencies, and development partners can observe smart farming practices in action.',
    outcomes: ['Student field trips', 'NGO and partner visits', 'Research collaboration', 'Best-practice demonstration'],
  },
  {
    icon: '🤝',
    title: 'Community Partnerships',
    desc: 'We actively partner with local government, NGOs, and development organisations to amplify community impact — co-hosting events, supporting agricultural extension, and linking farmers to finance and markets.',
    outcomes: ['Government partnerships', 'NGO collaboration', 'Agricultural extension support', 'Farmer finance linkages'],
  },
];

const IMPACT_STATS = [
  { num: '100+', label: 'Farmers Trained' },
  { num: '20+',  label: 'Youth Employed' },
  { num: '5+',   label: 'Partner Organisations' },
  { num: '∞',    label: 'Community Sessions' },
];

export default function Community() {
  useReveal();
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-hero-eyebrow">Beyond the Farm Gate</span>
          <h1>Community <span>Empowerment</span></h1>
          <p>A farm's true harvest is measured not just in produce, but in the lives it transforms.</p>
        </div>
      </div>

      {/* Impact stats */}
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

      {/* Programs */}
      <section className="section">
        <div className="section-inner">
          <p className="section-eyebrow reveal">Our Programs</p>
          <h2 className="section-title reveal">How we <span>empower</span> communities</h2>
          <p className="section-lead reveal">Six active programs designed to build skills, create jobs, and strengthen the agricultural economy of Northern Uganda.</p>

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
            Replace these placeholders with your real community event photos.
          </p>
          <div className="gallery-grid">
            {[
              'Community members testing banana juice',
              'Farmer empowerment session',
              'Inspection of banana garden',
              'Youth training at the farm',
              'Demonstration centre visit',
              'Partnership event',
            ].map((caption, i) => (
              <div key={i} className={`gallery-item reveal reveal-delay-${i % 3}`}>
                {/*
                  GALLERY IMAGE — replace with:
                  <img src={`/images/community-${i+1}.jpg`} alt={caption} className="gallery-img" />
                */}
                <div className="gallery-placeholder">
                  <span>📸</span>
                </div>
                <p className="gallery-caption">{caption}</p>
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
