import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import Header from "../../components/Header";
import VendorSidebar from "../../components/VendorSidebar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import VendorCreateRFPQuotes from "../../components/VendorCreateRFPQuotes";

const CreateQuotes = () => {
  return (
    <DashboardLayout>
      <Header />
      <Sidebar>
        <VendorSidebar />
      </Sidebar>
      <VendorCreateRFPQuotes />
      <Footer />
    </DashboardLayout>
  );
};

export default CreateQuotes;
