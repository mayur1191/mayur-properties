import { useState } from 'react'
import { Link } from 'react-router-dom'
import properties from '../data/properties'
import locations from '../data/locations'
import PropertyCard from '../components/PropertyCard'
import PaymentModal from '../components/PaymentModal'

export default function Home() {
  const [bookingProperty, setBookingProperty] = useState(null)
  const featured = properties.filter((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop&q=80')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            Find Your <span>Dream Home</span> in Dubai
          </h1>
          <p>
            Discover luxury apartments, villas, and penthouses across Dubai's
            most prestigious communities with Mayur Properties.
          </p>
          <div className="hero-search">
            <select defaultValue="">
              <option value="" disabled>Property Type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
              <option>Villa</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>Location</option>
              {locations.map((l) => (
                <option key={l.id}>{l.name}</option>
              ))}
            </select>
            <Link to="/properties">
              <button type="button">
                <i className="fas fa-search" /> Search
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-alt">
        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Dubai Locations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Featured <span>Properties</span>
            </h2>
            <p className="section-subtitle">
              Hand-picked luxury properties in Dubai's most sought-after communities
            </p>
          </div>
          <div className="property-grid">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} onBook={setBookingProperty} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/properties" className="btn btn-outline">
              View All Properties <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span>Mayur Properties</span>
            </h2>
            <p className="section-subtitle">
              We bring expertise, trust, and unmatched service to every real estate transaction
            </p>
          </div>
          <div className="features-grid">
            {[
              { icon: 'fa-shield-halved', title: 'Trusted Agency', text: 'RERA-certified with 15+ years of Dubai real estate expertise and market knowledge.' },
              { icon: 'fa-hand-holding-dollar', title: 'Best Prices', text: 'Competitive pricing with flexible payment plans and exclusive off-market deals.' },
              { icon: 'fa-building', title: 'Premium Locations', text: 'Properties in 10+ prime Dubai communities from marina to desert estates.' },
              { icon: 'fa-headset', title: '24/7 Support', text: 'Dedicated team available round the clock to assist with all your property needs.' },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon"><i className={`fas ${f.icon}`} /></div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Popular <span>Locations</span>
            </h2>
            <p className="section-subtitle">
              Explore Dubai's most desirable neighbourhoods and communities
            </p>
          </div>
          <div className="locations-grid">
            {locations.slice(0, 6).map((loc) => (
              <Link to="/properties" key={loc.id} className="location-card">
                <img src={loc.image} alt={loc.name} loading="lazy" />
                <div className="location-overlay">
                  <div className="location-name">{loc.name}</div>
                  <div className="location-count">{loc.properties} Properties</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              World-Class <span>Amenities</span>
            </h2>
            <p className="section-subtitle">
              Every property comes with access to premium lifestyle facilities
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
            <div className="feature-card" style={{ textAlign: 'left', padding: 0, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop&q=80"
                alt="Gym"
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <div style={{ padding: '24px' }}>
                <h3 className="feature-title"><i className="fas fa-dumbbell" style={{ color: 'var(--primary)', marginRight: 8 }} />State-of-the-Art Gym</h3>
                <p className="feature-text">Fully equipped fitness centres with personal trainers and group classes for all residents.</p>
              </div>
            </div>
            <div className="feature-card" style={{ textAlign: 'left', padding: 0, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&h=400&fit=crop&q=80"
                alt="Swimming Pool"
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <div style={{ padding: '24px' }}>
                <h3 className="feature-title"><i className="fas fa-water" style={{ color: 'var(--primary)', marginRight: 8 }} />Infinity Pools</h3>
                <p className="feature-text">Temperature-controlled swimming pools with stunning views and poolside lounges.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/amenities" className="btn btn-outline">
              Explore All Amenities <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              What Our <span>Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Hear from homeowners who found their dream property with us
            </p>
          </div>
          <div className="testimonials-grid">
            {[
              { name: 'Ahmed Al Rashid', role: 'Homeowner, Palm Jumeirah', text: 'Mayur Properties made the entire process seamless. From viewing to handover, their team was professional and attentive. Highly recommend!', initial: 'A' },
              { name: 'Sarah Johnson', role: 'Investor, Dubai Marina', text: 'Exceptional service and deep market knowledge. They found me the perfect investment property in Dubai Marina with outstanding ROI.', initial: 'S' },
              { name: 'Rajesh Patel', role: 'Villa Owner, Arabian Ranches', text: 'The team went above and beyond to find our family the ideal villa. The amenities and community are everything we dreamed of.', initial: 'R' },
            ].map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-stars">
                  <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" />
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Find Your <span>Dream Home</span>?</h2>
          <p>
            Schedule a consultation with our expert advisors and begin your
            journey to luxury living in Dubai.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              <i className="fas fa-phone" /> Contact Us
            </Link>
            <Link to="/properties" className="btn btn-outline">
              <i className="fas fa-search" /> Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {bookingProperty && (
        <PaymentModal property={bookingProperty} onClose={() => setBookingProperty(null)} />
      )}
    </>
  )
}
