import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import api from "../services/api";

function PropertyDetail() {
  const { id } = useParams();
  // const [property, setProperty] = useState(null);

  let property =  {
    id: 1,
    title: "2 BHK Apartment",
    location: "Dehradun, Uttarakhand",
    price: 4500000,
    description: "Spacious 2 BHK apartment near IT Park with parking and security."
  }

  // useEffect(() => {
  //   api.get(`/properties/${id}`)
  //     .then(res => setProperty(res.data))
  //     .catch(() => alert("Error loading property"));
  // }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p>₹ {property.price}</p>
      <p>{property.description}</p>

      <button onClick={() => alert("Owner contacted")}>
        Contact Owner
      </button>
    </div>
  );
}

export default PropertyDetail;
