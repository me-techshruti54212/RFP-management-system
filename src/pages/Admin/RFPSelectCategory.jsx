import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RFPSelectCategory = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected category:", category);
    navigate("/create-rfp", {
      state: {
        category,
      },
    });
  };
  const handleChange = (e) => {
    if (e.target.name === "category") {
      const opts = Array.from(e.target.selectedOptions).map((o) => o.value);
      // console.log(opts);
      setSelectedCategories(opts);
      setCategory(opts.join(","));
    }
  };
  return (
    <DashboardLayout>
      <Header />
      <Sidebar>
        <AdminSidebar />
      </Sidebar>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* Page Title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">RFPSelect Category</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/admin-dashboard">Home</Link>
                      </li>
                      <li className="breadcrumb-item">RFP </li>
                      <li className="breadcrumb-item">Select category</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="container  d-flex flex-column justify-content-between p-4"
              style={{ height: "350px" }}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label className="form-label">
                  Categories <span className="text-danger">*</span>
                </label>
                <br />
                <select
                  className="form-select"
                  style={{
                    padding: "10px",
                    outline: "none",
                    borderRadius: "10px",
                    width: "60%",
                  }}
                  name="category"
                  value={selectedCategories}
                  onChange={handleChange}
                  required
                  size={5}
                  multiple
                >
                  {Object.values(categories)
                    .filter((category) => category.status === "Active")
                    .map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>

              <div
                className="d-flex justify-content-end "
                style={{ gap: "6px" }}
              >
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setCategory("");
                    setSelectedCategories([]);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </DashboardLayout>
  );
};

export default RFPSelectCategory;
