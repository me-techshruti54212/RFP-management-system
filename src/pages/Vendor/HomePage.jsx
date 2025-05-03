import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Dashboard";
import DashboardLayout from "../../layout/DashboardLayout";
import VendorSidebar from "../../components/VendorSidebar";
const HomePage = () => {
  return (
    <DashboardLayout>
      <Header />
      <Sidebar>
        <VendorSidebar />
      </Sidebar>
      <Dashboard />
      <Footer />
    </DashboardLayout>
  );
};

export default HomePage;
