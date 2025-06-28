import React, { useEffect, useState } from "react";
import UserMenu from "../../Components/Layout/UserMenu";
import Layout from "../../Components/Layout/Layout";
import { useAuth } from "../../Components/Context/Auth";
import styles from "./Orders.module.css";
import axios from "axios";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();
  const [expandedOrderIndex, setExpandedOrderIndex] = useState(null); // track which order's products are shown

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  useEffect(() => {
    const $ = window.$;
    if (orders.length > 0) {
      if ($.fn.DataTable.isDataTable("#ordersTable")) {
        $("#ordersTable").DataTable().destroy();
      }
      $("#ordersTable").DataTable();
    }
  }, [orders]);

  // Toggle which order’s products are visible
  const toggleProducts = (index) => {
    setExpandedOrderIndex(expandedOrderIndex === index ? null : index);
  };

  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-md-3 ps-0">
            <UserMenu />
          </div>
          <div className={`col-md-9 ${styles.ordersContainer}`}>
            <h1 className={styles.heading}>All Orders</h1>

            <table className={styles.orderTable} id="ordersTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Buyer</th>
                  <th>Date</th>
                  <th>Payment</th>
                  <th>Quantity</th>
                  <th>Products</th> {/* New column for expand toggle */}
                </tr>
              </thead>
              <tbody>
                {orders?.map((o, i) => (
                  <React.Fragment key={i}>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{o?.status}</td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createdAt).fromNow()}</td>
                      <td
                        className={
                          o?.payment.success ? styles.success : styles.failed
                        }
                      >
                        {o?.payment.success ? "Success" : "Failed"}
                      </td>
                      <td>{o?.products?.length}</td>
                      <td>
                        <button
                          onClick={() => toggleProducts(i)}
                          className={styles.expandBtn}
                        >
                          {expandedOrderIndex === i ? "Hide" : "Show"}
                        </button>
                      </td>
                    </tr>

                    {/* Show products if this order is expanded */}
                    {expandedOrderIndex === i && (
                      <tr>
                        <td colSpan="7">
                          <div className={styles.productList}>
                            {o?.products?.map((p) => (
                              <div className={styles.productCard} key={p._id}>
                                <div className={styles.productImage}>
                                  <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    alt={p.name}
                                    width="100"
                                    height="100"
                                  />
                                </div>
                                <div className={styles.productInfo}>
                                  <p>{p.name}</p>
                                  <p>{p.description.substring(0, 30)}</p>
                                  <p>Price: ${p.price}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
