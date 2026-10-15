import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="nav-logo">
                <i className="fas fa-building" />
                Mayur Properties
              </Link>
              <p>
                Dubai's premier luxury real estate agency. We help you find your
                dream home in the most prestigious locations across the UAE.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/properties">Properties</Link>
                <Link to="/amenities">Amenities</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div className="footer-col">
              <h3>Property Types</h3>
              <div className="footer-links">
                <Link to="/properties">1 BHK Apartments</Link>
                <Link to="/properties">2 BHK Apartments</Link>
                <Link to="/properties">3 BHK Apartments</Link>
                <Link to="/properties">4 BHK Apartments</Link>
                <Link to="/properties">Luxury Villas</Link>
              </div>
            </div>

            <div className="footer-col footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe for the latest properties and exclusive Dubai real estate insights.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" />
                <button type="submit"><i className="fas fa-paper-plane" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} Mayur Properties. All rights reserved. | Dubai, UAE
        </div>
      </div>
    </footer>
  )
}
