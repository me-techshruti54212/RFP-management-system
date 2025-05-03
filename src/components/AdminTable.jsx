import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const admins = [
  {
    id: 1,
    name: "shruti",
    email: "aman@gmail.com",
  },
  {
    id: 2,
    name: "shruti",
    email: "aman@gmail.com",
  },
  {
    id: 3,
    name: "shruti",
    email: "aman@gmail.com",
  },
  {
    id: 4,
    name: "shruti",
    email: "aman@gmail.com",
  },
  {
    id: 5,
    name: "shruti",
    email: "aman@gmail.com",
  },
];
const AdminTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = admins?.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Admins List</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/admin-dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Admins</li>
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
                      <h4 className="card-title">Admins</h4>
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
                          <th>Admin ID</th>
                          <th>Name</th>
                          <th>Email</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.map((admin, index) => (
                          <tr key={startIndex + index + 1}>
                            <th scope="row">{startIndex + index + 1}</th>
                            <td>{admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                            <td>
                              <Link to="" className="text-danger">
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <Pagination
                    totalItems={admins?.length}
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
    </div> // main-content
  );
};

export default AdminTable;
