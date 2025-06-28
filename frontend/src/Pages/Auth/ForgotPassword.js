import Layout from "../../Components/Layout/Layout";
import styles from "./ForgotPassword.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgotPassword", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"All Products - Best Offers"}>
      <div className={styles.formContainer}>
        <div className={styles.logoContainer}>Forgot Password</div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <label for="answer">Answer</label>
            <input
              name="answer"
              required
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Security Answer"
            />
            <label for="answer">New Password</label>
            <input
              type="password"
              name="newPassword"
              required
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
            />
          </div>

          <button className={styles.formSubmitBtn} type="submit">
            Send Email
          </button>
        </form>

        <p class={styles.signupLink}>
          Don't have an account?
          <a href="./Register" class={`${styles.signupLink} ${styles.link}`}>
            {" "}
            Sign up now
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default ForgotPassword;
