import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import CategoriesTable from "../../components/CategoriesTable";
import DashboardLayout from "../../layout/DashboardLayout";
import AdminSidebar from "../../components/AdminSidebar";
const Categories = () => {
  return (
    <>
      <DashboardLayout>
        <Header />
        <Sidebar>
          <AdminSidebar />
        </Sidebar>
        <CategoriesTable />
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default Categories;
