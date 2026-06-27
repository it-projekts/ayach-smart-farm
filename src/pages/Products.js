import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Products.css';

const PRODUCTS = [
  {
    id: 'bananas',
    category: 'crops',
    icon: '🍌',
    title: 'Banana Cultivation',
    tagline: 'The backbone of our farm',
    desc: 'We cultivate a large-scale banana garden serving as the foundation of our value-addition chain. Our bananas supply the local market as fresh fruit and feed directly into our juice and wine production lines.',
    details: ['Matooke (cooking bananas)', 'Yellow dessert bananas', 'Tissue-culture varieties', 'Organic soil management'],
    image: 'bananas',
  },
  {
    id: 'coffee',
    category: 'crops',
    icon: '☕',
    title: 'Coffee Farming',
    tagline: 'Premium quality Ugandan coffee',
    desc: 'High-quality coffee cultivation using modern agronomy practices. We grow both Robusta and Arabica varieties, applying climate-smart techniques to maximise yield and market value.',
    details: ['Robusta varieties', 'Arabica varieties', 'Good Agricultural Practices (GAP)', 'Direct market linkages'],
    image: 'coffee',
  },
  {
    id: 'juice',
    category: 'value-added',
    icon: '🥤',
    title: 'Banana Juice',
    tagline: 'Pure, natural, locally made',
    desc: 'Freshly produced banana juice from ripe yellow bananas. Our juice reduces post-harvest losses while creating a premium natural product for local and regional markets. No artificial additives.',
    details: ['100% natural ingredients', 'Yellow banana base', 'No preservatives', 'Fresh local production'],
    image: 'juice',
  },
  {
    id: 'wine',
    category: 'value-added',
    icon: '🍷',
    title: 'Banana Wine',
    tagline: 'Traditional craft, modern quality',
    desc: 'Artisan banana wine produced through a carefully managed fermentation process. A uniquely Ugandan product that showcases the versatility of our banana harvest and commands premium pricing.',
    details: ['Traditional Ugandan recipe', 'Controlled fermentation', 'Premium packaging', 'Gift & export potential'],
    image: 'wine',
  },
  {
    id: 'piggery',
    category: 'livestock',
    icon: '🐷',
    title: 'Piggery',
    tagline: 'Integrated livestock management',
    desc: 'Commercial pig rearing fully integrated into our nutrient cycle. Pig waste feeds our biogas system and organic compost, while the livestock themselves generate income and protein for the community.',
    details: ['Commercial breeds', 'Organic waste integration', 'Local market supply', 'Biogas byproduct'],
    image: 'piggery',
  },
  {
    id: 'poultry',
    category: 'livestock',
    icon: '🐓',
    title: 'Poultry Keeping',
    tagline: 'Eggs and meat for local markets',
    desc: 'Free-range and commercial poultry operation producing eggs and meat for local and regional markets. Managed with attention to animal welfare and biosecurity standards.',
    details: ['Layer hens (eggs)', 'Broilers (meat)', 'Free-range management', 'Biosecurity protocols'],
    image: 'poultry',
  },
];

const CATEGORIES = [
  { id: 'all',         label: 'All Products' },
  { id: 'crops',       label: 'Crops' },
  { id: 'livestock',   label: 'Livestock' },
  { id: 'value-added', label: 'Value-Added' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  useReveal();

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-hero-eyebrow">What We Produce</span>
          <h1>Our <span>Products</span> & Operations</h1>
          <p>From field to finished product — six integrated operations that create value, reduce waste, and feed communities.</p>
        </div>
      </div>

      {/* Filter tabs */}
      <section className="section bg-cream" style={{ paddingBottom: 0 }}>
        <div className="section-inner">
          <p className="section-eyebrow reveal">Browse by Category</p>
          <h2 className="section-title reveal">Farm <span>operations</span></h2>
          <div className="product-filters reveal">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn${activeCategory === cat.id ? ' filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section bg-cream">
        <div className="section-inner">
          <div className="products-grid">
            {filtered.map((product, i) => (
              <div key={product.id} className={`product-card reveal reveal-delay-${i % 3}`}>
                {/*
                  PRODUCT IMAGE — replace placeholder with real product photo:
                  <img src={`/images/product-${product.image}.jpg`} alt={product.title} className="product-img" />
                */}
                <div className="product-img-placeholder">
                  <span>{product.icon}</span>
                </div>
                <div className="product-body">
                  <span className="product-category">{product.category.replace('-', ' ')}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-desc">{product.desc}</p>
                  <ul className="product-details">
                    {product.details.map(d => (
                      <li key={d}>✓ {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Technology section */}
      <section className="section bg-dark">
        <div className="section-inner">
          <p className="section-eyebrow reveal" style={{ color: 'var(--green-light)' }}>How We Farm</p>
          <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
            Smart & <span>climate-resilient</span> technology
          </h2>
          <p className="section-lead reveal" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We embrace technology not for its own sake, but because it helps us produce more while taking less from the earth.
          </p>
          <div className="tech-grid">
            {[
              { icon: '🌡️', title: 'Climate Smart Agriculture',    desc: 'Practices that reduce emissions, increase resilience, and adapt to changing weather patterns.' },
              { icon: '💧', title: 'Efficient Water Management',    desc: 'Drip irrigation and water harvesting systems that minimise waste and maximise crop growth.' },
              { icon: '🔄', title: 'Integrated Nutrient Cycling',   desc: 'Livestock waste feeds compost and biogas systems, closing the nutrient loop on-farm.' },
              { icon: '📊', title: 'Data-Driven Decision Making',   desc: 'Tracking production data to make informed decisions about planting, harvesting, and marketing.' },
            ].map((tech, i) => (
              <div key={tech.title} className={`tech-card reveal reveal-delay-${i % 4}`}>
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.title}</h3>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream" style={{ textAlign: 'center' }}>
        <div className="section-inner reveal">
          <h2 className="section-title">Interested in our <span>products?</span></h2>
          <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>
            Contact us to buy, partner, or arrange a farm visit.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
