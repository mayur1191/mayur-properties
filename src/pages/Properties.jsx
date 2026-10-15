import { useState } from 'react'
import { Link } from 'react-router-dom'
import properties from '../data/properties'
import locations from '../data/locations'
import PropertyCard from '../components/PropertyCard'
import PaymentModal from '../components/PaymentModal'

const TYPES = ['All', '1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Villa']

export default function Properties() {
  const [activeType, setActiveType] = useState('All')
  const [activeLocation, setActiveLocation] = useState('All')
  const [bookingProperty, setBookingProperty] = useState(null)

  const filtered = properties.filter((p) => {
    const typeMatch = activeType === 'All' || p.type === activeType
    const locMatch = activeLocation === 'All' || p.location === activeLocation
    return typeMatch && locMatch
  })

  return (
    <>
      <section className="page-header">
        <h1>Our <span>Properties</span></h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Properties</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="filter-bar">
            <div className="filter-group">
              {TYPES.map((t) => (
                <button
                  key={t}
                  className={`filter-btn${activeType === t ? ' active' : ''}`}
                  onClick={() => setActiveType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <select
              className="filter-select"
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
            >
              <option value="All">All Locations</option>
              {locations.map((l) => (
                <option key={l.id} value={l.name}>{l.name}</option>
              ))}
            </select>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <i className="fas fa-search" style={{ fontSize: '3rem', marginBottom: 16, display: 'block', color: 'var(--primary)' }} />
              <h3>No properties found</h3>
              <p>Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <>
              <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
                Showing {filtered.length} propert{filtered.length === 1 ? 'y' : 'ies'}
              </p>
              <div className="property-grid">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} onBook={setBookingProperty} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Can't Find What You're <span>Looking For</span>?</h2>
          <p>
            Our team has access to exclusive off-market listings. Tell us your
            requirements and we'll find the perfect match.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              <i className="fas fa-phone" /> Contact Our Team
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
