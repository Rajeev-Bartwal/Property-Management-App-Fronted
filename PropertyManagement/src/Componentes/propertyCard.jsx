import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/properties/${property.id}`)}
    >
      <h3 className={styles.title}>{property.title}</h3>

      <p className={styles.location}>{property.location}</p>

      <p className={styles.description}>
        {property.description}
      </p>

      <p className={styles.price}>₹ {property.price}</p>
    </div>
  );
}

export default PropertyCard;
