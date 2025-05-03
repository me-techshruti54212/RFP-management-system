import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import AdminTable from "../../components/AdminTable";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
const AdminList = () => {
  return (
    <>
      <DashboardLayout>
        <Header />
        <Sidebar>
          <AdminSidebar />
        </Sidebar>
        <AdminTable />
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default AdminList;
