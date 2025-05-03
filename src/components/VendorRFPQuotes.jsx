import React from "react";
import { Link } from "react-router-dom";
const rfpData = [
  {
    number: "232/44234/4234",
    title: "Keyboard XYZ",
    lastDate: "13-Oct-2023",
    minAmount: "10,000",
    maxAmount: "10,0000",
    status: "Open",
  },
  {
    number: "232/44234/4234",
    title: "Keyboard XYZ",
    lastDate: "13-Oct-2023",
    minAmount: "10,000",
    maxAmount: "10,0000",
    status: "Open",
  },
  {
    number: "232/44234/4234",
    title: "Keyboard XYZ",
    lastDate: "13-Oct-2023",
    minAmount: "10,000",
    maxAmount: "10,0000",
    status: "Open",
  },
  {
    number: "232/44234/4234",
    title: "Keyboard XYZ",
    lastDate: "13-Oct-2023",
    minAmount: "10,000",
    maxAmount: "10,0000",
    status: "Close",
  },
];
const VendorRFPQuotes = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">RFP List</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Home</a>
                    </li>
                    <li className="breadcrumb-item active">RFP List</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* RFP Table */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="TableHeader">
                    <div className="row">
                      <div className="col-lg-3">
                        <h4 className="card-title">RFP</h4>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table
                      className="table mb-0 listingData dt-responsive"
                      id="datatable"
                    >
                      <thead>
                        <tr>
                          <th>RFP No.</th>
                          <th>RFP Title</th>
                          <th>RFP Last Date</th>
                          <th>Min Amount</th>
                          <th>Max Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rfpData.map((rfp, index) => (
                          <tr key={index}>
                            <th scope="row">{rfp.number}</th>
                            <td>{rfp.title}</td>
                            <td>{rfp.lastDate}</td>
                            <td>{rfp.minAmount}</td>
                            <td>{rfp.maxAmount}</td>
                            <td>
                              <span
                                className={`badge badge-pill badge-${
                                  rfp.status === "Open" ? "success" : "danger"
                                }`}
                              >
                                {rfp.status}
                              </span>
                            </td>
                            <td>
                              {rfp.status === "Open" && (
                                <Link
                                  to="/vendor-createquotes"
                                  title="Create RFP quote"
                                  className="text-success border"
                                >
                                  Apply
                                </Link>
                              )}
                              {"  "}
                              {
                                <a
                                  href="#"
                                  title="Close RFP"
                                  className="text-success"
                                >
                                  View Quote
                                </a>
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="row pt-3">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to {rfpData.length} of {rfpData.length}{" "}
                        entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7 dataTables_wrapper">
                      <div className="dataTables_paginate paging_simple_numbers">
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled">
                            <a href="#" className="page-link">
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item next disabled">
                            <a href="#" className="page-link">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container-fluid */}
      </div>{" "}
      {/* page-content */}
    </div>
  );
};

export default VendorRFPQuotes;
