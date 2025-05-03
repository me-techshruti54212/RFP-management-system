import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <li>
        <Link to="/vendors-list" className="waves-effect">
          <i className="mdi mdi-receipt"></i> <span>Vendors</span>
        </Link>
      </li>
      <li>
        <Link to="/rfp-list" className="waves-effect">
          <i className="mdi mdi-flip-vertical"></i> <span>RFP Lists</span>
        </Link>
      </li>
      <li>
        <Link to="/admin-list" className="waves-effect">
          <i className="mdi mdi-apps"></i> <span>Admins List</span>
        </Link>
      </li>
      <li>
        <Link to="/rfp-quotes" className="waves-effect">
          <i className="mdi mdi-apps"></i> <span>RFP Quotes</span>
        </Link>
      </li>
      <li>
        <Link to="/categories" className="waves-effect">
          <i className="mdi mdi-weather-night"></i> <span>Categories</span>
        </Link>
      </li>
    </>
  );
};

export default AdminSidebar;
