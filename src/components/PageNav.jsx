import { NavLink } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Product from "../pages/Product";

function PageNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" element={<Homepage />}>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" element={<Pricing />}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" element={<Product />}>
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
