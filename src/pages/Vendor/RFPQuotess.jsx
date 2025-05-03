import React from "react";
import VendorRFPQuotes from "../../components/VendorRFPQuotes";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import DashboardLayout from "../../layout/DashboardLayout";
import VendorSidebar from "../../components/VendorSidebar";
import Footer from "../../components/Footer";

const RFPQuotess = () => {
  return (
    <>
      <DashboardLayout>
        <Header />
        <Sidebar>
          <VendorSidebar />
        </Sidebar>
        <VendorRFPQuotes />
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default RFPQuotess;
