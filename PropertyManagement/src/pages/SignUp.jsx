import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import api from "../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    name : "",
    email : "",
    password : ""
  }
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }else{
      user.name = name
      user.email = email
      user.password = password
    }

    api
      .post("/auth/register", user)
      .then(() => navigate("/"))
      .catch(() => alert("Something went wrong Try Again.."));

    alert("Signup successful");
    navigate("/");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.signupBtn} onClick={handleSignup}>
          Sign Up
        </button>

        <div className={styles.footer}>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
