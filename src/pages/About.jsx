import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <h1>About <span>Us</span></h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>About</span>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
                alt="Dubai skyline"
              />
            </div>
            <div className="about-text">
              <h2>Our <span>Story</span></h2>
              <p>
                Founded in 2010, Mayur Properties has grown from a boutique
                agency to one of Dubai's most trusted real estate firms. Our
                deep understanding of the Dubai property market, combined with
                an unwavering commitment to client satisfaction, has made us the
                go-to partner for discerning buyers and investors.
              </p>
              <p>
                With a portfolio spanning over 500 premium properties across
                10+ locations in Dubai, we offer everything from chic studio
                apartments to sprawling beachfront villas. Every property is
                hand-picked to meet our exacting standards of quality, location,
                and value.
              </p>
              <p>
                Our multilingual team of certified professionals brings
                expertise across residential sales, leasing, property management,
                and investment advisory — ensuring a seamless experience from
                first viewing to final handover.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>
                <i className="fas fa-phone" /> Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span>Values</span></h2>
          </div>
          <div className="mission-vision">
            <div className="mv-card">
              <h3><i className="fas fa-bullseye" /> Our Mission</h3>
              <p>
                To redefine the real estate experience in Dubai by delivering
                unmatched service, transparency, and value. We strive to make
                property ownership accessible while maintaining the highest
                standards of luxury and quality.
              </p>
            </div>
            <div className="mv-card">
              <h3><i className="fas fa-eye" /> Our Vision</h3>
              <p>
                To become the Middle East's most trusted and innovative real
                estate brand — a name synonymous with luxury living, integrity,
                and community development across the UAE and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our <span>Team</span></h2>
            <p className="section-subtitle">
              The experts behind every successful transaction
            </p>
          </div>
          <div className="team-grid">
            {[
              { name: 'Mayur Sharma', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80' },
              { name: 'Fatima Al Ali', role: 'Head of Sales', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80' },
              { name: 'David Chen', role: 'Investment Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80' },
              { name: 'Priya Kapoor', role: 'Client Relations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80' },
            ].map((m) => (
              <div className="team-card" key={m.name}>
                <div className="team-image">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-social">
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fas fa-envelope" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-alt">
        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years in Dubai</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">AED 2B+</div>
              <div className="stat-label">Transaction Value</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Partner with <span>the Best</span></h2>
          <p>
            Whether you're buying your first home or expanding your investment
            portfolio, our team is ready to help.
          </p>
          <div className="cta-buttons">
            <Link to="/properties" className="btn btn-primary">
              <i className="fas fa-search" /> Explore Properties
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <i className="fas fa-envelope" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
