import React from "react";
import { Outlet } from "react-router-dom";

// Static Components
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="bg-pattern flex min-h-screen flex-col font-montserrat">
      <Header />
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
