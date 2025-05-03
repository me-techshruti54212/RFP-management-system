import React from "react";

const quotes = [
  {
    id: 1,
    first: "Aman",
    last: "Sharma",
    email: "aman@gmail.com",
    contact: "000000000",
    active: true,
  },
  {
    id: 2,
    first: "Gagan",
    last: "Kumar",
    email: "gagan456@gmail.com",
    contact: "000000000",
    active: true,
  },
  {
    id: 3,
    first: "Vinay",
    last: "Singh",
    email: "vinay009@gmail.com",
    contact: "000000000",
    active: true,
  },
  {
    id: 4,
    first: "Ravi",
    last: "Raj",
    email: "ravi@gmail.com",
    contact: "000000000",
    active: false,
  },
];

export default function RFPQuotesTable() {
  return (
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
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">RFPQuotes </li>
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
                      <h4 className="card-title">RFPQuotes </h4>
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
                          <th>RFP No.</th>
                          <th>Item Name</th>
                          <th>Vendor Id</th>
                          <th>Vendor Price</th>
                          <th>Quantity</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quotes.map((quote, index) => (
                          <tr key={quote.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{quote.no}</td>
                            <td>{quote.name}</td>
                            <td>{quote.vendorid}</td>
                            <td>{quote.price}</td>
                            <td>{quote.quantity}</td>
                            <td>{quote.totalprice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="row pt-3">
                    <div className="col-sm-12 col-md-5">
                      <div className="dataTables_info">
                        Showing 1 to {quotes.length} of {quotes.length} entries
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
    </div> // main-content
  );
}
