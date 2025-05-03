import React from "react";
import { Link } from "react-router-dom";

const VendorSidebar = () => {
  return (
    <li>
      <Link to="/vendor-rfpquotes" className="waves-effect">
        <i className="mdi mdi-apps"></i> <span>RFP For Quotes</span>
      </Link>
    </li>
  );
};

export default VendorSidebar;
