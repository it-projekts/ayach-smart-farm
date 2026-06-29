import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import './Products.css';
const PRODUCTS = [
  {
    id: 'bananas',
    category: 'crops',
    img: '/images/gallery-1.jpg',
    title: 'Banana Cultivation',
    tagline: 'The backbone of our farm',
    desc: 'We cultivate a large-scale banana garden serving as the foundation of our value-addition chain. Our bananas supply the local market as fresh fruit and feed directly into our juice and wine production lines.',
  },
  {
    id: 'coffee',
    category: 'crops',
    img: '/images/gallery-2.jpg',
    title: 'Coffee Farming',
    tagline: 'Premium quality Ugandan coffee',
    desc: 'High-quality coffee cultivation using modern agronomy practices. We grow both Robusta and Arabica varieties, applying climate-smart techniques to maximise yield and market value.',
  },
  {
    id: 'juice',
    category: 'value-added',
    img: '/images/gallery-3.jpg',
    title: 'Banana Juice',
    tagline: 'Pure, natural, locally made',
    desc: 'Freshly produced banana juice from ripe yellow bananas. Our juice reduces post-harvest losses while creating a premium natural product for local and regional markets. No artificial additives.',
  },
  {
    id: 'wine',
    category: 'value-added',
    img: '/images/gallery-4.jpg',
    title: 'Banana Wine',
    tagline: 'Traditional craft, modern quality',
    desc: 'Artisan banana wine produced through a carefully managed fermentation process — a uniquely Ugandan product that showcases the versatility of our banana harvest.',
  },
  {
    id: 'piggery',
    category: 'livestock',
    img: '/images/gallery-5.jpg',
    title: 'Piggery',
    tagline: 'Integrated livestock management',
    desc: 'Commercial pig rearing fully integrated into our nutrient cycle. Pig waste feeds our organic compost while the livestock generate income and protein for the community.',
  },
  {
    id: 'poultry',
    category: 'livestock',
    img: '/images/gallery-6.jpg',
    title: 'Poultry Keeping',
    tagline: 'Eggs and meat for local markets',
    desc: 'Free-range and commercial poultry operation producing eggs and meat for local and regional markets, managed with attention to animal welfare and biosecurity standards.',
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
    <img src={product.img} alt={product.title} className="product-img" />
    <div className="product-body">
      <span className="product-category">{product.category.replace('-', ' ')}</span>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-tagline">{product.tagline}</p>
      <p className="product-desc">{product.desc}</p>
    </div>
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
