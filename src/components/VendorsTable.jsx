import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const VendorsTable = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const [loading, setLoading] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = vendors?.slice(startIndex, startIndex + itemsPerPage);
  const fetchVendorsList = async () => {
    setLoading(true);
    console.log(token);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/vendorlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res.data.vendors);
      if (res.data.response === "error") toast.error(res.data.errors);
      else if (res.data.response === "success") {
        setVendors(res.data.vendors);
      }
      // console.error(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchVendorsList();
  }, []);

  const RejectRFP = async (userId) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/approveVendor`,
      {
        user_id: userId,
        status: "rejected",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    if (res.data.response === "error") toast.error(res.data.errors);
    else if (res.data.response === "success") {
      setVendors((vendors) =>
        vendors.map((vendor) =>
          vendor.user_id === userId ? { ...vendor, status: "Rejected" } : vendor
        )
      );
      toast.success("RFP rejected successfully");
    }
  };

  const ApproveRFP = async (userId) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/approveVendor`,
      {
        user_id: userId,
        status: "approved",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
    if (res.data.response === "error") toast.error(res.data.errors);
    else if (res.data.response === "success") {
      setVendors((vendors) =>
        vendors.map((vendor) =>
          vendor.user_id === userId ? { ...vendor, status: "Approved" } : vendor
        )
      );
      toast.success("RFP approved successfully");
    }
  };
  if (loading) return <p>Loading data...</p>;
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* Page Title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Vendors List</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/admin-dashboard">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Vendors</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* Table Section */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="TableHeader row">
                      <div className="col-lg-3">
                        <h4 className="card-title">Vendors</h4>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table
                        className="table mb-0 listingData dt-responsive"
                        id="datatable"
                      >
                        <thead>
                          <tr>
                            <th>S. No.</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentItems?.map((vendor, index) => (
                            <tr key={startIndex + index + 1}>
                              <th scope="row">{startIndex + index + 1}</th>
                              <td>{vendor.name.split(" ")[0]}</td>
                              <td>{vendor.name.split(" ")[1]}</td>
                              <td>{vendor.email}</td>
                              <td>{vendor.mobile}</td>
                              <td>
                                <span
                                  className={`badge badge-pill ${
                                    vendor.status === "Approved"
                                      ? "badge-success"
                                      : vendor.status === "Rejected"
                                      ? "badge-danger"
                                      : "badge-warning"
                                  }`}
                                  style={{ padding: "5px" }}
                                >
                                  {vendor.status}
                                </span>
                              </td>
                              <td
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  cursor: "pointer",
                                }}
                              >
                                {vendor.status === "Pending" && (
                                  <span
                                    className="text-danger"
                                    onClick={() => RejectRFP(vendor.user_id)}
                                  >
                                    Reject{" "}
                                  </span>
                                )}
                                {vendor.status === "Pending" && <span>|</span>}
                                {(vendor.status === "Pending" ||
                                  vendor.status === "Rejected") && (
                                  <span
                                    className="text-success"
                                    onClick={() => ApproveRFP(vendor.user_id)}
                                  >
                                    Approve
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination */}
                    <Pagination
                      totalItems={vendors?.length}
                      itemsPerPage={itemsPerPage}
                      currentPage={currentPage}
                      onPageChange={(page) => setCurrentPage(page)}
                      startIndex={startIndex}
                    />
                  </div>{" "}
                  {/* card-body */}
                </div>{" "}
                {/* card */}
              </div>{" "}
              {/* col-lg-12 */}
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container-fluid */}
        </div>{" "}
        {/* page-content */}
      </div>
    </>
  ); // main-content)
};

export default VendorsTable;
