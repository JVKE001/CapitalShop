import styles from "./Register.module.css";
import Layout from "../../Components/Layout/Layout";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className={styles.loginTitle}>Welcome Back!</h1>
          <p className={styles.loginSubtitle}>Sign in to continue shopping</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Security Answer</label>
              <textarea
                name="answer"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </form>
          <p className={styles.signupLink}>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
