import React from "react";
import AuthLayout from "../../layout/AuthLayout";

const ResetPwd = () => {
  return (
    <>
      <AuthLayout subtitle={"Reset Password"}>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="userpassword">Password</label>
            <input type="password" className="form-control" id="userpassword" />
          </div>

          <div className="form-group">
            <label htmlFor="userCnfrmpassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="userCnfrmpassword"
            />
          </div>
          <div className="mt-3">
            <button
              className="btn btn-primary btn-block waves-effect waves-light"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default ResetPwd;
