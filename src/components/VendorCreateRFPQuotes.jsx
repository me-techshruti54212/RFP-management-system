import React, { useState } from "react";

const VendorCreateRFPQuotes = () => {
  const [formData, setFormData] = useState({
    vendorPrice: "",
    itemDescription: "",
    quantity: "",
    totalCost: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // submit logic here
  };
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Create RFP</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Home</a>
                    </li>
                    <li className="breadcrumb-item ">RFP</li>
                    <li className="breadcrumb-item active">quotes create</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Vendor Price <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="vendorPrice"
                value={formData.vendorPrice}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Item Description <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="itemDescription"
                value={formData.itemDescription}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label">
                  Quantity <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">
                  Total Cost <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="totalCost"
                  value={formData.totalCost}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
              <pre> </pre>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorCreateRFPQuotes;
