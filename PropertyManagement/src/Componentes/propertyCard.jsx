import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", cursor: "pointer" }}
      onClick={() => navigate(`/properties/${property.id}`)}
    >
      <h3>{property.title}</h3>
      <p>{property.id}</p>
      <p>{property.description}</p>
      <p>{property.location}</p>
      <p>₹ {property.price}</p>
    </div>
  );
}

export default PropertyCard;
