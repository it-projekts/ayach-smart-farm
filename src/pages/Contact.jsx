import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const PURPOSES = [
  'Farm Visit / Tour',
  'Buy Our Products',
  'Partnership / Investment',
  'Training Program',
  'Media / Press Enquiry',
  'General Enquiry',
];

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', contact: '', purpose: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    /* 
      TO CONNECT A REAL BACKEND, replace this with a fetch() call:
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      Formspree (https://formspree.io) is free and works great for this.
      Sign up, create a form, get your ID, and replace YOUR_FORM_ID above.
    */
    setSubmitted(true);
    setForm({ name: '', contact: '', purpose: '', message: '' });
  };

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-hero-eyebrow">We'd Love to Hear From You</span>
          <h1>Get in <span>Touch</span></h1>
          <p>Whether you want to visit the farm, buy our products, or explore a partnership — we're ready to connect.</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner contact-grid">

          {/* LEFT — contact details */}
          <div>
            <p className="section-eyebrow reveal">Contact Information</p>
            <h2 className="section-title reveal" style={{ fontSize: '1.8rem' }}>
              Reach us <span>directly</span>
            </h2>

            <div className="contact-details reveal">
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <a href="tel:+256794848888" className="contact-item-value">(+256) 794 848 888</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <a href="mailto:ayachsmartfarm@gmail.com" className="contact-item-value">ayachsmartfarm@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">🌐</div>
                <div>
                  <div className="contact-item-label">Website</div>
                  <a href="https://ayachsmartfarm.online" target="_blank" rel="noreferrer" className="contact-item-value">ayachsmartfarm.online</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <div className="contact-item-label">Physical Address</div>
                  <div className="contact-item-value">
                    Ayach Cell, Ayach Ward<br />
                    Amach Town Council<br />
                    Lira District, Northern Uganda
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-social-block reveal">
              <div className="contact-social-label">Find us on social media</div>
              <div className="contact-socials">
                <a href="https://facebook.com"  target="_blank" rel="noreferrer" className="social-pill">f &nbsp;Facebook</a>
                <a href="https://x.com"         target="_blank" rel="noreferrer" className="social-pill">𝕏 &nbsp;X (Twitter)</a>
                <a href="https://linkedin.com"  target="_blank" rel="noreferrer" className="social-pill">in &nbsp;LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">📷 &nbsp;Instagram</a>
              </div>
            </div>

          </div>

          {/* RIGHT — form */}
          <div className="contact-form-wrapper reveal">
            <h3>Send us a message</h3>
            {submitted ? (
              <div className="form-success">
                <span>✅</span>
                <h4>Message sent!</h4>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="contact">Email or Phone Number *</label>
                  <input
                    id="contact" name="contact" type="text" required
                    placeholder="email@example.com or +256..."
                    value={form.contact} onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="purpose">Purpose of Contact *</label>
                  <select
                    id="purpose" name="purpose" required
                    value={form.purpose} onChange={handleChange}
                  >
                    <option value="">Select a purpose...</option>
                    {PURPOSES.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" required
                    placeholder="Tell us more about how we can help you..."
                    value={form.message} onChange={handleChange}
                    rows={5}
                  />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  Send Message →
                </button>
                <p className="form-note">
                  We respond within 24 hours on working days. For urgent matters, call us directly.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="section bg-cream" style={{ paddingTop: '1rem' }}>
        <div className="section-inner">
          <p className="section-eyebrow reveal">Our Location</p>
          <h2 className="section-title reveal">Find the <span>farm</span></h2>
          <div className="reveal">
            {
}
            <div className="map-embed-placeholder">
              <span>🗺️</span>
              <h4></h4>
              <p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15948.468465132844!2d33.00494973278032!3d2.108454689093789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1782674767298!5m2!1sen!2sug" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>Go to Google Maps → Search your location → Share → Embed a map → paste the iframe here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
