import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
// import { useUser } from "../context/UserContext";

const Sidebar = ({ children }) => {
  // const { userData } = useUser();
  return (
    <div className="vertical-menu" style={{ backgroundColor: "#27333a" }}>
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link
                to={
                  JSON.parse(localStorage.getItem("user"))?.type === "admin"
                    ? "/admin-dashboard"
                    : JSON.parse(localStorage.getItem("user"))?.type ===
                      "vendor"
                    ? "/vendor-dashboard"
                    : "/"
                }
                className="waves-effect"
              >
                <i className="mdi mdi-file-document-box-outline"></i>{" "}
                <span>Dashboard</span>
              </Link>
            </li>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
