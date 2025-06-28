import { NavLink } from "react-router-dom";
import styles from "./LeftMenu.module.css";

function UserMenu() {
  return (
    <div className={`container-fluid ${styles.usermenu}`}>
      <div className="d-none d-md-block">
        <ul className={`navbar-nav me-auto  ${styles.navbarNav}`}>
          <li className="nav-item">
            <NavLink
              to="/dashboard/user/profile"
              className={({ isActive }) =>
                `nav-link px-4 ${
                  isActive ? `active-link ${styles.activeLink}` : ""
                }`
              }
            >
              View Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard/user/profile/edit"
              className={({ isActive }) =>
                `nav-link px-4 ${
                  isActive ? `active-link ${styles.activeLink}` : ""
                }`
              }
            >
              Edit Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard/user/orders"
              className={({ isActive }) =>
                `nav-link px-4 ${
                  isActive ? `active-link ${styles.activeLink}` : ""
                }`
              }
            >
              My Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserMenu;
