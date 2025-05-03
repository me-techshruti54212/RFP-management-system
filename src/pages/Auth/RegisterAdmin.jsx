import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";

const RegisterAdmin = () => {
  return (
    <>
      <AuthLayout subtitle={"Sign up to continue"}>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userpassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="userpassword"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userCnfrmpassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="userCnfrmpassword"
              placeholder="Enter password"
            />
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary btn-block waves-effect waves-light"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/register-vendor" className="text-muted">
              <i className="mdi mdi-lock mr-1"></i> Register as Vendor
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-muted">
              <i className="mdi mdi-lock mr-1"></i> Forgot your password?
            </Link>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default RegisterAdmin;
