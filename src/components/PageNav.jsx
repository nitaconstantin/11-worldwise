import { NavLink } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";
import Login from "../pages/Login";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
