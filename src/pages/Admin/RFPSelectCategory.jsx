import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
import { Link, useNavigate } from "react-router-dom";
const RFPSelectCategory = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected category:", category);
    navigate("/create-rfp");
    // Submit logic here
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
                  <h4 className="mb-0 font-size-18">RFPQuotes List</h4>
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
                    width: "50%",
                  }}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="abc">abc</option>
                  <option value="def">def</option>
                  <option value="xyz">xyz</option>
                </select>
              </div>

              <div
                className="d-flex justify-content-end "
                style={{ gap: "6px" }}
              >
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>

                <button type="button" className="btn btn-secondary">
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
