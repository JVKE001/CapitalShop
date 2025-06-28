import { NavLink } from "react-router-dom";
import styles from "./LeftMenu.module.css";

function AdminMenu() {
  return (
    <div className={`container-fluid ${styles.usermenu}`}>
      <div className="d-none d-md-block">
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
  );
}

export default AdminMenu;
