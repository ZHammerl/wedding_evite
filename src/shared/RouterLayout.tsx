import Navbar from "@navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";
import { PageContainer } from "@components/pageContainer";
import Footer from "@footer/Footer";

function RouterLayout() {
  return (
    <>
      <Navbar />
      <PageContainer disableGutters>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
}

export default RouterLayout;
