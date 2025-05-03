import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const CreateRFP = () => {
  const location = useLocation();

  const category = location.state?.category;
  const [inputValue, setInputValue] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [vendors, setVendors] = useState([]);
  const [vendordata, setVendorData] = useState("");
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    rfp_no: "",
    quantity: "",
    last_date: "",
    minimum_price: "",
    maximum_price: "",
    categories: category,
    vendors: "",
    item_description: "",
  });
  const token = JSON.parse(localStorage.getItem("user")).token;
  const fetchVendorsList = async () => {
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
        const selectedCategories = category.split(",");

        const matchingVendors = res.data.vendors.filter((vendor) => {
          const vendorCategories = vendor.categories.split(",");
          return vendorCategories.some((cat) =>
            selectedCategories.includes(cat)
          );
        });
        setVendors(matchingVendors);
        console.log(matchingVendors);
      }
      // console.error(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchVendorsList();
  }, []);

  console.log("Received category:", category);
  const handleChange = (e) => {
    if (e.target.name === "last_date") {
      const value = e.target.value;
      setInputValue(value);

      // Convert to required format (already in ISO format)
      if (value) {
        const date = new Date(value);
        console.log(date);
        const isoString = date.toISOString().slice(0, 19); // "YYYY-MM-DDTHH:mm:ss"
        console.log(isoString);
        setFormattedDate(isoString);
      }
    } else if (e.target.name === "vendors") {
      const opts = Array.from(e.target.selectedOptions).map((o) => o.value);
      // console.log(opts);
      setSelectedVendors(opts);
      setVendorData(opts.join(","));
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/createrfp`,
        {
          item_name: formData.item_name,
          rfp_no: formData.rfp_no,
          quantity: parseInt(formData.quantity),
          last_date: formattedDate,
          minimum_price: parseFloat(formData.minimum_price),
          maximum_price: parseFloat(formData.maximum_price),
          categories: category,
          vendors: vendordata,
          item_description: formData.item_description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.response === "success") {
        toast.success("RFP created successfully");
      }
      setFormData({
        item_name: "",
        rfp_no: "",
        quantity: "",
        last_date: "",
        minimum_price: "",
        maximum_price: "",
        categories: category,
        vendors: "",
        item_description: "",
      });
      setInputValue("");
      setSelectedVendors([]);
      setVendorData("");
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashboardLayout>
      <ToastContainer position="top-right" autoClose={3000} />

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
                  <h4 className="mb-0 font-size-18">RFPCreate List</h4>
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
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="itemName" className="form-label">
                    Item Name<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="itemName"
                    required
                    name="item_name"
                    value={formData.item_name}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="itemDesc" className="form-label">
                    Item Description<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="itemDesc"
                    required
                    name="item_description"
                    value={formData.item_description}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="rfpno" className="form-label">
                    RFP No.<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="rfpno"
                    required
                    name="rfp_no"
                    value={formData.rfp_no}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="quantity" className="form-label">
                    Quantity<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="quantity"
                    required
                    name="quantity"
                    value={formData.quantity}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="lastDate" className="form-label">
                    Last Date<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="datetime-local"
                    className="form-control"
                    id="lastDate"
                    required
                    name="last_date"
                    value={inputValue}
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="minPrice" className="form-label">
                    Minimum Price<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="minPrice"
                    required
                    name="minimum_price"
                    value={formData.minimum_price}
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
                    value={selectedVendors}
                    name="vendors"
                    onChange={handleChange}
                  >
                    {vendors?.map((vendor, i) => (
                      <option value={vendor.user_id} key={vendor.user_id}>
                        {vendor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="maxPrice" className="form-label">
                    Maximum Price<span className="text-danger">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="maxPrice"
                    required
                    name="maximum_price"
                    value={formData.maximum_price}
                  />
                </div>
              </div>

              <div className="d-flex gap-2" style={{ gap: "4px" }}>
                <button type="submit" className="btn btn-primary">
                  {loading ? "Wait..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setInputValue("");
                    setSelectedVendors([]);
                    setVendorData("");
                    setFormData({
                      item_name: "",
                      rfp_no: "",
                      quantity: "",
                      last_date: "",
                      minimum_price: "",
                      maximum_price: "",
                      categories: category,
                      vendors: "",
                      item_description: "",
                    });
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

export default CreateRFP;
