import React from 'react';
import './Privacy.scss';
import policy from "../../Assets/Images/policy.png";

const Privacy = () => {
  return (
    <div className="privacy-policy-page contain-bg contain">
      {/* <h1 className="privacy-policy-title">Privacy Policy</h1> */}
      <img src={policy} alt="Privacy Policy" className="privacy-policy-image" />
      <div className="privacy-policy-content">
        <p>This document is an electronic record, consectetur adipiscing elit. Aenean gravida urna et eros feugiat convallis. Proin sodales velit sed quam laoreet, vel blandit velit semper.</p>
        <p>Nullam et quam eget nunc ultricies aliquet. Vivamus suscipit purus in felis finibus, eget commodo nisl maximus. In id tortor luctus, aliquet neque ut, tempor sem.</p>
      </div>
    </div>
  );
};

export default Privacy;
