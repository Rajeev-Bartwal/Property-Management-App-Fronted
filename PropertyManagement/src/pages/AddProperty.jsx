import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import styles from "./AddProperty.module.css";

function AddProperty() {
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!property.title || !property.location || !property.price) {
      alert("All fields are required");
      return;
    }

    api.post("/property", property)
      .then(() => navigate("/properties"))
      .catch(() => alert("Failed to save property"));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Property</h2>

      <input
        placeholder="Property Title"
        className={styles.input}
        onChange={e => setProperty({ ...property, title: e.target.value })}
      />

      <input
        placeholder="Location"
        className={styles.input}
        onChange={e => setProperty({ ...property, location: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        className={styles.input}
        onChange={e => setProperty({ ...property, price: e.target.value })}
      />

      <textarea
        placeholder="Description"
        className={styles.textarea}
        onChange={e => setProperty({ ...property, description: e.target.value })}
      />

      <button className={styles.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddProperty;
