import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <section className="page-header">
        <h1>Contact <span>Us</span></h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Contact</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-map-marker-alt" /></div>
                <div>
                  <h3>Head Office</h3>
                  <p>Office 1205, Burj Khalifa District<br />Downtown Dubai, UAE</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-phone" /></div>
                <div>
                  <h3>Phone</h3>
                  <p>+971 4 123 4567<br />+971 50 987 6543</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-envelope" /></div>
                <div>
                  <h3>Email</h3>
                  <p>info@mayurproperties.ae<br />sales@mayurproperties.ae</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><i className="fas fa-clock" /></div>
                <div>
                  <h3>Working Hours</h3>
                  <p>Sun – Thu: 9 AM – 7 PM<br />Fri – Sat: 10 AM – 5 PM</p>
                </div>
              </div>

              {/* Branch Offices */}
              <div style={{ marginTop: 8 }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: 16 }}>
                  <i className="fas fa-building" style={{ marginRight: 8 }} />
                  Branch Offices
                </h3>
                {[
                  { area: 'Dubai Marina', address: 'Marina Walk, Tower B, Office 403' },
                  { area: 'Palm Jumeirah', address: 'Golden Mile Galleria, Shop 12' },
                  { area: 'Business Bay', address: 'Bay Square, Building 3, Floor 8' },
                ].map((b) => (
                  <div key={b.area} style={{ marginBottom: 12, paddingLeft: 16, borderLeft: '2px solid var(--primary)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{b.area}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{b.address}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send Us a <span>Message</span></h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input className="form-input" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-input" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-input" type="email" placeholder="john@email.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input className="form-input" placeholder="+971 50 000 0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Interested In</label>
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>Select property type</option>
                    <option>1 BHK Apartment</option>
                    <option>2 BHK Apartment</option>
                    <option>3 BHK Apartment</option>
                    <option>4 BHK Apartment</option>
                    <option>Luxury Villa</option>
                    <option>Investment Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-textarea" placeholder="Tell us about your requirements..." rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-paper-plane" /> Send Message
                </button>

                {submitted && (
                  <div className="form-message success">
                    <i className="fas fa-check-circle" /> Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="map-placeholder">
            <i className="fas fa-map-marked-alt" />
            <span>Downtown Dubai — Burj Khalifa District</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Prefer a <span>Face-to-Face</span> Meeting?</h2>
          <p>
            Visit any of our offices across Dubai or schedule a property viewing
            at your convenience.
          </p>
          <div className="cta-buttons">
            <Link to="/properties" className="btn btn-primary">
              <i className="fas fa-search" /> Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
