import React from "react";
import { Outlet } from "react-router-dom";

// Static Components
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="relative flex h-fit min-h-screen flex-col overflow-y-auto bg-secondary font-montserrat">
      <div className=" bg-primary bg-opacity-20">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
