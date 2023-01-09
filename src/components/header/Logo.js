import React from "react";

import BrandLogo from "images/amazon-logo.png";
import { Link } from "react-router-dom";

import "./Logo.scss";

function Logo({ country = "in" }) {
  return (
    <div className="logo">
      <img src={BrandLogo} className="logo__img" alt="logo" />
      {country && <span className="logo__country">.{country}</span>}
    </div>
  );
}

export default Logo;
