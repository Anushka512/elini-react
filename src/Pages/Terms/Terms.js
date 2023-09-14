import React from 'react';
import './Terms.scss';
import terms from "../../Assets/Images/terms.png";

const Privacy = () => {
  return (
    <div className="terms-condition-page contain-bg contain">
      {/* <h1 className="terms-condition-title">Terms and Condition</h1> */}
      <img src={terms} alt="Privacy Policy" className="terms-condition-image" />
      <div className="terms-condition-content">
        <p>This document is an electronic record, consectetur adipiscing elit. Aenean gravida urna et eros feugiat convallis. Proin sodales velit sed quam laoreet, vel blandit velit semper.</p>
        <p>Nullam et quam eget nunc ultricies aliquet. Vivamus suscipit purus in felis finibus, eget commodo nisl maximus. In id tortor luctus, aliquet neque ut, tempor sem.</p>
      </div>
    </div>
  );
};

export default Privacy;
