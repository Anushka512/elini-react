import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGifts,
  faAddressBook,
  faLongArrowAltRight,
  faListAlt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { getLoggedoutUser } from "../../Redux/slices/user";
import Swal from "sweetalert2";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(getLoggedoutUser());
    Swal.fire({
      position: "bottom-end",
      // icon: "success",
      title: "Logged Out Successfully",
      timer: 1000,
      showConfirmButton: false,
      customClass: {
        title: "custom-swal-title",
      },
      width: "270px",
      height: "5px",
    });
  };

  return (
    <div className="sidebar">
      <ul>
        <Link to="/user" style={{ color: "white" }}>
          <li className="option active">
            <span>
              {" "}
              <FontAwesomeIcon icon={faUser} />{" "}
            </span>
            Profile
          </li>
        </Link>

        <Link to="/user/password" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faListAlt} />
            </span>
            Passwords
          </li>
        </Link>

        <Link to="/user/address" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            Address Book
          </li>
        </Link>

        <Link to="/user/orders" style={{ color: "white" }}>
          <li>
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            My Orders
          </li>
        </Link>

        <Link to="/user/giftcards" style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faGifts} />
            </span>
            Gift Cards
          </li>
        </Link>

        <div onClick={handleLogout} style={{ color: "white" }}>
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
            Logout
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
