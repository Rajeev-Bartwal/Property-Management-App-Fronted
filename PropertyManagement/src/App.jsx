import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PropertyList from "./pages/PropertyList";
import PropertyDetail from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/properties" element={<PropertyList />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route path="/add-property" element={<AddProperty />} />
    </Routes>
  );
}

export default App;
