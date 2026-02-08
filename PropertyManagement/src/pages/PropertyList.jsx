import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PropertyCard from "../Componentes/PropertyCard";
import styles from "./PropertyList.module.css";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api
      .get("/properties")
      .then((res) => setProperties(res.data))
      .catch(() => alert("Failed to load properties"));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Properties</h2>
        <Link to="/add-property" className={styles.addBtn}>
          + Add Property
        </Link>
      </div>

      {properties.length === 0 && (
        <p className={styles.empty}>No properties found</p>
      )}

      <div className={styles.grid}>
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
