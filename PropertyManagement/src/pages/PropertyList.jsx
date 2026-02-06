import PropertyCard from "../Componentes/propertyCard";

function PropertyList() {
  // const [properties, setProperties] = useState([]);
  const properties = [
  {
    id: 1,
    title: "2 BHK Apartment",
    location: "Dehradun, Uttarakhand",
    price: 4500000,
    description: "Spacious 2 BHK apartment near IT Park with parking and security."
  },
  {
    id: 2,
    title: "3 BHK Independent House",
    location: "Haridwar, Uttarakhand",
    price: 7200000,
    description: "Independent house with garden, ideal for family living."
  },
  {
    id: 3,
    title: "1 BHK Studio Flat",
    location: "Noida, Sector 62",
    price: 3200000,
    description: "Compact studio flat suitable for working professionals."
  },
  {
    id: 4,
    title: "Commercial Office Space",
    location: "Gurugram, Cyber City",
    price: 15000000,
    description: "Premium office space in prime business location."
  },
  {
    id: 5,
    title: "Residential Plot",
    location: "Rishikesh, Uttarakhand",
    price: 2800000,
    description: "Residential plot near river side with peaceful environment."
  }
];




  // useEffect(() => {
  //   api.get("/properties")
  //     .then(res => setProperties(res.data))
  //     .catch(() => alert("Error fetching properties"));
  // }, []);

  return (
    <div>
      <h2>Property List</h2>
      {/* <Link to="/add-property">Add Property</Link> */}

      {properties.map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}

export default PropertyList;
