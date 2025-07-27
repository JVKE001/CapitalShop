import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import toast from "react-hot-toast";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import { Badge } from "antd";
import { useCart } from "../Context/Cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg shadow-sm px-3 py-2 `}>
        <div className={`container-fluid`}>
          <button
            className={`btn btn-outline-secondary d-md-none d-flex align-items-center ${styles.menu}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#adminMenuOffcanvas"
            aria-controls="adminMenuOffcanvas"
          >
            ☰ Menu
          </button>
          <NavLink className={`navbar-brand d-flex align-items-center`} to="/">
            <img
              src={logo}
              alt="Logo"
              width={"120px"}
              height={"30px"}
              className={`me-2 ${styles.logo}`}
            />
          </NavLink>

          {/* Toggle for mobile */}
          <button
            className={`navbar-toggler ${styles.toggle}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>

          {/* Navbar Content */}
          <div className={`collapse navbar-collapse`} id="navbarContent">
            {/* Nav Links */}
            <ul className={`navbar-nav mx-auto mb-2 mb-lg-0`}>
              <li className={`nav-item`}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link ${styles.activeLink} ${styles.navLink}`
                      : `nav-link ${styles.navLink}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={`nav-item`}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link ${styles.activeLink} ${styles.navLink}`
                      : `nav-link ${styles.navLink}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className={`nav-item`}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link ${styles.activeLink} ${styles.navLink}`
                      : `nav-link ${styles.navLink}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Search bar */}
            <span
              className={`input-group-text bg-white border-0 ${styles.searchIcon}`}
            >
              <i className={`fas fa-search`}></i>
            </span>
            <input
              type="search"
              className={`form-control border-0 shadow-sm ${styles.searchInput} me-5`}
              placeholder="Search..."
              aria-label="Search"
            />

            {/* Auth & Cart */}
            <div className={`d-flex gap-2 align-items-center`}>
              {!auth?.user ? (
                <>
                  <NavLink to="/login" className={styles.logInBtn}>
                    Login
                  </NavLink>
                  <NavLink to="/register" className={styles.regBtn}>
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                  <li
                    className={`nav-item dropdown list-unstyled ${styles.userDropdown}`}
                  >
                    <button
                      className={`nav-link dropdown-toggle ${styles.user} ${styles.ellipsis}`}
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.name}
                    </button>
                    <ul className={`dropdown-menu`}>
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }/profile`}
                          className={`dropdown-item`}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className={`d-flex align-items-center gap-1 ${styles.logoutBtn}`}
                        >
                          <i className={`fas fa-sign-out-alt`}></i> Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <Badge count={cart?.length} className={styles.badge} showZero>
                <NavLink
                  to="/cart"
                  className={`d-flex align-items-center ms-2  ${styles.cartBtn}`}
                >
                  <i className={`fas fa-shopping-cart`}></i>
                  Cart
                </NavLink>
              </Badge>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
