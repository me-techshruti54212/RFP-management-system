import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import VendorsTable from "../../components/VendorsTable";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
export default function VendorsList() {
  return (
    <DashboardLayout>
      <Header />

      <Sidebar>
        <AdminSidebar />
      </Sidebar>
      <VendorsTable />
      <Footer />
    </DashboardLayout>
  );
}
