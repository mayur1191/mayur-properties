export default function PropertyCard({ property, onBook }) {
  const formatPrice = (price) => {
    if (price >= 1000000) return `AED ${(price / 1000000).toFixed(1)}M`
    return `AED ${(price / 1000).toFixed(0)}K`
  }

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} loading="lazy" />
        <span className="property-badge">{property.type}</span>
      </div>
      <div className="property-info">
        <div className="property-price">{formatPrice(property.price)}</div>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <i className="fas fa-map-marker-alt" />
          {property.location}, Dubai
        </div>
        <div className="property-details">
          <span className="property-detail">
            <i className="fas fa-bed" /> {property.beds} Beds
          </span>
          <span className="property-detail">
            <i className="fas fa-bath" /> {property.baths} Baths
          </span>
          <span className="property-detail">
            <i className="fas fa-ruler-combined" /> {property.area} sqft
          </span>
        </div>
        <div className="property-actions">
          <button className="btn btn-primary btn-sm" onClick={() => onBook(property)}>
            <i className="fas fa-credit-card" /> Book Now
          </button>
          <button className="btn btn-outline btn-sm">
            <i className="fas fa-info-circle" /> Details
          </button>
        </div>
      </div>
    </div>
  )
}
