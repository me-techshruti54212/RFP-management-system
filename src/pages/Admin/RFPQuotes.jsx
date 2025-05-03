import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import RFPQuotesTable from "../../components/RFPQuotesTable";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
const RFPQuotes = () => {
  return (
    <>
      <DashboardLayout>
        <Header />
        <Sidebar>
          <AdminSidebar />
        </Sidebar>
        <RFPQuotesTable />
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default RFPQuotes;
