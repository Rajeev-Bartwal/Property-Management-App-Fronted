import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../services/api";

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
  //   if (!property.title || !property.location || !property.price) {
  //     alert("Fields cannot be empty");
  //     return;
  //   }

  // //   api.post("/properties", property)
  // //     .then(() => navigate("/properties"))
  // //     .catch(() => alert("Error saving property"));
  };

  return (
    <div>
      <h2>Add Property</h2>
      <input placeholder="Title" onChange={e => setProperty({ ...property, title: e.target.value })} />
      <br />
      <input placeholder="Location" onChange={e => setProperty({ ...property, location: e.target.value })} />
      <br />
      <input placeholder="Price" type="number" onChange={e => setProperty({ ...property, price: e.target.value })} />
      <br />
      <textarea placeholder="Description" onChange={e => setProperty({ ...property, description: e.target.value })} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


export default AddProperty;
