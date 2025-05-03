import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div data-sidebar="dark">
      <div id="layout-wrapper">{children}</div>
    </div>
  );
};

export default DashboardLayout;
