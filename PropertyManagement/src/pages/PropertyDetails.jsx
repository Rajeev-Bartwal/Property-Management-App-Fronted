import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import styles from "./PropertyDetails.module.css";

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState({
    id: 2,
    title: "3 BHK Independent House",
    location: "Haridwar, Uttarakhand",
    price: 7200000,
    description:
      "Independent house with garden and open parking, ideal for family living Spacious 2 BHK apartment near IT Park with parking, lift, and 24x7 security."
  });

  useEffect(() => {
    api.get(`/properties/${id}`)
      .then(res => setProperty(res.data))
      .catch(() => alert("Property not found"));
  }, [id]);

  if (!property) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{property.title}</h2>

      <p className={styles.location}>{property.location}</p>

      <p className={styles.price}>₹ {property.price}</p>

      <p className={styles.description}>{property.description}</p>

      <button
        className={styles.contactBtn}
        onClick={() => alert("Owner contacted")}
      >
        Contact Owner
      </button>
    </div>
  );
}

export default PropertyDetail;
