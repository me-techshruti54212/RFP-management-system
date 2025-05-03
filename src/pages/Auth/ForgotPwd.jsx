import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
const ForgotPwd = () => {
  return (
    <>
      <AuthLayout subtitle={"Forgot Password"}>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary btn-block waves-effect waves-light"
              type="submit"
            >
              Send OTP
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/register-vendor" className="text-muted">
              <i className="mdi mdi-lock mr-1"></i> Register as Vendor
            </Link>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default ForgotPwd;
