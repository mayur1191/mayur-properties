import { Link } from 'react-router-dom'

export default function Amenities() {
  return (
    <>
      <section className="page-header">
        <h1>Our <span>Amenities</span></h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Amenities</span>
        </div>
      </section>

      {/* Gym Section */}
      <section className="section">
        <div className="container">
          <div className="amenity-section">
            <div className="amenity-images">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop&q=80"
                alt="Modern gym facility"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=300&fit=crop&q=80"
                alt="Women running on treadmill"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=300&fit=crop&q=80"
                alt="Woman with weights"
                loading="lazy"
              />
            </div>
            <div className="amenity-text">
              <h2>State-of-the-Art <span>Fitness Centre</span></h2>
              <p>
                Our world-class fitness centres are designed to inspire your
                best self. Equipped with the latest Technogym and Life Fitness
                equipment, each gym offers a premium workout experience with
                panoramic views of the city.
              </p>
              <p>
                Enjoy complimentary personal training sessions, group fitness
                classes including yoga, pilates, HIIT, and spinning, all led by
                certified international trainers.
              </p>
              <div className="amenity-features">
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Technogym Equipment</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Personal Trainers</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Yoga & Pilates Studio</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> HIIT & CrossFit Zone</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Ladies-Only Hours</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Open 5 AM – 11 PM</div>
              </div>
            </div>
          </div>

          {/* More Gym Images */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginTop: 20 }}>
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop&q=80"
              alt="Women training together"
              loading="lazy"
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
            />
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80"
              alt="Fitness class"
              loading="lazy"
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
            />
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop&q=80"
              alt="Woman working out"
              loading="lazy"
              style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
            />
          </div>
        </div>
      </section>

      {/* Swimming Pool Section */}
      <section className="section bg-alt">
        <div className="container">
          <div className="amenity-section reverse">
            <div className="amenity-images">
              <img
                src="https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&h=400&fit=crop&q=80"
                alt="Infinity pool"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop&q=80"
                alt="Resort pool"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=400&h=300&fit=crop&q=80"
                alt="Pool area"
                loading="lazy"
              />
            </div>
            <div className="amenity-text">
              <h2>Luxury <span>Swimming Pools</span></h2>
              <p>
                Dive into resort-style living with our stunning infinity and
                lagoon pools. Every community features temperature-controlled
                swimming facilities with breathtaking views of the Dubai
                skyline, marina, or Arabian Gulf.
              </p>
              <p>
                Relax at the poolside lounge with cabanas, enjoy the kids' splash
                zone, or swim laps in the dedicated 25-metre lap pool — every
                mood is catered to.
              </p>
              <div className="amenity-features">
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Infinity Edge Pools</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Temperature Controlled</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Kids' Splash Zone</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Poolside Cabanas</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> 25m Lap Pool</div>
                <div className="amenity-feature"><i className="fas fa-check-circle" /> Jacuzzi & Sauna</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Amenities */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">More <span>Facilities</span></h2>
            <p className="section-subtitle">
              Everything you need for the perfect lifestyle, right at your doorstep
            </p>
          </div>
          <div className="other-amenities">
            {[
              { icon: 'fa-spa', title: 'Spa & Wellness', desc: 'Full-service spa with massage, facials, and aromatherapy treatments.' },
              { icon: 'fa-child', title: 'Kids Play Area', desc: 'Safe, supervised indoor and outdoor play zones for children of all ages.' },
              { icon: 'fa-basketball', title: 'Sports Courts', desc: 'Tennis, basketball, and squash courts with professional-grade surfaces.' },
              { icon: 'fa-tree', title: 'Landscaped Gardens', desc: 'Beautifully maintained gardens with jogging tracks and seating areas.' },
              { icon: 'fa-utensils', title: 'BBQ & Dining', desc: 'Community BBQ stations and outdoor dining areas for gatherings.' },
              { icon: 'fa-car', title: 'Valet Parking', desc: 'Covered parking with 24/7 valet service for residents and guests.' },
              { icon: 'fa-shield-halved', title: '24/7 Security', desc: 'Round-the-clock security with CCTV surveillance and concierge service.' },
              { icon: 'fa-film', title: 'Cinema Room', desc: 'Private screening room with Dolby Atmos sound and plush seating.' },
            ].map((a) => (
              <div className="other-amenity-card" key={a.title}>
                <i className={`fas ${a.icon}`} />
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience <span>Luxury Living</span></h2>
          <p>
            Schedule a tour to see our amenities in person and discover the
            lifestyle that awaits you.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              <i className="fas fa-calendar" /> Schedule a Tour
            </Link>
            <Link to="/properties" className="btn btn-outline">
              <i className="fas fa-building" /> View Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
