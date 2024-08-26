import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* Here outlet helps for nesting */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
