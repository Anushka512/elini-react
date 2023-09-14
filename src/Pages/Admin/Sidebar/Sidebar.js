import React from 'react';
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faTicket,
    faMapPin,
    faLongArrowAltRight,
    faHeader,
    faCartPlus,
    faListAlt,
    faShoppingCart,
    faUsers,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <NavLink to="/admin" style={{ color: "white" }}>
          <li className="option">
            <span>
              {" "}
              <FontAwesomeIcon icon={faHome} />{" "}
            </span>
            Dashboard
          </li>
        </NavLink>

        <NavLink to="/admin/orders" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            All Orders
          </li>
        </NavLink>

        <NavLink to="/admin/products" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faListAlt} />
            </span>
            All Products
          </li>
        </NavLink>

        <NavLink to="/admin/create/product" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            Create Products
          </li>
        </NavLink>

        <NavLink to="/admin/categories" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faListAlt} />
            </span>
            All Categories
          </li>
        </NavLink>

        <NavLink to="/admin/categories/create" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            Create Category
          </li>
        </NavLink>

        <NavLink to="/admin/coupons" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faTicket} />
            </span>
            Coupons Manager
          </li>
        </NavLink>

        {/* no need for sub categories  */}
        {/* <NavLink to="/admin/categories/create-sub" style={{ color: "white" }}>
              <li>
                <FontAwesomeIcon icon={faCreditCardAlt} />
                Create Subcategory
              </li>
            </NavLink> */}

        {/* <NavLink to="/admin/sizes" style={{ color: "white" }}>
              <li>
                <FontAwesomeIcon icon={faCreditCardAlt} />
                Sizes
              </li>
            </NavLink> */}

        <NavLink to="/admin/pincodes" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faMapPin} />
            </span>
            Pincodes Manager
          </li>
        </NavLink>

        <NavLink to="/admin/users" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faUsers} />
            </span>
            All Users
          </li>
        </NavLink>

        <NavLink to="/admin/blogs" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            Blogs
          </li>
        </NavLink>

        <NavLink to="/admin/header" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faHeader} />
            </span>
            Header Promotion
          </li>
        </NavLink>

        {/* <div onClick={handleLogout} style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
            Logout
          </li>
        </div> */}
      </ul>
    </div>
  )
}

export default Sidebar