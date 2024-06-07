// react router dom imports
import { Outlet } from "react-router-dom";

// react hooks
import { useState } from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
