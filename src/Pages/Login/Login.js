import React, { useState } from 'react';
import './Login.scss';
import { Link } from "react-router-dom";
import { BsGoogle, BsX } from "react-icons/bs";

const LoginDialog = ({ onClose }) => {
  // const [showCreateAccount, setShowCreateAccount] = useState(false);



  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(true);
  const handleCreateAccountToggle = () => {
    setShowCreateAccount(!showCreateAccount);
  }
  const handleClose = () => {
    setIsDialogVisible(false);
  }

  return (
    isDialogVisible && (
      <div className="login-dialog">
        <div className="overlay">
          <Link to={`/`}>
            <button className="close-btn" onClick={handleClose}>
              <BsX />
            </button>
          </Link>

          <div className="sec-head login-header">
            <h2>LOGIN</h2>
            <button className="login-with-mail-btn"><BsGoogle />{"  "}Sign In with Google</button>
            <div className="or-line">or</div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forgot-password">Forgot Password?</div>
            <button className="signin-btn">Sign In</button>
            <div className="privacy-policy">
              By continuing, I agree to Elini Privacy Policy and Terms of use
            </div>
            <div className="new-customer" onClick={handleCreateAccountToggle}>
              <Link to="/signup">
                New customer? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginDialog;