import { useState } from 'react'

export default function PaymentModal({ property, onClose }) {
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', card: '', expiry: '', cvv: '' })

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(price)

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === 'card') value = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
    if (name === 'expiry') {
      value = value.replace(/\D/g, '').slice(0, 4)
      if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2)
    }
    if (name === 'cvv') value = value.replace(/\D/g, '').slice(0, 3)
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{success ? 'Payment Successful' : 'Book Property'}</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="modal-body">
          {success ? (
            <div className="payment-success">
              <i className="fas fa-check-circle" />
              <h3>Booking Confirmed!</h3>
              <p>
                Thank you for booking <strong>{property.title}</strong>. Our team
                will contact you within 24 hours to finalize the details.
              </p>
            </div>
          ) : (
            <>
              <div className="payment-summary">
                <h3>{property.title}</h3>
                <p className="loc">
                  <i className="fas fa-map-marker-alt" /> {property.location}, Dubai
                </p>
                <div className="payment-amount">{formatPrice(property.price)}</div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@email.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Card Number</label>
                  <input className="form-input" name="card" value={form.card} onChange={handleChange} placeholder="0000 0000 0000 0000" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input className="form-input" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" required />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input className="form-input" name="cvv" type="password" value={form.cvv} onChange={handleChange} placeholder="***" required />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-lock" /> Pay {formatPrice(property.price)}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
