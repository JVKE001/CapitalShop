import React from "react";
import Layout from "../../Components/Layout/Layout";
import styles from "./Dashboard.module.css";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Components/Context/Auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"dashboard - Ecommerce App"}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-3 ps-0`}>
            <UserMenu />
          </div>
          <div className="col-md-9 ">
            <div
              className={`${styles.card} d-flex justify-content-center align-items-center text-center`}
            >
              <div>
                <p className={styles.heading}>
                  {auth?.user?.name || "Not available"}
                </p>
                <p className={styles.heading}>
                  {auth?.user?.email || "Not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
