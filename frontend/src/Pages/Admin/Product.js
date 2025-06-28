import React, { useState, useEffect } from "react";
import AdminMenu from "../../Components/Layout/AdminMenu";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  //GET PRODUCTS
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //LifeStyle Method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ps-0">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2 className={styles.heading}>All Products</h2>
            <div className="d-flex flex-wrap justify-content-center">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className={`card ${styles.card} m-2`}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className={`card-img-top ${styles.image}`}
                      alt={p.name}
                    />
                    <div className={`card-body ${styles.cardBody}`}>
                      <h5
                        className={`card-title ${styles.info} ${styles.title}`}
                      >
                        {p.name}
                      </h5>
                      <p
                        className={`card-text ${styles.info} ${styles.description}`}
                      >
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
