import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import RFPTable from "../../components/RFPTable";
import Footer from "../../components/Footer";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
const RFPList = () => {
  return (
    <>
      <DashboardLayout>
        <Header />
        <Sidebar>
          <AdminSidebar />
        </Sidebar>
        <RFPTable />
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default RFPList;
