import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const RegisterVendor = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    revenue: "",
    no_of_employees: "",
    category: "",
    pancard_no: "",
    gst_no: "",
    mobile: "",
  });
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories`
      );
      if (res.data.response === "success") {
        setCategories(res.data.categories);
      } else console.log(res.data);
    };
    fetchCategories();
  }, []);
  const handleChange = (e) => {
    if (e.target.name === "category") {
      const opts = Array.from(e.target.selectedOptions).map((o) => o.value);
      console.log(opts);
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: opts.join(","),
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  };
  const validate = () => {
    const errs = {};

    if (!formData.firstname.trim()) errs.firstname = "Firstname is required";
    else if (formData.firstname.trim().length < 3)
      errs.firstname = "First name must have at least 3 characters";

    if (!formData.lastname.trim()) errs.lastname = "Lastname is required";
    else if (formData.lastname.trim().length < 3)
      errs.lastname = "Last name must have at least 3 characters";

    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Invalid email format";
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(
        formData.password
      )
    ) {
      errs.password =
        "Password must have at least 5 chars, incl. 1 letter & 1 special charcter";
    }

    if (formData.password !== confirmPassword) {
      errs.confirmPassword = "Password and confirmPassword don't match";
    }

    if (!formData.revenue.trim()) errs.revenue = "Revenue is required";
    else if (!/^\d+,\d+,\d+$/.test(formData.revenue))
      errs.revenue = "Enter revenue for 3 years";

    if (!formData.no_of_employees) {
      errs.no_of_employees = "Valid number of employees required";
    }
    // if (!formData.category.trim()) errs.category = "Category is required";

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pancard_no)) {
      errs.pancard_no = "Invalid PAN number";
    }

    if (
      !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(
        formData.gst_no
      )
    ) {
      errs.gst_no = "Invalid GST number";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      errs.mobile = "Mobile number must be 10 digits";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/registervendor`,
        formData
      );

      if (res.data.response === "error") {
        console.log(res.data.error[0]);
        toast.error(res.data.error[0]);
      } else {
        console.log(res.data);
        toast.success("You are registered successfully");
      }
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        revenue: "",
        no_of_employees: "",
        category: "",
        pancard_no: "",
        gst_no: "",
        mobile: "",
      });
      confirmPassword("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-8">
              <div className="card overflow-hidden">
                <div className="bg-soft-primary">
                  <div className="row">
                    <div className="col-12">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome to RFP System!</h5>
                        <p>Register as Vendor</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-0">
                  <div className="p-4">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="firstname">First name*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstname"
                              placeholder="Enter Firstname"
                              name="firstname"
                              onChange={handleChange}
                              value={formData.firstname}
                            />
                            <span className="text-danger">
                              {errors.firstname}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="lastname">Last name*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastname"
                              placeholder="Enter Lastname"
                              name="lastname"
                              onChange={handleChange}
                              value={formData.lastname}
                            />
                            <span className="text-danger">
                              {errors.lastname}
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter Email"
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                            />
                            <span className="text-danger">{errors.email}</span>
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="password">Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter Password"
                              name="password"
                              onChange={handleChange}
                              value={formData.password}
                            />
                            <span className="text-danger">
                              {errors.password}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="confirmpassword">
                              Confirm Password*
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="confirmpassword"
                              placeholder="Confirm Password"
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              value={confirmPassword}
                            />
                            <span className="text-danger">
                              {errors.confirmPassword}
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="revenue">
                              Revenue (Last 3 Years in Lacs)*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="revenue"
                              placeholder="Enter Revenue"
                              name="revenue"
                              onChange={handleChange}
                              value={formData.revenue}
                            />
                            <span className="text-danger">
                              {errors.revenue}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="noofemployees">
                              No of Employees*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="noofemployees"
                              placeholder="No of Employees"
                              name="no_of_employees"
                              onChange={handleChange}
                              value={formData.no_of_employees}
                            />
                            <span className="text-danger">
                              {errors.no_of_employees}
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="gstno">GST No*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="gstno"
                              placeholder="Enter GST No"
                              name="gst_no"
                              onChange={handleChange}
                              value={formData.gst_no}
                            />
                            <span className="text-danger">{errors.gst_no}</span>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="panno">PAN No*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="panno"
                              placeholder="Enter PAN No"
                              name="pancard_no"
                              onChange={handleChange}
                              value={formData.pancard_no}
                            />
                            <span className="text-danger">
                              {errors.pancard_no}
                            </span>
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="phoneno">Phone No*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="phoneno"
                              placeholder="Enter Phone No"
                              name="mobile"
                              onChange={handleChange}
                              value={formData.mobile}
                            />
                            <span className="text-danger">{errors.mobile}</span>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="categories">Categories*</label>

                            <select
                              required
                              className="form-control"
                              multiple
                              id="categories"
                              name="category"
                              onChange={handleChange}
                            >
                              {Object.values(categories)
                                .filter(
                                  (category) => category.status === "Active"
                                )
                                .map((category) => (
                                  <option value={category.id} key={category.id}>
                                    {category.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>

                        <div className="p-2 mt-3 w-100">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            {loading ? "Registering you as Vendor" : "Register"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  &copy; Copyright <i className="mdi mdi-heart text-danger"></i>{" "}
                  RFP System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterVendor;
