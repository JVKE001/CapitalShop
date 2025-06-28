import React, { useState, useEffect } from "react";
import UserMenu from "../../Components/Layout/UserMenu";
import Layout from "../../Components/Layout/Layout";
import { useAuth } from "../../Components/Context/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "./Profile.module.css";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ps-0">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <form onSubmit={handleSubmit} className={styles.profileForm}>
                <h4 className={styles.title}>User Profile</h4>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    id="exampleInputName"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                    disabled
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    id="exampleInputPhone"
                    placeholder="Enter Your Phone"
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={styles.input}
                    id="exampleInputAddress"
                    placeholder="Enter Your Address"
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
