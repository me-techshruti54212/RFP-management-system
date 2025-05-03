import React from "react";
const categories = [
  {
    id: 1,
    name: "furniture",
    status: "active",
  },
  { id: 2, name: "furnituresa", status: "inactive" },
];
const CategoriesTable = () => {
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
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Categories</li>
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
                  <div className="TableHeader">
                    <div className="row">
                      <div className="col-lg-3">
                        <h4 className="card-title">Categories</h4>
                      </div>
                      <div className="col-lg-9 text-right">
                        <div className="headerButtons">
                          <a
                            href="addrfp.html"
                            className="btn btn-sm btn-success"
                          >
                            <i className="mdi mdi-plus"></i> Add Category
                          </a>
                        </div>
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
                          <th>S. No.</th>
                          <th>Categories Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category, index) => (
                          <tr key={category.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{category.name}</td>
                            <td>{category.status}</td>
                            <td>
                              <a href="#" className="text-danger">
                                Activate
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="row pt-3">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info">
                        Showing 1 to {categories.length} of {categories.length}{" "}
                        entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
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
  ); // main-content
};

export default CategoriesTable;
