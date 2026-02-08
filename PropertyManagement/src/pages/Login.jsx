import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const user = {
    name : "",
    email : "",
    password : ""
  }

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fields cannot be empty");
      return;
    }else{
      user.name = ""
      user.email = email
      user.password = password
    }

    api.post("auth/login" , user)
    .then(() => navigate("/properties"))
    .catch(() => alert("Something went wrong Try Again.."));
   
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={e => setPassword(e.target.value)}
        />

        <button className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
       

         <div className={styles.footer}>
                 Create an account? <span onClick={() => navigate("/signup")}>Sign-Up</span>
          </div>

        <div className={styles.footer}>
          @Mini Property App
        </div>
      </div>
    </div>
  );
}

export default Login;
