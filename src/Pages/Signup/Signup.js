import React, { useState } from 'react';
import './Signup.scss';
import { Link } from "react-router-dom";
import { BsGoogle, BsX  } from "react-icons/bs";

const LoginDialog = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(true);

  const handleCreateAccountToggle = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  const handleClose = () => {
    setIsDialogVisible(false);
  };

  return (
    isDialogVisible && (
      <div className="login-dialog">
        <div className="overlay">
          <button className="close-btn" onClick={handleClose}><BsX /></button>
          <div className="login-header">
            <h2 className="sec-head">Register & get 10% off on your first order</h2>
            <button className="login-with-mail-btn"><BsGoogle />{"  "}Sign Up with Google</button>
            <div className="or-line">or</div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forgot-password">Forgot Password?</div>
            <button className="signin-btn">Sign Up</button>
            <div className="privacy-policy">
              By continuing, I agree to Elini Privacy Policy and Terms of use
            </div>
            <div className="new-customer" onClick={handleCreateAccountToggle}>
              <Link to="/login">
                Old customer? LogIn to your existing account
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginDialog;
