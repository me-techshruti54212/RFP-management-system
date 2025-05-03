import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
const Header = () => {
  const { setUserData } = useUser();
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div
            className="navbar-brand-box"
            style={{ backgroundColor: "#27333a" }}
          >
            <Link to="" className="logo logo-light">
              <span className="logo-sm">
                <img
                  src="assets/images/velocity_logo.png"
                  alt="logo"
                  height="40"
                />
              </span>
              <span className="logo-lg">
                <img src="assets/images/velocity_logo.png" alt="logo" />
              </span>
            </Link>
          </div>
        </div>

        <div className="d-flex pr-2">
          <div className="dropdown d-inline-block">
            <span className="d-none d-xl-inline-block ml-1">
              Welcome{" "}
              {JSON.parse(localStorage.getItem("user"))?.name.split(" ")[0]}
            </span>
            &nbsp;&nbsp;
            <Link
              to="/"
              onClick={() => {
                setUserData(null);
                localStorage.removeItem("user");
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
