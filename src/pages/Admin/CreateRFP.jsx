import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
import { Link } from "react-router-dom";
const CreateRFP = () => {
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
                      <li className="breadcrumb-item active">RFP create</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="itemName" className="form-label">
                    Item Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemName"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="itemDesc" className="form-label">
                    Item Description<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="itemDesc"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="quantity" className="form-label">
                    Quantity<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="lastDate" className="form-label">
                    Last Date<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="lastDate"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="minPrice" className="form-label">
                    Minimum Price<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="minPrice"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="vendor" className="form-label">
                    Vendor<span className="text-danger">*</span>
                  </label>
                  <select
                    multiple
                    className="form-control"
                    id="vendor"
                    required
                  >
                    <option>harsh</option>
                    <option>rachit</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="maxPrice" className="form-label">
                    Maximum Price<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="maxPrice"
                    required
                  />
                </div>
              </div>

              <div className="d-flex gap-2" style={{ gap: "4px" }}>
                <button type="submit" className="btn btn-primary">
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

export default CreateRFP;
