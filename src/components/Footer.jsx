import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">2022 &copy; Copyright.</div>
          <div className="col-sm-6 ">
            <div className="text-sm-right d-none d-sm-block">
              Support Email:{" "}
              <Link to="" className="text-muted">
                support@velsof.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
