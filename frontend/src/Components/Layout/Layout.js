import React from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import styles from "./LeftMenu.module.css";
import Footer from "./Footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      {/* Header Section */}
      <Header />

      {/* Offcanvas Menu for smaller screens */}
      <div
        className={`offcanvas offcanvas-start d-md-none ${styles.adminMenu}`}
        tabIndex="-1"
        id="adminMenuOffcanvas"
        aria-labelledby="adminMenuOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="adminMenuOffcanvasLabel">
            Admin Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className={`navbar-nav ${styles.navbarNav}`}>
            <li className="nav-item">
              <NavLink
                to="/dashboard/admin/profile"
                className={({ isActive }) =>
                  `nav-link px-4 ${
                    isActive ? `active-link ${styles.activeLink}` : ""
                  }`
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboard/admin/create-product"
                className={({ isActive }) =>
                  `nav-link px-4 ${
                    isActive ? `active-link ${styles.activeLink}` : ""
                  }`
                }
              >
                Create Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboard/admin/products"
                className={({ isActive }) =>
                  `nav-link px-4 ${
                    isActive ? `active-link ${styles.activeLink}` : ""
                  }`
                }
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboard/admin/create-category"
                className={({ isActive }) =>
                  `nav-link px-4 ${
                    isActive ? `active-link ${styles.activeLink}` : ""
                  }`
                }
              >
                Create Category
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
        <Footer />
      </main>
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - Shop Now",
  description: "MERN stack project",
  keywords: "mern, react, node, mongodb",
  author: "Spiderman",
};

export default Layout;
