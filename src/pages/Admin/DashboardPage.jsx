import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Dashboard";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Header />
      <Sidebar>
        <AdminSidebar />
      </Sidebar>

      <Dashboard />
      <Footer />
    </DashboardLayout>
  );
};

export default DashboardPage;
