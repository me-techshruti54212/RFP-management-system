import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { setUserData } = useUser();
  const navigate = useNavigate();
  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email,
        password,
      });
      if (res.data.response === "error") toast.error(res.data.error);
      else if (res.data.response === "success") {
        setUserData(res.data);
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: res.data.token,
            type: res.data.type,
            name: res.data.name,
          })
        );
        // localStorage.setItem("user_type", res.data.type);
        // localStorage.setItem("name", res.data.name);

        if (res.data.type === "admin") navigate("/admin-dashboard");
        else if (res.data.type === "vendor") navigate("/vendor-dashboard");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthLayout subtitle={"Sign in to continue"}>
        <ToastContainer position="top-right" autoClose={3000} />
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className="text-danger">{errors.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="userpassword">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="userpassword"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-danger">{errors.password}</span>
          </div>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlInline"
            />
            <label
              className="custom-control-label"
              htmlFor="customControlInline"
            >
              Remember me
            </label>
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary btn-block waves-effect waves-light"
              type="submit"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>

          <div className="mt-4 text-center">
            <h5 className="font-size-14 mb-3">Sign in with</h5>

            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="/"
                  className="social-list-item bg-primary text-white border-primary"
                >
                  <i className="mdi mdi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="/"
                  className="social-list-item bg-info text-white border-info"
                >
                  <i className="mdi mdi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="/"
                  className="social-list-item bg-danger text-white border-danger"
                >
                  <i className="mdi mdi-google"></i>
                </a>
              </li>
            </ul>
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

export default LoginPage;
