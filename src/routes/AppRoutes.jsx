import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterVendor from "../pages/Auth/RegisterVendor";
import ForgotPwd from "../pages/Auth/ForgotPwd";
import RegisterAdmin from "../pages/Auth/RegisterAdmin";
import ResetPwd from "../pages/Auth/ResetPwd";
import NotFound from "../pages/NotFound/NotFound";
import VendorsList from "../pages/Admin/VendorsList";
import RFPList from "../pages/Admin/RFPList";
import AdminList from "../pages/Admin/AdminList";
import Categories from "../pages/Admin/Categories";
import RFPQuotes from "../pages/Admin/RFPQuotes";
import DashboardPage from "../pages/Admin/DashboardPage";
import HomePage from "../pages/Vendor/HomePage";
import RFPQuotess from "../pages/Vendor/RFPQuotess";
import CreateQuotes from "../pages/Vendor/CreateQuotes";
import RFPSelectCategory from "../pages/Admin/RFPSelectCategory";
import CreateRFP from "../pages/Admin/CreateRFP";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register-vendor" element={<RegisterVendor />} />
      <Route path="/register-admin" element={<RegisterAdmin />} />
      <Route path="/forgot-password" element={<ForgotPwd />} />
      <Route path="/reset-password" element={<ResetPwd />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendors-list"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <VendorsList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rfp-list"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <RFPList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-list"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rfp-quotes"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <RFPQuotes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Categories />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-rfp"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateRFP />
          </ProtectedRoute>
        }
      />

      {/* vendor routes*/}
      <Route
        path="/vendor-dashboard"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor-rfpquotes"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <RFPQuotess />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor-createquotes"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <CreateQuotes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/rfp-select-category"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <RFPSelectCategory />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
